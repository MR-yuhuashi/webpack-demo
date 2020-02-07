function getComponent () {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['hello new webpack'], ' ');
  });
}

getComponent().then(component => {
  document.body.appendChild(component());
});
