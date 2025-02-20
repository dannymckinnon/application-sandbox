import express from 'express';
import { getFruits } from '../controllers/fruitController.js';

const router = express.Router();

router.get('/', getFruits);

export default router;
