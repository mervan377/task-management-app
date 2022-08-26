import * as React from 'react';
import { Dropdown, Table } from '@fluentui/react-northstar';
import TaskDetailDialog from './components/TaskDetailDialog'


const inputItems = [
  'Reject Task',
  'Complete Task',
  'Pending Task'
];

const header = {
  key: 'header',
  className: 'table-header',
  items: [
    { content: 'Created by', key: 'name' },
    { content: 'Created Department by', key: 'credep' },
    { content: 'Assigned Department', key: 'assigneddep' },
    { content: 'Title', key: 'title' },
    { content: 'See Detail', key: 'seedetail' },
    { content: 'Task Status', key: 'taskstatus' },
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
      { content: <TaskDetailDialog />, key: '5-0' },
      {
        content: <Dropdown fluid
          items={inputItems}
          placeholder="Select Status"
          checkable
        />, key: '6-0'
      },
    ],
  },

];

const PendingTasks = () => (
  <Table variables={{ cellContentOverflow: 'none' }} header={header} rows={rowsPlain} aria-label="Static table" />
);

export default PendingTasks;