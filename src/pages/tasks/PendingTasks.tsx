import * as React from 'react';
import { Dropdown, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';
import { TaskStore } from './stores/TaskStore';

import TaskDetailDialog from './components/TaskDetailDialog';
import { observer } from 'mobx-react-lite';

const inputItems = [
  'Reject Task',
  'Complete Task',
  'Pending Task'
];

const PendingTasks: React.FC<any> = observer(() => {

  const store = React.useMemo(() => new TaskStore(), [])
  const { pendingTasks, getDepartmentAsString } = store;
  return (
    <Table aria-label="table">
      <Table.Row header className='table-header'>
        <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
        <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
        <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
        <Table.Cell content="See Detail" accessibility={tableHeaderCellBehavior} /> 
        <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
      </Table.Row>
      {pendingTasks.map((task, index) => {
        return (
          <Table.Row>
            <Table.Cell content={task.title} />
            <Table.Cell content={task.user.name} />
            <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} /> 
            <Table.Cell content={<TaskDetailDialog taskStore={store}/>} />
            <Table.Cell content={<Dropdown fluid
              items={inputItems}
              placeholder="Select Status"
              checkable
            />} /> 
          </Table.Row>
        )
      })
      }
    </Table>
  )
})


export default PendingTasks;