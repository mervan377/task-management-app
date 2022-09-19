import * as React from 'react';
import { Button, Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
interface ITaskDetailFormProps {
  taskStore: TaskStore
}
const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeDetailPopupVisibility, changeStatusTask } = taskStore;
  const userID = JSON.parse(localStorage.getItem("user") || "").department
  return (
    <Dialog
      open={taskStore.isDetailFormOpen}
      cancelButton="Close"
      onCancel={() => {
        changeDetailPopupVisibility(false)
      }}
      confirmButton={
        <>
          <Button
            style={{ backgroundColor: "#237B4B", color: "white" }}
            onClick={() => { changeStatusTask("Complete"); changeDetailPopupVisibility(false) }}
            disabled={userID !== selectedTask?.user.id}> Complete </Button>

          <Button
            style={{ backgroundColor: "#8E192E", color: "white" }}
            onClick={() => { changeStatusTask("Reject"); changeDetailPopupVisibility(false) }}
            disabled={userID !== selectedTask?.user.id}
          > Reject </Button>
        </>
      }
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
      }
      header="Task's Detail"
      className="task-detail-wrapper"
    />
  )
});

export default TaskDetailDialog;