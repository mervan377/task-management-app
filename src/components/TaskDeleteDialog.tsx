import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import { TaskStore } from '../pages/tasks/stores/TaskStore';

interface ITaskDeleteFormProps {
    taskStore: TaskStore
}

const TaskDeleteDialog: React.FC<ITaskDeleteFormProps> = observer(({ taskStore }) => {

    const { changeDeletePopupVisibility, deleteTask } = taskStore;

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
                    deleteTask()
                }}
                content={
                    `Do you want to delete the task that has the title ${taskStore.selectedTask?.title} ?`
                }
                header="Delete this task?"
            />
        </>
    )
});


export default TaskDeleteDialog;

