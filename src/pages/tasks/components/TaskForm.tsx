import React from 'react'
import { Flex, Form, Input, FormField, FormLabel, FormTextArea, FormDropdown } from '@fluentui/react-northstar';
import { ITaskModel } from '../../../models/tasks/TaskModel';
import { observer } from 'mobx-react';
import { TaskStore } from '../stores/TaskStore';

interface ITaskDetailFormProps {
    selectedTask?: ITaskModel
}

const TaskDetailForm: React.FC<ITaskDetailFormProps> = observer(({ selectedTask }) => {

    const store = React.useMemo(() => new TaskStore(), [])
    const { getDepartmentAsString } = store;
    console.log(selectedTask)

    
    return (
        <Flex gap="gap.small">
            <Flex style={{
                width: "100%"
            }}>
                <Form >
                    <FormField >
                        <FormLabel htmlFor="title" id="first-name-label">
                            Title
                        </FormLabel>
                        <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" disabled value={selectedTask!.title} />
                    </FormField>
                    <FormTextArea name="desc" id="desc" label="Description" fluid resize='both' disabled value={selectedTask!.description} />
                    <FormField>
                        <FormDropdown placeholder="Select assisgment department" disabled fluid items={['Human Resources Managament', 'Sales Department', 'Advertsement Department']} value={getDepartmentAsString(selectedTask!.assignedDepartment)} />
                    </FormField>
                </Form>
            </Flex>
        </Flex>
    )
});

export default TaskDetailForm