'use client';

import { useState } from 'react';
import axios from 'axios';
import { generateInvoice } from '@/lib/generateInvoice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RequestInvoiceForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    try {
      // Get the listing ID from the URL
      const match = url.match(/[0-9a-fA-F-]{36}$/);

      if (!match) {
        alert('Invalid URL. Please enter a valid fire truck listing URL.');
        setLoading(false);
        return;
      }

      const id = match[0];

      // Fetch the listing data
      const response = await axios.post('/api/fetchListing', { id });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Generate the invoice
      await generateInvoice(response.data.result.listing);
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error) {
        alert(error.message || 'Error fetching the listing.');
      } else {
        alert('Error fetching the listing.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Fire Truck Invoice Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Paste the fire truck listing URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleRequest} disabled={loading} className="w-full">
          {loading ? 'Generating...' : 'Request PDF Invoice'}
        </Button>
      </CardContent>
    </Card>
  );
}
