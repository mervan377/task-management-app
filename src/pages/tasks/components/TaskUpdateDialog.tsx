import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../stores/TaskStore';
import { observer } from 'mobx-react-lite';
interface ITaskUpdateFormProps {
  taskStore: TaskStore
}
const TaskUpdateDialog: React.FC<ITaskUpdateFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeUpdatePopupVisibility, addSelectedTaskToLists } = taskStore;

  return (
    <Dialog
      open={taskStore.isUpdateFormOpen}
      cancelButton="Cancel"
      onCancel={() => {
        changeUpdatePopupVisibility(false)
      }}
      confirmButton="Confirm"
      onConfirm={() => {
        addSelectedTaskToLists()
      }}
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
      }
      header="Update Task"
    />
  )
});

export default TaskUpdateDialog;