import React from 'react'
import { Flex, Form, Input, FormField, FormLabel, FormTextArea, FormDropdown } from '@fluentui/react-northstar';

const TaskForm: React.FC = () => {
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
                        <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" disabled />
                    </FormField>
                    <FormTextArea name="desc" id="desc" label="Description" fluid resize='both' disabled />
                    <FormField>
                        <FormDropdown placeholder="Select assisgment department" disabled fluid items={['Human Resources Managament', 'Sales Department', 'Advertsement Department']} />
                    </FormField>
                </Form>
            </Flex>
        </Flex>
    )
};

export default TaskForm