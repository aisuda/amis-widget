(self.webpackChunkamis_widget=self.webpackChunkamis_widget||[]).push([[790],{40790:function(t,e,n){!function(t){"use strict";function e(t,e){if(!t.hasOwnProperty(e))throw new Error("Undefined state "+e+" in simple mode")}function n(t,e){if(!t)return/(?:)/;var n="";return t instanceof RegExp?(t.ignoreCase&&(n="i"),t.unicode&&(n+="u"),t=t.source):t=String(t),new RegExp((!1===e?"":"^")+"(?:"+t+")",n)}function a(t,a){(t.next||t.push)&&e(a,t.next||t.push),this.regex=n(t.regex),this.token=function(t){if(!t)return null;if(t.apply)return t;if("string"==typeof t)return t.replace(/\./g," ");for(var e=[],n=0;n<t.length;n++)e.push(t[n]&&t[n].replace(/\./g," "));return e}(t.token),this.data=t}function r(t,e){return function(n,a){if(a.pending){var r=a.pending.shift();return 0==a.pending.length&&(a.pending=null),n.pos+=r.text.length,r.token}if(a.local){if(a.local.end&&n.match(a.local.end)){var o=a.local.endToken||null;return a.local=a.localState=null,o}var i;return o=a.local.mode.token(n,a.localState),a.local.endScan&&(i=a.local.endScan.exec(n.current()))&&(n.pos=n.start+i.index),o}for(var s=t[a.state],d=0;d<s.length;d++){var c=s[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?a.state=c.data.next:c.data.push?((a.stack||(a.stack=[])).push(a.state),a.state=c.data.push):c.data.pop&&a.stack&&a.stack.length&&(a.state=a.stack.pop()),c.data.mode&&l(e,a,c.data.mode,c.token),c.data.indent&&a.indent.push(n.indentation()+e.indentUnit),c.data.dedent&&a.indent.pop();var p=c.token;if(p&&p.apply&&(p=p(u)),u.length>2&&c.token&&"string"!=typeof c.token){for(var f=2;f<u.length;f++)u[f]&&(a.pending||(a.pending=[])).push({text:u[f],token:c.token[f-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function o(t,e){if(t===e)return!0;if(!t||"object"!=typeof t||!e||"object"!=typeof e)return!1;var n=0;for(var a in t)if(t.hasOwnProperty(a)){if(!e.hasOwnProperty(a)||!o(t[a],e[a]))return!1;n++}for(var a in e)e.hasOwnProperty(a)&&n--;return 0==n}function l(e,a,r,l){var i;if(r.persistent)for(var s=a.persistentStates;s&&!i;s=s.next)(r.spec?o(r.spec,s.spec):r.mode==s.mode)&&(i=s);var d=i?i.mode:r.mode||t.getMode(e,r.spec),c=i?i.state:t.startState(d);r.persistent&&!i&&(a.persistentStates={mode:d,spec:r.spec,state:c,next:a.persistentStates}),a.localState=c,a.local={mode:d,end:r.end&&n(r.end),endScan:r.end&&!1!==r.forceEnd&&n(r.end,!1),endToken:l&&l.join?l[l.length-1]:l}}function i(e,n){return function(a,r,o){if(a.local&&a.local.mode.indent)return a.local.mode.indent(a.localState,r,o);if(null==a.indent||a.local||n.dontIndentStates&&function(t,e){for(var n=0;n<e.length;n++)if(e[n]===t)return!0}(a.state,n.dontIndentStates)>-1)return t.Pass;var l=a.indent.length-1,i=e[a.state];t:for(;;){for(var s=0;s<i.length;s++){var d=i[s];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var c=d.regex.exec(r);if(c&&c[0]){l--,(d.next||d.push)&&(i=e[d.next||d.push]),r=r.slice(c[0].length);continue t}}}break}return l<0?0:a.indent[l]}}t.defineSimpleMode=function(e,n){t.defineMode(e,(function(e){return t.simpleMode(e,n)}))},t.simpleMode=function(n,o){e(o,"start");var l={},s=o.meta||{},d=!1;for(var c in o)if(c!=s&&o.hasOwnProperty(c))for(var u=l[c]=[],p=o[c],f=0;f<p.length;f++){var h=p[f];u.push(new a(h,o)),(h.indent||h.dedent)&&(d=!0)}var g={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:d?[]:null}},copyState:function(e){var n={state:e.state,pending:e.pending,local:e.local,localState:null,indent:e.indent&&e.indent.slice(0)};e.localState&&(n.localState=t.copyState(e.local.mode,e.localState)),e.stack&&(n.stack=e.stack.slice(0));for(var a=e.persistentStates;a;a=a.next)n.persistentStates={mode:a.mode,spec:a.spec,state:a.state==e.localState?n.localState:t.copyState(a.mode,a.state),next:n.persistentStates};return n},token:r(l,n),innerMode:function(t){return t.local&&{mode:t.local.mode,state:t.localState}},indent:i(l,s)};if(s)for(var S in s)s.hasOwnProperty(S)&&(g[S]=s[S]);return g}}(n(4631))}}]);