import { Request, Response } from 'express';

export const getFruits = (req: Request, res: Response) => {
  res.json({
    fruits: [
      'The home of the HomeBoy',
      'Fresh fuckin Dumpling',
      'Mr. Harrison',
    ],
  });
};
