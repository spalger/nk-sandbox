import { bootstrap } from './core';

const plugins = [];

window.defineKibanaPlugin = function (Plugin) {
  plugins.push(Plugin);
}

const { injectedVars: config } = window.__kbn__.config;
const rootElement = document.getElementById('root');

window.addEventListener('load', () => {
  bootstrap({
    plugins,
    config,
    rootElement,
  });
});
