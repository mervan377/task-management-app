import React from 'react'
import { Flex, Form, Button, Input, FormField, FormLabel, FormTextArea, FormDropdown } from '@fluentui/react-northstar';

export const UpdateTask = () => {
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
    )
};
