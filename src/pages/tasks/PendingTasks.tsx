import * as React from 'react';
import { Button, Loader, Table, tableHeaderCellBehavior, ZoomInIcon } from '@fluentui/react-northstar';

import TaskPendingDialog from '../../components/TaskPendingDialog';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';


interface IPendingTasksProps { }

const PendingTasks: React.FC<IPendingTasksProps> = observer(() => {
  const { pendingTasks,isLoading, getDepartmentAsString, setSelectedTask, changePendingPopupVisibility: changePendingDetailPopupVisibility, getStatusAsString } = store;
  React.useEffect(() => {
    store.initializesPendingTasks();
  }, [])

  if(isLoading) return <div><Loader size="largest" label="Loading datas" labelPosition="below" /></div>

  
  return (
    <React.Fragment>

      <Table aria-label="table">
        <Table.Row header className='table-header'>
          <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Actions" accessibility={tableHeaderCellBehavior} />
        </Table.Row>

        {
          pendingTasks.length ? (
            <>
              {pendingTasks.map((task, index) => {
                return (
                  <Table.Row>
                    <Table.Cell content={task.title} />
                    <Table.Cell content={task.user.name} />
                    <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
                    <Table.Cell content={getStatusAsString(task.status)} />
                    <Table.Cell content={<Button content="" icon={<ZoomInIcon />} iconPosition="after" onClick={() => {
                      setSelectedTask(task)
                      changePendingDetailPopupVisibility(true)
                    }} />} />
                  </Table.Row>
                )
              })}
            </>
          ) : (
            <h1>No Task Found</h1>
          )
        }
      </Table>

      <TaskCreateDialog taskStore={store} />
      <TaskPendingDialog taskStore={store} />
    </React.Fragment>

  )
})


export default PendingTasks;