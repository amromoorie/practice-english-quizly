import { createServer } from 'http';
import { app } from './app';

const bootstrap = () => {
  const server = createServer(app);
  const PORT = process.env.PORT || 8888;

  server.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
};

bootstrap();
