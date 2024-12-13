import RequestInvoiceForm from '@/app/components/RequestInvoiceForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <header className="p-4">
        <Link href="/" className="block">
          <Image
            src="/garage-logo.png"
            alt="Garage Logo"
            width={100}
            height={0}
            priority
          />
        </Link>
      </header>
      <div className="flex flex-1 items-center justify-center mb-48">
        <RequestInvoiceForm />
      </div>
    </main>
  );
}
