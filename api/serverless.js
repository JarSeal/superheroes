import path from 'path';
import { URL } from 'url';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';

process.env.TZ = 'UTC';

const initApp = async () => {
  const __dirname = new URL('.', import.meta.url).pathname;

  // Fastify
  const app = fastify()

  // Static files
  await app.register(fastifyStatic, {
    root: path.join(__dirname)
  });

  app.get('/', (req, res) => res.sendFile('../pages/index.html'));
  app.get('/card', (req, res) => res.sendFile('../pages/card.html'));

  return app;
};

initApp()
  .then((app) => {
    app.listen(
      {
        port: process.env.ENV === 'production' ? 80 : 3008,
        host: 'localhost',
        listenTextResolver: (address) => `SERVER listening at ${address}`,
      },
      () => null
    );
  })
  .catch((err) => {
    console.error({ err }, 'SERVER failed to start');
  });
