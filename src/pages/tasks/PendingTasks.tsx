import * as React from 'react';
import { Alert, Button, Loader, Status, Table, tableHeaderCellBehavior, ZoomInIcon } from '@fluentui/react-northstar';

import TaskPendingDialog from '../../components/TaskPendingDialog';
import TaskCreateDialog from '../../components/TaskCreateDialog';
import { BringAsString } from '../../services/services';
import { observer } from 'mobx-react-lite';
import { store } from './stores/TaskStore';
import { strings } from "../../i18n"


interface IPendingTasksProps { }

const PendingTasks: React.FC<IPendingTasksProps> = observer(() => {
  const { pendingTasks, isLoading, setSelectedTask, changePendingPopupVisibility: changePendingDetailPopupVisibility } = store;
  const { getDepartmentAsString, getStatusAsString } = BringAsString

  const { t } = strings;

  React.useEffect(() => {
    store.initializesPendingTasks();
  }, [])

  if (isLoading) return <div><Loader size="largest" label="Loading datas" labelPosition="below" /></div>


  return (
    <React.Fragment>
      {
        pendingTasks.length ? (
          <>
            <Table aria-label="table">
              <Table.Row header className='table-header'>
                <Table.Cell content={t("ui.title")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.createdBy")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.assignedDepartment")} accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.statusTask")}accessibility={tableHeaderCellBehavior} />
                <Table.Cell content={t("ui.actionsTask")} accessibility={tableHeaderCellBehavior} />
              </Table.Row>
              {pendingTasks.map((task, index) => {
                return (
                  <Table.Row key={`${index}`} >
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
                    <Table.Cell content={<Button content="" icon={<ZoomInIcon />} iconPosition="after" onClick={() => {
                      setSelectedTask(task)
                      changePendingDetailPopupVisibility(true)
                    }} />} />
                  </Table.Row>
                )
              })}
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
      <TaskCreateDialog taskStore={store} />
      <TaskPendingDialog taskStore={store} />
    </React.Fragment>

  )
})


export default PendingTasks;