import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { showerId } = req.body;

    try {
      const response = await fetch('https://java-api-demo.onrender.com/api/maintenance/flag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ showerId }),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Shower flagged for cleaning successfully' });
      } else {
        const contentType = response.headers.get('content-type');
        let errorMessage = 'Failed to flag for cleaning';

        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        }

        return res.status(response.status).json({ message: errorMessage });
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = (error as Error).message;
      return res.status(500).json({ message: 'Internal Server Error', error: errorMessage });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
