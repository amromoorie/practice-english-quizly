import { Router } from 'express';
import { rankUserScoreHandler } from './rank.ctrl';

export const router = Router();

router.post('/', rankUserScoreHandler);
