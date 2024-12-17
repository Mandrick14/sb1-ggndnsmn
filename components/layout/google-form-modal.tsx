'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface GoogleFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GoogleFormModal({ open, onOpenChange }: GoogleFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] h-[80vh] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>List Your Services</DialogTitle>
        </DialogHeader>
        <div className="flex-1 h-full min-h-[500px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSft6NYyP6M8HTQuFaLkqwzOdL7ovM5mAzFAEuZsQREc7L22Bg/viewform?embedded=true"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            title="List Your Services Form"
          >
            Loading form...
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}