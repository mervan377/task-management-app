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

interface IMyTasksProps {
  selectedTask?: ITaskModel
}
const MyTasks: React.FC<IMyTasksProps> = observer(() => {
  const { myTasks, isLoading } = store;
  const { getStatusAsString, getDepartmentAsString } = BringAsString
  React.useEffect(() => {
    store.initializesMyTasks();
  }, [])
  if (isLoading) return <div><Loader size="largest" label="Loading datas" labelPosition="below" /></div>
  return (
    <React.Fragment> 
     
      {
        myTasks.length ? (
          <>
            <Table aria-label="table" >
              <Table.Row header className='table-header'>
                <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
                <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
                <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
                <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
                <Table.Cell content="Actions" accessibility={tableHeaderCellBehavior} />
              </Table.Row>
              {myTasks.map((task, index) => {
                return (
                  <Table.Row key={`${index}`} className={
                    store.isTaskUpdated && store.isTaskEditedID === task.id ? "greenbackground" : "" || store.isTaskAdd ? "greenbackground-add" : ""
                  }>
                    <Table.Cell content={task.title} />
                    <Table.Cell content={task.user.name} />
                    <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
                    {
                      getStatusAsString(task.status) === "Pending" ? (
                        <>
                          <Table.Cell content={
                            <div>
                              <Status state={"warning"} title="warning" /> <code>{getStatusAsString(task.status)}</code>
                            </div>
                          } />
                        </>
                      ) : ""
                    }
                    {
                      getStatusAsString(task.status) === "Completed" ? (
                        <>
                          <Table.Cell content={
                            <div>
                              <Status state={"success"} title="success" /> <code>{getStatusAsString(task.status)}</code>
                            </div>
                          } />
                        </>
                      ) : ""
                    }
                    {
                      getStatusAsString(task.status) === "Rejected" ? (
                        <>
                          <Table.Cell content={
                            <div>
                              <Status state={"error"} title="error" /> <code>{getStatusAsString(task.status)}</code>
                            </div>
                          } />
                        </>
                      ) : ""
                    }
                    <Table.Cell content={
                      <>
                        <Button content="" icon={<ZoomInIcon />} iconPosition="after" onClick={() => {
                          store.setSelectedTask(task)
                          store.changeDetailPopupVisibility(true)
                        }} />
                        {
                          task.status === 0 ? (
                            <>
                              <Button content="" icon={<EditIcon />} iconPosition="after" onClick={() => {
                                store.setSelectedTask(task)
                                store.changeUpdatePopupVisibility(true)
                              }} />
                              <Button content="" icon={<TrashCanIcon />} iconPosition="after" onClick={() => {
                                store.setSelectedTask(task)
                                store.changeDeletePopupVisibility(true)
                              }} />
                            </>
                          ) : (
                            null
                          )
                        }
                      </>
                    } />
                  </Table.Row>
                )
              })
              }
            </Table>
          </>
        ) : (
          <>
            <Alert variables={{ urgent: true }}>
              <h1>No Task Found</h1>
            </Alert>
          </>
        )
      }
      <TaskFormEmptyDialog />
      <TaskCreateDialog taskStore={store} />
      <TaskDeleteDialog taskStore={store} />
      <TaskUpdateDialog taskStore={store} />
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})
export default MyTasks;