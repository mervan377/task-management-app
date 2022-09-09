import { Form, FormButton, FormInput, Input } from '@fluentui/react-northstar';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
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
              // console.log(toJS(authStore.loginModel))
              authStore.login()
            }}
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
              value={authStore.loginModel.email}
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.email = value;
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