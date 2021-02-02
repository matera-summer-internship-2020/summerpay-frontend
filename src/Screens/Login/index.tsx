import { Container, Text, View, Button } from 'native-base';
import React from 'react';
import { CentralNavigationService } from '../../Services/Navigation';
import { TouchableOpacity } from 'react-native';

import { AppStackParamList } from '../../types';
import Styles from './styles';
import GenericInput from '../../Components/GenericInput';
import {cpfMask} from '../../Helpers/Masks';
import Logo from '../../Assets/Images/logo.svg';

const Login: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<AppStackParamList>();
  const [cpfValue, setCpfValue] = React.useState<string>('');
  const [passwordValue, setPasswordValue] = React.useState<string>('');

  const disableLogin = (cpfValue: string, passwordValue: string) => {
    if (cpfValue.length === 14 && passwordValue.length !== 0) {
      return false;
    } else {
      return true;
    }
  };

  const onCpfChange = (value: string): void => {
    setCpfValue(value);
  };

  const onPasswordChange = (value: string): void => {
    setPasswordValue(value);
  };

  return (
    <Container style={Styles().mainContainer}>
      <Logo height={'200'} width={'200'} />
      <View style={Styles().viewFakeLogo}/>
      <View style={Styles().viewLoginData}>
      <Text style={Styles().textTitle}>Acesse sua conta</Text>
      <GenericInput 
        disabled={false}
        keyboardType={'numeric'}
        label={'CPF'}
        maxLength={14}
        placeholder={'000.000.000-00'}
        value={cpfMask(cpfValue)}
        onChange={onCpfChange}
        />
      <View style={Styles().viewSpaceBetween}/>
      <GenericInput 
        disabled={false}
        hidePassword={true}
        keyboardType={'numeric'}
        label={'Senha'}
        placeholder={'-   -   -   -   -   -'}
        value={passwordValue}
        onChange={onPasswordChange}
        />
      <Button
      disabled={disableLogin(cpfValue, passwordValue)}
      onPress={() => void {}} 
      style={Styles({disabledButton: disableLogin(cpfValue, passwordValue)}).buttonLogin}>
        <Text style={Styles().textButtonLogin}>Entrar</Text>
      </Button>
      </View>
      <Text style={Styles().textSignIn}>Não possui conta ainda?</Text>
      <TouchableOpacity
      onPress={() => centralNavigationService.navigate('Onboarding')} 
      style={Styles().buttonSignIn}
      >
        <Text style={Styles().textButtonSignIn}>Cadastre-se aqui</Text>
      </TouchableOpacity>

    </Container>
  );
};

export default Login;
