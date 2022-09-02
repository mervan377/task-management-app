import React from 'react'
import { Flex, Form, Input, FormField, FormLabel, FormTextArea, FormDropdown } from '@fluentui/react-northstar';
import { ITaskModel } from '../../../models/tasks/TaskModel';
import { observer } from 'mobx-react';
import { store } from '../stores/TaskStore';

interface ITaskDetailFormProps {
    selectedTask?: ITaskModel,
    isEditableForm: boolean
}

const departmentItems = [
    'Human Resources Managament',
    'Sales Department',
    'Advertsement Department'
]



// Dropdownin objeye donmesi gerekiyor. 

const TaskDetailForm: React.FC<ITaskDetailFormProps> = observer(({ selectedTask, isEditableForm }) => {

    const { getDepartmentAsString } = store;

    return (
        <Flex gap="gap.small">
            <Flex style={{
                width: "100%"
            }}>
                <Form>
                    <FormField >
                        <FormLabel htmlFor="title" id="first-name-label">
                            Title
                        </FormLabel>
                        <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" disabled={!isEditableForm}
                            value={selectedTask!.title}
                            onChange={(e) => {
                                const value = (e.target as any).value;
                                selectedTask!.title = value
                            }}
                        />
                    </FormField>
                    <FormTextArea name="desc" id="desc" label="Description" fluid resize='both' disabled={!isEditableForm} value={selectedTask!.description}
                        onChange={(e) => {
                            const value = (e.target as any).value;
                            selectedTask!.description = value
                        }}
                    />
                    <FormField>
                        <FormDropdown placeholder="Select assisgment department" disabled={!isEditableForm} fluid
                            items={departmentItems}
                            checkable
                            value={getDepartmentAsString(selectedTask!.assignedDepartment)}
                            onChange={(e, selectedOption) => {
                                (selectedTask!.assignedDepartment) = Number(selectedOption.highlightedIndex) + 1
                            }}
                        />
                    </FormField>

                </Form>
            </Flex>
        </Flex>
    )
});

export default TaskDetailForm