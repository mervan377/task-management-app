import { Form, FormButton, FormInput } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { strings } from '../../i18n';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { authStore } from './stores/authStore';

interface ILoginFormProps { }

const Login: React.FC<ILoginFormProps> = observer(() => {
  const { t } = strings

  const loginValidationSchema = yup.object({
    email: yup.string().email().required("Email is can not be empty!"),
    password: yup.string().min(6, t("form.min_length")).max(13, t("form.max_length")).required("Password field must be filled!"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      authStore.login()
    },
  });

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-center">
          <div className="log-header">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1OjKY1KKU5K4Yym9v7bJbBQoJuskcHgx8A&usqp=CAU' className='logo' alt='' />
          </div>
          <h2>{t("ui.userLoginTitle")}</h2>
          <Form>
            <FormInput
              name="email"
              id="email"
              type='email'
              label={t("ui.email")}
              placeholder={t("ui.emailPlaceholder")}
              value={authStore.loginModel.email}
              fluid
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.email = value;
                loginFormik.values.email = value
                loginFormik.handleChange(e)
              }}
              error={!Boolean(loginFormik.touched.email) && !Boolean(loginFormik.errors.email)}
              errorMessage={Boolean(loginFormik.touched.email) && loginFormik.errors.email}
            />
            <FormInput
              name="password"
              id="password"
              type="password"
              label={t("ui.password")}
              style={{ color: "#bbb" }}
              placeholder={t("ui.passwordPlaceholder")}
              fluid
              value={authStore.loginModel.password}
              onChange={(e) => {
                const value = (e.target as any).value;
                authStore.loginModel.password = value;
                loginFormik.values.password = value
                loginFormik.handleChange(e)
              }}
              error={!Boolean(loginFormik.touched.email) && !Boolean(loginFormik.errors.email)}
              errorMessage={Boolean(loginFormik.touched.password) && loginFormik.errors.password}
            />
            <FormButton onClick={() => {
              loginFormik.handleSubmit()
            }} content={t("menus.login")} key="login" style={{ float: "right" }} primary />

          </Form>
        </div>
      </div>
    </div>
  )
})

export default Login