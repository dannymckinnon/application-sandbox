import { Request, Response } from 'express';

export const getFruits = (req: Request, res: Response) => {
  res.json({ fruits: ['apple', 'asdfasdfsad', 'banana'] });
};
