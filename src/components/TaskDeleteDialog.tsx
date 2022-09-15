import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import AreYouSure from './AreYouSure';

interface ITaskDeleteFormProps {
    taskStore: TaskStore
}

const TaskDeleteDialog: React.FC<ITaskDeleteFormProps> = observer(({ taskStore }) => {

    const { selectedTask, changeDeletePopupVisibility, changeAreYouSurePopupVisibility, isDeleteFormOpen, isUpdateFormOpen, isStatusModalOpen } = taskStore;

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
                    changeAreYouSurePopupVisibility(true)

                }}
                content={
                    <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
                }
                header="Delete task"
            />
            <AreYouSure taskStore={taskStore} isUpdate={isUpdateFormOpen} isDelete={isDeleteFormOpen} isStatus={isStatusModalOpen} />
        </>
    )
});


export default TaskDeleteDialog;

