import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
interface ICreateTaskProps {
    taskStore: TaskStore
}
const TaskCreateDialog: React.FC<ICreateTaskProps> = observer(({ taskStore }) => {
    const { selectedTask, changeCreatePopupVisibility, addSelectedTaskToLists } = taskStore;
    return (
        <Dialog
            open={taskStore.isCreateFormOpen}
            cancelButton="Cancel"
            onCancel={() => {
                changeCreatePopupVisibility(false)
            }}
            confirmButton="Create"
            onConfirm={() => {
                addSelectedTaskToLists()
                // console.log(toJS(taskStore.allTasks))
                // changeCreatePopupVisibility(false)
            }}
            content={
                <TaskForm selectedTask={selectedTask!} isEditableForm={true} />
            }
            header="Create New Task Form"
        />
    )
});
export default TaskCreateDialog