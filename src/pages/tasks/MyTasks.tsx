
import * as React from 'react';
import { Button, ExpandIcon, SettingsIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';
import { TaskStore } from './stores/TaskStore';

import TaskDeleteDialog from './components/TaskDeleteDialog';
import TaskDetailDialog from './components/TaskDetailDialog';
import TaskUpdateDialog from './components/TaskUpdateDialog';
import { observer } from 'mobx-react-lite';

const MyTasks: React.FC<any> = observer(() => {

  const store = React.useMemo(() => new TaskStore(), [])
  const { myTasks, getStatusAsString, getDepartmentAsString } = store;

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
                store.changeDetailPopupVisibilty(true)
              }} />} />
              <Table.Cell content={<Button content="Update" icon={<SettingsIcon />} iconPosition="after" onClick={() => {
                store.setSelectedTask(task)
                store.changeUpdatePopupVisibilty(true)
                store.changeUpdatePopupEditable(true)
              }} />} />
              <Table.Cell content={<TaskDeleteDialog />} />
            </Table.Row>
          )
        })
        }
      </Table>
      <TaskDetailDialog taskStore={store} />
      <TaskUpdateDialog taskStore={store} />
    </React.Fragment>
  )
})


export default MyTasks;