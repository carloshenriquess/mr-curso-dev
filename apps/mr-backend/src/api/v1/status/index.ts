import { database } from '../../../infra/database';
import { FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = async (fastify) => {
  fastify.get('/v1/status', async () => {
    await database.query('select 1+1 as result');
    return { status: 'Healthy' };
  });
};

export default routes;
