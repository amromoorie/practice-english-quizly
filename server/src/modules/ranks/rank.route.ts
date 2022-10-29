import { Router } from 'express';
import { rankUserScoreHandler } from './rank.ctrl';

export const router = Router();
console.log('router');

router.post('/', rankUserScoreHandler);
