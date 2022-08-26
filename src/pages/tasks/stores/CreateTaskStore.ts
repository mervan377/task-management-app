import { action, makeObservable, observable } from "mobx";

interface CreateTask {
  title: string;
  description: string;
  assignment: string;
}

export class CreateTaskStoreImpl {
  tasks: CreateTask[] = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
    });
  }

  addTask(title: string) {
    const taskItems: CreateTask = {
      title: title,
      description: "desc",
      assignment: "Neler neler",
    };
    alert(title)
    this.tasks.push(taskItems);
  }
}


export const CreateTaskStore = new CreateTaskStoreImpl()