"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}function n(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}n(".button{border:none;border-radius:25px;color:#fff;cursor:pointer;display:inline-block;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:1;padding:15px 32px;text-align:center;text-decoration:none}.primary{background-color:#1ea7fd}.secondary{background-color:#e7e7e7;color:#333}.success{background-color:#4caf50}.danger{background-color:#f44336}");n(".input{background-color:#fff;border:1px solid;border-color:inherit;border-radius:.25rem;display:block;padding-left:1rem;padding-right:1rem;width:250px}.small{font-size:.875rem;height:1.5rem}.medium{font-size:1rem;height:2rem}.large{font-size:1.25rem;height:2.5rem}");exports.Button=e=>{const{variant:n="primary",children:o,...i}=e;return t.default.createElement("button",r({className:`button ${n}`},i),o)},exports.Input=e=>{const{size:n="medium",...o}=e;return t.default.createElement("input",r({className:`input ${n}`},o))};
