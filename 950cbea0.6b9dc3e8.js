(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),r=(a(0),a(157));const o={title:"atomFamily(options)",sidebar_label:"atomFamily()"},i={id:"api-reference/utils/atomFamily",title:"atomFamily(options)",description:"Returns a function that returns a writeable `RecoilState` [atom](/docs/api-reference/core/atom).",source:"@site/docs/api-reference/utils/atomFamily.md",permalink:"/docs/api-reference/utils/atomFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/atomFamily.md",sidebar_label:"atomFamily()",sidebar:"someSidebar",previous:{title:"useRecoilCallback(callback)",permalink:"/docs/api-reference/core/useRecoilCallback"},next:{title:"selectorFamily(options)",permalink:"/docs/api-reference/utils/selectorFamily"}},l=[{value:"Example",id:"example",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Persistence",id:"persistence",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Returns a function that returns a writeable ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilState")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),"atom"),"."),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function atomFamily<T, Parameter>({\n  key: string,\n\n  default:\n    | RecoilValue<T>\n    | Promise<T>\n    | T\n    | (Parameter => T | RecoilValue<T> | Promise<T>),\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"default")," - The initial value of the atom. It may either be a value directly, a ",Object(r.b)("inlineCode",{parentName:"li"},"RecoilValue")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," that represents the default value, or a function to get the default value. The callback function is passed a copy of the parameter used when the ",Object(r.b)("inlineCode",{parentName:"li"},"atomFamily")," function is called.")),Object(r.b)("hr",null),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"atom")," represents a piece of state with ",Object(r.b)("em",{parentName:"p"},"Recoil"),". An atom is created and registered per ",Object(r.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," by your app. But, what if your state isn\u2019t global? What if your state is associated with a particular instance of a control, or with a particular element? For example, maybe your app is a UI prototyping tool where the user can dynamically add elements and each element has state, such as its position. Idealy, each element would get its own atom of state. You could implement this yourself via a memoization pattern. But, ",Object(r.b)("em",{parentName:"p"},"Recoil")," provides this pattern for you with the ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," utility. An Atom Family represents a collection of atoms. When you call ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," it will return a function which provides the ",Object(r.b)("inlineCode",{parentName:"p"},"RecoilState")," atom based on the parameters you pass in."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," essentially provides a map from the parameter to a atom.  You only need to provide a single key for the ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," and it will generate a unique key for each underlying atom.  These atom keys can be used for persistence, and so must be stable across application executions.  The parameters may also be generated at different callsites and we want equivalent parameters to use the same underlying atom.  Therefore, value-equality is used instead of reference-equality for ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamliy")," parameters.  This imposes restrictions on the types which can be used for the parameter.  ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," accepts primitive types, or arrays or objects which can contain arrays, objects, or primitive types."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const elementPositionStateFamily = atomFamily({\n  key: 'ElementPosition',\n  default: [0, 0],\n});\n\nfunction ElementListItem({elementID}) {\n  const position = useRecoilValue(elementPositionStateFamily(elementID));\n  return (\n    <div>\n      Element: {elementID}\n      Position: {position}\n    </div>\n  );\n}\n")),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily()")," takes almost the same options as a simple ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/core/atom"}),Object(r.b)("inlineCode",{parentName:"a"},"atom()")),".  However, the default value can also be parameterized. That means you could provide a function which takes the parameter value and returns the actual default value.  For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => defaultBasedOnParam(param),\n});\n")),Object(r.b)("p",null,"or using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/utils/selectorFamily"}),Object(r.b)("inlineCode",{parentName:"a"},"selectorFamily"))," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"selector"),", you can also access the parameter value in a ",Object(r.b)("inlineCode",{parentName:"p"},"default")," selector as well."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: selectorFamily({\n    key: 'MyAtom/Default',\n    get: param => ({get}) => {\n      return computeDefaultUsingParam(param);\n    },\n  }),\n});\n")),Object(r.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(r.b)("p",null,"One advantage of using this pattern for separate atoms for each element over trying to store a single atom with a map of state for all elements is that they all maintain their own individual subscriptions. So, updating the value for one element will only cause React components that have subscribed to just that atom to update."),Object(r.b)("h2",{id:"persistence"},"Persistence"),Object(r.b)("p",null,"Persistence observers will persist the state for each parameter value as a distinct atom with a unique key based on serialization of the parameter value used. Therefore, it is important to only use parameters which are primitives or simple compound objects containing primitives. Custom classes or functions are not allowed."),Object(r.b)("p",null,"It is allowed to \u201cupgrade\u201d a simple ",Object(r.b)("inlineCode",{parentName:"p"},"atom")," to be an ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," in a newer version of your app, based on the same key. If you do this, then any persisted values with the old simple key can still be read and all parameter values of the new ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily")," will default to the persisted state of the simple atom. If you change the format of the parameter in an ",Object(r.b)("inlineCode",{parentName:"p"},"atomFamily"),", however, it will not automatically read the previous values that were persisted before the change. However, you can add logic in a default selector or validator to lookup values based on previous parameter formats. We hope to help automate this pattern in the future."))}c.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(d,l({ref:t},c,{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);