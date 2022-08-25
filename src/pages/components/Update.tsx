import * as React from 'react';
import { Button, Dialog } from '@fluentui/react-northstar';
import { CloseIcon } from '@fluentui/react-icons-northstar';
import { UpdateTask } from './UpdateTask'

const UpdateZoomContent: React.FC = () => (
  <Dialog
    content={
      <UpdateTask />
    }
    header="Update Task "
    headerAction={{ icon: <CloseIcon />, title: 'Close' }}
    trigger={< Button content="Update Task" />}
  />
);

export default UpdateZoomContent;