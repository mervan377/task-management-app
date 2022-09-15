import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import AreYouSure from "./AreYouSure"


interface ITaskUpdateFormProps {
  taskStore: TaskStore
}
const TaskUpdateDialog: React.FC<ITaskUpdateFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeUpdatePopupVisibility, changeAreYouSurePopupVisibility, isDeleteFormOpen, isUpdateFormOpen, isStatusModalOpen } = taskStore;
  return (
    <>
      <Dialog
        open={taskStore.isUpdateFormOpen}
        cancelButton="Cancel"
        onCancel={() => {
          changeUpdatePopupVisibility(false)
        }}
        confirmButton="Confirm"
        onConfirm={() => {
          changeAreYouSurePopupVisibility(true)
        }}
        content={
          <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
        }
        header="Update Task"
      />
      <AreYouSure taskStore={taskStore} isUpdate={isUpdateFormOpen} isDelete={isDeleteFormOpen} isStatus={isStatusModalOpen} />
    </>
  )
});

export default TaskUpdateDialog;