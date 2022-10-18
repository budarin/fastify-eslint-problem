import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

export function checkNotFound(req: FastifyRequest, res: FastifyReply, done: HookHandlerDoneFunction): void {
    res.status(404);
    res.send('Not found');

    done();
}
