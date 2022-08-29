import * as React from 'react';
import { Dialog, Flex, Form, FormDropdown, FormField, FormLabel, FormTextArea, Input } from '@fluentui/react-northstar';
import { TaskStore } from '../stores/TaskStore';
import { observer } from 'mobx-react-lite';

interface ICreateTaskProps {
    createTaskStore: TaskStore
}


const TaskCreateDialog: React.FC<ICreateTaskProps> = observer(({ createTaskStore }) => {
    return (
        <>
            <Dialog
                content={
                    <Flex gap="gap.small" >
                        <Flex style={{
                            width: "100%"
                        }}>
                            <Form >
                                <FormField >
                                    <FormLabel htmlFor="title" id="first-name-label">
                                        Title
                                    </FormLabel>
                                    <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" />
                                </FormField>
                                <FormTextArea name="desc" id="desc" label="Description" fluid resize='both' />
                                <FormField>
                                    <FormDropdown label="Select assisgment department" fluid items={['Human Resources Managament', 'Sales Department', 'Advertsement Department']} />
                                </FormField>
                            </Form>
                        </Flex>
                    </Flex >
                }
                header="Create New Task Form"
                cancelButton="Cancel"
                confirmButton="Create"  
            />
        </>
    )
});

export default TaskCreateDialog