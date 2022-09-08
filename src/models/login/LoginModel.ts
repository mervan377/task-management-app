export interface IUserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  jwtToken: string;
  department: string;
}

export interface ILoginModel {
  email: string;
  password: string;
}

export enum Departments {
  HumanResources = 1,
  Sales = 2,
  Marketing = 3,
}
