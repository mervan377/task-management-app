import React from 'react'
import { Flex, Form, Input, FormField, FormLabel, FormTextArea, FormDropdown, Divider } from '@fluentui/react-northstar';
import { observer } from 'mobx-react';
import { store } from '../pages/tasks/stores/TaskStore';
import { ITaskModel } from '../models/tasks/TaskModel';

interface ITaskFormProps {
    selectedTask?: ITaskModel,
    isEditableForm: boolean
}

const departmentItems = [
    'Human Resources Managament',
    'Sales Department',
    'Advertsement Department'
]

const TaskDetailForm: React.FC<ITaskFormProps> = observer(({ selectedTask, isEditableForm }) => {
    const { getDepartmentAsString } = store;

    return (
        <Flex gap="gap.small">
            <Flex style={{
                width: "100%"
            }}>
                <Form>
                    <Divider />
                    <FormField >
                        <FormLabel className='detail-title'>
                            Title
                        </FormLabel>
                        {
                            !isEditableForm ? (
                                <>
                                    {selectedTask?.title}
                                </>
                            ) : (
                                <>
                                    <Input name="first-name" fluid aria-labelledby="first-name-label message-id" id="title" disabled={!isEditableForm}
                                        value={selectedTask!.title}
                                        onChange={(e) => {
                                            const value = (e.target as any).value;
                                            selectedTask!.title = value
                                        }}
                                    />
                                </>
                            )
                        }
                    </FormField>

                    <FormField>
                        <FormLabel className='detail-title'>
                            Description
                        </FormLabel>
                        {
                            !isEditableForm ? (
                                <>
                                    {selectedTask!.description}
                                </>
                            ) : (
                                <>
                                    <FormTextArea name="desc" id="desc" fluid resize='both' disabled={!isEditableForm} value={selectedTask!.description}
                                        onChange={(e) => {
                                            const value = (e.target as any).value;
                                            selectedTask!.description = value
                                        }}
                                    />
                                </>
                            )
                        }
                    </FormField>

                    <FormField>
                        <FormLabel htmlFor="title" id="first-name-label" className='detail-title'>
                            Assisgment department
                        </FormLabel>
                        {
                            !isEditableForm ? (
                                <>
                                    {getDepartmentAsString(selectedTask!.assignedDepartment)}
                                </>
                            ) : (
                                <>

                                    <FormDropdown placeholder="Select assisgment department" disabled={!isEditableForm} fluid
                                        items={departmentItems}
                                        checkable
                                        value={getDepartmentAsString(selectedTask!.assignedDepartment)}
                                        onChange={(e, selectedOption) => {
                                            (selectedTask!.assignedDepartment) = Number(selectedOption.highlightedIndex) + 1
                                        }}
                                    />
                                </>
                            )
                        }
                    </FormField>



                </Form>
            </Flex>
        </Flex>
    )
});

export default TaskDetailForm