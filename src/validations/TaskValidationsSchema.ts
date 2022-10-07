import yup from "./Validations";

/* Task Create Schema */
export const createTaskSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  assignedDepartment: yup.string(),
});
