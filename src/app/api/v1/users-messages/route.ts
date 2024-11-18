import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/logic/db';
import UserMessage from '@/models/usersMessages';

export async function POST(request: NextRequest) {
  await dbConnect();

  const { fullName, email, phoneNumber, message } = await request.json();

  if (!fullName || !email || !phoneNumber || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const newUser = new UserMessage({
      fullName,
      email,
      phoneNumber,
      message,
    });

    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET method is not supported on this endpoint' }, { status: 405 });
}

