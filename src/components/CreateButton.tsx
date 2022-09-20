import { AddIcon, Button } from '@fluentui/react-northstar'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { store } from '../pages/tasks/stores/TaskStore'
import { getTasks } from "../api/api"

interface ICreateButtonProps { }
const CreateButton: React.FC<ICreateButtonProps> = observer(() => {
    return (
        <React.Fragment>
            <Button className='create-button' content="Create Task" icon={<AddIcon />} iconPosition="after" onClick={() => {
                store.initializeSelectedTask()
                store.changeCreatePopupVisibility(true)
            }} /> 
            <Button className='create-button' content="Reset Data" onClick={() => {
                store.initializeSelectedTask()
                store.initalizesTaskList()
                getTasks("get", "/reset-data", "")
            }} />
        </React.Fragment>
    )
})
export default CreateButton