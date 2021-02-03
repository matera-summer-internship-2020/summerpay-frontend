import { Container, Text, View } from 'native-base';
import React from 'react';
import { CentralNavigationService } from '../../Services/Navigation';
import { TouchableOpacity } from 'react-native';
import { AppStackParamList } from '../../types';
import Styles from './styles';
import GenericInput from '../../Components/GenericInput';
import { cpfMask } from '../../Helpers/Masks';
import Logo from '../../Assets/Images/logo.svg';
import LoginBackground from '../../Assets/Images/login-background.svg';
import ButtonComponent from '../../Components/ButtonComponent';
import { changeClientCpfAction } from '../../Ducks/Login/Actions';
import { useDispatch } from 'react-redux'; 

const Login: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<AppStackParamList>();
  const [cpfValue, setCpfValue] = React.useState<string>('');
  const [passwordValue, setPasswordValue] = React.useState<string>('');
  const dispatch = useDispatch();

  const disableLogin = (cpfValue: string, passwordValue: string) => {
    return (cpfValue.length !== 14 || passwordValue.length === 0)
  };

  const onCpfChange = (value: string): void => {
    setCpfValue(value);
  };

  const onPasswordChange = (value: string): void => {
    setPasswordValue(value);
  };

  const onLoginPress = (clientCPF: string): void => {
    dispatch(changeClientCpfAction(clientCPF));
  };

  return (
    <Container style={Styles.mainContainer}>
      <LoginBackground width={'100%'} height={'100%'} style={Styles.imageBackground}/>
      <View style={Styles.viewLogo}>
        <Logo width={'200'} />
      </View>
      <View style={Styles.viewLoginData}>
        <Text style={Styles.textTitle}>Acesse sua conta</Text>
        <GenericInput 
          disabled={false}
          keyboardType={'numeric'}
          label={'CPF'}
          maxLength={14}
          placeholder={'000.000.000-00'}
          value={cpfMask(cpfValue)}
          onChange={onCpfChange}
          />
        <View style={{height: 16}}/>
        <GenericInput 
          disabled={false}
          hidePassword={true}
          keyboardType={'numeric'}
          label={'Senha'}
          placeholder={'-   -   -   -   -   -   -   -'}
          value={passwordValue}
          onChange={onPasswordChange}
          />
        <View style={{height: 32}}/>
        <ButtonComponent 
        size={'l'} 
        disabled={disableLogin(cpfValue, passwordValue)} 
        mainButton={true} 
        text={'Entrar'} 
        onPress={() => onLoginPress(cpfValue.replace(/\D/g, ''))}
        />
      </View>
      <Text style={Styles.textSignIn}>Não possui conta ainda?</Text>
      <TouchableOpacity
      onPress={() => void {}} 
      style={Styles.buttonSignIn}
      >
        <Text style={Styles.textButtonSignIn}>Cadastre-se aqui</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
