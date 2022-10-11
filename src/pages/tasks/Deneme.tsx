import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Formik } from 'formik';


interface Ifff { }

const initialValue = {
  title: "",
  description: ""
}

const fff: React.FC<Ifff> = observer(() => {

  return (
    <React.Fragment>

      <Formik initialValues={initialValue} onSubmit={(values, formikHelpers) => {
        console.log(values)
      }}>
        {
          () => (

            <Form>

            </Form>

          )
        }
      </Formik>

    </React.Fragment>
  )
})

export default fff;