(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{AeFk:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),o=(n("+1VY"),n("cSFU")),i=(n("pVnL"),n("gRFL"),n("2mql"),n("eVQB")),c=n("Exhd"),a=n("ep+1"),f=Object(o.e)((function(e,t){var n=e.styles,f=Object(c.a)([n],void 0,"function"===typeof n||Array.isArray(n)?Object(r.useContext)(o.b):void 0),u=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){var e=t.key+"-global",n=new a.a({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=document.querySelector('style[data-emotion="'+e+" "+f.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==r&&n.hydrate([r]),u.current=n,function(){n.flush()}}),[t]),Object(r.useLayoutEffect)((function(){void 0!==f.next&&Object(i.b)(t,f.next,!0);var e=u.current;if(e.tags.length){var n=e.tags[e.tags.length-1].nextElementSibling;e.before=n,e.flush()}t.insert("",f,e,!1)}),[t,f.name]),null}));function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(c.a)(t)}},Cf0E:function(e,t,n){"use strict";var r=n("BGKE"),o=n("q1tI"),i=n("R+Jz"),c=n("p46w"),a=n.n(c),f=n("AeFk"),u=function(e){var t=e.color,n=Object(o.useContext)(i.a),c=n.colorPalettes,u=n.currentPalette,l=n.setCurrentPallete;return c[t].bg!==u.bg?Object(r.b)(r.a,{children:Object(r.b)("li",{css:Object(f.b)("display:",c[t].bg===u.bg?"none":"block",";margin:0 0.3rem;div{background-color:",c[t].bg,";width:1rem;height:1rem;border-radius:100%;margin:0;cursor:pointer;display:",c[t].bg===u.bg?"none":"block",";}",""),children:Object(r.b)("div",{onClick:function(){l(c[t]),a.a.set("palette",t)}})})}):null};var l={name:"yio5n4",styles:"margin:0 1rem;padding:0;display:flex;align-items:center;list-styles:none;width:15%;li{margin:0 0.4rem;opacity:0;transition:visibility 0.3s linear,opacity 0.3s linear;}:hover>li{visibility:visible;opacity:1;}li:first-of-type{visibility:visible;opacity:1;}@media (max-width: 900px){flex-direction:column;li{visibility:visible;opacity:1;margin:0.2rem 0;}}"};t.a=function(){return Object(r.c)("ul",{css:l,children:[Object(r.b)(u,{color:"black"}),Object(r.b)(u,{color:"white"}),Object(r.b)(u,{color:"red"})]})}},"R+Jz":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u}));var r=n("BGKE"),o=n("q1tI"),i=n("p46w"),c=n.n(i),a={red:{link:"#0D0D0D",bg:"#BF382C",projectCard:"#ffffff",projectFont:"#404040",font:"#ffffff",invertedFont:"#0D0D0D"},white:{link:"#686CF3",bg:"#ffffff",projectCard:"#ffffff",projectFont:"#404040",font:"#212121",invertedFont:"#F37D7F"},blue:{link:"#F2163E",bg:"#049DD9",projectCard:"#ffffff",projectFont:"#404040",font:"#F2163E",invertedFont:"#ffffff"},black:{link:"#686CF3",bg:"#212121",projectCard:"#ffffff",projectFont:"#404040",font:"#ffffff",invertedFont:"#F37D7F"}},f=Object(o.createContext)(),u=function(e){var t=e.children,n=Object(o.useState)(a[c.a.get("palette")||"white"]),i=n[0],u=n[1];return Object(r.b)(f.Provider,{value:{currentPalette:i,setCurrentPallete:u,colorPalettes:a},children:t})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),c=n("elyg"),a=n("nOHt"),f=n("vNVm"),u={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",s=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,b=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var m=i.Children.only(v),w=m&&"object"===typeof m&&m.ref,C=(0,f.useIntersection)({rootMargin:"200px"}),j=r(C,2),O=j[0],k=j[1],E=i.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,i.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,k,y,t,n]);var F={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:f}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,b,g,h,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(F.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(m,F)};t.default=s},p46w:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var c=window.Cookies,a=window.Cookies=i();a.noConflict=function(){return window.Cookies=c,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(u){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var f in i)i[f]&&(a+="; "+f,!0!==i[f]&&(a+="="+i[f].split(";")[0]));return document.cookie=t+"="+n+a}}function c(e,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var a=i[c].split("="),f=a.slice(1).join("=");n||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var u=t(a[0]);if(f=(r.read||r)(f,u)||t(f),n)try{f=JSON.parse(f)}catch(l){}if(o[u]=f,e===u)break}catch(l){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,i.useRef)(),u=(0,i.useState)(!1),l=r(u,2),s=l[0],d=l[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||s||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=f.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return f.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){i.unobserve(e),0===c.size&&(i.disconnect(),f.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return(0,i.useEffect)((function(){a||s||(0,c.default)((function(){return d(!0)}))}),[s]),[p,s]};var i=n("q1tI"),c=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var f=new Map}}]);