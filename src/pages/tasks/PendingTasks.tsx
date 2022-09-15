import * as React from 'react';
import { AddIcon, Button, Dropdown, ExpandIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';

import TaskDetailDialog from '../../components/TaskDetailDialog';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';
import AreYouSure from '../../components/AreYouSure';

const inputItems = [
  'Reject',
  'Complete'
];

interface IPendingTaskFormProps {
}

const PendingTasks: React.FC<IPendingTaskFormProps> = observer(() => {

  const { pendingTasks, getDepartmentAsString, changeStatusModalOpen, setSelectedTask, changeDetailPopupVisibility, getStatusAsString, isDeleteFormOpen, isUpdateFormOpen, isStatusModalOpen, changeAreYouSurePopupVisibility } = store;


  React.useEffect(() => {
    store.initializesPendingTasks();
  }, [])


  return (
    <React.Fragment>
      <Button content="Create Task" icon={<AddIcon />} iconPosition="after" onClick={() => {
        store.initializeSelectedTask()
        store.changeCreatePopupVisibility(true)
      }} />
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
              <Table.Cell content={<Dropdown fluid
                items={inputItems}
                checkable
                value={getStatusAsString(task.status)}
                onChange={(e, selectedOption) => {
                  setSelectedTask(task);
                  changeAreYouSurePopupVisibility(true)
                  changeStatusModalOpen(selectedOption.value)
                }}
              />} />
            </Table.Row>
          )
        })
        }
      </Table>

      <AreYouSure taskStore={store} isUpdate={isUpdateFormOpen} isDelete={isDeleteFormOpen} isStatus={isStatusModalOpen} />
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>

  )
})


export default PendingTasks;