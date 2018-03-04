import { ApplicationService } from './application_service'

export async function bootstrap({ plugins, config, rootElement }) {
  console.log('core bootstrapping', plugins, config);

  const appTargetElement = document.createElement('div');
  appTargetElement.id = 'application-target';
  rootElement.appendChild(appTargetElement);

  const core = {
    applicationService: new ApplicationService({ targetDomElement: appTargetElement })
  };

  for (const Plugin of plugins) {
    new Plugin().start(core);
  }

  window.applicationService = core.applicationService;
}
