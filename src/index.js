async function getComponent () {
  const element = document.createElement('div');
  
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['hello', 'world'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
