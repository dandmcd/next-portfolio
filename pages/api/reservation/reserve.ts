import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, phoneNumber, durationInMinutes } = req.body;

    try {
      const response = await fetch('https://java-api-demo.onrender.com/api/reservations/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber, durationInMinutes }),
      });

      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      } else {
        return res.status(response.status).json({ message: 'Failed to reserve shower' });
      }
    } catch (error) {
      console.error("Error reserving shower:", error);
      return res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
