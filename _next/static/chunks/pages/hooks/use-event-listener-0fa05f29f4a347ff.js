(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51322],{50517:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-event-listener",function(){return t(87474)}])},87474:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(52322),s=t(45392),r=t(2784),i=t(39629);let c={type:"code",code:`
import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
`,component:function(){let[e,n]=(0,r.useState)(0),t=function(e,n,t){let o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(o.current)return o.current.addEventListener(e,n,void 0),()=>o.current?.removeEventListener(e,n,void 0)},[n,void 0]),o}("click",(0,r.useCallback)(()=>n(e=>e+1),[]));return(0,o.jsxs)(i.z,{ref:t,children:["Button clicks: ",e]})},centered:!0};var u=t(25071),l=t(15019);let d=(0,u.A)(l.us.useEventListener);function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-event-listener"})," adds a given event listener to an element to which ",(0,o.jsx)(n.code,{children:"ref"})," is assigned.\nHook supports the same options as ",(0,o.jsx)(n.code,{children:"addEventListener"})," method.\nAfter the component is unmounted, the listener is automatically removed."]}),"\n",(0,o.jsx)(t,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useEventListener<\n  K extends keyof HTMLElementEventMap,\n  T extends HTMLElement = any,\n>(\n  type: K,\n  listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any,\n  options?: boolean | AddEventListenerOptions\n): MutableRefObject<T>;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(d,{...e,children:(0,o.jsx)(a,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=50517)}),_N_E=e.O()}]);