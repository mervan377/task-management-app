import * as React from 'react';
import { Button, Dialog } from '@fluentui/react-northstar';
import { CloseIcon } from '@fluentui/react-icons-northstar';
import { TaskForm } from './TaskForm';

const TaskDetailDialog: React.FC = () => (
  <Dialog
    cancelButton="Cancel"
    confirmButton="Confirm"
    content={
      <TaskForm />
    }
    header="See Detail"
    headerAction={{ icon: <CloseIcon />, title: 'Close' }}
    trigger={< Button content="Detail Task" />}
  />
);

export default TaskDetailDialog;