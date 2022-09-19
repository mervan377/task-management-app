import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import { TaskStore } from '../pages/tasks/stores/TaskStore';

interface ITaskDeleteFormProps {
    taskStore: TaskStore
}

const TaskDeleteDialog: React.FC<ITaskDeleteFormProps> = observer(({ taskStore }) => {

    const { changeDeletePopupVisibility, deleteSelectedTaskFromList } = taskStore;

    return (
        <>
            <Dialog
                open={taskStore.isDeleteFormOpen}
                cancelButton="Cancel"
                onCancel={() => {
                    changeDeletePopupVisibility(false)
                }}
                confirmButton="Delete"
                onConfirm={() => {
                    deleteSelectedTaskFromList()
                }}
                content={
                    `${taskStore.selectedTask?.description}`
                }
                header={
                    `Are you sure you want to delete the task titled ${taskStore.selectedTask?.title} ?`
                }
            />
        </>
    )
});


export default TaskDeleteDialog;

