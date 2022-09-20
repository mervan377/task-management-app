import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { store } from '../pages/tasks/stores/TaskStore';


interface IWarningFormProps {
}

const TaskWarningDailog: React.FC<IWarningFormProps> = observer(() => {
    const { isTaskWarningOpenModal: isWarningOpenModal, changeTaskWarningOpenModal: changeWarningOpenModal } = store;
    return (
        <Dialog
            open={isWarningOpenModal}
            confirmButton="Close"
            onConfirm={() => {
                changeWarningOpenModal(false)
            }}
            content={
                "You can not delete or update this task because this task completed or rejected"
            }
            header="Permission Denied"
        />
    )

});



export default TaskWarningDailog;
