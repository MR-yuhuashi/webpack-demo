import {cube} from './math';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log(`process.env.NODE_ENV !== 'production', hahaha`);
} else {
  console.log(`process.env.NODE_ENV === 'production'`);
} 
function component () {
  const element = document.createElement('pre');

  element.innerHTML = ['hello webpack', '5 cubed is equal to' + cube(5)].join('\n\n');


  return element;
}
document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./math.js', () => {
    console.log('accept the updated math module');
    cube(50);
  });
}