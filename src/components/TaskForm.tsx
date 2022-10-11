import React from 'react'
import { Flex, Form, FormField, FormLabel, FormTextArea, FormDropdown, Divider, FormInput, Button } from '@fluentui/react-northstar';
import { observer } from 'mobx-react';
import { ITaskModel } from '../models/tasks/TaskModel';
import { BringAsString } from '../services/services';
import { store } from '../pages/tasks/stores/TaskStore';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { createTaskSchema } from '../validations';



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
    const { getDepartmentAsString } = BringAsString;

    const validationSchema = yup.object({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            selectedTask!.title = values.title
            selectedTask!.description = values.description
            // store.createTask()
        },
    });
    store.createFormikHandle = formik.handleSubmit
    return (
        <Flex gap="gap.small">
            <Flex style={{ width: "100%" }}>
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
                                    <FormInput name="title" id="title" fluid aria-labelledby="title title" disabled={!isEditableForm}
                                        value={selectedTask!.title}
                                        onChange={(e) => {
                                            const value = (e.target as any).value;
                                            selectedTask!.title = value
                                            formik.values.title = value
                                        }}
                                        error={!Boolean(formik.touched.title) || !Boolean(formik.errors.title)}
                                        errorMessage={Boolean(formik.touched.title) && formik.errors.title}
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
                                    <FormTextArea name="description" id="description" fluid resize='both' disabled={!isEditableForm}
                                        value={selectedTask!.description}
                                        onChange={(e) => {
                                            const value = (e.target as any).value;
                                            selectedTask!.description = value
                                            formik.values.description = value
                                        }}
                                        error={Boolean(formik.touched.description) || Boolean(formik.errors.description)}
                                        errorMessage={Boolean(formik.touched.description) && formik.errors.description}
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
                                    <FormDropdown placeholder="Select assignment department" id="assignedDepartment" disabled={!isEditableForm} fluid
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
        </Flex >
    )
});

export default TaskDetailForm