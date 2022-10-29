import { Request, Response } from 'express';
import { rankUserScore } from './rank.service';

export async function rankUserScoreHandler(req: Request, res: Response) {
  const { score } = req.body;
  console.log('score: ', typeof score);
  const userScore = Number(score);

  try {
    // mock data as if returned from user
    const rankData: any = rankUserScore(userScore);
    console.log('rankData: ', rankData);
    return res.status(200).json({rankData});
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
}
