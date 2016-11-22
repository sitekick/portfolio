!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){if(pe.isFunction(t))return pe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return pe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(Ce.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)}return pe.grep(e,function(e){return pe.inArray(e,t)>-1!==n})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function o(e){var t={};return pe.each(e.match(De)||[],function(e,n){t[n]=!0}),t}function a(){re.addEventListener?(re.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s)):(re.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(re.addEventListener||"load"===e.event.type||"complete"===re.readyState)&&(a(),pe.ready())}function u(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Me,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:qe.test(n)?pe.parseJSON(n):n)}catch(e){}pe.data(e,t,n)}else n=void 0}return n}function l(e){var t;for(t in e)if(("data"!==t||!pe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(He(e)){var i,o,a=pe.expando,s=e.nodeType,u=s?pe.cache:e,l=s?e[a]:e[a]&&a;if(l&&u[l]&&(r||u[l].data)||void 0!==n||"string"!=typeof t)return l||(l=s?e[a]=ne.pop()||pe.guid++:a),u[l]||(u[l]=s?{}:{toJSON:pe.noop}),"object"!=typeof t&&"function"!=typeof t||(r?u[l]=pe.extend(u[l],t):u[l].data=pe.extend(u[l].data,t)),o=u[l],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[pe.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[pe.camelCase(t)])):i=o,i}}function f(e,t,n){if(He(e)){var r,i,o=e.nodeType,a=o?pe.cache:e,s=o?e[pe.expando]:pe.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){pe.isArray(t)?t=t.concat(pe.map(t,pe.camelCase)):t in r?t=[t]:(t=pe.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!l(r):!pe.isEmptyObject(r))return}(n||(delete a[s].data,l(a[s])))&&(o?pe.cleanData([e],!0):fe.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}function d(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return pe.css(e,t,"")},u=s(),l=n&&n[3]||(pe.cssNumber[t]?"":"px"),c=(pe.cssNumber[t]||"px"!==l&&+u)&&Fe.exec(pe.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,pe.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function p(e){var t=ze.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function h(e,t){var n,r,i=0,o="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||pe.nodeName(r,t)?o.push(r):pe.merge(o,h(r,t));return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],o):o}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)pe._data(n,"globalEval",!t||pe._data(t[r],"globalEval"))}function g(e){Be.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t,n,r,i){for(var o,a,s,u,l,c,f,d=e.length,y=p(t),v=[],x=0;x<d;x++)if(a=e[x],a||0===a)if("object"===pe.type(a))pe.merge(v,a.nodeType?[a]:a);else if(Ue.test(a)){for(u=u||y.appendChild(t.createElement("div")),l=(We.exec(a)||["",""])[1].toLowerCase(),f=Xe[l]||Xe._default,u.innerHTML=f[1]+pe.htmlPrefilter(a)+f[2],o=f[0];o--;)u=u.lastChild;if(!fe.leadingWhitespace&&$e.test(a)&&v.push(t.createTextNode($e.exec(a)[0])),!fe.tbody)for(a="table"!==l||Ve.test(a)?"<table>"!==f[1]||Ve.test(a)?0:u:u.firstChild,o=a&&a.childNodes.length;o--;)pe.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(pe.merge(v,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=y.lastChild}else v.push(t.createTextNode(a));for(u&&y.removeChild(u),fe.appendChecked||pe.grep(h(v,"input"),g),x=0;a=v[x++];)if(r&&pe.inArray(a,r)>-1)i&&i.push(a);else if(s=pe.contains(a.ownerDocument,a),u=h(y.appendChild(a),"script"),s&&m(u),n)for(o=0;a=u[o++];)Ie.test(a.type||"")&&n.push(a);return u=null,y}function v(){return!0}function x(){return!1}function b(){try{return re.activeElement}catch(e){}}function w(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)w(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=x;else if(!i)return e;return 1===o&&(a=i,i=function(e){return pe().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=pe.guid++)),e.each(function(){pe.event.add(this,t,i,r,n)})}function T(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function C(e){return e.type=(null!==pe.find.attr(e,"type"))+"/"+e.type,e}function E(e){var t=it.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function N(e,t){if(1===t.nodeType&&pe.hasData(e)){var n,r,i,o=pe._data(e),a=pe._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)pe.event.add(t,n,s[n][r])}a.data&&(a.data=pe.extend({},a.data))}}function k(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!fe.noCloneEvent&&t[pe.expando]){i=pe._data(t);for(r in i.events)pe.removeEvent(t,r,i.handle);t.removeAttribute(pe.expando)}"script"===n&&t.text!==e.text?(C(t).text=e.text,E(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),fe.html5Clone&&e.innerHTML&&!pe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Be.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function S(e,t,n,r){t=oe.apply([],t);var i,o,a,s,u,l,c=0,f=e.length,d=f-1,p=t[0],m=pe.isFunction(p);if(m||f>1&&"string"==typeof p&&!fe.checkClone&&rt.test(p))return e.each(function(i){var o=e.eq(i);m&&(t[0]=p.call(this,i,o.html())),S(o,t,n,r)});if(f&&(l=y(t,e[0].ownerDocument,!1,e,r),i=l.firstChild,1===l.childNodes.length&&(l=i),i||r)){for(s=pe.map(h(l,"script"),C),a=s.length;c<f;c++)o=l,c!==d&&(o=pe.clone(o,!0,!0),a&&pe.merge(s,h(o,"script"))),n.call(e[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,pe.map(s,E),c=0;c<a;c++)o=s[c],Ie.test(o.type||"")&&!pe._data(o,"globalEval")&&pe.contains(u,o)&&(o.src?pe._evalUrl&&pe._evalUrl(o.src):pe.globalEval((o.text||o.textContent||o.innerHTML||"").replace(ot,"")));l=i=null}return e}function A(e,t,n){for(var r,i=t?pe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||pe.cleanData(h(r)),r.parentNode&&(n&&pe.contains(r.ownerDocument,r)&&m(h(r,"script")),r.parentNode.removeChild(r));return e}function D(e,t){var n=pe(t.createElement(e)).appendTo(t.body),r=pe.css(n[0],"display");return n.detach(),r}function L(e){var t=re,n=lt[e];return n||(n=D(e,t),"none"!==n&&n||(ut=(ut||pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(ut[0].contentWindow||ut[0].contentDocument).document,t.write(),t.close(),n=D(e,t),ut.detach()),lt[e]=n),n}function j(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function H(e){if(e in Et)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ct.length;n--;)if(e=Ct[n]+t,e in Et)return e}function q(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=pe._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Re(r)&&(o[a]=pe._data(r,"olddisplay",L(r.nodeName)))):(i=Re(r),(n&&"none"!==n||!i)&&pe._data(r,"olddisplay",i?n:pe.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function M(e,t,n){var r=bt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function _(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=pe.css(e,n+Oe[o],!0,i)),r?("content"===n&&(a-=pe.css(e,"padding"+Oe[o],!0,i)),"margin"!==n&&(a-=pe.css(e,"border"+Oe[o]+"Width",!0,i))):(a+=pe.css(e,"padding"+Oe[o],!0,i),"padding"!==n&&(a+=pe.css(e,"border"+Oe[o]+"Width",!0,i)));return a}function F(t,n,r){var i=!0,o="width"===n?t.offsetWidth:t.offsetHeight,a=ht(t),s=fe.boxSizing&&"border-box"===pe.css(t,"boxSizing",!1,a);if(re.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(o=Math.round(100*t.getBoundingClientRect()[n])),o<=0||null==o){if(o=mt(t,n,a),(o<0||null==o)&&(o=t.style[n]),ft.test(o))return o;i=s&&(fe.boxSizingReliable()||o===t.style[n]),o=parseFloat(o)||0}return o+_(t,n,r||(s?"border":"content"),i,a)+"px"}function O(e,t,n,r,i){return new O.prototype.init(e,t,n,r,i)}function R(){return e.setTimeout(function(){Nt=void 0}),Nt=pe.now()}function P(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)n=Oe[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function B(e,t,n){for(var r,i=($.tweeners[t]||[]).concat($.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function W(e,t,n){var r,i,o,a,s,u,l,c,f=this,d={},p=e.style,h=e.nodeType&&Re(e),m=pe._data(e,"fxshow");n.queue||(s=pe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,pe.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],l=pe.css(e,"display"),c="none"===l?pe._data(e,"olddisplay")||L(e.nodeName):l,"inline"===c&&"none"===pe.css(e,"float")&&(fe.inlineBlockNeedsLayout&&"inline"!==L(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",fe.shrinkWrapBlocks()||f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],St.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;h=!0}d[r]=m&&m[r]||pe.style(e,r)}else l=void 0;if(pe.isEmptyObject(d))"inline"===("none"===l?L(e.nodeName):l)&&(p.display=l);else{m?"hidden"in m&&(h=m.hidden):m=pe._data(e,"fxshow",{}),o&&(m.hidden=!h),h?pe(e).show():f.done(function(){pe(e).hide()}),f.done(function(){var t;pe._removeData(e,"fxshow");for(t in d)pe.style(e,t,d[t])});for(r in d)a=B(h?m[r]:0,r,f),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function I(e,t){var n,r,i,o,a;for(n in e)if(r=pe.camelCase(n),i=t[r],o=e[n],pe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=pe.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function $(e,t,n){var r,i,o=0,a=$.prefilters.length,s=pe.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Nt||R(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default},n),originalProperties:t,originalOptions:n,startTime:Nt||R(),duration:n.duration,tweens:[],createTween:function(t,n){var r=pe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(I(c,l.opts.specialEasing);o<a;o++)if(r=$.prefilters[o].call(l,e,c,l.opts))return pe.isFunction(r.stop)&&(pe._queueHooks(l.elem,l.opts.queue).stop=pe.proxy(r.stop,r)),r;return pe.map(c,B,l),pe.isFunction(l.opts.start)&&l.opts.start.call(e,l),pe.fx.timer(pe.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function z(e){return pe.attr(e,"class")||""}function X(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(De)||[];if(pe.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function U(e,t,n,r){function i(s){var u;return o[s]=!0,pe.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Qt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function V(e,t){var n,r,i=pe.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&pe.extend(!0,e,n),e}function Y(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}function J(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function G(e){return e.style&&e.style.display||pe.css(e,"display")}function Q(e){for(;e&&1===e.nodeType;){if("none"===G(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}function K(e,t,n,r){var i;if(pe.isArray(t))pe.each(t,function(t,i){n||nn.test(e)?r(e,i):K(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==pe.type(t))r(e,t);else for(i in t)K(e+"["+i+"]",t[i],n,r)}function Z(){try{return new e.XMLHttpRequest}catch(e){}}function ee(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function te(e){return pe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var ne=[],re=e.document,ie=ne.slice,oe=ne.concat,ae=ne.push,se=ne.indexOf,ue={},le=ue.toString,ce=ue.hasOwnProperty,fe={},de="1.12.0",pe=function(e,t){return new pe.fn.init(e,t)},he=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ge=/-([\da-z])/gi,ye=function(e,t){return t.toUpperCase()};pe.fn=pe.prototype={jquery:de,constructor:pe,selector:"",length:0,toArray:function(){return ie.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:ie.call(this)},pushStack:function(e){var t=pe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return pe.each(this,e)},map:function(e){return this.pushStack(pe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ie.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:ne.sort,splice:ne.splice},pe.extend=pe.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||pe.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(l&&n&&(pe.isPlainObject(n)||(t=pe.isArray(n)))?(t?(t=!1,o=e&&pe.isArray(e)?e:[]):o=e&&pe.isPlainObject(e)?e:{},a[r]=pe.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},pe.extend({expando:"jQuery"+(de+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===pe.type(e)},isArray:Array.isArray||function(e){return"array"===pe.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!pe.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==pe.type(e)||e.nodeType||pe.isWindow(e))return!1;try{if(e.constructor&&!ce.call(e,"constructor")&&!ce.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!fe.ownFirst)for(t in e)return ce.call(e,t);for(t in e);return void 0===t||ce.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e},globalEval:function(t){t&&pe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(me,"ms-").replace(ge,ye)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;i<r&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(he,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?pe.merge(r,"string"==typeof e?[e]:e):ae.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(se)return se.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o,a=0,s=[];if(n(e))for(i=e.length;a<i;a++)o=t(e[a],a,r),null!=o&&s.push(o);else for(a in e)o=t(e[a],a,r),null!=o&&s.push(o);return oe.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(i=e[t],t=e,e=i),pe.isFunction(e))return n=ie.call(arguments,2),r=function(){return e.apply(t||this,n.concat(ie.call(arguments)))},r.guid=e.guid=e.guid||pe.guid++,r},now:function(){return+new Date},support:fe}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=ne[Symbol.iterator]),pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()});var ve=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,p,h=t&&t.ownerDocument,m=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;if(!r&&((t?t.ownerDocument||t:B)!==H&&j(t),t=t||H,M)){if(11!==m&&(l=ye.exec(e)))if(i=l[1]){if(9===m){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(h&&(a=h.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n}else{if(l[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!X[e+" "]&&(!_||!_.test(e))){if(1!==m)h=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(xe,"\\$&"):t.setAttribute("id",s=P),f=N(e),o=f.length,u=de.test(s)?"#"+s:"[id='"+s+"']";o--;)f[o]=u+" "+d(f[o]);p=f.join(","),h=ve.test(e)&&c(t.parentNode)||t}if(p)try{return K.apply(n,h.querySelectorAll(p)),n}catch(e){}finally{s===P&&t.removeAttribute("id")}}}return S(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[P]=!0,e}function i(e){var t=H.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[P]||(t[P]={}),u=l[t.uniqueID]||(l[t.uniqueID]={}),(s=u[r])&&s[0]===W&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,i,o,a){return i&&!i[P]&&(i=y(i)),o&&!o[P]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,d=[],p=[],h=a.length,y=r||m(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?y:g(y,d,e,s,u),x=n?o||(r?e:h||i)?[]:a:v;if(n&&n(v,x,s,u),i)for(l=g(x,p),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[p[c]]=!(v[p[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(v[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else x=g(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)})}function v(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=p(function(e){return e===t},a,!0),l=p(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==A)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=T.relative[e[s].type])c=[p(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;r<i&&!T.relative[e[r].type];r++);return y(s>1&&h(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&d(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,d,p=0,h="0",m=r&&[],y=[],v=A,x=r||o&&T.find.TAG("*",l),b=W+=null==v?1:Math.random()||.1,w=x.length;for(l&&(A=a===H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(j(c),s=!M);d=e[f++];)if(d(c,a||H,s)){u.push(c);break}l&&(W=b)}i&&((c=!d&&c)&&p--,r&&m.push(c))}if(p+=h,i&&h!==p){for(f=0;d=n[f++];)d(m,y,a,s);if(r){if(p>0)for(;h--;)m[h]||y[h]||(y[h]=G.call(u));y=g(y)}K.apply(u,y),l&&!r&&y.length>0&&p+n.length>1&&t.uniqueSort(u)}return l&&(W=b,A=v),m};return i?r(a):a}var b,w,T,C,E,N,k,S,A,D,L,j,H,q,M,_,F,O,R,P="sizzle"+1*new Date,B=e.document,W=0,I=0,$=n(),z=n(),X=n(),U=function(e,t){return e===t&&(L=!0),0},V=1<<31,Y={}.hasOwnProperty,J=[],G=J.pop,Q=J.push,K=J.push,Z=J.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),de=new RegExp("^"+re+"$"),pe={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,xe=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Te=function(){j()};try{K.apply(J=Z.call(B.childNodes),B.childNodes),J[B.childNodes.length].nodeType}catch(e){K={apply:J.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},j=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:B;return r!==H&&9===r.nodeType&&r.documentElement?(H=r,q=H.documentElement,M=!E(H),(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ge.test(H.getElementsByClassName),w.getById=i(function(e){return q.appendChild(e).id=P,!H.getElementsByName||!H.getElementsByName(P).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&M){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(be,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&M)return t.getElementsByClassName(e)},F=[],_=[],(w.qsa=ge.test(H.querySelectorAll))&&(i(function(e){q.appendChild(e).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&_.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||_.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+P+"-]").length||_.push("~="),e.querySelectorAll(":checked").length||_.push(":checked"),e.querySelectorAll("a#"+P+"+*").length||_.push(".#.+[+~]")}),i(function(e){var t=H.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&_.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||_.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),_.push(",.*:")})),(w.matchesSelector=ge.test(O=q.matches||q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&i(function(e){w.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),F.push("!=",oe)}),_=_.length&&new RegExp(_.join("|")),F=F.length&&new RegExp(F.join("|")),t=ge.test(q.compareDocumentPosition),R=t||ge.test(q.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return L=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===B&&R(B,e)?-1:t===H||t.ownerDocument===B&&R(B,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return L=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:D?ee(D,e)-ee(D,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===B?-1:u[r]===B?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&j(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&M&&!X[n+" "]&&(!F||!F.test(n))&&(!_||!_.test(n)))try{var r=O.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&j(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&j(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!M):void 0;return void 0!==r?r:w.attributes||!M?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(L=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),L){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&$(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s,x=!1;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(d=g,f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),
l=c[e]||[],p=l[0]===W&&l[1],x=p&&l[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[W,p,x];break}}else if(v&&(d=t,f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===W&&l[1],x=p),x===!1)for(;(d=++p&&d&&d[m]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==y:1!==d.nodeType)||!++x||(v&&(f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[W,x]),d!==t)););return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[P]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(se,"$1"));return i[P]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,we),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,we).toLowerCase(),function(t){var n;do if(n=M?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===q},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=s(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,N=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in T.filter)!(i=pe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=N(e)),n=t.length;n--;)o=v(t[n]),o[P]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&N(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&M&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(be,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(be,we),ve.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return K.apply(n,r),n;break}}return(l||k(e,f))(r,t,!M,n,!t||ve.test(e)&&c(t.parentNode)||t),n},w.sortStable=P.split("").sort(U).join("")===P,w.detectDuplicates=!!L,j(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);pe.find=ve,pe.expr=ve.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ve.uniqueSort,pe.text=ve.getText,pe.isXMLDoc=ve.isXML,pe.contains=ve.contains;var xe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&pe(e).is(n))break;r.push(e)}return r},be=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},we=pe.expr.match.needsContext,Te=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ce=/^.[^:#\[\.,]*$/;pe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?pe.find.matchesSelector(r,e)?[r]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;t<i;t++)if(pe.contains(r[t],this))return!0}));for(t=0;t<i;t++)pe.find(e,r[t],n);return n=this.pushStack(i>1?pe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&we.test(e)?pe(e):e||[],!1).length}});var Ee,Ne=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ke=pe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Ee,"string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Ne.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:re,!0)),Te.test(r[1])&&pe.isPlainObject(t))for(r in t)pe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if(i=re.getElementById(r[2]),i&&i.parentNode){if(i.id!==r[2])return Ee.find(e);this.length=1,this[0]=i}return this.context=re,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):pe.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(pe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),pe.makeArray(e,this))};ke.prototype=pe.fn,Ee=pe(re);var Se=/^(?:parents|prev(?:Until|All))/,Ae={children:!0,contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t,n=pe(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(pe.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=we.test(e)||"string"!=typeof e?pe(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?pe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?pe.inArray(this[0],pe(e)):pe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return xe(e,"parentNode")},parentsUntil:function(e,t,n){return xe(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return xe(e,"nextSibling")},prevAll:function(e){return xe(e,"previousSibling")},nextUntil:function(e,t,n){return xe(e,"nextSibling",n)},prevUntil:function(e,t,n){return xe(e,"previousSibling",n)},siblings:function(e){return be((e.parentNode||{}).firstChild,e)},children:function(e){return be(e.firstChild)},contents:function(e){return pe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:pe.merge([],e.childNodes)}},function(e,t){pe.fn[e]=function(n,r){var i=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=pe.filter(r,i)),this.length>1&&(Ae[e]||(i=pe.uniqueSort(i)),Se.test(e)&&(i=i.reverse())),this.pushStack(i)}});var De=/\S+/g;pe.Callbacks=function(e){e="string"==typeof e?o(e):pe.extend({},e);var t,n,r,i,a=[],s=[],u=-1,l=function(){for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<a.length;)a[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=a.length,n=!1);e.memory||(n=!1),t=!1,i&&(a=n?[]:"")},c={add:function(){return a&&(n&&!t&&(u=a.length-1,s.push(n)),function t(n){pe.each(n,function(n,r){pe.isFunction(r)?e.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==pe.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return pe.each(arguments,function(e,t){for(var n;(n=pe.inArray(t,a,n))>-1;)a.splice(n,1),n<=u&&u--}),this},has:function(e){return e?pe.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return i=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return i=!0,n||c.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},pe.extend({Deferred:function(e){var t=[["resolve","done",pe.Callbacks("once memory"),"resolved"],["reject","fail",pe.Callbacks("once memory"),"rejected"],["notify","progress",pe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return pe.Deferred(function(n){pe.each(t,function(t,o){var a=pe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?pe.extend(e,r):r}},i={};return r.pipe=r.then,pe.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ie.call(arguments),a=o.length,s=1!==a||e&&pe.isFunction(e.promise)?a:0,u=1===s?e:pe.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ie.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&pe.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--s;return s||u.resolveWith(r,o),u.promise()}});var Le;pe.fn.ready=function(e){return pe.ready.promise().done(e),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0)},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||(Le.resolveWith(re,[pe]),pe.fn.triggerHandler&&(pe(re).triggerHandler("ready"),pe(re).off("ready"))))}}),pe.ready.promise=function(t){if(!Le)if(Le=pe.Deferred(),"complete"===re.readyState)e.setTimeout(pe.ready);else if(re.addEventListener)re.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s);else{re.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&re.documentElement}catch(e){}n&&n.doScroll&&!function t(){if(!pe.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}a(),pe.ready()}}()}return Le.promise(t)},pe.ready.promise();var je;for(je in pe(fe))break;fe.ownFirst="0"===je,fe.inlineBlockNeedsLayout=!1,pe(function(){var e,t,n,r;n=re.getElementsByTagName("body")[0],n&&n.style&&(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",fe.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=re.createElement("div");fe.deleteExpando=!0;try{delete e.test}catch(e){fe.deleteExpando=!1}e=null}();var He=function(e){var t=pe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)},qe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Me=/([A-Z])/g;pe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?pe.cache[e[pe.expando]]:e[pe.expando],!!e&&!l(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return f(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return f(e,t,!0)}}),pe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=pe.data(o),1===o.nodeType&&!pe._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=pe.camelCase(r.slice(5)),u(o,r,i[r])));pe._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){pe.data(this,e)}):arguments.length>1?this.each(function(){pe.data(this,e,t)}):o?u(o,e,pe.data(o,e)):void 0},removeData:function(e){return this.each(function(){pe.removeData(this,e)})}}),pe.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=pe._data(e,t),n&&(!r||pe.isArray(n)?r=pe._data(e,t,pe.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),r=n.length,i=n.shift(),o=pe._queueHooks(e,t),a=function(){pe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return pe._data(e,n)||pe._data(e,n,{empty:pe.Callbacks("once memory").add(function(){pe._removeData(e,t+"queue"),pe._removeData(e,n)})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=pe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=pe._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),function(){var e;fe.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=re.getElementsByTagName("body")[0],n&&n.style?(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(re.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var _e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Fe=new RegExp("^(?:([+-])=|)("+_e+")([a-z%]*)$","i"),Oe=["Top","Right","Bottom","Left"],Re=function(e,t){return e=t||e,"none"===pe.css(e,"display")||!pe.contains(e.ownerDocument,e)},Pe=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===pe.type(n)){i=!0;for(s in n)Pe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,pe.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(pe(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Be=/^(?:checkbox|radio)$/i,We=/<([\w:-]+)/,Ie=/^$|\/(?:java|ecma)script/i,$e=/^\s+/,ze="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var e=re.createElement("div"),t=re.createDocumentFragment(),n=re.createElement("input");e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",fe.leadingWhitespace=3===e.firstChild.nodeType,fe.tbody=!e.getElementsByTagName("tbody").length,fe.htmlSerialize=!!e.getElementsByTagName("link").length,fe.html5Clone="<:nav></:nav>"!==re.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,t.appendChild(n),fe.appendChecked=n.checked,e.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,t.appendChild(e),n=re.createElement("input"),n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),fe.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,fe.noCloneEvent=!!e.addEventListener,e[pe.expando]=1,fe.attributes=!e.getAttribute(pe.expando)}();var Xe={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:fe.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Xe.optgroup=Xe.option,Xe.tbody=Xe.tfoot=Xe.colgroup=Xe.caption=Xe.thead,Xe.th=Xe.td;var Ue=/<|&#?\w+;/,Ve=/<tbody/i;!function(){var t,n,r=re.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(fe[t]=n in e)||(r.setAttribute(n,"t"),fe[t]=r.attributes[n].expando===!1);r=null}();var Ye=/^(?:input|select|textarea)$/i,Je=/^key/,Ge=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Qe=/^(?:focusinfocus|focusoutblur)$/,Ke=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,m,g=pe._data(e);if(g){for(n.handler&&(u=n,n=u.handler,i=u.selector),n.guid||(n.guid=pe.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return"undefined"==typeof pe||e&&pe.event.triggered===e.type?void 0:pe.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(De)||[""],s=t.length;s--;)o=Ke.exec(t[s])||[],p=m=o[1],h=(o[2]||"").split(".").sort(),p&&(l=pe.event.special[p]||{},p=(i?l.delegateType:l.bindType)||p,l=pe.event.special[p]||{},f=pe.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&pe.expr.match.needsContext.test(i),namespace:h.join(".")},u),(d=a[p])||(d=a[p]=[],d.delegateCount=0,l.setup&&l.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),pe.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,m,g=pe.hasData(e)&&pe._data(e);if(g&&(c=g.events)){for(t=(t||"").match(De)||[""],l=t.length;l--;)if(s=Ke.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(f=pe.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,d=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=d.length;o--;)a=d[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(e,a));u&&!d.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||pe.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)pe.event.remove(e,p+t[l],n,r,!0);pe.isEmptyObject(c)&&(delete g.handle,pe._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,f,d=[r||re],p=ce.call(t,"type")?t.type:t,h=ce.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||re,3!==r.nodeType&&8!==r.nodeType&&!Qe.test(p+pe.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[pe.expando]?t:new pe.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:pe.makeArray(n,[t]),l=pe.event.special[p]||{},i||!l.trigger||l.trigger.apply(r,n)!==!1)){if(!i&&!l.noBubble&&!pe.isWindow(r)){for(u=l.delegateType||p,Qe.test(u+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;c===(r.ownerDocument||re)&&d.push(c.defaultView||c.parentWindow||e)}for(f=0;(s=d[f++])&&!t.isPropagationStopped();)t.type=f>1?u:l.bindType||p,o=(pe._data(s,"events")||{})[t.type]&&pe._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&He(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!l._default||l._default.apply(d.pop(),n)===!1)&&He(r)&&a&&r[p]&&!pe.isWindow(r)){c=r[a],c&&(r[a]=null),pe.event.triggered=p;try{r[p]()}catch(e){}pe.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=pe.event.fix(e);var t,n,r,i,o,a=[],s=ie.call(arguments),u=(pe._data(this,"events")||{})[e.type]||[],l=pe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=pe.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((pe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?pe(i,this).index(u)>-1:pe.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[pe.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Ge.test(i)?this.mouseHooks:Je.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new pe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||re),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||re,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==b()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===b()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(pe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},pe.removeEvent=re.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:x):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||pe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),fe.submit||(pe.event.special.submit={setup:function(){return!pe.nodeName(this,"form")&&void pe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=pe.nodeName(t,"input")||pe.nodeName(t,"button")?pe.prop(t,"form"):void 0;n&&!pe._data(n,"submit")&&(pe.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),pe._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&pe.event.simulate("submit",this.parentNode,e))},teardown:function(){return!pe.nodeName(this,"form")&&void pe.event.remove(this,"._submit")}}),fe.change||(pe.event.special.change={setup:function(){return Ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(pe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),pe.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),pe.event.simulate("change",this,e)})),!1):void pe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Ye.test(t.nodeName)&&!pe._data(t,"change")&&(pe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||pe.event.simulate("change",this.parentNode,e)}),pe._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return pe.event.remove(this,"._change"),!Ye.test(this.nodeName)}}),fe.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=pe._data(r,t);i||r.addEventListener(e,n,!0),pe._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=pe._data(r,t)-1;i?pe._data(r,t,i):(r.removeEventListener(e,n,!0),pe._removeData(r,t))}}}),pe.fn.extend({on:function(e,t,n,r){return w(this,e,t,n,r)},one:function(e,t,n,r){return w(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,pe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=x),this.each(function(){pe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return pe.event.trigger(e,t,n,!0)}});var Ze=/ jQuery\d+="(?:null|\d+)"/g,et=new RegExp("<(?:"+ze+")[\\s/>]","i"),tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,nt=/<script|<style|<link/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^true\/(.*)/,ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,at=p(re),st=at.appendChild(re.createElement("div"));pe.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=pe.contains(e.ownerDocument,e);if(fe.html5Clone||pe.isXMLDoc(e)||!et.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(st.innerHTML=e.outerHTML,st.removeChild(o=st.firstChild)),!(fe.noCloneEvent&&fe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(r=h(o),s=h(e),a=0;null!=(i=s[a]);++a)r[a]&&k(i,r[a]);if(t)if(n)for(s=s||h(e),r=r||h(o),a=0;null!=(i=s[a]);a++)N(i,r[a]);else N(e,o);return r=h(o,"script"),r.length>0&&m(r,!u&&h(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var n,r,i,o,a=0,s=pe.expando,u=pe.cache,l=fe.attributes,c=pe.event.special;null!=(n=e[a]);a++)if((t||He(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?pe.event.remove(n,r):pe.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l||"undefined"==typeof n.removeAttribute?n[s]=void 0:n.removeAttribute(s),ne.push(i))}}}),pe.fn.extend({domManip:S,detach:function(e){return A(this,e,!0)},remove:function(e){return A(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?pe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||re).createTextNode(e))},null,e,arguments.length)},append:function(){return S(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}})},prepend:function(){return S(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return S(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return S(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&pe.cleanData(h(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&pe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Ze,""):void 0;if("string"==typeof e&&!nt.test(e)&&(fe.htmlSerialize||!et.test(e))&&(fe.leadingWhitespace||!$e.test(e))&&!Xe[(We.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(h(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return S(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(h(this)),n&&n.replaceChild(t,this))},e);
}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,r=0,i=[],o=pe(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),pe(o[r])[t](n),ae.apply(i,n.get());return this.pushStack(i)}});var ut,lt={HTML:"block",BODY:"block"},ct=/^margin/,ft=new RegExp("^("+_e+")(?!px)[a-z%]+$","i"),dt=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},pt=re.documentElement;!function(){function t(){var t,c,f=re.documentElement;f.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=s=!1,r=a=!0,e.getComputedStyle&&(c=e.getComputedStyle(l),n="1%"!==(c||{}).top,s="2px"===(c||{}).marginLeft,i="4px"===(c||{width:"4px"}).width,l.style.marginRight="50%",r="4px"===(c||{marginRight:"4px"}).marginRight,t=l.appendChild(re.createElement("div")),t.style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(t)||{}).marginRight),l.removeChild(t)),l.style.display="none",o=0===l.getClientRects().length,o&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=l.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",o=0===t[0].offsetHeight,o&&(t[0].style.display="",t[1].style.display="none",o=0===t[0].offsetHeight)),f.removeChild(u)}var n,r,i,o,a,s,u=re.createElement("div"),l=re.createElement("div");l.style&&(l.style.cssText="float:left;opacity:.5",fe.opacity="0.5"===l.style.opacity,fe.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle="content-box"===l.style.backgroundClip,u=re.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),fe.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,pe.extend(fe,{reliableHiddenOffsets:function(){return null==n&&t(),o},boxSizingReliable:function(){return null==n&&t(),i},pixelMarginRight:function(){return null==n&&t(),r},pixelPosition:function(){return null==n&&t(),n},reliableMarginRight:function(){return null==n&&t(),a},reliableMarginLeft:function(){return null==n&&t(),s}}))}();var ht,mt,gt=/^(top|right|bottom|left)$/;e.getComputedStyle?(ht=function(t){var n=t.ownerDocument.defaultView;return n.opener||(n=e),n.getComputedStyle(t)},mt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||ht(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||pe.contains(e.ownerDocument,e)||(a=pe.style(e,t)),!fe.pixelMarginRight()&&ft.test(a)&&ct.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):pt.currentStyle&&(ht=function(e){return e.currentStyle},mt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||ht(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),ft.test(a)&&!gt.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var yt=/alpha\([^)]*\)/i,vt=/opacity\s*=\s*([^)]*)/i,xt=/^(none|table(?!-c[ea]).+)/,bt=new RegExp("^("+_e+")(.*)$","i"),wt={position:"absolute",visibility:"hidden",display:"block"},Tt={letterSpacing:"0",fontWeight:"400"},Ct=["Webkit","O","Moz","ms"],Et=re.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=mt(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:fe.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=pe.camelCase(t),u=e.style;if(t=pe.cssProps[s]||(pe.cssProps[s]=H(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if(o=typeof n,"string"===o&&(i=Fe.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(pe.cssNumber[s]?"":"px")),fe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=pe.camelCase(t);return t=pe.cssProps[s]||(pe.cssProps[s]=H(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=mt(e,t,r)),"normal"===o&&t in Tt&&(o=Tt[t]),""===n||n?(i=parseFloat(o),n===!0||isFinite(i)?i||0:o):o}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,r){if(n)return xt.test(pe.css(e,"display"))&&0===e.offsetWidth?dt(e,wt,function(){return F(e,t,r)}):F(e,t,r)},set:function(e,n,r){var i=r&&ht(e);return M(e,n,r?_(e,t,r,fe.boxSizing&&"border-box"===pe.css(e,"boxSizing",!1,i),i):0)}}}),fe.opacity||(pe.cssHooks.opacity={get:function(e,t){return vt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=pe.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===pe.trim(o.replace(yt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=yt.test(o)?o.replace(yt,i):o+" "+i)}}),pe.cssHooks.marginRight=j(fe.reliableMarginRight,function(e,t){if(t)return dt(e,{display:"inline-block"},mt,[e,"marginRight"])}),pe.cssHooks.marginLeft=j(fe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(mt(e,"marginLeft"))||(pe.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-dt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Oe[r]+t]=o[r]||o[r-2]||o[0];return i}},ct.test(e)||(pe.cssHooks[e+t].set=M)}),pe.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var r,i,o={},a=0;if(pe.isArray(t)){for(r=ht(e),i=t.length;a<i;a++)o[t[a]]=pe.css(e,t[a],!1,r);return o}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)},show:function(){return q(this,!0)},hide:function(){return q(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Re(this)?pe(this).show():pe(this).hide()})}}),pe.Tween=O,O.prototype={constructor:O,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(pe.cssNumber[n]?"":"px")},cur:function(){var e=O.propHooks[this.prop];return e&&e.get?e.get(this):O.propHooks._default.get(this)},run:function(e){var t,n=O.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):O.propHooks._default.set(this),this}},O.prototype.init.prototype=O.prototype,O.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},O.propHooks.scrollTop=O.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=O.prototype.init,pe.fx.step={};var Nt,kt,St=/^(?:toggle|show|hide)$/,At=/queueHooks$/;pe.Animation=pe.extend($,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return d(n.elem,e,Fe.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(De);for(var n,r=0,i=e.length;r<i;r++)n=e[r],$.tweeners[n]=$.tweeners[n]||[],$.tweeners[n].unshift(t)},prefilters:[W],prefilter:function(e,t){t?$.prefilters.unshift(e):$.prefilters.push(e)}}),pe.speed=function(e,t,n){var r=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return r.duration=pe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in pe.fx.speeds?pe.fx.speeds[r.duration]:pe.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){pe.isFunction(r.old)&&r.old.call(this),r.queue&&pe.dequeue(this,r.queue)},r},pe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=pe.isEmptyObject(e),o=pe.speed(t,n,r),a=function(){var t=$(this,pe.extend({},e),o);(i||pe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=pe.timers,a=pe._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&At.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=pe._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=pe.timers,a=r?r.length:0;for(n.finish=!0,pe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,r,i)}}),pe.each({slideDown:P("show"),slideUp:P("hide"),slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),pe.timers=[],pe.fx.tick=function(){var e,t=pe.timers,n=0;for(Nt=pe.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||pe.fx.stop(),Nt=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){kt||(kt=e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.clearInterval(kt),kt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=re.createElement("input"),n=re.createElement("div"),r=re.createElement("select"),i=r.appendChild(re.createElement("option"));n=re.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),e=n.getElementsByTagName("a")[0],e.style.cssText="top:1px",fe.getSetAttribute="t"!==n.className,fe.style=/top/.test(e.getAttribute("style")),fe.hrefNormalized="/a"===e.getAttribute("href"),fe.checkOn=!!t.value,fe.optSelected=i.selected,fe.enctype=!!re.createElement("form").enctype,r.disabled=!0,fe.optDisabled=!i.disabled,t=re.createElement("input"),t.setAttribute("value",""),fe.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),fe.radioValue="t"===t.value}();var Dt=/\r/g;pe.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=pe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,pe(this).val()):e,null==i?i="":"number"==typeof i?i+="":pe.isArray(i)&&(i=pe.map(i,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=pe.valHooks[i.type]||pe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Dt,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(fe.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=pe.makeArray(t),a=i.length;a--;)if(r=i[a],pe.inArray(pe.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){if(pe.isArray(t))return e.checked=pe.inArray(pe(e).val(),t)>-1}},fe.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Lt,jt,Ht=pe.expr.attrHandle,qt=/^(?:checked|selected)$/i,Mt=fe.getSetAttribute,_t=fe.input;pe.fn.extend({attr:function(e,t){return Pe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===o&&pe.isXMLDoc(e)||(t=t.toLowerCase(),i=pe.attrHooks[t]||(pe.expr.match.bool.test(t)?jt:Lt)),void 0!==n?null===n?void pe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=pe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!fe.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(De);if(o&&1===e.nodeType)for(;n=o[i++];)r=pe.propFix[n]||n,pe.expr.match.bool.test(n)?_t&&Mt||!qt.test(n)?e[r]=!1:e[pe.camelCase("default-"+n)]=e[r]=!1:pe.attr(e,n,""),e.removeAttribute(Mt?n:r)}}),jt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):_t&&Mt||!qt.test(n)?e.setAttribute(!Mt&&pe.propFix[n]||n,n):e[pe.camelCase("default-"+n)]=e[n]=!0,n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ht[t]||pe.find.attr;_t&&Mt||!qt.test(t)?Ht[t]=function(e,t,r){var i,o;return r||(o=Ht[t],Ht[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ht[t]=o),i}:Ht[t]=function(e,t,n){if(!n)return e[pe.camelCase("default-"+t)]?t.toLowerCase():null}}),_t&&Mt||(pe.attrHooks.value={set:function(e,t,n){return pe.nodeName(e,"input")?void(e.defaultValue=t):Lt&&Lt.set(e,t,n)}}),Mt||(Lt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},Ht.id=Ht.name=Ht.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},pe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:Lt.set},pe.attrHooks.contenteditable={set:function(e,t,n){Lt.set(e,""!==t&&t,n)}},pe.each(["width","height"],function(e,t){pe.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),fe.style||(pe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ft=/^(?:input|select|textarea|button|object)$/i,Ot=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return Pe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=pe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),pe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,i=pe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):Ft.test(e.nodeName)||Ot.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),fe.hrefNormalized||pe.each(["href","src"],function(e,t){pe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),fe.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this}),fe.enctype||(pe.propFix.enctype="encoding");var Rt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,z(this)))});if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=pe.trim(r),i!==s&&pe.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,z(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[u++];)if(i=z(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=pe.trim(r),i!==s&&pe.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,z(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=pe(this),o=e.match(De)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=z(this),t&&pe._data(this,"__className__",t),pe.attr(this,"class",t||e===!1?"":pe._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+z(n)+" ").replace(Rt," ").indexOf(t)>-1)return!0;return!1}}),pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var Pt=e.location,Bt=pe.now(),Wt=/\?/,It=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;pe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=pe.trim(t+"");return i&&!pe.trim(i.replace(It,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():pe.error("Invalid JSON: "+t)},pe.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new e.DOMParser,n=r.parseFromString(t,"text/xml")):(n=new e.ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var $t=/#.*$/,zt=/([?&])_=[^&]*/,Xt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ut=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Vt=/^(?:GET|HEAD)$/,Yt=/^\/\//,Jt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Gt={},Qt={},Kt="*/".concat("*"),Zt=Pt.href,en=Jt.exec(Zt.toLowerCase())||[];pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Zt,type:"GET",isLocal:Ut.test(en[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":pe.parseJSON,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?V(V(e,pe.ajaxSettings),t):V(pe.ajaxSettings,e)},ajaxPrefilter:X(Gt),ajaxTransport:X(Qt),ajax:function(t,n){function r(t,n,r,i){var o,f,v,x,w,C=n;2!==b&&(b=2,u&&e.clearTimeout(u),c=void 0,s=i||"",T.readyState=t>0?4:0,o=t>=200&&t<300||304===t,r&&(x=Y(d,T,r)),x=J(d,x,T,o),o?(d.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(pe.lastModified[a]=w),w=T.getResponseHeader("etag"),w&&(pe.etag[a]=w)),204===t||"HEAD"===d.type?C="nocontent":304===t?C="notmodified":(C=x.state,f=x.data,v=x.error,o=!v)):(v=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(n||C)+"",o?m.resolveWith(p,[f,C,T]):m.rejectWith(p,[T,C,v]),T.statusCode(y),y=void 0,l&&h.trigger(o?"ajaxSuccess":"ajaxError",[T,d,o?f:v]),g.fireWith(p,[T,C]),l&&(h.trigger("ajaxComplete",[T,d]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,d=pe.ajaxSetup({},n),p=d.context||d,h=d.context&&(p.nodeType||p.jquery)?pe(p):pe.event,m=pe.Deferred(),g=pe.Callbacks("once memory"),y=d.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!f)for(f={};t=Xt.exec(s);)f[t[1].toLowerCase()]=t[2];t=f[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return c&&c.abort(t),r(0,t),this}};if(m.promise(T).complete=g.add,T.success=T.done,T.error=T.fail,d.url=((t||d.url||Zt)+"").replace($t,"").replace(Yt,en[1]+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=pe.trim(d.dataType||"*").toLowerCase().match(De)||[""],null==d.crossDomain&&(i=Jt.exec(d.url.toLowerCase()),d.crossDomain=!(!i||i[1]===en[1]&&i[2]===en[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(en[3]||("http:"===en[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=pe.param(d.data,d.traditional)),U(Gt,d,n,T),2===b)return T;l=pe.event&&d.global,l&&0===pe.active++&&pe.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Vt.test(d.type),a=d.url,d.hasContent||(d.data&&(a=d.url+=(Wt.test(a)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=zt.test(a)?a.replace(zt,"$1_="+Bt++):a+(Wt.test(a)?"&":"?")+"_="+Bt++)),d.ifModified&&(pe.lastModified[a]&&T.setRequestHeader("If-Modified-Since",pe.lastModified[a]),pe.etag[a]&&T.setRequestHeader("If-None-Match",pe.etag[a])),(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",d.contentType),T.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Kt+"; q=0.01":""):d.accepts["*"]);for(o in d.headers)T.setRequestHeader(o,d.headers[o]);if(d.beforeSend&&(d.beforeSend.call(p,T,d)===!1||2===b))return T.abort();w="abort";for(o in{success:1,error:1,complete:1})T[o](d[o]);if(c=U(Qt,d,n,T)){if(T.readyState=1,l&&h.trigger("ajaxSend",[T,d]),2===b)return T;d.async&&d.timeout>0&&(u=e.setTimeout(function(){T.abort("timeout")},d.timeout));try{b=1,c.send(v,r)}catch(e){if(!(b<2))throw e;r(-1,e)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,r,i){return pe.isFunction(n)&&(i=i||r,r=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:i,data:n,success:r},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},pe.fn.extend({wrapAll:function(e){if(pe.isFunction(e))return this.each(function(t){pe(this).wrapAll(e.call(this,t))});if(this[0]){var t=pe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){pe.nodeName(this,"body")||pe(this).replaceWith(this.childNodes)}).end()}}),pe.expr.filters.hidden=function(e){return fe.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:Q(e)},pe.expr.filters.visible=function(e){return!pe.expr.filters.hidden(e)};var tn=/%20/g,nn=/\[\]$/,rn=/\r?\n/g,on=/^(?:submit|button|image|reset|file)$/i,an=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,r=[],i=function(e,t){t=pe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=pe.ajaxSettings&&pe.ajaxSettings.traditional),pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){i(this.name,this.value)});else for(n in e)K(n,e[n],t,i);return r.join("&").replace(tn,"+")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&an.test(this.nodeName)&&!on.test(e)&&(this.checked||!Be.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(rn,"\r\n")}}):{name:t.name,value:n.replace(rn,"\r\n")}}).get()}}),pe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?ee():re.documentMode>8?Z():/^(get|post|head|put|delete|options)$/i.test(this.type)&&Z()||ee()}:Z;var sn=0,un={},ln=pe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in un)un[e](void 0,!0)}),fe.cors=!!ln&&"withCredentials"in ln,ln=fe.ajax=!!ln,ln&&pe.ajaxTransport(function(t){if(!t.crossDomain||fe.cors){var n;return{send:function(r,i){var o,a=t.xhr(),s=++sn;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete un[s],n=void 0,a.onreadystatechange=pe.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=un[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}}),pe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=re.head||pe("head")[0]||re.documentElement;return{send:function(r,i){t=re.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var cn=[],fn=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=cn.pop()||pe.expando+"_"+Bt++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(fn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&fn.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(fn,"$1"+i):t.jsonp!==!1&&(t.url+=(Wt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||pe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?pe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,cn.push(i)),a&&pe.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),fe.createHTMLDocument=function(){if(!re.implementation.createHTMLDocument)return!1;var e=re.implementation.createHTMLDocument("");return e.body.innerHTML="<form></form><form></form>",2===e.body.childNodes.length}(),pe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||(fe.createHTMLDocument?re.implementation.createHTMLDocument(""):re);var r=Te.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=y([e],t,i),i&&i.length&&pe(i).remove(),pe.merge([],r.childNodes))};var dn=pe.fn.load;pe.fn.load=function(e,t,n){if("string"!=typeof e&&dn)return dn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=pe.trim(e.slice(s,e.length)),e=e.slice(0,s)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&pe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?pe("<div>").append(pe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(a,o||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.filters.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=pe.css(e,"position"),f=pe(e),d={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=pe.css(e,"top"),u=pe.css(e,"left"),l=("absolute"===c||"fixed"===c)&&pe.inArray("auto",[o,u])>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)return t=o.documentElement,pe.contains(t,i)?("undefined"!=typeof i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=te(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===pe.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(n=e.offset()),n.top+=pe.css(e[0],"borderTopWidth",!0)-e.scrollTop(),n.left+=pe.css(e[0],"borderLeftWidth",!0)-e.scrollLeft()),
{top:t.top-n.top-pe.css(r,"marginTop",!0),left:t.left-n.left-pe.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!pe.nodeName(e,"html")&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||pt})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);pe.fn[e]=function(r){return Pe(this,function(e,r,i){var o=te(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?pe(o).scrollLeft():i,n?i:pe(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=j(fe.pixelPosition,function(e,n){if(n)return n=mt(e,t),ft.test(n)?pe(e).position()[t]+"px":n})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){pe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return Pe(this,function(t,n,r){var i;return pe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?pe.css(t,n,a):pe.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.fn.size=function(){return this.length},pe.fn.andSelf=pe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var pn=e.jQuery,hn=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=hn),t&&e.jQuery===pe&&(e.jQuery=pn),pe},t||(e.jQuery=e.$=pe),pe});
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-preserve3d-mq !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,l,u,f,d="modernizr",p=i("div"),c=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:d+(r+1),p.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+d,(c.fake?c:p).appendChild(a),c.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,s){function a(){d&&(delete k.style,delete k.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var d,p,m,h,v,y=["modernizr","tspan","samp"];!k.style&&y.length;)d=!0,k.modElem=i(y.shift()),k.style=k.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=k.style[h],l(h,"-")&&(h=u(h)),k.style[h]!==n){if(s||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{k.style[h]=o}catch(g){}if(k.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function h(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+T.join(s+" ")+s).split(" "),d(a,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w=t.documentElement,x="svg"===w.nodeName.toLowerCase();Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),w.appendChild(e);var n=t.getBoundingClientRect();return w.removeChild(e),n.width&&n.width<4});var S=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();g.mq=S;var _="Moz O ms Webkit",b=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=b;var T=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=T;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style}),g.testAllProps=h,g.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
var growPanel = (function () {

	var module = function(settings) {
		
		let markup = `<div id="${settings.id}" class="growpanel">
				<div class="secondary"><div class="close" tabindex="0"><img tabindex="-1" src="assets/img/button.close.png" alt="close button"/></div>${settings.markup.secondary}</div>
				<div class="primary">${settings.markup.primary}</div>
			</div>`;

		
		let values = {
			source : {
				offset : $(settings.source).offset(),
				width : $(settings.source).width(),
				height : $(settings.source).height()
			},
			target : {
				selector : '#' + settings.id,
				offset : $(settings.target).offset(),
				width : $(settings.target).width(),
				height : $(settings.target).height()
			}
		}
		
		$(markup).prependTo(settings.target).css({
				top: values.source.offset.top - values.target.offset.top,
				left: values.source.offset.left - values.target.offset.left,
				width:  values.source.width,
				height:  values.source.height
				});
			

		$(values.target.selector).animate({
			top : 0,
			left : 0,
			width : values.target.width,
			height: values.target.height,
			opacity : 1
		},250,function () {
			//reset css to allow resizing
			$(this).css({
				right: 0,
				bottom: 0,
				width: 'auto',
				height: 'auto'
			}).find('.secondary').addClass('loaded');
			$('#container').addClass(settings.id);
			$('#interface').hide();
			_events();
			return settings.events.afterload();
		});	
	
	
	function _events(){
		
		$('.close', values.target.selector).on('click', function(){
			
			$('#interface').show();
		
			$(values.target.selector).animate({
				top: values.source.offset.top - values.target.offset.top, 
				left: values.source.offset.left - values.target.offset.left,
				width : values.source.width,
				height : values.source.height,
				opacity : .3
			}, 
			200,
			function () {
				$('#container').removeClass(settings.id);
				$(this).remove();
				return settings.events.afterclose();
			});
		});
	}
	
	
	}	
	
	return module;

})();
function getParameterByName(name, url) {
    /* http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
    
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getViewport = (function() {
	
	var viewports = {
		queries : {
			mobile : ['(max-width: 500px)','(max-width: 768px)'],
			desktop : ['(max-width: 1024px)','(max-width: 1324px)','(min-width: 1324px)']
		}
	}
	
	Object.defineProperty(viewports, 'viewport', {
		get: function() {
			mode : 
			for(query in this.queries){
				for(let i = 0; i < this.queries[query].length; i++){
					let mq = this.queries[query][i];
					if(Modernizr.mq(mq)){
						return query;
						break mode;
					}
				}
			}
		},
		enumerable: false
		});
	
	return (function() {
		return viewports.viewport;
	});
	
})();

function sigmaCalculation(start, end, whatToSum){
    var sum = 0;

    for (var i = start; i <= end; i++){
        sum += whatToSum(i);
    };

    return sum;
}


var keyFocus = (function (id, child, clickEvent) {
	
	/* Handles event listeners on tab focused groups for WAI tabbing/keyboard compliance
	* A) Parent element containing requires tabindex="0" attribute
	* B) Focusable children require tabindex="-1" attribute
	* Option: clickEvent false to prevent keydown event listeners
	*/ 
	
	var el = document.querySelector(id);
	var kf_group = new FocusGroup(el, child, clickEvent);
			
	function FocusGroup(el, child, clickEvent) {
		
		var thisObj = this;
		
		this.el = el;
		this.child = child || '*';
		this.focusable = el.querySelectorAll(this.child+'[tabindex="-1"]');
		this.focus_pos = 0;
		this.focus_end = this.focusable.length - 1;
		this.clickEvent = (clickEvent === false) ? false : true;
		this.tabbed = false;
		
		this.addListeners = function(){
			
			/* parent element */
			this.el.addEventListener('focus', elementHover = function(e) {
				
				return thisObj.elementFocus(e, this);
			
			}, true);
			
			/* children */
			for(var i = 0; i <= this.focus_end; i++){
				
				this.focusable[i].addEventListener('keydown', childrenHover = function(e) {
					
					return thisObj.childFocus(e, this);
				
				}, false);
	
			};
		
		};
		
		this.addListeners();
	};
		
	FocusGroup.prototype.elementFocus = function(e, el) {
			//when parent element focused via tab (only); switch to first focusable child
			
			let focusable = this.focusable;
			let focus_pos = this.focus_pos;
			
			el.addEventListener('keyup', test = function(e){
				
				let keystroke = (e.key) ? e.key : e.keyCode.toString();
				
				if(keystroke == 'Tab' || keystroke == '9'){
					let first = focusable[focus_pos];
					//console.log(first);
					first.focus();
				}
					
			}, false);
			
	}
		
	FocusGroup.prototype.childFocus = function (e, el) {
  
		if (e.defaultPrevented) {
			return; // Should do nothing if the default action has been cancelled
		}
		
		var handled = false;
		if (e.key !== undefined) {
		// Handle the event with KeyboardEvent.key and set handled true.
			switch(e.key){
				case 'ArrowRight' :
				case 'Right' :
				case 'ArrowDown' :
				case 'Down' :
					(this.focus_pos < this.focus_end ) ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
				break;
				case 'ArrowLeft' : 
				case 'Left' : 
				case 'ArrowUp' :
				case 'Up' :
					(this.focus_pos > 0 ) ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
				break;
				case ' ' :
				case 'Spacebar' :
					//space will scroll element; prevent:
					e.preventDefault();
				case 'Enter' :
					if(this.clickEvent === true){
						el.click();
						handled = true;
					}
				break;
			}
  		} else if (e.keyCode !== undefined) {
  		// Handle the event with KeyboardEvent.keyCode and set handled true.
  			switch(e.keyCode){
				case '39' :
				case '40' :
					(this.focus_pos < this.focus_end ) ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
				break;
				case '37' : 
				case '38' :
					(this.focus_pos > 0 ) ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
				break;
				case '32' :
					//space will scroll element; prevent:
					e.preventDefault();
				case '13' :
					if(this.clickEvent === true){
						el.click();
						handled = true;
					}
				break;
			}
  		}

  		if (handled) {
	  		let next = this.focusable[this.focus_pos];
	  		next.focus();
	  		// Suppress "double action" if event handled
	  		e.preventDefault();
  		}
	};
	
	FocusGroup.prototype.resetListeners = function(){
		
		
		this.el.removeEventListener('focus', elementHover, true);
		
		for(var i = 0; i < this.focusable.length; i++){
		 	this.focusable[i].removeEventListener('keydown', childrenHover, true);
		}
		
		this.focus_pos = 0;
		this.focusable = el.querySelectorAll(this.child+'[tabindex="-1"]');
		
		this.addListeners();
		
	}
	
	return kf_group;
});
var resizeQuery = (function () {
	
		var mQueries = ['(max-width: 500px)','(max-width: 768px) and (orientation: landscape)','(max-width: 768px)','(max-width: 1024px)', '(max-width: 1324px)', '(min-width: 1324px)'];
		var currentMQ = idQuery();
	
		var monitorMQ = function (eventsobj, init) {
			
			var tmpMQ = currentMQ;
			
			if(init){
				fireCallback(eventsobj,currentMQ);
			}
			
			window.onresize = function() {
				var newMQ = idQuery();
			
				if(newMQ != tmpMQ){
					fireCallback(eventsobj,newMQ);
					
					if(eventsobj['(all)']){
						fireCallback(eventsobj,'(all)');
					}
					
					tmpMQ = newMQ;
				};
			};

		}
		
		function idQuery() {
			for (var i=0 ;i < mQueries.length; i++) {
				if(Modernizr.mq(mQueries[i]) == true){
					return mQueries[i];
				}
			}
		}
		
		function fireCallback(events,index) {
			
			if( typeof(events[index]) === 'function' ){
				return events[index]();
				}
		}
		
		return monitorMQ; 
	
})();
(function profileEffects() {
	
	let contact = false;
	
	$('#profile a.me').on('click', function(){
		
		$('#profile .photo').toggleClass('hide');
		
		$(this).toggleClass('active');
		
		if( $('#profile .photo').hasClass('hide') ){
			//inactive
			backgroundImages.blur = true;
			$('#profile').css('z-index', 'auto');
		} else {
			//active
			backgroundImages.blur = false;
			$('#profile').css('z-index', 100);
		}
		
		_resetLoop();

	});
	
	$('#profile a.contact').on('click', function(){
		
		contact = (contact === true) ? false : true;
		
		if(contact === true) showContact();
	
	});
	
	function showContact(){
		
		let panel = growPanel({
			source : '#profile .back',
		 	target : '#container',
		 	id : 'contact',
		 	markup : _markup(),
		 	events : {
			 	afterload : function(){
				 		let captchaContainer;
						let loadCaptcha = (function() {
						  captchaContainer = grecaptcha.render('recaptcha2', {'sitekey' : '6LeOvAsUAAAAAAZdqwnqALUgWk_FyAlsPiirxyNy'});
						})();
			 	},
			 	afterclose : function(){
				 	contact = false;
				 	$('#profile .photo').removeClass('flip');
			 	}
		 	}
		});
		 	
		function _markup(){
			return {
				primary : `<h1>Hunter Williams</h1><h2>designer • developer</h2>
				<p>With the ability to create both artistically and technically, I am seeking to apply my sixteen years of freelance experience to a permanent web/front-end developer position. Contract work will be considered.</p>
				<a class="linkedin" href="https://www.linkedin.com/in/bhunterwilliams" target="_blank"><img width="125px" src="assets/img/linkedin/logo@1x.png" alt="linked in profile hunter williams" /></a>`,
				secondary : `<form action="index.php?contact=true" method="post"><div>
				<p><label for="name">Name</label> 
				<input type="text" name="name" id="name" placeholder="Name" maxlength="100">
				</p>
				<p><label for="email">Email</label> 
				<input type="email" name="email" id="email" placeholder="Email address" maxlength="100">
				</p>
				<p><label for="comment">Comment</label> 
				<textarea id="comment" name="comment" rows="8" columns="5" placeholder="Comment" maxlength="300"></textarea>
				<div id="recaptcha2" class="g-recaptcha"></div>
				</div>
				<input id="submit" type="submit" value="Send" /></form>`
			}
		}
	
	
	}
	
	let profile_events = {
		flip : function(el) {
			$(el).find('.photo').not('.hide').addClass('flip');
		},
		unflip : function(el) {
			
			if(contact === false)
			$(el).find('.photo').removeClass('flip');
		}
	};
	
	$('#profile .wrapper').on({
		focusin : function(){
			
			profile_events.flip(this);
			
				if( $(this).find('.photo').hasClass('hide') === true) {
					$(this).siblings('button').focus();
				}
		},
		mouseover : function(){
			profile_events.flip(this);
		},
		focusout : function(){
			profile_events.unflip(this);
		},
		mouseout : function(){
			profile_events.unflip(this);
		}
	});
	
	let a11y = {
			profile : keyFocus('#profile')
		};
		
	var backgroundImages = (function (){
		
		let images = {
			timers : {
				loop : 0,
				fade : 0,
				reset : 0
				},
			items : ['dexter@1x.jpg', 'groomsmen@1x.jpg', 'firstdance@1x.jpg', 'commodore@1x.jpg', 'redskins@1x.jpg'],
			mode : 'preload',
			blur : true,
			storage : {
				picked : [],
				pool : [],
				moveBetween : function(index, source, target){
					let random_value = source.splice(index, 1);
					return target.unshift(random_value[0]);
				},
				reset : function(){
					//move picked items to pool;empty picked
					for(pick in this.picked){
						this.pool.push(this.picked[pick]);
					}
					this.picked = [];
				}
			},
			settings : {
				path : 'assets/img/background/',
				delay : 12000,
				transition : 3000,
				count : 0,
				max : 5
			},
			helpers : {
				updateBackground : function(src, blur){
					
					let classes = (blur === false) ? 'loaded focus' : 'loaded';
					
					$('#background').css('background-image' , 'url(' + src + ')').removeClass().addClass(classes);
					
					$('#profile .preload').remove();
				},
				randomIntBetween : function (min, max){
					return Math.floor( Math.random() * (max - min) + min );
				}
			},
			loopAction : function() {
			
				let thisObj = this;
				
				switch(thisObj.mode){
					case 'preload' :
						// pull random from images, push to storage array (picked) 
						let random = this.helpers.randomIntBetween(0, thisObj.items.length);
						let picked = this.storage.moveBetween(random, thisObj.items, thisObj.storage.picked) ;
					
						if(thisObj.items.length == 0){
							thisObj.mode = 'load';
						}
						// preload to temporary location
						let preload = `<img class="preload" src="${thisObj.settings.path}${thisObj.storage.picked[0]}" alt="" />`;
						// when loaded; apply src to background
						$(preload).appendTo('#profile').bind('load', function(){
							let src = $(this).attr('src');
							thisObj.helpers.updateBackground(src, thisObj.blur);
						});
					
					break;
					
					case 'load' :
						// all images already  preloaded
						if(thisObj.storage.pool == 0){
							thisObj.settings.count++
							thisObj.storage.reset();
						}
					
						let random2 = thisObj.helpers.randomIntBetween(0, thisObj.storage.pool.length);
						let picked2 = thisObj.storage.moveBetween(random2, thisObj.storage.pool, thisObj.storage.picked);
					
						let src = thisObj.settings.path + thisObj.storage.picked[0];
						thisObj.helpers.updateBackground(src, thisObj.blur);
					
					break;
				}
				
				// remove fading transition; leave for last image
				if(thisObj.settings.count == thisObj.settings.max) {
					clearInterval(thisObj.timers.loop);
				} else {
					
					thisObj.timers.fade = window.setTimeout(function(){
						$('#background').removeClass('loaded');
						
					}, thisObj.settings.delay - thisObj.settings.transition);
					
				}
			}
		};
		
		(function timedLoop() {
			
			images.loopAction();
			
			images.timers.loop = window.setInterval(function(){
				images.loopAction();
			}, images.settings.delay);
				
		})();
		
		return images;
		
	})() //backgroundImages;
	
	function _resetLoop(){
		
		//clear running timers
		clearInterval(backgroundImages.timers.loop);
		clearTimeout(backgroundImages.timers.fade);
		clearTimeout(backgroundImages.timers.reset);	
		//reset count
		backgroundImages.settings.count = 0;
		//fade current image	
		$('#background').removeClass('loaded');
		//reset loops	
		backgroundImages.timers.reset = window.setTimeout(function(){
				
			backgroundImages.loopAction();
				
			backgroundImages.timers.loop = window.setInterval(function(){
				backgroundImages.loopAction();
			}, backgroundImages.settings.delay);

		},backgroundImages.settings.transition);
	}
	
	
})()// profileEffects
function showProject(tile_class, tag, data){
	
	let viewport = getViewport();
	
	let parent = $(tile_class, '#tiles ').parent();
	
	let panel = growPanel({
			source : parent,
		 	target : '#container',
		 	id : 'project',
		 	markup : {
			 	primary : `<h1>${data.name}</h1><p>${data.description}</p>
			 				${__formatTabTags(data,tag)}`,
			 	secondary : `<div id="slider" class="content ${viewport}">${__formatImages(data,tag)}</div>`
		 	},
		 	events : {
			 	afterload : function(){
				 	_projectEvents(tile_class, tag, viewport);
			 	},
			 	afterclose : function(){
				 	$(tile_class, '#tiles ').removeClass('active').removeClass('flip-y');
			 	}
		 	}
		});
	
	function __formatTabTags(){
		
		let foci = data.foci;
		let content = '';
		let markup = '<div class="tabs"><ul tabindex="0">';
		let counter = 0;
		
		for(focus in foci){	
			let activate = ( focus == tag) ? true : false;
			let a_classes = '';
			if(activate)
				a_classes += 'active ';
			if(foci[focus].favorite)
				a_classes += 'fav';
			markup += `<li data-index="${counter}" class="${focus}"><a href="#" tabindex="-1" class="tab${(activate) ? ' active' : ''}">${foci[focus].tag}</a></li>`;
			content += `<div class="copy ${focus} ${a_classes}">${foci[focus].copy}</div>`;
			counter++;
		}
		
		markup += '</ul>';
		markup += '<div class="content">';
		markup += content
		markup += '</div></div>';
		
		return markup;
}

	function __formatImages(){
		
		let markup = '';
		
		let foci = data.foci;
		
		for(focus in foci){	
			
			markup += `<div class="item ${foci[focus].highlight.type} ${focus}">`
			switch(foci[focus].highlight.type){
				case 'image' :
					markup += `<img src="assets/img/${focus}/${foci[focus].highlight.content}" alt=""/>`;
				break;
				case 'html' :
					markup += `<div class="wrapper">${foci[focus].highlight.content}</div>`;
				break;
			};
			
			markup += `</div>`
		}
		return markup;
	}
	
	

} // showProject

function _projectEvents(tile_class, active_tag, mode) {	
	
	/* initialize slider */
	let slider = sliderModule({
		element : '#slider',
		slide : '.item',
		index : $('.tabs .' + active_tag).attr('data-index'),
		nav : '.tabs ul',		
		mode : mode
	});
	
	/* a11y */
	let ally = {
		'tags' : keyFocus('#project .tabs'),
		'close' : keyFocus('#project .close')
	};
	
	/* tabs nav */
	
	$('#project .tabs a.tab').on('click', function() {
		// menu 
		$('#project .tabs a.active').removeClass('active');
		$(this).addClass('active');
		// content
		$('#project .copy.active').removeClass('active');
		let content = '.' + $(this).parents('li').attr('class');
		$(content, '#project .tabs .content').addClass('active');
		
	});
	
	
	/* iframe */
	let src = $('#project iframe').attr('data-src');
	$('#project iframe').attr('src', src);

		
}// _projectEvents
	


var sliderModule = (function () {
	
	var module = function (options) {
	
		var clicked = false;
	
		var settings = {
			el : options.element,
			item : options.slide,
			get name() {
				return `${this.el} ${this.item}`;
			},
			index : Number(options.index),
			nav : options.nav,
			mode : options.mode
		};
		
		var slider =  {
			fillImageWrapper : function() {
				let val_width = $(settings.el).parent().width();
				let val_height = $(settings.el).parent().height();
				
				$(settings.name).width(val_width).height(val_height);
				
			},
			setStartPosition : function() {
				let offset = $(settings.el).parent().offset();
				let pos = (offset) ? offset.top : 0;
				let adjustment = $(settings.el).parent().height() * settings.index;
								
				$(settings.el).offset({top : (pos - adjustment)});
			},
			overflowFix : function() {
				
				let items = $(settings.name);
				let slider_height = $(items).first().height();
				
				$('.overflow', items).removeClass('overflow');
				
				for(let i=0; i< items.length; i++){
					let item = items[i];
					let img = $('img', item)
					let img_height = $('img', item).height();
					if( $(img).height() > slider_height)
						$(img).addClass('overflow');
				}
				
			},
			animateSlide : function(to_index) {
				let delta = to_index - settings.index;
				settings.index = to_index
				
				if(delta === 0)
					return;
					
				let y_start = $(settings.el).position()
				let y_end = y_start.top - ( $(settings.el).parent().height() * delta );
			
				$(settings.el).animate({
					top : y_end
					}, 300, 'swing', function() {
						clicked = false;
					});
			}		
		};
		
		function _rebuild(load) {
			
			if(load) {
				slider.setStartPosition();
			}

			/* Check for switch between viewport modes */
			let prev_mode = settings.mode;
			let curr_mode =  getViewport();
		
			if(prev_mode != curr_mode) {
				settings.mode = curr_mode;
				slider.setStartPosition();
			}
			
			/* make item match dimensions of slider view */
			slider.fillImageWrapper();
			/* check for overflowed image */
			slider.overflowFix();
		};
		
		var _events = function(){
			
			window.addEventListener('resize', function (){
					_rebuild();
				}, false);

			/* controls */
			let buttons = $(settings.nav).children();
			
			for(let i= 0; i < buttons.length; i++){
				
				buttons[i].addEventListener('click', function(e){
						
					let to_index = Number($(this).attr('data-index'));

					/* prevent double tap */
					if(settings.index === to_index)
						return;
					
					if(clicked === false){
						slider.animateSlide(to_index);
						clicked = true;
					}
					
				}, false);
			}
				
			_rebuild(true);
				
		}();
		
	};// module
	
	return module;
		
})();
var tileModule = (function() {
	
	let active, //slug of desired tile projects to show
		viewport, //active media query
		viewmode, //desktop layout or mobile
		disabled = false, //flag for preventing events until transitions completed 
		projects, //hold project data
		events = {
			'(max-width: 500px)' : function() { 
					viewport = 'screen-small';
					viewmode = 'mobile';
			},
			'(max-width: 768px)' : function() { 
					viewport = 'screen-medium';
					viewmode = 'mobile';
			},
			'(max-width: 768px) and (orientation: landscape)' : function() { 
					viewport = 'screen-medium-landscape';
					viewmode = 'mobile';
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'screen-large';
					viewmode = 'desktop';
			},
			'(max-width: 1324px)' : function() { 
					viewport = 'screen-xlarge';
					viewmode = 'desktop';
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'screen-full';
					viewmode = 'desktop';
			},
			'(all)' : function() {
				layoutTiles();
			}
		}
			 
	resizeQuery(events, true);	
	
	var module = function(data) {
		
		projects = data.projects;
			
		layoutTiles();
	}
	
	function layoutTiles() {
	
		$('#interface').remove();
		
		let vars = {
			tiles : projects.slice(),
			filter : {
				active : active || 'fav',
				all : {
					slug : ['fav','logo-design','web-design','html-js'],
					name : ['fav','logo design','web design','html/js']
					},
				count : 0 //counter for filtered rows
			},
			get cap() {
				let val;  //number of tiles per row
				switch(viewport){
					case 'screen-small' :
						val = 2;
					break;
					case 'screen-medium' : 
					case 'screen-large' : 
						val = 3;
					break;
					case 'screen-medium-landscape' :
					case 'screen-xlarge' :
						val = 4;
					break;
					case 'screen-full' :
						val = 5;
					break; 
					default :
						val = 1;
				}
				return val;
			},
			buttons : [], //store tile data to build controls,
			timerCalc : function(time, lengthen) {
				/* total time to compete function */
				let dur = time + ((vars.cap-1)*lengthen);
				/* dur time plus transition completion time */
				let css = $('#tiles .tile').css('transition-duration').split(',');
				let val = Number(css[0].substring(0, css[0].indexOf('s'))) * 1000 || 0; 
				return dur + val ;
			},
			preload : {
				files : [],
				flip_x : function(id, src){
					
					let tile = '#tiles .tile-' + id;
					/* add background */
					$(tile).find('.front').css('background-image', 'url(assets/img/' +  src + ')');
					/* remove preloading class from parent li */
					$(tile).parent('li').removeClass('preloading');
					/* flip the tile */
					$(tile).addClass('flip-x');
				}
			}
		}
		
		$('#container').append( _tileMarkup() );
		
		/* if resized while project overlay displayed */
		if( $('#container').hasClass('project') || $('#container').hasClass('contact') )
			$('#interface').hide();
			
		/* accesibility controls*/
		let a11y = {
			tiles : keyFocus('#tiles'),
			nav : keyFocus('#nav')
		};
		
		/* animate tiles; fires _addEvents after completion */
		_animateTiles();
		
		function _animateTiles(){
			
			let timer = {
				time : 100,
				lengthen : 200
			};
			
			setTimeout(function() {
				_addEvents();
			},vars.timerCalc(timer.time, timer.lengthen));
	
			/* animate active tiles */
			for(let i = 1; i <= vars.cap; i++){
				setTimeout(function() {
					/* preload */
					if(vars.preload.files[i].loaded === true){
						vars.preload.flip_x(vars.preload.files[i].id, vars.preload.files[i].src);
					} else {
						/* created setter to fire when value is true */
						Object.defineProperty(vars.preload.files[i], "loaded", { 
							set: function () { 
								 vars.preload.flip_x(this.id, this.src)
								} 
						});
						
						
					}
					
				},timer.time);
				timer.time += timer.lengthen;
			};
			
			
			function __manipulateTile(tileid,tilesrc){
				let tile = '#tiles .tile-' + tileid;
				/* add background */
				$(tile).find('.front').css('background-image', 'url(assets/img/' +  tilesrc + ')');
				/* remove preloading class from parent li */
				$(tile).parent('li').removeClass('preloading');
				/* flip the tile */
				$(tile).addClass('flip-x');
			}
			

		}
		
		function _addEvents() {
	
			/* Tiles */
			
			/* place events on bounding element to prevent repeated */
			/* class toggling during animation of hovered element */
			
			let tile_events = {
				flip : function(el) {
					if( $(el).hasClass('preloading') ) return;
					
					$('.tile', el).removeClass('transform0').addClass('flip-y');
				},
				unflip : function(el) {
					let active = $('.tile', el).hasClass('active');
					
					if(active === false){
			    		$('.tile', el).removeClass('flip-y');
					}
				}
			};
			
			function tileEvents(){
				
				$('#tiles li').on({
					focusin : function(){
						tile_events.flip(this);
					},
					focusout : function(){
						tile_events.unflip(this);
					},
					mouseover : function(){
						tile_events.flip(this);
					},
					mouseout : function(){
						tile_events.unflip(this);
					}
				});
			}
			
			tileEvents();
			
			/* Tags */
			
			$('#tiles .tags button').off().on('click', function() {
				let focus_clicked = $(this).attr('class');
				let tile = $(this).parents('.tile');
				tile.addClass('active');
				let tile_id = tile.attr('data-project');
				let tile_classes = tile.attr('class');
				let tile_class = __findTileClass(tile_classes, true)
						
				showProject(tile_class, focus_clicked, vars.tiles[tile_id] );
			});
			
			/* Main Nav */
			$('#nav > li > a').on('click', function(){
				let clicked = $(this).attr('id');
				active = clicked;
				layoutTiles();
			});

			/* Main Subnav */
			$('.controls a').on('click', function(){
				
				if( $(this).hasClass('active') )
						return;
				
				let id = $(this).attr('id');
				
				if(disabled === false)
					__cycleTiles(id);
						
			});
		
			function __cycleTiles(id) {
		
				disabled = true;
				
				// disable hover effect until cycle complete 	
				$('#tiles li').off();
				
				let clicked = {
					get val() {
						let val = id.substring(7,id.length+1);
						return Number(val);
					}
				}
				
				let startIndex = {
					get current() {
						let start_str = $('.controls .active').first().attr('id');
						let start_num = start_str .substring(7,start_str .length+1)
						return  Number(start_num);
					},
					get next() {
						let include = vars.cap - 1;
						let start;
						/* which dir */
							if(clicked.val > this.current) {
								start = ((clicked.val - include) > 1) ? clicked.val - include : 1; 
							} else {
								start = clicked.val;
							}
							
						return start;
					}
				};
				
				/* need to put these in variables before removing .active class */
				let next_start = startIndex.next;
				let current_start = startIndex.current;
				
				$('.controls .button').removeClass('active');
				
				let timer = {
					time : 100,
					lengthen : 200
				}
				
				let nexts = [];
				let currents = [];
				
				setTimeout(function() {
					
					/* manipulate classes for appropriate tiles */
					/* timed to occur after transition transform completion */
					
					for(let i=0; i<vars.cap; i++){
						//tmp
						//continue;
						
						let tile_current = '#tiles .tile-' + currents[i];
						let tile_next = '#tiles .tile-' + nexts[i];
						
						if( nexts.indexOf(currents[i]) < 0 ) {
			  				/* previous tiles not shown on next set */
			  				let tile = '#tiles .tile-' + currents[i];
			  				$(tile_current).removeClass('flip-x flip-x2').parent('li').removeAttr('tabindex').removeClass('show');
						} else {
							/* previous tiles shown on next set in new position */
							$(tile_current).addClass('transform0').removeClass('flip-x2');
						}
						
						if( currents.indexOf(nexts[i]) < 0 ) {
							/* new tiles shown on next set */
							/* set image */
							//console.log(vars.preload.files[nexts[i]].src);
							let img_src = 'url(assets/img/' + vars.preload.files[nexts[i]].src + ')';
							$(tile_next).find('.front').css('background-image', img_src);
							/* show */
							$(tile_next).addClass('flip-x').parent('li').attr('tabindex', '-1').addClass('show');
						}
						
						/* adjust last class */
							if(currents[i] == currents[(vars.cap-1)])
								$(tile_current).parent('li').removeClass('last');
								
							if(nexts[i] == nexts[(vars.cap-1)])
								$(tile_next).parent('li').addClass('last');
						
						/* remove temporary content */
						$('.back', tile_current).removeClass('flipping center').css('background-image', 'none');
					}
					
					/* re-enable button controls */
					disabled = false;
					/* reset key focus for tiles */
					a11y.tiles.resetListeners();
					/* re-enable hover effects */
					tileEvents();
				
					
				},vars.timerCalc(timer.time, timer.lengthen));
				
				/* manipulate the CURRENT tiles to show flip effect */
				for(let i=0; i < vars.cap; i++){
					
					/* buttons */
					let button = $('#button-' + next_start);
					$(button).addClass('active');
					
					/* tile faces */
					let current_tile = $('#tiles .tile-' + current_start);
					let upcoming_tile = $('#tiles .tile-' + next_start);
					
					//let img_src = $('.front', upcoming_tile).css('background-image');
					let img_src = 'url(assets/img/' + vars.preload.files[next_start].src + ')';
					
					let img_class = ( $('.front', upcoming_tile).hasClass('center') ) ? 'center': ''; 
					
					console.log(img_src);
					$('.back', current_tile).css('background-image', img_src).addClass(img_class);
					/* flip */
					
					setTimeout(function() {
						$(current_tile).removeClass('transform0').addClass('flip-x2');
						$('.back', current_tile).addClass('flipping');
						
					},timer.time);
					timer.time += timer.lengthen;
					
					/* counters */
					currents.push(current_start);
					current_start++
					nexts.push(next_start);
					next_start++
				};
				
			}
			
			function __findTileClass(haystack, asSelector){
		
				let classes = haystack.split(' ');
				let tileClass;
		
				for (i = 0; i < classes.length; i++){
					
					let tile_class = classes[i];
					
					if( tile_class.indexOf('tile-') > -1 ) {
					 	tileClass = tile_class ;
					 	break;
					 } else {
						continue;
					 };
				}
		
				return (asSelector) ? '.' + tileClass : tileClass;
			}
			
		}

		function _tileMarkup(){

			let markup = `<div id="interface" class="${viewmode}"><div class="wrapper">`
			markup += `<ul id="tiles" tabindex="0" class="${vars.filter.active} cols-${vars.cap}">`;
			
			tilesloop: 
			for(let i = 0; i < vars.tiles.length; i++){
				let image_path;
				let image_class;
				let tile_foci = vars.tiles[i].foci;
				let idelta = i - vars.filter.count; //track index when rows are filtered
				
				if(vars.filter.active == 'fav'){
					
					var favorites = {};
					
					filter1:
					for(tile_focus in tile_foci){
						
						/* determine image path for tile using first suitable instance(having static image) */
						if(image_path == undefined && tile_foci[tile_focus].highlight.type == 'image'){
							image_path = `${tile_focus}/${tile_foci[tile_focus].highlight.content}`;
							image_class = (tile_focus == 'logo-design') ? 'center' : 'fill';
						}
						
						if (tile_foci[tile_focus].favorite === true) {
							favorites[tile_focus] = tile_foci[tile_focus];
						} else {
							continue filter1;
						}					
						
						
					}
					
					tile_foci = favorites;
					
				} else {
				
					let found = false;
						
					/* filter out non-matching tiles */
					filter2:
					for(tile_focus in tile_foci){
						
						if (tile_focus == vars.filter.active) {
							found = true;
							break filter2;
						}
					}
						
					if(found === false) {
						vars.filter.count++;
						continue tilesloop; 
					}
				
					/* determine image path for tile */
					
					if(tile_foci[vars.filter.active].highlight.type == 'html'){
						//for html content; use the static image of the alternate focus indicated
						let alternate = tile_foci[vars.filter.active].highlight.static;
						image_path = `${alternate}/${tile_foci[alternate].highlight.content}`;
						image_class = (alternate == 'logo-design') ? 'center' : 'fill';
						} else {
						image_path = `${vars.filter.active}/${tile_foci[vars.filter.active].highlight.content}`;
						image_class = (vars.filter.active == 'logo-design') ? 'center' : 'fill';
						}
				};	
			/* preload tile content */
			__preloadTile(idelta + 1, image_path);
			/* markup for matching tiles */
			markup += `<li ${(idelta < vars.cap) ? 'tabindex="-1"' : ''} class="${(idelta < vars.cap) ? ((idelta+1) == vars.cap) ? 'show preloading last' : 'show preloading' : ''} ">
				 <div data-project="${i}" class="tile tile-${(idelta + 1)}">  
						<div class="side front ${image_class}"></div>
						<div class="side back">
							<div class="content">
									<h1>${vars.tiles[i].name}</h1>
									<p>${__formatDescription(vars.tiles[i].description)}</p>
									${__formatTileTags(tile_foci)} 
							</div>
						</div>
				</div>
			</li>`;
			
			vars.buttons.push({
				tile : (idelta + 1), 
				state : (idelta < vars.cap) ? 'show' : 'hide'
			});
			
			}// tiles:
			
			if(viewmode == 'mobile') {
				markup += `</ul>${__tileControls(vars.buttons, viewmode)}</div>`;
			} else {
				markup += `</ul></div>`
			}
							
			markup += `<div class="wrapper"><ul id="nav" tabindex="0">`
							
				for(let i=0; i< vars.filter.all.slug.length; i++){
					let name = vars.filter.all.name[i];
					let slug = vars.filter.all.slug[i];
					markup += `<li><a tabindex="-1" id="${slug}" title="${ (slug == 'fav') ? 'show favorites' : 'show projects that include ' + name }" class="button ${(vars.filter.active == slug) ? 'active' : ''}">${(slug == 'fav') ? '<span>\u2605</span>' : name}</a></li>`
					if(viewmode == 'desktop' && i == 1)
						markup += `<li>${__tileControls(vars.buttons, viewmode)}</li>`;
					}
							
			markup += `</div></div></div>`;
		
		return markup;
		
		function __preloadTile(id, src){
		
			let obj = {
				"id" : id,
				"src" : src,
				"loaded" : false,
			}
			
			vars.preload.files[id] = obj;
			
			let tileImg = new Image();
			
			tileImg = new Image();
			tileImg.onload = function () { vars.preload.files[id].loaded = true};
			tileImg.src = 'assets/img/' + src;
		}
		
		function __formatDescription(desc){
		
			if(desc == '')
				return;
			
			let period = desc.indexOf('.') + 1;
			
			return desc.substring(0, period);
		}
		
		function __formatTileTags(tags){
	
			let markup = '<ul class="tags">';
			
			for(tag in tags){
				markup += `<li><button tabindex="-1" class="${tag}">${tags[tag].tag}</button></li>`;
			}
	
			markup += '</ul>';
	
			return markup;
		}
		
		
		function __tileControls(buttons, mode){
			
			
			let markup = `<div class="controls ${mode}"><h1>Portfolio</h1><ul>`;
			
			for(button in buttons){
				markup += `<li><a tabindex="-1" id="button-${buttons[button].tile}" class="button ${(buttons[button].state == 'show') ? 'active' : ''} "><span>${buttons[button].tile}</span></a></li>`;
			}
			
			markup += '</ul></div>';
			
			return markup;
		}
		
		}
		
	}// _layoutTiles()
	
	return module;
	
})();
$(function () {
	
	//var projects;
	
	$.getJSON('assets/data/projects.json', function (data) {
		
		let contact = getParameterByName('contact');
		/* if the contact form was submitted; bypass tiles while validating */
		if(  contact == null ) 
			tileModule(data);
		
	});
	
	/* Modernizer checks for preserve 3D (required for flip effect); fails flexbox for non supporting */
	
	if(Modernizr.preserve3d && Modernizr.flexbox){
		$('html').removeClass('no-js').addClass('js').addClass('flexbox');
	} else {
		$('html').removeClass('no-js').addClass('js').addClass('no-flexbox');
	}
	
	//$('html').removeClass('no-js').addClass('js').addClass('no-flexbox')

});


