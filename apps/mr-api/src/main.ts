import Fastify from 'fastify';
import statusRoutes from './v1/status';

const app = Fastify({ logger: true });

app.register(statusRoutes);

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen({ host, port });
