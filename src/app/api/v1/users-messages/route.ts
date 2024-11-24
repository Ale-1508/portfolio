import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/logic/db';
import ContactMessage from '@/data/models/contactMessage';

export async function POST(request: NextRequest) {
  await dbConnect();

  const { fullName, email, phoneNumber, message } = await request.json();

  if (!fullName || !email || !phoneNumber || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const newMessage = new ContactMessage({
      fullName,
      email,
      phoneNumber,
      message,
    });

    await newMessage.save();

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET method is not supported on this endpoint' }, { status: 405 });
}