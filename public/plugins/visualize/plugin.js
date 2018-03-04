export default class Plugin {
  start(core, dependencies) {
    console.log('visualize plugin start', core);
    const { applicationService } = core;

    applicationService.register('visualize', async ({ targetDomElement }) => {
      console.log('mounting visualize app');
      const { bootstrapApp } = await import('./app');
      return bootstrapApp({ targetDomElement });
    });
  }

  stop(core, dependencies) {
    console.log('visualize plugin stop', core);
    const { applicationService } = core;

    applicationService.unregister('visualize');
  }
}
