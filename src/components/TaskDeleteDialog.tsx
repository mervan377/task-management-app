import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { strings } from '../i18n';

interface ITaskDeleteFormProps {
    taskStore: TaskStore
}

const TaskDeleteDialog: React.FC<ITaskDeleteFormProps> = observer(({ taskStore }) => {

    const { changeDeletePopupVisibility, deleteTask } = taskStore;
    const { t } = strings;

    return (
        <>
            <Dialog
                open={taskStore.isDeleteFormOpen}
                cancelButton={t("dialogTexts.close")}
                onCancel={() => {
                    changeDeletePopupVisibility(false)
                }}
                confirmButton={t("dialogTexts.delete")}
                onConfirm={() => {
                    deleteTask()
                }}
                content={`${taskStore.selectedTask?.title}  ${t("dialogTexts.deleteTaskDesc")} `
                }
                header={t("dialogTexts.deleteTaskTitle")}
            />
        </>
    )
});


export default TaskDeleteDialog;

