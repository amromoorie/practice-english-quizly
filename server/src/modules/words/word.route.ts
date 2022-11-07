import { Router } from 'express';
import { fetchWords } from './word.ctrl';

export const router = Router();

router.post('/', fetchWords);
