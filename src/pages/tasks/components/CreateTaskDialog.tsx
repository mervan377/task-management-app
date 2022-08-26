import * as React from 'react';
import { Button, Dialog, Flex, Form, FormDropdown, FormField, FormLabel, FormTextArea, Input } from '@fluentui/react-northstar';
import { CreateTaskStoreImpl } from '../stores/CreateTaskStore';
import { observer } from 'mobx-react-lite';

interface ICreateTaskProps {
    createTaskStore: CreateTaskStoreImpl
}

function SelamVerHandle() {
    alert("Selam reis")
}

const CreateTaskDialog: React.FC<ICreateTaskProps> = observer(({ createTaskStore }) => {

    const [title, setTitle] = React.useState<string>('');
    const [desc, setDesc] = React.useState<string>('');
    const [assisgment, setAssigment] = React.useState<string>('')

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
                                    <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" value={title} onChange={(e) => {
                                        setTitle((e.target as any).value)
                                    }} />
                                </FormField>
                                <FormTextArea name="desc" id="desc" label="Description" fluid resize='both' value={desc} onChange={(e) => {
                                    setDesc((e.target as any).value)
                                }} />
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
                onConfirm={() => {
                    createTaskStore.addTask(title)
                    createTaskStore.addTask(desc)
                }}
                trigger={< Button content="Create Task" primary />}
            />
        </>
    )
});

export default CreateTaskDialog