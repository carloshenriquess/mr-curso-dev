import { FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = async (fastify) => {
  fastify.get('/v1/status', () => {
    return { status: 'Healthy' };
  });
};

export default routes;
