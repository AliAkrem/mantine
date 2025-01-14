(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38879],{73322:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/file-input",function(){return n(9977)}])},9977:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var l=n(52322),r=n(45392),i=n(2784),o=n(9341),a=n(70837),s=n(51477),p=n(38483),u=n(82027),c=n(2670),d=n(1787),m=n(89420),h=n(73063);let f={valueComponent:({value:e})=>(0,l.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Array.isArray(e)?e.map(e=>e.name).join(", "):e?.name})},x=(0,u.d5)((e,t)=>{let n=(0,p.w)("FileInput",f,e),{unstyled:r,vars:u,onChange:x,value:y,defaultValue:b,multiple:j,accept:v,name:g,form:I,valueComponent:F,clearable:V,clearButtonProps:P,readOnly:C,capture:D,fileInputProps:S,rightSection:w,size:A,placeholder:k,component:_,resetRef:z,classNames:U,styles:E,...N}=n,W=(0,i.useRef)(null),{resolvedClassNames:M,resolvedStyles:G}=(0,s.h)({classNames:U,styles:E,props:n}),[R,B]=(0,o.C)({value:y,defaultValue:b,onChange:x,finalValue:j?[]:null}),T=Array.isArray(R)?0!==R.length:null!==R,Y=w||(V&&T&&!C?(0,l.jsx)(c.P,{...P,variant:"subtle",onClick:()=>B(j?[]:null),size:A,unstyled:r}):null);return(0,i.useEffect)(()=>{(Array.isArray(R)&&0===R.length||null===R)&&W.current?.()},[R]),(0,l.jsx)(d.S,{onChange:B,multiple:j,accept:v,name:g,form:I,resetRef:(0,a.Yx)(W,z),disabled:C,capture:D,inputProps:S,children:e=>(0,l.jsx)(h.M,{component:_||"button",ref:t,rightSection:Y,...e,...N,__staticSelector:"FileInput",multiline:!0,type:"button",pointer:!0,__stylesApiProps:n,unstyled:r,size:A,classNames:U,styles:E,children:T?(0,l.jsx)(F,{value:R}):(0,l.jsx)(m.I.Placeholder,{__staticSelector:"FileInput",classNames:M,styles:G,children:k})})})});x.classes=h.M.classes,x.displayName="@mantine/core/FileInput";let y={type:"configurator",component:function(e){return(0,l.jsx)(x,{...e,placeholder:"Input placeholder"})},code:`
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc},b={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`,component:function(){return(0,l.jsx)(x,{multiple:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},j={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`,component:function(){return(0,l.jsx)(x,{accept:"image/png,image/jpeg",label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340},v={type:"code",code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`,component:function(){return(0,l.jsx)(x,{clearable:!0,label:"Upload files",placeholder:"Upload files"})},centered:!0,maxWidth:340};var g=n(45855);let I=({value:e})=>null===e?null:Array.isArray(e)?(0,l.jsx)(g.D.Group,{children:e.map((e,t)=>(0,l.jsx)(g.D,{children:e.name},t))}):(0,l.jsx)(g.D,{children:e.name}),F={type:"code",code:`
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
`,component:function(){return(0,l.jsx)(x,{label:"Upload files",placeholder:"Upload files",multiple:!0,valueComponent:I})},centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,l.jsx)(x,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},P={type:"code",component:function(){return(0,l.jsx)(x,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var C=(0,n(73681).Z)("outline","file-cv","IconFileCv",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0",key:"svg-2"}],["path",{d:"M13 11l1.5 6l1.5 -6",key:"svg-3"}]]);let D={type:"code",component:function(){let e=(0,l.jsx)(C,{size:18,stroke:1.5});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{leftSection:e,label:"Attach your CV",placeholder:"Your CV",leftSectionPointerEvents:"none"}),(0,l.jsx)(x,{rightSection:e,label:"Attach your CV",placeholder:"Your CV",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
import { FileInput } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340};var S=n(89868),w=n(27250);let A=`
import { IconAt } from '@tabler/icons-react';
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {{props}}
    />
  );
}
`,k={type:"styles-api",data:w.T,component:function(e){return(0,l.jsx)(x,{label:"Label",placeholder:"FileInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,l.jsx)(S.Z,{size:18}),...e})},code:A,centered:!0,maxWidth:340};var _=n(54078),z=n(15019);let U=(0,_.A)(z.us.FileInput);function E(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:i,InputAccessibility:o,InputFeatures:a,InputSections:s,StylesApiSelectors:p}=t;return n||W("Demo",!0),i||W("GetElementRef",!0),o||W("InputAccessibility",!0),a||W("InputFeatures",!0),s||W("InputSections",!0),p||W("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a,{component:"FileInput",element:"input"}),"\n",(0,l.jsx)(n,{data:y}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File | null>(null);\n  return <FileInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"multiple"})," is ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { FileInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<File[]>([]);\n  return <FileInput multiple value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"multiple",children:"Multiple"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"multiple"})," to allow user to pick more than one file:"]}),"\n",(0,l.jsx)(n,{data:b}),"\n",(0,l.jsx)(t.h2,{id:"accept",children:"Accept"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"accept"})," prop to restrict files selection to specific mime types:"]}),"\n",(0,l.jsx)(n,{data:j}),"\n",(0,l.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section of the input\nwhen file is selected. Note that if you define custom right section, clear button\nwill not be rendered."]}),"\n",(0,l.jsx)(n,{data:v}),"\n",(0,l.jsx)(t.h2,{id:"custom-value-component",children:"Custom value component"}),"\n",(0,l.jsx)(n,{data:F}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(n,{data:V}),"\n",(0,l.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,l.jsx)(n,{data:P}),"\n",(0,l.jsx)(s,{component:"FileInput"}),"\n",(0,l.jsx)(n,{data:D}),"\n",(0,l.jsx)(p,{component:"FileInput"}),"\n",(0,l.jsx)(n,{data:k}),"\n",(0,l.jsx)(i,{component:"FileInput",refType:"button"}),"\n",(0,l.jsx)(o,{component:"FileInput"}),"\n",(0,l.jsx)(t.h2,{id:"fileinputprops-type",children:"FileInputProps type"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"FileInputProps"})," type is a generic interface which accepts a single type argument:\n",(0,l.jsx)(t.code,{children:"multiple"})," value."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import type { FileInputProps } from '@mantine/core';\n\ntype SingleInputProps = FileInputProps<false>;\ntype MultipleInputProps = FileInputProps<true>;\n"})})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(U,{...e,children:(0,l.jsx)(E,{...e})})}function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var l=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return l},nW:function(){return r},pc:function(){return i}});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},1787:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var l=n(52322),r=n(2784),i=n(70837),o=n(38483);let a={multiple:!1},s=(0,r.forwardRef)((e,t)=>{let{onChange:n,children:s,multiple:p,accept:u,name:c,form:d,resetRef:m,disabled:h,capture:f,inputProps:x,...y}=(0,o.w)("FileButton",a,e),b=(0,r.useRef)(null);return(0,i.kR)(m,()=>{b.current&&(b.current.value="")}),(0,l.jsxs)(l.Fragment,{children:[s({onClick:()=>{h||b.current?.click()},...y}),(0,l.jsx)("input",{style:{display:"none"},type:"file",accept:u,multiple:p,onChange:e=>{p?n(Array.from(e.currentTarget.files)):n(e.currentTarget.files[0]||null)},ref:(0,i.Yx)(t,b),name:c,form:d,capture:f,...x})]})});s.displayName="@mantine/core/FileButton"},45855:function(e,t,n){"use strict";n.d(t,{D:function(){return v}});var l=n(52322);n(2784);var r=n(91482),i=n(11200),o=n(38483),a=n(46690),s=n(28559),p=n(82027),u=n(2670),c=n(7450);let[d,m]=(0,n(75336).V)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let f={},x=(0,i.Z)((e,{gap:t},{size:n})=>({group:{"--pg-gap":void 0!==t?(0,r.ap)(t):(0,r.ap)(n,"pg-gap")}})),y=(0,p.d5)((e,t)=>{let n=(0,o.w)("PillGroup",f,e),{classNames:r,className:i,style:p,styles:u,unstyled:m,vars:y,size:b,disabled:j,...v}=n,g=(0,c.D)(),I=g?.size||b||void 0,F=(0,a.y)({name:"PillGroup",classes:h,props:n,className:i,style:p,classNames:r,styles:u,unstyled:m,vars:y,varsResolver:x,stylesCtx:{size:I},rootSelector:"group"});return(0,l.jsx)(d,{value:{size:I,disabled:j},children:(0,l.jsx)(s.x,{ref:t,size:I,...F("group"),...v})})});y.classes=h,y.displayName="@mantine/core/PillGroup";let b={variant:"default"},j=(0,i.Z)((e,{radius:t},{size:n})=>({root:{"--pill-fz":(0,r.ap)(n,"pill-fz"),"--pill-height":(0,r.ap)(n,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.H5)(t)}})),v=(0,p.d5)((e,t)=>{let n=(0,o.w)("Pill",b,e),{classNames:r,className:i,style:p,styles:d,unstyled:f,vars:x,variant:y,children:v,withRemoveButton:g,onRemove:I,removeButtonProps:F,radius:V,size:P,disabled:C,mod:D,...S}=n,w=m(),A=(0,c.D)(),k=P||w?.size||void 0,_=A?.variant==="filled"?"contrast":y||"default",z=(0,a.y)({name:"Pill",classes:h,props:n,className:i,style:p,classNames:r,styles:d,unstyled:f,vars:x,varsResolver:j,stylesCtx:{size:k}});return(0,l.jsxs)(s.x,{component:"span",ref:t,variant:_,size:k,...z("root",{variant:_}),mod:[{"with-remove":g&&!C,disabled:C||w?.disabled},D],...S,children:[(0,l.jsx)("span",{...z("label"),children:v}),g&&(0,l.jsx)(u.P,{variant:"transparent",radius:V,tabIndex:-1,"aria-hidden":!0,unstyled:f,...F,...z("remove",{className:F?.className,style:F?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),F?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),F?.onClick?.(e)}})]})});v.classes=h,v.displayName="@mantine/core/Pill",v.Group=y},7450:function(e,t,n){"use strict";n.d(t,{D:function(){return r},H:function(){return l}}),n(2784),n(52322);let[l,r]=(0,n(75336).V)()}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=73322)}),_N_E=e.O()}]);