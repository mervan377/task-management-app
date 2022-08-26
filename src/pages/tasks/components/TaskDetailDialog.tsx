import * as React from 'react';
import { Button, Dialog, ExpandIcon } from '@fluentui/react-northstar';
import TaskForm from './TaskDetailForm';


interface ITaskDetailDialogProps {}

const TaskDetailDialog: React.FC<ITaskDetailDialogProps> = () => (
  <Dialog
  cancelButton="Close"
    content={
      <TaskForm />
    }
    header="See Detail"
    trigger={< Button content="Detail Task" icon={<ExpandIcon />} iconPosition="after"/>}
  />
);

export default TaskDetailDialog;