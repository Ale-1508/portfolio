import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/logic/db';
import UserMessage from '@/models/usersMessages';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { fullName, email, phoneNumber, message } = req.body;

        // Validate the request body
        if (!fullName || !email || !phoneNumber || !message) {
          return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new user
        const newUser = new UserMessage({
          fullName,
          email,
          phoneNumber,
          message,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
