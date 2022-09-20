import * as React from 'react';
import { Button, EditIcon, Table, tableHeaderCellBehavior, TrashCanIcon, ZoomInIcon } from '@fluentui/react-northstar';

import TaskDeleteDialog from '../../components/TaskDeleteDialog';
import TaskDetailDialog from '../../components/TaskDetailDialog';
import TaskUpdateDialog from '../../components/TaskUpdateDialog';
import TaskWarningDailog from '../../components/TaskWarningDailog'
import { observer } from 'mobx-react-lite';
import { ITaskModel } from '../../models/tasks/TaskModel';
import { store } from './stores/TaskStore';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import CreateButton from '../../components/CreateButton';

interface IMyTasksProps {
  selectedTask?: ITaskModel
}

const MyTasks: React.FC<IMyTasksProps> = observer(() => {

  const { myTasks, getStatusAsString, getDepartmentAsString } = store;

  React.useEffect(() => {
    store.initializesMyTasks();
  }, [])

  return (
    <React.Fragment>
      <CreateButton />
      <Table aria-label="table" >
        <Table.Row header className='table-header'>
          <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Actions" accessibility={tableHeaderCellBehavior} />
        </Table.Row>

        {
          myTasks.length ? (
            <>

              {myTasks.map((task, index) => {
                return (
                  <Table.Row className={
                    store.isTaskAddOrUpdated ? "greenbackground" : ""
                  }>
                    <Table.Cell content={task.title} />
                    <Table.Cell content={task.user.name} />
                    <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
                    <Table.Cell content={getStatusAsString(task.status)} />

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
            </>
          ) : (
            <h1>No Task Found</h1>
          )
        }

      </Table>

      <TaskWarningDailog />
      <TaskCreateDialog taskStore={store} />
      <TaskDeleteDialog taskStore={store} />
      <TaskUpdateDialog taskStore={store} />
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})


export default MyTasks;