import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { store, TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { Formik } from 'formik';
interface ICreateTaskProps {
    taskStore: TaskStore
}
const TaskCreateDialog: React.FC<ICreateTaskProps> = observer(({ taskStore }) => {
    const { selectedTask, changeCreatePopupVisibility, createFormikHandle, createTask } = taskStore;
    return (
        <Dialog
            open={taskStore.isCreateFormOpen}
            cancelButton="Cancel"
            onCancel={() => {
                changeCreatePopupVisibility(false)
            }}
            confirmButton="Create"
            onConfirm={() => {
                createFormikHandle()
                createTask()
            }}
            content={
                <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
            }
            header="Create New Task"
        />
    )
});
export default TaskCreateDialog