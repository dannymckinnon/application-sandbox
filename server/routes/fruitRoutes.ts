import express from 'express';
import { getFruits } from '../controllers/fruitController.ts';

const router = express.Router();

router.get('/', getFruits);

export default router;
