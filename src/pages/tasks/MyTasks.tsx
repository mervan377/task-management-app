import * as React from 'react';
import { Alert, Button, EditIcon, Loader, Status, Table, tableHeaderCellBehavior, TrashCanIcon, ZoomInIcon } from '@fluentui/react-northstar';

import TaskDeleteDialog from '../../components/TaskDeleteDialog';
import TaskDetailDialog from '../../components/TaskDetailDialog';
import TaskUpdateDialog from '../../components/TaskUpdateDialog';
import { BringAsString } from '../../services/services';
import { observer } from 'mobx-react-lite';
import { ITaskModel } from '../../models/tasks/TaskModel';
import { store } from './stores/TaskStore';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import TaskFormEmptyDialog from '../../components/TaskFormIsEmptyDialog'; 
import { strings } from '../../i18n';

interface IMyTasksProps {
  selectedTask?: ITaskModel
}
const MyTasks: React.FC<IMyTasksProps> = observer(() => {
  const { myTasks, isLoading } = store;
  const { getStatusAsString, getDepartmentAsString } = BringAsString

  const { t } = strings

  React.useEffect(() => {
    store.initializesMyTasks();
  }, [])

  if (isLoading) return <div><Loader size="largest" label="Loading datas" labelPosition="below" /></div>
  return (
    <React.Fragment>
      <Table aria-label="table" >
        <Table.Row header className='table-header'>
          <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="See Detail" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Update" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Delete" accessibility={tableHeaderCellBehavior} />
        </Table.Row>
        {myTasks.map((task, index) => {
          return (
            <Table.Row>
              <Table.Cell content={task.title} />
              <Table.Cell content={task.user.name} />
              <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
              <Table.Cell content={getStatusAsString(task.status)} />
              <Table.Cell content={<Button content="Detail Task" icon={<ExpandIcon />} iconPosition="after" onClick={() => {
                store.setSelectedTask(task)
                store.changeDetailPopupVisibility(true) 
              }} />} />
              <Table.Cell content={<Button content="Update" icon={<SettingsIcon />} iconPosition="after" onClick={() => {
                store.setSelectedTask(task)
                store.changeUpdatePopupVisibility(true)
              }} />} />
              <Table.Cell content={<Button content="Delete Task" icon={<TrashCanIcon />} iconPosition="after" />} onClick={() => {
                store.setSelectedTask(task)
                store.changeDeletePopupVisibility(true)
              }} />
            </Table.Row>
          )
        })
        }
      </Table>
      <TaskDeleteDialog taskStore={store} />
      <TaskUpdateDialog taskStore={store} />
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})
export default MyTasks;