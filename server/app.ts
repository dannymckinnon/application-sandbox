import express from 'express';
import cors from 'cors';
import { corsOptions } from './utils/config.js';
import fruitRouter from './routes/fruitRoutes.js';

const app = express();

app.use(cors(corsOptions));

app.use('/api', fruitRouter);

export default app;
