import { Request, Response } from 'express';
import { rankUserScore } from './rank.service';

export async function rankUserScoreHandler(req: Request, res: Response) {
  const { score } = req.body;
  const userScore = Number(score);

  try {
    const rankData: number = await rankUserScore(userScore);

    return res.status(200).json({ rankData });
  } catch (error) {
    return res.sendStatus(404);
  }
}
