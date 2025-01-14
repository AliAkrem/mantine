(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25110],{65879:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/badge",function(){return o(25448)}])},25448:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return V}});var n=o(52322),t=o(45392),i=o(32581);let a={type:"configurator",component:function(e){return(0,n.jsx)(i.C,{...e,children:"Badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:["filled","light","outline","dot","transparent","default","white"]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"size",prop:"radius",initialValue:"xl",libraryValue:"xl"}]},l={type:"configurator",component:function(e){return(0,n.jsx)(i.C,{size:"xl",variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient badge"})},code:e=>`
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`,centered:!0,controls:o(63048).P};var d=o(93010);let c={type:"code",component:function(){return(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(i.C,{size:"xs",circle:!0,children:"1"}),(0,n.jsx)(i.C,{size:"sm",circle:!0,children:"7"}),(0,n.jsx)(i.C,{size:"md",circle:!0,children:"9"}),(0,n.jsx)(i.C,{size:"lg",circle:!0,children:"3"}),(0,n.jsx)(i.C,{size:"xl",circle:!0,children:"8"})]})},code:`
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
`,centered:!0};var s=o(89868);let u={type:"code",component:function(){let e=(0,n.jsx)(s.Z,{size:12});return(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(i.C,{leftSection:e,children:"With left section"}),(0,n.jsx)(i.C,{rightSection:e,children:"With right section"})]})},centered:!0,code:`
import { Badge, Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`},g={type:"code",component:function(){return(0,n.jsx)(i.C,{fullWidth:!0,children:"Full width badge"})},code:`
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`};var p=o(9197),m=o(46403),h=o(20754),f=o(8943),v=o(68755);let x=e=>{let r=(0,p.B)(e),o=(0,m.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,h.m)(o.value,.1),hover:(0,h.m)(o.value,.15),border:`1px solid ${o.value}`,color:(0,f._)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},b={type:"code",component:function(){return(0,n.jsx)(v.M2,{theme:{variantColorResolver:x},children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(i.C,{color:"lime.4",variant:"filled",size:"lg",children:"Lime filled"}),(0,n.jsx)(i.C,{color:"orange",variant:"light",size:"lg",children:"Orange light"}),(0,n.jsx)(i.C,{variant:"danger",size:"lg",children:"Danger"})]})})},centered:!0,defaultExpanded:!1,code:`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Badge color="lime.4" variant="filled">
          Lime filled
        </Badge>

        <Badge color="orange" variant="light">
          Orange light
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>
      </Group>
    </MantineProvider>
  );
}
`},j={type:"code",component:function(){return(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(i.C,{size:"lg",color:"lime.4",children:"Default"}),(0,n.jsx)(i.C,{autoContrast:!0,size:"lg",color:"lime.4",children:"Auto contrast"})]})},code:`
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="lg" color="lime.4">
        Default
      </Badge>
      <Badge autoContrast size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
`,centered:!0};var B=o(29960);let C=`
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
`,y={type:"styles-api",data:B.o,component:function(e){let r=(0,n.jsx)(s.Z,{size:12});return(0,n.jsx)(i.C,{leftSection:r,rightSection:r,...e,children:"Badge component"})},centered:!0,code:C};var z=o(54078),_=o(15019);let k=(0,z.A)(_.us.Badge);function w(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.a)(),...e.components},{AutoContrast:o,Demo:i,Gradient:d,Polymorphic:s,StylesApiSelectors:p}=r;return o||D("AutoContrast",!0),i||D("Demo",!0),d||D("Gradient",!0),s||D("Polymorphic",!0),p||D("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:a}),"\n",(0,n.jsx)(d,{component:"Badge"}),"\n",(0,n.jsx)(i,{data:l}),"\n",(0,n.jsx)(r.h2,{id:"rounded",children:"Rounded"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"circle"})," prop, to reduce horizontal padding and make badge width equal to its height:"]}),"\n",(0,n.jsx)(i,{data:c}),"\n",(0,n.jsx)(r.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,n.jsx)(i,{data:u}),"\n",(0,n.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,n.jsxs)(r.p,{children:["Set ",(0,n.jsx)(r.code,{children:"fullWidth"})," to make badge span full width of its parent element:"]}),"\n",(0,n.jsx)(i,{data:g}),"\n",(0,n.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can customize colors for ",(0,n.jsx)(r.code,{children:"Badge"})," and other components variants by adding\n",(0,n.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,n.jsx)(i,{data:b}),"\n",(0,n.jsx)(o,{component:"Badge"}),"\n",(0,n.jsx)(i,{data:j}),"\n",(0,n.jsx)(p,{component:"Badge"}),"\n",(0,n.jsx)(i,{data:y}),"\n",(0,n.jsx)(s,{defaultElement:"div",changeToElement:"a",component:"Badge",withNext:!0})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,{...e,children:(0,n.jsx)(w,{...e})})}function D(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,r,o){"use strict";o.d(r,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},63048:function(e,r,o){"use strict";o.d(r,{P:function(){return n}});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},32581:function(e,r,o){"use strict";o.d(r,{C:function(){return m}});var n=o(52322);o(2784);var t=o(91482),i=o(11200),a=o(13588),l=o(38483),d=o(46690),c=o(28559),s=o(33502),u={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let g={},p=(0,i.Z)((e,{radius:r,color:o,gradient:n,variant:i,size:l,autoContrast:d})=>{let c=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:i||"filled",autoContrast:d});return{root:{"--badge-height":(0,t.ap)(l,"badge-height"),"--badge-padding-x":(0,t.ap)(l,"badge-padding-x"),"--badge-fz":(0,t.ap)(l,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,t.H5)(r),"--badge-bg":o||i?c.background:void 0,"--badge-color":o||i?c.color:void 0,"--badge-bd":o||i?c.border:void 0,"--badge-dot-color":"dot"===i?(0,a.p)(o,e):void 0}}}),m=(0,s.b)((e,r)=>{let o=(0,l.w)("Badge",g,e),{classNames:t,className:i,style:a,styles:s,unstyled:m,vars:h,radius:f,color:v,gradient:x,leftSection:b,rightSection:j,children:B,variant:C,fullWidth:y,autoContrast:z,circle:_,mod:k,...w}=o,V=(0,d.y)({name:"Badge",props:o,classes:u,className:i,style:a,classNames:t,styles:s,unstyled:m,vars:h,varsResolver:p});return(0,n.jsxs)(c.x,{variant:C,mod:[{block:y,circle:_,"with-right-section":!!j,"with-left-section":!!b},k],...V("root",{variant:C}),ref:r,...w,children:[b&&(0,n.jsx)("span",{...V("section"),"data-position":"left",children:b}),(0,n.jsx)("span",{...V("label"),children:B}),j&&(0,n.jsx)("span",{...V("section"),"data-position":"right",children:j})]})});m.classes=u,m.displayName="@mantine/core/Badge"}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=65879)}),_N_E=e.O()}]);