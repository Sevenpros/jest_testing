import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  const stringLength = string => {
    if(string.length>0 && string.length <=10) return string.length;
    return 'invalid string';
  }
  export  default stringLength;