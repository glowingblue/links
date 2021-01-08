module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.Model},function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return e.slice(0).sort((function(e,t){var n=e.position(),r=t.position();return n>r?1:n<r?-1:0}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),o=n(1),i=n.n(o),a=n(9),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t}(n.n(a)()(i.a,{title:i.a.attribute("title"),icon:i.a.attribute("icon"),type:i.a.attribute("type"),url:i.a.attribute("url"),position:i.a.attribute("position"),isInternal:i.a.attribute("isInternal"),isNewtab:i.a.attribute("isNewtab"),isChild:i.a.attribute("isChild"),parent:i.a.hasOne("parent")}))},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={sortLinks:n(3).a}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={Link:n(4).a}},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["utils/mixin"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,,,,function(e,t){e.exports=flarum.core.compat["components/AdminNav"]},function(e,t){e.exports=flarum.core.compat["components/AdminLinkButton"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t,n){"use strict";n.r(t),n.d(t,"components",(function(){return de})),n.d(t,"utils",(function(){return fe.a})),n.d(t,"models",(function(){return pe.a}));var r=n(0),o=n.n(r),i=n(4),a=n(8),l=n(15),s=n.n(l),c=n(16),u=n.n(c),d=n(2),f=n(17),p=n.n(f),h=n(10),g=n.n(h),v=n(5),b=n.n(v);function y(e,t,n){if(void 0===n)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n}var w=function(e,t){if(!(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof t?Array.from(e):Array.from(e).filter((function(e){return 1===e.nodeType&&e.matches(t)}))},E=new Map,k=function(){function e(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(e.prototype,"config",{get:function(){var e={};return this._config.forEach((function(t,n){e[n]=t})),e},set:function(e){if("object"!=typeof e)throw new Error("You must provide a valid configuration object to the config setter.");var t=Object.assign({},e);this._config=new Map(Object.entries(t))},enumerable:!1,configurable:!0}),e.prototype.setConfig=function(e,t){if(!this._config.has(e))throw new Error("Trying to set invalid configuration item: "+e);this._config.set(e,t)},e.prototype.getConfig=function(e){if(!this._config.has(e))throw new Error("Invalid configuration item requested: "+e);return this._config.get(e)},Object.defineProperty(e.prototype,"placeholder",{get:function(){return this._placeholder},set:function(e){if(!(e instanceof HTMLElement)&&null!==e)throw new Error("A placeholder must be an html element or null.");this._placeholder=e},enumerable:!1,configurable:!0}),e.prototype.setData=function(e,t){if("string"!=typeof e)throw new Error("The key must be a string.");this._data.set(e,t)},e.prototype.getData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.get(e)},e.prototype.deleteData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.delete(e)},e}(),L=function(e){if(!(e instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return E.has(e)||E.set(e,new k),E.get(e)};function T(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)T(e[r],t,n);else e.addEventListener(t,n),L(e).setData("event"+t,n)}function C(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)C(e[n],t);else e.removeEventListener(t,L(e).getData("event"+t)),L(e).deleteData("event"+t)}function _(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)_(e[r],t,n);else e.setAttribute(t,n)}function x(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)x(e[n],t);else e.removeAttribute(t)}var N=function(e){if(!e.parentElement||0===e.getClientRects().length)throw new Error("target element must be part of the dom");var t=e.getClientRects()[0];return{left:t.left+window.pageXOffset,right:t.right+window.pageXOffset,top:t.top+window.pageYOffset,bottom:t.bottom+window.pageYOffset}},I=function(e,t){if(!(e instanceof HTMLElement&&(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(t).indexOf(e)},M=function(e){if(!(e instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==e.parentNode},O=function(e,t,n){if(!(e instanceof HTMLElement&&e.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");e.parentElement.insertBefore(t,"before"===n?e:e.nextElementSibling)},S=function(e,t){return O(e,t,"after")},D=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return"border-box"===t.getPropertyValue("box-sizing")?parseInt(t.getPropertyValue("height"),10):["height","padding-top","padding-bottom"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},A=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return["width","padding-left","padding-right"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},H=function(e,t){if(!(e instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof t?e:e.filter((function(e){return e.querySelector(t)instanceof HTMLElement||e.shadowRoot&&e.shadowRoot.querySelector(t)instanceof HTMLElement})).map((function(e){return e.querySelector(t)||e.shadowRoot&&e.shadowRoot.querySelector(t)}))},P=function(e){return e.composedPath&&e.composedPath()[0]||e.target},j=function(e,t,n){return{element:e,posX:n.pageX-t.left,posY:n.pageY-t.top}},Y=function(e,t){if(!0===e.isSortable){var n=L(e).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(e){return e.length>0&&t.matches(e)})).length>0;if(e===t)return!0;if(void 0!==L(e).getConfig("connectWith")&&null!==L(e).getConfig("connectWith"))return L(e).getConfig("connectWith")===L(t).getConfig("connectWith")}return!1},F={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,dropTargetContainerClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"};var B,z,W,q,R,X,U,V,G,J=function(e,t){if("string"==typeof L(e).getConfig("hoverClass")){var n=L(e).getConfig("hoverClass").split(" ");!0===t?(T(e,"mousemove",function(e,t){var n=this;if(void 0===t&&(t=250),"function"!=typeof e)throw new Error("You must provide a function as the first argument for throttle.");if("number"!=typeof t)throw new Error("You must provide a number as the second argument for throttle.");var r=null;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var a=Date.now();(null===r||a-r>=t)&&(r=a,e.apply(n,o))}}((function(t){0===t.buttons&&w(e.children,L(e).getConfig("items")).forEach((function(e){var r,o;e!==t.target?(r=e.classList).remove.apply(r,n):(o=e.classList).add.apply(o,n)}))}),L(e).getConfig("throttleTime"))),T(e,"mouseleave",(function(){w(e.children,L(e).getConfig("items")).forEach((function(e){var t;(t=e.classList).remove.apply(t,n)}))}))):(C(e,"mousemove"),C(e,"mouseleave"))}},K=function(e){C(e,"dragstart"),C(e,"dragend"),C(e,"dragover"),C(e,"dragenter"),C(e,"drop"),C(e,"mouseenter"),C(e,"mouseleave")},Q=function(e,t){e&&C(e,"dragleave"),t&&t!==e&&C(t,"dragleave")},Z=function(e){var t;(t=e).h5s&&delete t.h5s.data,x(e,"aria-dropeffect")},ee=function(e){x(e,"aria-grabbed"),x(e,"aria-copied"),x(e,"draggable"),x(e,"role")};function te(e,t){if(t.composedPath)return t.composedPath().find((function(e){return e.isSortable}));for(;!0!==e.isSortable;)e=e.parentElement;return e}function ne(e,t){var n=y(e,"opts"),r=w(e.children,n.items).filter((function(e){return e.contains(t)||e.shadowRoot&&e.shadowRoot.contains(t)}));return r.length>0?r[0]:t}var re=function(e){var t=y(e,"opts"),n=w(e.children,t.items),r=H(n,t.handle);(_(e,"aria-dropeffect","move"),y(e,"_disabled","false"),_(r,"draggable","true"),!1===t.disableIEFix)&&("function"==typeof(document||window.document).createElement("span").dragDrop&&T(r,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}})))};function oe(e,t){var n=String(t);return t=t||{},"string"==typeof e&&(e=document.querySelectorAll(e)),e instanceof HTMLElement&&(e=[e]),e=Array.prototype.slice.call(e),/serialize/.test(n)?e.map((function(e){var t=y(e,"opts");return function(e,t,n){if(void 0===t&&(t=function(e,t){return e}),void 0===n&&(n=function(e){return e}),!(e instanceof HTMLElement)||!0==!e.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof t||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var r=y(e,"opts").items,o=w(e.children,r),i=o.map((function(t){return{parent:e,node:t,html:t.outerHTML,index:I(t,o)}}));return{container:n({node:e,itemCount:i.length}),items:i.map((function(n){return t(n,e)}))}}(e,t.itemSerializer,t.containerSerializer)})):(e.forEach((function(e){if(/enable|disable|destroy/.test(n))return oe[n](e);["connectWith","disableIEFix"].forEach((function(e){Object.prototype.hasOwnProperty.call(t,e)&&null!==t[e]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+e+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),t=Object.assign({},F,L(e).config,t),L(e).config=t,y(e,"opts",t),e.isSortable=!0,function(e){var t=y(e,"opts"),n=w(e.children,t.items),r=H(n,t.handle);y(e,"_disabled","false"),K(n),Q(q,V),C(r,"mousedown"),C(e,"dragover"),C(e,"dragenter"),C(e,"drop")}(e);var r,o=w(e.children,t.items);if(null!==t.placeholder&&void 0!==t.placeholder){var i=document.createElement(e.tagName);t.placeholder instanceof HTMLElement?i.appendChild(t.placeholder):i.innerHTML=t.placeholder,r=i.children[0]}L(e).placeholder=function(e,t,n){var r;if(void 0===n&&(n="sortable-placeholder"),!(e instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(t instanceof HTMLElement)&&void 0!==t)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===t&&(["UL","OL"].includes(e.tagName)?t=document.createElement("li"):["TABLE","TBODY"].includes(e.tagName)?(t=document.createElement("tr")).innerHTML='<td colspan="100"></td>':t=document.createElement("div")),"string"==typeof n&&(r=t.classList).add.apply(r,n.split(" ")),t}(e,r,t.placeholderClass),y(e,"items",t.items),t.acceptFrom?y(e,"acceptFrom",t.acceptFrom):t.connectWith&&y(e,"connectWith",t.connectWith),re(e),_(o,"role","option"),_(o,"aria-grabbed","false"),J(e,!0),T(e,"dragstart",(function(e){var n=P(e);if(!0!==n.isSortable&&(e.stopImmediatePropagation(),(!t.handle||n.matches(t.handle))&&"false"!==n.getAttribute("draggable"))){var r=te(n,e),o=ne(r,n);U=w(r.children,t.items),R=U.indexOf(o),X=I(o,r.children),q=r,function(e,t,n){if(!(e instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(t instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=j),e.dataTransfer&&e.dataTransfer.setDragImage){var r=n(t,N(t),e);if(!(r.element instanceof HTMLElement)||"number"!=typeof r.posX||"number"!=typeof r.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setData("text/plain",P(e).id),e.dataTransfer.setDragImage(r.element,r.posX,r.posY)}}(e,o,t.customDragImage),z=D(o),W=A(o),o.classList.add(t.draggingClass),B=function(e,t){var n=e;return!0===L(t).getConfig("copy")&&(_(n=e.cloneNode(!0),"aria-copied","true"),e.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=e.style.display),n}(o,r),_(B,"aria-grabbed","true"),r.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:X,index:R,container:q},item:B,originalTarget:n}}))}})),T(e,"dragenter",(function(n){var r=P(n),o=te(r,n);o&&o!==V&&(G=w(o.children,y(o,"items")).filter((function(t){return t!==L(e).placeholder})),t.dropTargetContainerClass&&o.classList.add(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:X,index:R,container:q},destination:{container:o,itemsBeforeUpdate:G},item:B,originalTarget:r}})),T(o,"dragleave",(function(e){var n=e.relatedTarget||e.fromElement;e.currentTarget.contains(n)||(t.dropTargetContainerClass&&o.classList.remove(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortleave",{detail:{origin:{elementIndex:X,index:R,container:o},item:B,originalTarget:r}})))}))),V=o})),T(e,"dragend",(function(n){if(B){B.classList.remove(t.draggingClass),_(B,"aria-grabbed","false"),"true"===B.getAttribute("aria-copied")&&"true"!==y(B,"dropped")&&B.remove(),B.style.display=B.oldDisplay,delete B.oldDisplay;var r=Array.from(E.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(M)[0];r&&r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:X,index:R,container:q},item:B}})),V=null,B=null,z=null,W=null}})),T(e,"drop",(function(n){if(Y(e,B.parentElement)){n.preventDefault(),n.stopPropagation(),y(B,"dropped","true");var r=Array.from(E.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(M)[0];S(r,B),r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:X,index:R,container:q},item:B}}));var o=L(e).placeholder,i=w(q.children,t.items).filter((function(e){return e!==o})),a=!0===this.isSortable?this:this.parentElement,l=w(a.children,y(a,"items")).filter((function(e){return e!==o})),s=I(B,Array.from(B.parentElement.children).filter((function(e){return e!==o}))),c=I(B,l);t.dropTargetContainerClass&&a.classList.remove(t.dropTargetContainerClass),X===s&&q===a||e.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:X,index:R,container:q,itemsBeforeUpdate:U,items:i},destination:{index:c,elementIndex:s,container:a,itemsBeforeUpdate:G,items:l},item:B}}))}}));var a,l,s,c=(a=function(e,n,r,o){if(B)if(t.forcePlaceholderSize&&(L(e).placeholder.style.height=z+"px",L(e).placeholder.style.width=W+"px"),Array.from(e.children).indexOf(n)>-1){var i=D(n),a=A(n),l=I(L(e).placeholder,n.parentElement.children),s=I(n,n.parentElement.children);if(i>z||a>W){var c=i-z,u=a-W,d=N(n).top,f=N(n).left;if(l<s&&("vertical"===t.orientation&&o<d||"horizontal"===t.orientation&&r<f))return;if(l>s&&("vertical"===t.orientation&&o>d+i-c||"horizontal"===t.orientation&&r>f+a-u))return}void 0===B.oldDisplay&&(B.oldDisplay=B.style.display),"none"!==B.style.display&&(B.style.display="none");var p=!1;try{var m=N(n).top+n.offsetHeight/2,h=N(n).left+n.offsetWidth/2;p="vertical"===t.orientation&&o>=m||"horizontal"===t.orientation&&r>=h}catch(e){p=l<s}p?S(n,L(e).placeholder):function(e,t){O(e,t,"before")}(n,L(e).placeholder),Array.from(E.values()).filter((function(e){return void 0!==e.placeholder})).forEach((function(t){t.placeholder!==L(e).placeholder&&t.placeholder.remove()}))}else{var g=Array.from(E.values()).filter((function(e){return void 0!==e.placeholder})).map((function(e){return e.placeholder}));-1!==g.indexOf(n)||e!==n||w(n.children,t.items).length||(g.forEach((function(e){return e.remove()})),n.appendChild(L(e).placeholder))}},void 0===(l=t.debounce)&&(l=0),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(s),s=setTimeout((function(){a.apply(void 0,e)}),l)}),u=function(e){var t=e.target,n=!0===t.isSortable?t:te(t,e);if(t=ne(n,t),B&&Y(n,B.parentElement)&&"true"!==y(n,"_disabled")){var r=y(n,"opts");parseInt(r.maxItems)&&w(n.children,y(n,"items")).length>=parseInt(r.maxItems)&&B.parentElement!==n||(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=!0===L(n).getConfig("copy")?"copy":"move",c(n,t,e.pageX,e.pageY))}};T(o.concat(e),"dragover",u),T(o.concat(e),"dragenter",u)})),e)}oe.destroy=function(e){!function(e){var t=y(e,"opts")||{},n=w(e.children,t.items),r=H(n,t.handle);C(e,"dragover"),C(e,"dragenter"),C(e,"dragstart"),C(e,"dragend"),C(e,"drop"),Z(e),C(r,"mousedown"),K(n),ee(n),Q(q,V),e.isSortable=!1}(e)},oe.enable=function(e){re(e)},oe.disable=function(e){!function(e){var t=y(e,"opts"),n=w(e.children,t.items),r=H(n,t.handle);_(e,"aria-dropeffect","none"),y(e,"_disabled","true"),_(r,"draggable","false"),C(r,"mousedown")}(e)},oe.__testing={_data:y,_removeItemEvents:K,_removeItemData:ee,_removeSortableData:Z,_removeContainerEvents:Q};var ie=oe,ae=n(18),le=function(e){function t(){return e.apply(this,arguments)||this}Object(d.a)(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),this.link=this.props.link||o.a.store.createRecord("links"),this.itemTitle=m.prop(this.link.title()||""),this.icon=m.prop(this.link.icon()||""),this.url=m.prop(this.link.url()||""),this.isInternal=m.prop(this.link.isInternal()&&!0),this.isNewtab=m.prop(this.link.isNewtab()&&!0)},n.className=function(){return"EditLinkModal Modal--small"},n.title=function(){var e=this.itemTitle();return e?[this.icon()?[b()(this.icon())," "]:"",e]:o.a.translator.trans("fof-links.admin.edit_link.title")},n.content=function(){var e=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,o.a.translator.trans("fof-links.admin.edit_link.title_label")),m("input",{className:"FormControl",placeholder:o.a.translator.trans("fof-links.admin.edit_link.title_placeholder"),value:this.itemTitle(),oninput:function(t){e.itemTitle(t.target.value)}})),m("div",{className:"Form-group"},m("label",null,o.a.translator.trans("fof-links.admin.edit_link.icon_label")),m("div",{className:"helpText"},o.a.translator.trans("fof-links.admin.edit_link.icon_text",{a:m("a",{href:"https://fontawesome.com/icons?m=free",tabindex:"-1"})})),m("input",{className:"FormControl",placeholder:"fas fa-bolt",value:this.icon(),oninput:m.withAttr("value",this.icon)})),m("div",{className:"Form-group"},m("label",null,o.a.translator.trans("fof-links.admin.edit_link.url_label")),m("input",{className:"FormControl",placeholder:o.a.translator.trans("fof-links.admin.edit_link.url_placeholder"),type:"url",value:this.url(),oninput:function(t){e.url(t.target.value)}})),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",value:"1",checked:this.isInternal(),onchange:function(t){e.isInternal(t.target.checked)&&e.isNewtab(!1)}}),o.a.translator.trans("fof-links.admin.edit_link.internal_link")),m("label",{className:"checkbox"},m("input",{type:"checkbox",value:"1",checked:this.isNewtab(),onchange:function(t){e.isNewtab(t.target.checked)&&e.isInternal(!1)}}),o.a.translator.trans("fof-links.admin.edit_link.open_newtab")))),m("div",{className:"Form-group"},g.a.component({type:"submit",className:"Button Button--primary EditLinkModal-save",loading:this.loading,children:o.a.translator.trans("fof-links.admin.edit_link.submit_button")}),this.link.exists?m("button",{type:"button",className:"Button EditLinkModal-delete",onclick:function(){return e.delete()}},o.a.translator.trans("fof-links.admin.edit_link.delete_link_button")):"")))},n.onsubmit=function(e){var t=this;e.preventDefault(),this.loading=!0,this.link.save({title:this.itemTitle(),icon:this.icon(),url:this.url(),isInternal:this.isInternal(),isNewtab:this.isNewtab()}).then((function(){return t.hide()}),(function(e){t.loading=!1,t.handleErrors(e)}))},n.delete=function(){confirm(o.a.translator.trans("fof-links.admin.edit_link.delete_link_confirmation"))&&(this.link.delete().then((function(){return m.redraw()})),this.hide())},t}(n.n(ae).a),se=n(3);function ce(e){return m("li",{"data-id":e.id()},m("div",{className:"LinkListItem-info"},e.icon()?m("span",{className:"LinkListItem-icon"},b()(e.icon())," "):"",m("span",{className:"LinkListItem-name"},e.title()),g.a.component({className:"Button Button--link",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(new le({link:e}))}})),!e.isChild()&&m("ol",{className:"LinkListItem-children"},Object(se.a)(app.store.all("links")).filter((function(t){return t.parent()===e})).map(ce)))}var ue=function(e){function t(){return e.apply(this,arguments)||this}Object(d.a)(t,e);var n=t.prototype;return n.view=function(){return m("div",{className:"LinksPage"},m("div",{className:"LinksPage-header"},m("div",{className:"container"},m("p",null,app.translator.trans("fof-links.admin.links.about_text")),g.a.component({className:"Button Button--primary",icon:"fas fa-plus",children:app.translator.trans("fof-links.admin.links.create_button"),onclick:function(){return app.modal.show(new le)}}))),m("div",{className:"LinksPage-list"},m("div",{className:"container"},m("div",{className:"LinkItems"},m("label",null,app.translator.trans("fof-links.admin.links.links")),m("ol",{className:"LinkList"},Object(se.a)(app.store.all("links")).filter((function(e){return!e.isChild()})).map(ce))))))},n.config=function(){var e=this;ie(this.$("ol, ul"),{acceptFrom:"ol,ul"}).forEach((function(t){return t.addEventListener("sortupdate",(function(){var t=e.$(".LinkList > li").map((function(e,t){return{id:$(t).data("id"),children:$(t).find("li").map((function(e,t){return $(t).data("id")})).get()}})).get();t.forEach((function(e,t){var n=app.store.getById("links",e.id);n.pushData({attributes:{position:t,isChild:!1},relationships:{parent:null}}),e.children.forEach((function(e,t){app.store.getById("links",e).pushData({attributes:{position:t,isChild:!0},relationships:{parent:n}})}))})),app.request({url:app.forum.attribute("apiUrl")+"/links/order",method:"POST",data:{order:t}}),m.redraw.strategy("all"),m.redraw()}))}))},t}(p.a),de={EditLinkModal:le,LinksPage:ue},fe=n(6),pe=n(7);o.a.initializers.add("fof-links",(function(){o.a.store.models.links=i.a,o.a.routes.links={path:"/links",component:ue.component()},o.a.extensionSettings["fof-links"]=function(){return m.route(o.a.route("links"))},Object(a.extend)(s.a.prototype,"items",(function(e){e.add("links",u.a.component({href:o.a.route("links"),icon:"fas fa-bars",children:o.a.translator.trans("fof-links.admin.nav.links_button"),description:o.a.translator.trans("fof-links.admin.nav.links_text")}))}))}))}]);
//# sourceMappingURL=admin.js.map