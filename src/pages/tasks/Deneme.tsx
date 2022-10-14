import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Field,
  FieldProps,
  useFormik,
} from 'formik';
import * as yup from 'yup';
import { Form } from '@fluentui/react-northstar';
 

const Deneme: React.FC<{}> = () => { 


  // const loginValidationSchema = yup.object({
  //   email: yup.string().required("Email is can not be empty!"),
  //   password: yup.string().required("Password field must be filled!"),
  // });

  // const loginFormik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: loginValidationSchema,
  //   onSubmit: (values) => {
  //     console.log(values.email)
  //   },
  // });


  return (
    <div>
      <h1>My Example</h1>

      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="First Name" />
        
        <button type="submit" onClick={()=> {
          console.log("fewfew")
        }}>Submit</button>
      </Form>
    </div>
  );
};

export default Deneme