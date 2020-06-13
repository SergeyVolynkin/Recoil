(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),i=(n(0),n(157));const r={title:"Motivation"},o={id:"introduction/motivation",title:"Motivation",description:"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:",source:"@site/docs/introduction/motivation.md",permalink:"/docs/introduction/motivation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/motivation.md",sidebar:"someSidebar",next:{title:"Core Concepts",permalink:"/docs/introduction/core-concepts"}},c=[],s={rightToc:c};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Component state can only be shared by pushing it up to the common ancestor, but this might include a huge tree that then needs to re-render."),Object(i.b)("li",{parentName:"ul"},"Context can only store a single value, not an indefinite set of values each with its own consumers."),Object(i.b)("li",{parentName:"ul"},"Both of these make it difficult to code-split the top of the tree (where the state has to live) from the leaves of the tree (where the state is used).")),Object(i.b)("p",null,"We want to improve this while keeping both the API and the semantics and behavior as Reactish as possible."),Object(i.b)("p",null,"Recoil defines a directed graph orthogonal to but also intrinsic and attached to your React tree. State changes flow from the roots of this graph (which we call atoms) through pure functions (which we call selectors) and into components. With this approach:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We get a boilerplate-free API where shared state has the same simple get/set interface as React local state (yet can be encapsulated with reducers etc. if needed)."),Object(i.b)("li",{parentName:"ul"},"We have the possibility of compatibility with Concurrent Mode and other new React features as they become available."),Object(i.b)("li",{parentName:"ul"},"The state definition is incremental and distributed, making code-splitting possible."),Object(i.b)("li",{parentName:"ul"},"State can be replaced with derived data without modifying the components that use it."),Object(i.b)("li",{parentName:"ul"},"Derived data can move between being synchronous and asynchronous without modifying the components that use it."),Object(i.b)("li",{parentName:"ul"},"We can treat navigation as a first-class concept, even encoding state transitions in links."),Object(i.b)("li",{parentName:"ul"},"It's easy to persist the entire application state in a way that is backwards-compatible, so persisted states can survive application changes.")))}l.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?i.a.createElement(h,c({ref:t},l,{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);