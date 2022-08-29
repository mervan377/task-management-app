import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../stores/TaskStore';
import { observer } from 'mobx-react-lite';

interface ITaskUpdateFormProps {
  taskStore: TaskStore
}

const TaskUpdateDialog: React.FC<ITaskUpdateFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeUpdatePopupVisibilty, changeUpdatePopupEditable } = taskStore;
  return (
    <Dialog
      open={taskStore.isUpdateFormOpen}
      cancelButton="Cancel"
      onCancel={() => {
        changeUpdatePopupVisibilty(false)
      }}
      confirmButton="Confirm"
      content={
        <TaskForm selectedTask={selectedTask!} />
      }
      header="Update Task "
    />
  )
});

export default TaskUpdateDialog;