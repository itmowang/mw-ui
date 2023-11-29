# Button


### 基础使用
基本使用

```jsx
import { Button, Row , Col } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () =><>
  {/* <div style={{ display: 'grid', gap: '10px', gridAutoFlow: 'column' }}>
    <Button type="primary">Button</Button>
    <Button type="secondary">Button</Button>
    <Button type="success">Button</Button>
    <Button type="info">Button</Button>
    <Button type="warning">Button</Button>
    <Button type="danger">Button</Button>
  </div> */}
  <Row  gutter={16}>
    <Col span={8} >
    <Button type="primary">Button</Button>
    </Col>
    <Col span={16} >
    <Button type="secondary">Button</Button>
    </Col>
  </Row>
</> 
```


