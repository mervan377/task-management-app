import * as React from 'react';
import { Button, Dialog, SettingsIcon } from '@fluentui/react-northstar';
import UpdateTask from './TaskUpdateForm'



const UpdateZoomContent: React.FC = () => (
  <Dialog 
    cancelButton="Cancel"
    confirmButton="Confirm"
    content={
      <UpdateTask />
    }
    header="Update Task "
    trigger={< Button content="Update Task" icon={<SettingsIcon />} iconPosition="after"/>}
  />
);

export default UpdateZoomContent;