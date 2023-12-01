# Modal


### 基础使用
基本使用

```jsx
import React, { useState } from 'react';
import { Modal, Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </>
  );
};

```


### 自定义底部
自定义底部

```jsx
import React, { useState } from 'react';
import { Modal, Button } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}
       footer={<>
       <div style={{padding:"20px",textAlign:"right"}}>
        <Button  onClick={handleCloseModal} type="primary" style={{marginRight:"20px"}} >  Ok  </Button>
        <Button  onClick={handleCloseModal} type="primary" >  Close </Button>
        </div>
        </>}
      >
        <div >
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal>
    </>
  );
};

```
