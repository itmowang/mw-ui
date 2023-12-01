# Message


### 基础使用
基本使用

```jsx
import { Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () =>
<>
  <div style={{ display: 'grid', gap: '10px', gridAutoFlow: 'column' }}>
    <Button type="primary">primary</Button>
    <Button type="secondary">secondary</Button>
    <Button type="success">success</Button>
    <Button type="info">info</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
  </div>
</> 
```


### 是否禁用

```jsx
import { Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () =>
<>
   <Button type="primary" disabled>Button</Button>
</> 
```

### 大小设置

```jsx
import { Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () =>
   <>
      <Button type="primary" style={{"margin-right":"10px"}}>default</Button>
      <Button type="primary" size="small" style={{"margin-right":"10px"}}>small</Button>
      <Button type="primary" size="large">large</Button>
  </> 
```

### 文字按钮


```jsx
import { Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () =>
   <>
    <div style={{ display: 'grid', gap: '10px', gridAutoFlow: 'column' }}>
      <Button link type="primary">Button</Button>
      <Button link type="secondary">Button</Button>
      <Button link type="success">Button</Button>
      <Button link type="info">Button</Button>
      <Button link type="warning">Button</Button>
      <Button link type="danger">Button</Button>
  </div>
  </> 
```