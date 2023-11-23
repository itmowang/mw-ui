import{j as _}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import{P as u}from"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";const v=({children:o,type:n="primary",...h})=>{const w=()=>{switch(n){case"primary":return"bg-primary text-white";case"secondary":return"bg-secondary text-white";case"success":return"bg-success text-white";case"info":return"bg-info text-white";case"warning":return"bg-warning text-white";case"danger":return"bg-danger text-white";default:return"bg-default text-white"}};return _.jsx("button",{className:`py-2 px-4 rounded  ${w()} hover:bg-opacity-75 focus:outline-none focus:ring focus:border-blue-300`,...h,children:o})};try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const s=({type:o,label:n})=>_.jsx(v,{type:"button",children:n});s.propTypes={label:u.string.isRequired,type:u.string};s.defaultProps={label:"123"};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{label:{defaultValue:{value:'"123"',computed:!1},description:"Button contents",type:{name:"string"},required:!1},type:{description:"",type:{name:"string"},required:!1}}};const z={title:"Example/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,x,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const N=["Primary","Secondary","Large","Small"];export{t as Large,e as Primary,r as Secondary,a as Small,N as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories-9lc71czw.js.map
