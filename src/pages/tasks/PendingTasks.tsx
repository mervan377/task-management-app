import * as React from 'react';
import { Button, ExpandIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';

import TaskDetailDialog from '../../components/TaskDetailDialog';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import CreateButton from '../../components/CreateButton';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';


interface IPendingTasksProps { }

const PendingTasks: React.FC<IPendingTasksProps> = observer(() => {
  const { pendingTasks, getDepartmentAsString, setSelectedTask, changeDetailPopupVisibility, getStatusAsString } = store;
  React.useEffect(() => {
    store.initializesPendingTasks();
  }, [])
  return (
    <React.Fragment>
      <CreateButton />
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
              <Table.Cell content={<Button content="Detail Task" icon={<ExpandIcon />} iconPosition="after" onClick={() => {
                setSelectedTask(task)
                changeDetailPopupVisibility(true)
              }} />} />
              <Table.Cell content={ getStatusAsString(task.status)
              // <Dropdown fluid
              //   items={inputItems}
              //   checkable
              //   value={getStatusAsString(task.status)}
              //   onChange={(e, selectedOption) => {
              //     setSelectedTask(task);
              //     changeAreYouSurePopupVisibility(true)
              //     changeStatusModalOpen(selectedOption.value)
              //   }}
              // />
            }/>
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


export default PendingTasks;