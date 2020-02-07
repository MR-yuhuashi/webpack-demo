import _ from 'lodash';
import printMe from './print';

function component () {
  const element = document.createElement('div');
  const button = document.createElement('button');

  button.innerHTML = 'click me and look at the console!'
  element.innerHTML = _.join(['hello', 'world'], ' ');

  button.onclick = printMe;

  element.appendChild(button);
  return element;
}
document.body.appendChild(component());
