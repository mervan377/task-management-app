import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { store, TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { strings } from '../i18n';


interface ITaskUpdateFormProps {
  taskStore: TaskStore
}
const TaskUpdateDialog: React.FC<ITaskUpdateFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeUpdatePopupVisibility, storeformikHandle } = taskStore;
  const { t } = strings
  return (
    <Dialog
      open={taskStore.isUpdateFormOpen}
      cancelButton={t("dialogTexts.close")}
      onCancel={() => {
        changeUpdatePopupVisibility(false)
      }}
      confirmButton={t("dialogTexts.update")}
      onConfirm={() => {
        store.isUpdatedValid = true
        storeformikHandle()
      }}
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
      }
      header={t("dialogTexts.updateTaskTitle")}
    />
  )
});

export default TaskUpdateDialog;