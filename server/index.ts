import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const corsOptions = {
  origin: isProduction
    ? 'https://application-sandbox-client.onrender.com'
    : 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

app.get('/api', (req: Request, res: Response) => {
  res.json({ fruits: ['apple', 'asdfasdfsad', 'banana'] });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
