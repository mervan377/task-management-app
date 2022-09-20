import { Form, FormButton, FormInput, Input } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { authStore } from './stores/authStore';

interface ILoginFormProps { }

const Login: React.FC<ILoginFormProps> = observer(() => {

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-center">

          <div className="log-header">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className='logo' alt='' />
          </div>
          {/* <p>Task Management System for your daily stuff</p> */}

          <h2>User Login </h2>
          <Form
            onSubmit={() => {
              authStore.login()
            }}
          >
            <Input
              name="email"
              id="email"
              type='email'
              label="Email*"
              placeholder='write your email'
              value={authStore.loginModel.email}
              fluid
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.email = value;
              }}
            />

            <FormInput
              name="password"
              id="password"
              type="password"
              label="Password*"
              style={{ color: "#bbb" }}
              placeholder='write your password'
              fluid
              value={authStore.loginModel.password}
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.password = value;
              }}
            />
            <FormButton content="Login" key="login" style={{ float: "right" }} primary />
          </Form>
        </div>
      </div>
    </div>
  )
})

export default Login