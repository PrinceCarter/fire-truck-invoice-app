import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { id } = await request.json();
  try {
    const response = await axios.post('https://garage-backend.onrender.com/getListing', { id });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch listing' }, { status: 500 });
  }
}
