import { Form, FormButton, FormInput, Input } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { ILoginModel, IUserModel } from '../../models/login/LoginModel';
import { authStore } from './stores/authStore';

interface ILoginFormProps {
}

const Login: React.FC<ILoginFormProps> = observer(() => {
  const { selectedUser } = authStore
  return (
    <div>
      <div className="login-wrapper">
        <div className="login-center">
          <Form
          // onSubmit={() => {
          //   authStore.setSelectedUser({
          //     email: "string@gmail.com",
          //     password: "string",

          //   })}}
          >
            <Input
              name="email"
              id="email"
              key="email"
              placeholder='Email'
              required
              inline
              showSuccessIndicator={false}
              fluid
              type='email'
              onChange={(e) => {
                const value = (e.target as any).value;
                selectedUser!.email = value
              }}
            />

            <FormInput
              name="password"
              id="password"
              key="password"
              placeholder='Password'
              inline
              showSuccessIndicator={false}
              fluid
              type='password'
            />
            <FormButton content="Submit" key="submit" />
          </Form>
        </div>
      </div>
    </div>
  )
})

export default Login