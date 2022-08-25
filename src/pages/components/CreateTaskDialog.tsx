import * as React from 'react';
import { Button, Dialog, Flex, Form, FormDropdown, FormField, FormLabel, FormTextArea, Input } from '@fluentui/react-northstar';
import { CloseIcon } from '@fluentui/react-icons-northstar';

const CreateTaskDialog: React.FC = () => (
    <Dialog
        content={
            <Flex gap="gap.small">
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
                        <FormField>
                            <Button>Submit</Button>
                        </FormField>
                    </Form>
                </Flex>
            </Flex>
        }
        header="Create New Task "
        headerAction={{ icon: <CloseIcon />, title: 'Close'}}
        trigger={< Button content="Create Task" />}
    />
);

export default CreateTaskDialog;