import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, website, message } = body;

    // For static export, we'll return a success response
    // In production, implement email sending through a serverless function
    return NextResponse.json(
      { message: 'Form submission received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}