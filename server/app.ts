import express from 'express';
import cors from 'cors';
import { corsOptions } from './utils/config';
import fruitRouter from './routes/fruitRoutes';

const app = express();

app.use(cors(corsOptions));

app.use('/api', fruitRouter);

export default app;
