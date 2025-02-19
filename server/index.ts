import express from 'express';
import cors from 'cors';
import { PORT, corsOptions } from './utils/config.ts';

const app = express();

app.use(cors(corsOptions));

app.get('/api', (req: express.Request, res: express.Response) => {
  res.json({ fruits: ['apple', 'asdfasdfsad', 'banana'] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
