"use strict";var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};!function(){var e=document.querySelector(".site-header__wrapper"),y=document.querySelector(".bundle-item-modal"),t=document.querySelector(".bundle-item-modal__close button"),r=document.querySelectorAll("button[data-modal-bundle-item]");if(e&&y&&t&&r.length&&window.bundleItemDetails){t.addEventListener("click",function(e){e.preventDefault(),n()});var n=function(){y.ariaHidden=!0};document.addEventListener("click",function(e){if("false"!==y.ariaHidden||y.contains(e.target)){var t=window.bundleItemDetails[e.target.dataset.modalBundleItem];t&&(e.preventDefault(),function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=Object.entries(e)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var l=a.value,o=_slicedToArray(l,2),d=o[0],u=o[1],c=y.querySelector('[data-key="'+d+'"]');if(c){var s=c.closest("details");if(s&&u)s.style.display=null,s.open=!1;else if(s&&!u){s.style.display="none";continue}c.innerHTML=u}}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}y.ariaHidden=!1}(t))}else n()})}}();