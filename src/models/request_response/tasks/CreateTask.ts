// Axios requestinde gonderilecek datanin tipi. Task creatte kullanilacak
export interface ITaskCreateRequestModel {
    title: string,
    description: string,
    assignedDepartment: number,
}

export interface ITaskUpdateRequestModel {
    title: string,
    description: string
}