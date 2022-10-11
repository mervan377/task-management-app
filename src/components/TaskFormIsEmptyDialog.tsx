import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { store } from '../pages/tasks/stores/TaskStore';


interface ILogoutWarningFormProps {
}

const TaskFormEmptyDialog: React.FC<ILogoutWarningFormProps> = observer(() => {
    const { isFormModalIsEmpty, changeFormModalIsEmptyVisibility } = store;
    return (
        <Dialog
            open={isFormModalIsEmpty}
            cancelButton="Close"
            onCancel={() => {
                changeFormModalIsEmptyVisibility(false)
            }}
            header="Can not be empty!"
        />
    )
});



export default TaskFormEmptyDialog;