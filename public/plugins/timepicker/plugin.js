export default class Plugin {
  start(core, dependencies) {
    console.log('timepicker start', core);
  }

  stop(core, dependencies) {
    console.log('timepicker stop');
  }
}
