require('dotenv').config();
import fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import routes from './routes';

const logOptions = {
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
};

const logger = process.env.PRODUCTION === 'true' ? undefined : logOptions;

export const build = () => {
  const app = fastify({
    logger: logger,
    ignoreTrailingSlash: true,
    ignoreDuplicateSlashes: true,
    pluginTimeout: 20000,
    keepAliveTimeout: 75000,
    bodyLimit: 73400320,
  });

  app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  });

  app.register(multipart);

  app.register(routes);

  app.setErrorHandler((error, _, reply) => {
    return reply.status(error.statusCode || 400).send(error);
  });

  return app;
};
