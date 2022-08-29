import * as React from 'react';
import { Button, ExpandIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';
import { TaskStore } from './stores/TaskStore';
import TaskDetailDialog from './components/TaskDetailDialog';
import { observer } from 'mobx-react-lite';



const AllTasks: React.FC<any> = observer(() => {
  const store = React.useMemo(() => new TaskStore(), [])
  const { allTasks, getStatusAsString, getDepartmentAsString } = store;
  return (
    <React.Fragment>
      <Table aria-label="table">
        <Table.Row header className='table-header'>
          <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="See Detail" accessibility={tableHeaderCellBehavior} />
        </Table.Row>
        {allTasks.map((task, index) => {
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
            </Table.Row>
          )
        })
        }
      </Table>
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})
export default AllTasks;