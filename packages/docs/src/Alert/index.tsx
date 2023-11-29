import { Alert as Alerts } from '@damw-ui/ui';
import '@damw-ui/ui/dist/mw-ui.css';
import React, { type FC } from 'react';

const Alert: FC<any> = ({ ...props }) => (
  <>
    <Alerts {...props}> </Alerts>
  </>
);

export default Alert;
