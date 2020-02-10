import {cube} from './math';

conoose.error('has error');
if (process.env.NODE_ENV !== 'production') {
  console.log(`process.env.NODE_ENV !== 'production'`);
} else {
  console.log(`process.env.NODE_ENV === 'production'`);
} 
function component () {
  const element = document.createElement('pre');

  element.innerHTML = ['hello webpack', '5 cubed is equal to' + cube(5)].join('\n\n');


  return element;
}
document.body.appendChild(component());
