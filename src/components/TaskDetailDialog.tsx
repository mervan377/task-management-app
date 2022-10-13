import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { strings } from '../i18n';
interface ITaskDetailFormProps {
  taskStore: TaskStore
}
const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeDetailPopupVisibility } = taskStore;
  const { t } = strings
  return (
    <Dialog
      open={taskStore.isDetailFormOpen}
      cancelButton={t("dialogTexts.close")}
      onCancel={() => {
        changeDetailPopupVisibility(false)
      }}
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
      }
      header={t("dialogTexts.taskDetailTitle")}
    />
  )
});

export default TaskDetailDialog;