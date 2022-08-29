export interface ITaskModel{
    id: number,
    title: string,
    description: string,
    user: ITaskUserModel,
    assignedDepartment: Departments,
    status: TaskStatus,
    logs: ITaskLogModel[]
}

export interface ITaskUserModel {
    id: number,
    name: string
}

export interface ITaskLogModel {
    userName: string,
    action: string,
    date: Date
}

export enum TaskStatus {
    Pending = 0,
    Completed = 1,
    Rejected = 2,
}

export enum Departments {
    HumanResources = 1,
    Sales = 2,
    Marketing = 3,
}