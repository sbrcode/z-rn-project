import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';

import UserContext from '../../contexts/UserContext';
import Form from '../../components/formik/Form';
import TextField from '../../components/formik/TextField';
import PasswordField from '../../components/formik/PasswordField';
import SubmitButton from '../../components/formik/SubmitButton';
import FormView from '../../components/formik/FormView';
import Colors from '../../theme/Colors';
import CustomButton from '../../components/CustomButton';
import I18n from 'i18n-js';

const Page4 = () => {
  const { user } = useContext(UserContext);
  const [mod, setMod] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  const initialValues = {
    login: email || (__DEV__ && 'user@test.tech') || '',
    password: pwd || (__DEV__ && 'password') || '',
  };

  const schema1 = Yup.object().shape({
    login: Yup.string()
      .email(I18n.t('error.notValidEmail'))
      .required(I18n.t('error.notBlankEmail')),
  });

  const schema2 = Yup.object().shape({
    password: Yup.string()
      .min(8, I18n.t('error.notEnoughChar', { count: 8 }))
      .required(I18n.t('error.notBlankPassword')),
  });

  const ModifyButton = ({ onPress }) => (
    <CustomButton
      label={I18n.t('app.change')}
      mode={'flat'}
      color={Colors.darkorange}
      customStyle={{ padding: 0, marginTop: -5 }}
      onPress={onPress}
    />
  );

  const ValidateButton = () => (
    <SubmitButton label={I18n.t('app.save')} style={styles.submitButton} />
  );

  const modifyEmail = async (values) => {
    setMod('');
    setEmail(values.login);
  };

  const modifyPassword = async (values) => {
    setMod('');
    setPwd(values.password);
  };

  return (
    <ScrollView contentContainerStyle={styles.mainCtnr}>
      <View style={styles.avatar}>
        <MaterialCommunityIcons
          name='account-circle'
          color={Colors.darkorange}
          size={96}
        />
        <Title>{user.name}</Title>
      </View>
      <View style={styles.userInfos}>
        <MaterialCommunityIcons name='email' color={Colors.darkorange} size={24} />
        <Text style={styles.text}>{email ? email : initialValues.login}</Text>
        <ModifyButton onPress={() => setMod('modEmail')} />
      </View>
      <View style={styles.userInfos}>
        <MaterialCommunityIcons name='lock' color={Colors.darkorange} size={24} />
        <Text style={styles.text}>{pwd ? pwd : initialValues.password}</Text>
        <ModifyButton onPress={() => setMod('modPwd')} />
      </View>
      {mod === 'modEmail' ? (
        <FormView>
          <Form onSubmit={modifyEmail} initialValues={initialValues} schema={schema1}>
            <View style={styles.fields}>
              <TextField name='login' label={I18n.t('auth.email')} />
              <ValidateButton />
            </View>
          </Form>
        </FormView>
      ) : null}
      {mod === 'modPwd' ? (
        <FormView>
          <Form onSubmit={modifyPassword} initialValues={initialValues} schema={schema2}>
            <View style={styles.fields}>
              <PasswordField name='password' label={I18n.t('auth.password')} />
              <ValidateButton />
            </View>
          </Form>
        </FormView>
      ) : null}
    </ScrollView>
  );
};

export default Page4;

const styles = StyleSheet.create({
  mainCtnr: {
    flexGrow: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  userInfos: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  text: {
    color: Colors.primary,
    marginLeft: 10,
    fontSize: 20,
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: Colors.darkorange,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  fields: {
    marginHorizontal: 20,
  },
});
