export class ApplicationService {
  constructor({ targetDomElement }) {
    this.targetDomElement = targetDomElement;
    this.applications = new Map();
    this.current = {};
  }

  async mount(name) {
    if (this.current.name === name) {
      return;
    }
    if (this.current.unmount) {
      await this.current.unmount();
    }

    const mountNewApp = this.applications.get(name);
    const unmount = await mountNewApp(this.targetDomElement);
    this.current = { name, unmount };
  }

  // this would need to be smarter in practice so it could select a default app
  async unmount(name) {
    const existing = this.current;
    this.current = {};
    return await existing.unmount();
  }

  register(name, mount) {
    this.applications.set(name, mount);
  }

  unregister(name) {
    this.applications.delete(name);
  }
}
