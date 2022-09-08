import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
interface ITaskUpdateFormProps {
  taskStore: TaskStore
}
const TaskUpdateDialog: React.FC<ITaskUpdateFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeUpdatePopupVisibility, updateSelectedTaskFromList } = taskStore;
  // console.log(selectedTask?.id)
  return (
    <Dialog
      open={taskStore.isUpdateFormOpen}
      cancelButton="Cancel"
      onCancel={() => {
        changeUpdatePopupVisibility(false)
      }}
      confirmButton="Confirm"
      onConfirm={() => {
        updateSelectedTaskFromList() 
      }}
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
      }
      header="Update Task"
    />
  )
});

export default TaskUpdateDialog;