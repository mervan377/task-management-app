import { Form, FormButton, FormInput, Input } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { authStore } from './stores/authStore';

interface ILoginFormProps {
}

const Login: React.FC<ILoginFormProps> = observer(() => {

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-center">
          <Form
            onSubmit={() => {
              authStore.login()
            }}
          >
            <Input
              name="email"
              id="email"
              type='email'
              placeholder='Email'
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
              placeholder='Password'
              fluid
              value={authStore.loginModel.password}
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.password = value;
              }}
            />
            <FormButton content="Submit" key="submit" />
          </Form>
        </div>
      </div>
    </div>
  )
})

export default Login