!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GitHubLogin=t(require("react")):e.GitHubLogin=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e){var t=e.replace(/^\??\//,"");return t.split("&").reduce(function(e,t){var n=t.split("="),r=o(n,2),i=r[0],u=r[1];return e[i]=u,e},{})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n=Object.keys(e);return n.reduce(function(r,o,i){var u=""+r+o+"="+e[o];return i<n.length-1&&(u+=t),u},"")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{!r&&c["return"]&&c["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.toParams=n,t.toQuery=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),s=r(a),l=n(3),p=r(l),f=n(1),d=function(e){function t(){var e,n,r,u;o(this,t);for(var c=arguments.length,a=Array(c),s=0;s<c;s++)a[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.onBtnClick=function(){var e=r.props,t=e.clientId,n=e.scope,o=e.redirectUri,i=(0,f.toQuery)({client_id:t,scope:n,redirect_uri:o}),u=r.popup=p["default"].open("github-oauth-authorize","https://github.com/login/oauth/authorize?"+i,{height:1e3,width:600});u.then(function(e){return r.onSuccess(e)},function(e){return r.onFailure(e)})},r.onSuccess=function(e){return e.code?void r.props.onSuccess(e):r.onFailure(new Error("'code' not found"))},r.onFailure=function(e){r.props.onFailure(e)},u=n,i(r,u)}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.buttonText,r=e.children,o={onClick:this.onBtnClick};return t&&(o.className=t),s["default"].createElement("button",o,r||n)}}]),t}(a.Component);d.propTypes={buttonText:a.PropTypes.string,children:a.PropTypes.node,className:a.PropTypes.string,clientId:a.PropTypes.string.isRequired,onSuccess:a.PropTypes.func,onFailure:a.PropTypes.func,redirectUri:a.PropTypes.string.isRequired,scope:a.PropTypes.string},d.defaultProps={buttonText:"Sign in with GitHub",scope:"user:email",onSuccess:function(){},onFailure:function(){}},t["default"]=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r(this,e),this.id=t,this.url=n,this.options=o}return o(e,[{key:"open",value:function(){var e=this.url,t=this.id,n=this.options;this.window=window.open(e,t,(0,i.toQuery)(n,","))}},{key:"close",value:function(){this.cancel(),this.window.close()}},{key:"poll",value:function(){var e=this;this.promise=new Promise(function(t,n){e._iid=window.setInterval(function(){var r=e.window;if(!r||r.closed!==!1)return e.close(),void n(new Error("The popup was closed"));if(r.location.href!==e.url&&"blank"!==r.location.pathname){var o=(0,i.toParams)(r.location.search.replace(/^\?/,""));t(o),e.close()}},500)})}},{key:"cancel",value:function(){this._iid&&(window.clearInterval(this._iid),this._iid=null)}},{key:"then",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}},{key:"catch",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}}],[{key:"open",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=new(Function.prototype.bind.apply(this,[null].concat(t)));return r.open(),r.poll(),r}}]),e}();t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o);t["default"]=i["default"]},function(t,n){t.exports=e}])});
//# sourceMappingURL=GitHubLogin.js.map