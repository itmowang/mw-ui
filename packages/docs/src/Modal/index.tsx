import { Modal as Modals } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';
import React, { type FC } from 'react';

const Modal: FC<any> = ({ ...props }) => {
  console.log(props);
  
  return (
    <>
      <Modals {...props}> </Modals>
    </>
  );
}

export default Modal;
