import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Alert, Button, Loader, Status, Table, tableHeaderCellBehavior, ZoomInIcon } from '@fluentui/react-northstar';
import { store } from './stores/TaskStore';
import TaskDetailDialog from '../../components/TaskDetailDialog';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import { BringAsString } from '../../services/services';
import TaskFormEmptyDialog from '../../components/TaskFormIsEmptyDialog';
import { strings } from '../../i18n';

interface IAllTasksProps { }
const AllTasks: React.FC<IAllTasksProps> = observer(() => {
  const { allTasks, isLoading, initializesAllTasks } = store;
  const { getStatusAsString, getDepartmentAsString } = BringAsString;
  React.useEffect(() => {
    initializesAllTasks()
  }, [])

  const { t } = strings


  if (isLoading) return <div><Loader size="largest" label="Loading datas" labelPosition="below" /></div>
  return (
    <React.Fragment>
      {
        allTasks.length ? (
          <>
            <Table aria-label="table" >
              <Table.Row header className='table-header'>
                <Table.Cell content={t("ui.title")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.createdBy")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.assignedDepartment")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.statusTask")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.actionsTask")} accessibility={tableHeaderCellBehavior} />
              </Table.Row>
              {allTasks.map((task, index) => {
                return (
                  <Table.Row key={`${index}`} className={
                    store.isTaskAdd ? "greenbackground-add" : ""
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

                    <Table.Cell content={<Button content="" icon={<ZoomInIcon />} iconPosition="after" onClick={() => {
                      store.setSelectedTask(task)
                      store.changeDetailPopupVisibility(true)
                    }} />} />
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
      <TaskDetailDialog taskStore={store} />
    </React.Fragment>
  )
})
export default AllTasks;