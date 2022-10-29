import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { router as rankRouter } from './modules/ranks/rank.route';

dotenv.config();
const app: Express = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/rank', rankRouter);

export { app };
