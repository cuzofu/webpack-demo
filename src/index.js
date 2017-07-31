import _ from 'lodash';
import './style.css';
// import Icon from './react.jpg';
// import Data from './data.xml';

import printMe from './print';

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    documet.body.appendChild(element);
  })
}

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  var btn = document.createElement('button');
  btn.innerHTML = 'Click Me';
  btn.onclick = printMe;
  element.appendChild(btn);

  // add image to our existing div.
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  // console.log(Data);

  return element;
}

document.body.appendChild(component());
