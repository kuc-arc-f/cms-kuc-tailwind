(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(1689),u=t(2441),i=t(5749),l={};function f(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),E=m&&"object"===typeof m&&m.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),w=r(_,2),L=w[0],k=w[1],C=a.default.useCallback((function(e){L(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,L]);(0,a.useEffect)((function(){var e=k&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,k,b,n,t]);var M={ref:C,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,d,p,h,y,g,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof b?b:t&&t.locale,R=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);M.href=R||(0,c.addBasePath)((0,c.addLocale)(p,N,t&&t.defaultLocale))}return a.default.cloneElement(m,M)};n.default=s},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(8391),c="undefined"!==typeof IntersectionObserver;var u=new Map},9297:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(1664);n.default=function(e){return(0,r.jsx)("span",{children:(0,r.jsx)(o.default,{href:"/category/".concat(e.id),children:(0,r.jsx)("a",{className:"btn-outline-gray mr-2",children:e.name})})})}},4596:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CategoryRow",function(){return t(9297)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,351],(function(){return n=4596,e(e.s=n);var n}));var n=e.O();_N_E=n}]);