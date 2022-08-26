import * as React from 'react';
import { Button, Dialog, TrashCanIcon } from '@fluentui/react-northstar';

const TaskDetailDialog: React.FC = () => (
    <Dialog
        cancelButton="Cancel"
        confirmButton="Delete"
        header="Are you sure?"
        content= "Do you want to delete the task titled Sales department?"
        trigger={<Button content="Delete Task" icon={<TrashCanIcon />} iconPosition="after" />}
    />
);

export default TaskDetailDialog;