import dotenv from 'dotenv';
import express, { Express } from 'express';

const app: Express = express();
dotenv.config();
app.use(express.json());

export { app };
