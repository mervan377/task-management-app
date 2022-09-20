import * as React from 'react';
import { Button, Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
interface ITaskDetailFormProps {
  taskStore: TaskStore
}
const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changePendingPopupVisibility: changePendingDetailPopupVisibility, changeStatusTask } = taskStore;
  return (
    <Dialog
      open={taskStore.isPendingFormOpen}
      cancelButton="Close"
      onCancel={() => {
        changePendingDetailPopupVisibility(false)
      }}
      confirmButton={
        <>
          <Button
            style={{ backgroundColor: "#8E192E", color: "white" }}
            onClick={() => {
              changePendingDetailPopupVisibility(false)
              changeStatusTask("Reject")
            }}> Reject </Button>
          <Button
            style={{ backgroundColor: "#237B4B", color: "white" }}
            onClick={() => {
              taskStore.changeStatusTask("Complete")
              changePendingDetailPopupVisibility(false)
            }}> Complete </Button>
        </>
      }
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
      }
      header="Task Confirmation"
      className="task-detail-wrapper"
    />
  )
});

export default TaskDetailDialog;