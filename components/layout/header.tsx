'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoogleFormModal } from './google-form-modal';

export function Header() {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8" />
              <h1 className="text-2xl font-bold">STL Wedding Photographers</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/blog">Blog</Link>
              </Button>
              <Button 
                variant="default"
                onClick={() => setShowFormModal(true)}
              >
                List Your Services
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <GoogleFormModal 
        open={showFormModal} 
        onOpenChange={setShowFormModal} 
      />
    </>
  );
}