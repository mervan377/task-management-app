import { AddIcon, Button } from '@fluentui/react-northstar'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { strings } from '../i18n'

import { store } from '../pages/tasks/stores/TaskStore' 

interface ICreateButtonProps { }
const CreateButton: React.FC<ICreateButtonProps> = observer(() => {
    const { t } = strings
    return (
        <React.Fragment>
            <Button className='create-button' content={t("ui.createTask")} icon={<AddIcon />} iconPosition="after" onClick={() => {
                store.initializeSelectedTask()
                store.changeCreatePopupVisibility(true)
            }} /> 
            <Button className='create-button' content={t("ui.resetData")} onClick={() => {
                store.initializeSelectedTask()
                store.initalizesTaskList()
                store.resetData()
            }} />
        </React.Fragment>
    )
})
export default CreateButton