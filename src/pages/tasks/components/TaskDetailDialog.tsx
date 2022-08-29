import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../stores/TaskStore';
import { observer } from 'mobx-react-lite';

interface ITaskDetailFormProps {
  taskStore: TaskStore
}

const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeDetailPopupVisibilty } = taskStore;
  return (
    <Dialog
      open={taskStore.isDetailFormOpen}
      cancelButton="Close"
      onCancel={() => {
        changeDetailPopupVisibilty(false)
      }}
      content={
        <TaskForm selectedTask={selectedTask!} />
      }
      header="See Detail"
    />
  )
});

export default TaskDetailDialog;