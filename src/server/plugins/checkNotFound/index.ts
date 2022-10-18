import fastifyPlugin from 'fastify-plugin';
import { FastifyInstance, HookHandlerDoneFunction } from 'fastify';

// local imports
import { checkNotFound } from './checkNotFound';

function checkNotFoundPlugin(app: FastifyInstance, _: EmptyOptions, done: HookHandlerDoneFunction): void {
    app.addHook('onRequest', checkNotFound);

    done();
}

export default fastifyPlugin(checkNotFoundPlugin, {
    fastify: '4.x',
    name: '@budarin/checkNotFoundPlugin',
    dependencies: ['@budarin/setRoutePlugin'],
});
