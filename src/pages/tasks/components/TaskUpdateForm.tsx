import * as React from 'react';
import { Flex, Form, Input, FormField, FormLabel, FormTextArea, FormDropdown } from '@fluentui/react-northstar';


const UpdateTask: React.FC = () => {

    const [title, setTitle] = React.useState<string>('')
    const [desc, setDesc] = React.useState<string>('') 

    return (
        <Flex gap="gap.small">
            <Flex style={{
                width: "100%"
            }}>
                <Form >
                    <FormField >
                        <FormLabel htmlFor="title" >
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
                        <FormDropdown placeholder="Select assisgment department" fluid items={['Human Resources Managament', 'Sales Department', 'Advertsement Department']} />
                    </FormField>
                </Form>
            </Flex>
        </Flex>
    )
};

export default UpdateTask