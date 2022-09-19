import * as React from 'react';
import { Button, ExpandIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';
import { store } from './stores/TaskStore';
import TaskDetailDialog from '../../components/TaskDetailDialog';
import { observer } from 'mobx-react-lite';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import CreateButton from '../../components/CreateButton';

interface IAllTasksProps {}

const AllTasks: React.FC<IAllTasksProps> = observer(() => {

  const { allTasks, getStatusAsString, getDepartmentAsString } = store;

  React.useEffect(() => {
    store.initializesAllTasks()
  }, [])

  return (
    <React.Fragment>

      <CreateButton />

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
            <Table.Row key={index}>
              <Table.Cell content={task.title} />
              <Table.Cell content={task.user.name} />
              <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
              <Table.Cell content={getStatusAsString(task.status)} />
              <Table.Cell content={<Button content="Detail Task" icon={<ExpandIcon />} iconPosition="after" onClick={() => {
                store.setSelectedTask(task)
                store.changeDetailPopupVisibility(true)
              }} />} />
            </Table.Row>
          )
        })
        }
      </Table>
      <TaskCreateDialog taskStore={store} />
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})
export default AllTasks;