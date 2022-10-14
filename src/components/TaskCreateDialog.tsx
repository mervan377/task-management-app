import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { store, TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { strings } from '../i18n';
interface ICreateTaskProps {
    taskStore: TaskStore
}
const TaskCreateDialog: React.FC<ICreateTaskProps> = observer(({ taskStore }) => {
    const { selectedTask, changeCreatePopupVisibility, storeformikHandle } = taskStore;
    const { t } = strings;
    return (
        <Dialog
            open={taskStore.isCreateFormOpen}
            cancelButton={t("dialogTexts.close")}
            onCancel={() => {
                changeCreatePopupVisibility(false)
            }}
            confirmButton={t("dialogTexts.create")}
            onConfirm={() => {
                store.isCreatedValid = true
                storeformikHandle()
            }}
            content={
                <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
            }
            header={t("dialogTexts.createTaskTitle")}
        />
    )
});
export default TaskCreateDialog