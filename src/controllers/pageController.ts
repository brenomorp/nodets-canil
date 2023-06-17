import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('home controller');
};

export const dogs = (req: Request, res: Response) => {
  res.send('dogs controller');
};

export const cats = (req: Request, res: Response) => {
  res.send('cats controller');
};

export const fishes = (req: Request, res: Response) => {
  res.send('fishes controller');
};
