import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { store } from '../pages/tasks/stores/TaskStore';


interface IWarningFormProps {
}

const AreYouSure: React.FC<IWarningFormProps> = observer(() => {
    const { isWarningOpenModal, changeWarningOpenModal } = store;
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
            header="Comfirming"
        />
    )

});



export default AreYouSure;
