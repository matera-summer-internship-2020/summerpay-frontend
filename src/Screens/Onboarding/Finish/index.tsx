import { Container, Text, View } from 'native-base';
import React from 'react';
import ConfirmOnbording from '../../../Assets/Images/confirm.svg';
import ButtonComponent from '../../../Components/ButtonComponent';

import { CentralNavigationService } from '../../../Services/Navigation';
import { OnboardingStackParamList } from '../types';

import Styles from './styles';

const Phone: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const onPress = (): void => {
    // centralNavigationService.navigate('Login(?)')
  };

  return (
    <Container style={Styles.container}>
      <View style={Styles.lineContainer}>
        <View style={Styles.lineStyle} />
      </View>
      <ConfirmOnbording width={'17%'} height={'17%'} style={Styles.confirmImage} />
      <Text style={Styles.mainText}>Conta criada com sucesso!</Text>
      <Container style={Styles.bottomContainer}>
        <Text style={Styles.secundaryText}>
          Após isso, é só entrar no app com o seu CPF e a senha cadastrada, e aproveitar!
        </Text>
        <ButtonComponent
          size={'m'}
          disabled={false}
          mainButton={true}
          text={'Voltar para o início'}
          onPress={onPress}
        />
      </Container>
    </Container>
  );
};

export default Phone;
