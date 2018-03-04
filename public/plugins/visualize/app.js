export function bootstrapApp({ targetDomElement }) {
  console.log('render visualize app into targetDomElement');
  return () => {
    console.log('cleanup visualize app');
    // called when app is unmounted
    // no need to clear the dom, but free up any other memory and whatnot
  };
}
