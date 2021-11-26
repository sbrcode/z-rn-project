import React, { useRef, useContext } from 'react';
import * as Yup from 'yup';

import Form from '../../components/formik/Form';
import UserContext from '../../contexts/UserContext';
import TextField from '../../components/formik/TextField';
import PasswordField from '../../components/formik/PasswordField';
import SubmitButton from '../../components/formik/SubmitButton';
import i18n from 'src/utils/localization/I18n';
import FormView from '../../components/formik/FormView';

export default function LoginPage() {
  const { login } = useContext(UserContext);
  const passwordInput = useRef();
  const schema = Yup.object().shape({
    login: Yup.string()
      .email(i18n.t('error.notValidEmail'))
      .required(i18n.t('error.notBlankEmail')),
    password: Yup.string()
      .min(8, i18n.t('error.notEnoughChar', { count: 8 }))
      .required(i18n.t('error.notBlankPassword')),
  });
  const initialValues = {
    login: (__DEV__ && 'user@test.tech') || '',
    password: (__DEV__ && 'password') || '',
  };

  return (
    <FormView>
      <Form onSubmit={login} initialValues={initialValues} schema={schema}>
        <>
          <TextField
            name='login'
            label={i18n.t('auth.email')}
            onSubmitEditing={() => passwordInput.current.focus()}
          />
          <PasswordField
            innerRef={passwordInput}
            name='password'
            label={i18n.t('auth.password')}
          />
          <SubmitButton label={i18n.t('auth.login')} />
        </>
      </Form>
    </FormView>
  );
}
