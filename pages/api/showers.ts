import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('https://java-api-demo.onrender.com/api/showers', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      } else {
        return res.status(response.status).json({ message: 'Failed to fetch shower data' });
      }
    } catch (error) {
      console.error("Error fetching shower data:", error);
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
      } else {
        return res.status(500).json({ message: 'Internal Server Error', error: String(error) });
      }
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
