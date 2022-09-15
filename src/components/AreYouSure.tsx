import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { store, TaskStore } from '../pages/tasks/stores/TaskStore';


interface IAreYouSure {
    taskStore: TaskStore,
    isDelete: boolean,
    isUpdate: boolean,
    isStatus: string
}

const AreYouSure: React.FC<IAreYouSure> = observer(({ taskStore, isDelete, isUpdate, isStatus }) => {
    const { updateSelectedTaskFromList, changeAreYouSurePopupVisibility, deleteSelectedTaskFromList, changeStatusTask } = store;
    return (
        <Dialog
            open={taskStore.isAreYouSureFormOpen}
            cancelButton="Cancel"
            onCancel={() => {
                changeAreYouSurePopupVisibility(false)
            }}
            confirmButton="Confirm"
            onConfirm={() => {
                if (isUpdate) {
                    updateSelectedTaskFromList()
                    changeAreYouSurePopupVisibility(false)
                }

                if (isDelete) {
                    deleteSelectedTaskFromList()
                    changeAreYouSurePopupVisibility(false)
                }

                if (isStatus === "Complete") {
                    changeStatusTask("complete")
                    changeAreYouSurePopupVisibility(false)
                }

                if (isStatus === "Reject") {
                    changeStatusTask("reject")
                    changeAreYouSurePopupVisibility(false)
                }

            }}
            header="Comfirming"
        />
    )

});



export default AreYouSure;
