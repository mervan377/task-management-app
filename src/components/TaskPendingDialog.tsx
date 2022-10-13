import * as React from 'react';
import { Button, Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { strings } from '../i18n';
interface ITaskDetailFormProps {
  taskStore: TaskStore
}
const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changePendingPopupVisibility, taskComplete, taskReject } = taskStore;
  const { t } = strings
  return (
    <Dialog
      open={taskStore.isPendingFormOpen}
      cancelButton={t("dialogTexts.close")}
      onCancel={() => {
        changePendingPopupVisibility(false)
      }}
      confirmButton={
        <>
          <Button
            style={{ backgroundColor: "#8E192E", color: "white" }}
            onClick={() => {
              taskReject();
              changePendingPopupVisibility(false)
            }}> {t("dialogTexts.reject")} </Button>
          <Button
            style={{ backgroundColor: "#237B4B", color: "white" }}
            onClick={() => {
              taskComplete();
              changePendingPopupVisibility(false);
            }}> {t("dialogTexts.complete")} </Button>
        </>
      }
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
      }
      header={t("dialogTexts.pendingTaskTitle")}
      className="task-detail-wrapper"
    />
  )
});

export default TaskDetailDialog;