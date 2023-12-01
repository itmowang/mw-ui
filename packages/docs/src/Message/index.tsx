import { Button as Buttons } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';
import React, { type FC } from 'react';

const Button: FC<any> = ({ ...props }) => (
  <>
    <Buttons {...props}> </Buttons>
  </>
);

export default Button;
