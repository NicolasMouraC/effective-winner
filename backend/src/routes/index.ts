/** Routes */
import api from './api';
import { FastifyRequest, FastifyReply } from 'fastify';

const routes = (app: any, _: any, next: () => void) => {
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.code(200).send({
      message: 'Server running.'
    });
  })
  app.register(api, { prefix: '/api' });
  next();
};

export default routes;
