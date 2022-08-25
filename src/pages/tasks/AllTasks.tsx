import * as React from 'react';
import { Pill, Status, Table } from '@fluentui/react-northstar';
import TaskDetailDialog from '../components/TaskDetailDialog';

const header = {
  key: 'header',
  className: 'table-header',
  items: [
    { content: 'Created by', key: 'name' },
    { content: 'Created Department by', key: 'credep' },
    { content: 'Assigned Department', key: 'assigneddep' },
    { content: 'Title', key: 'title' },
    { content: 'Task Status', key: 'taskstatus' },
    { content: 'See Detail', key: 'seedetail' },
  ],
};

const rowsPlain = [
  {
    key: 1,
    items: [
      { content: 'John Doe', key: '1-0' },
      { content: 'Sales Department', key: '2-0' },
      { content: 'Human Resources Management', key: '3-0' },
      { content: 'Department Employee List', key: '4-0' },
      {
        content: <Pill appearance="outline">
          <Status color="orange" size="medium" state="warning" />
          {' '} Task Pending
        </Pill>, key: '5-0'
      },
      { content: <TaskDetailDialog />, key: '6-0' },
    ],
  },

];

const AllTasks = () => (
  <Table variables={{ cellContentOverflow: 'none' }} header={header} rows={rowsPlain} aria-label="Static table" />
);

export default AllTasks;