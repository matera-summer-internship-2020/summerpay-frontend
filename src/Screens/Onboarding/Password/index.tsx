import { Container, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';

import ButtonComponent from '../../../Components/ButtonComponent';
import GenericInput from '../../../Components/GenericInput';
import ProgressBar from '../../../Components/ProgressBar';

import { changePasswordAction, createAccountAction } from '../../../Ducks/Onboarding/Actions';

import Styles from './styles';

const Password: React.FunctionComponent = () => {
  const [firstInputValue, setFirstInputValue] = React.useState<string>('');
  const [secondInputValue, setSecondInputValue] = React.useState<string>('');
  const [loadingSpinner, setloadingSpinner] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const onFirstInputChange = (value: string): void => {
    setFirstInputValue(value);
  };

  const onSecondInputChange = (value: string): void => {
    setSecondInputValue(value);
  };

  const firstPasswordStringValidator = (): string => {
    const isFirstNum = /^\d+$/.test(firstInputValue);
    if (firstInputValue !== '') {
      if (firstInputValue.length !== 6) {
        return 'Senha deve ter 6 dígitos';
      } else if (!isFirstNum) {
        return 'Senha deve conter apenas números';
      }
    }

    return '';
  };

  const secondPasswordStringValidator = (): string => {
    const isSecondNum = /^\d+$/.test(secondInputValue);
    if (secondInputValue !== '') {
      if (secondInputValue.length !== 6) {
        return 'Senha deve ter 6 dígitos';
      } else if (!isSecondNum) {
        return 'Senha deve conter apenas números';
      } else if (secondInputValue !== firstInputValue) {
        return 'Senhas precisam ser iguais';
      }
    }

    return '';
  };

  const passwordBooleanValidator = (): boolean => {
    return (
      secondPasswordStringValidator() !== '' ||
      firstPasswordStringValidator() !== '' ||
      firstInputValue === '' ||
      secondInputValue === ''
    );
  };

  const onPress = (): void => {
    setloadingSpinner(true);
    dispatch(changePasswordAction(secondInputValue));
    dispatch(createAccountAction());
  };

  return (
    <Container style={Styles.container}>
      <ActivityIndicator style={Styles.loadingSpinner} animating={loadingSpinner} size="large" color="#CC7600" />
      {/* TODO: change number of steps if we add confirmation screen */}
      <ProgressBar currentStep={6} numberOfSteps={6} />
      <ScrollView style={Styles.inputAndLabelView}>
        <Text style={Styles.instructionText}>Por fim, insira uma senha numérica de 6 dígitos e confime:</Text>
        <View style={Styles.inputView}>
          <View style={Styles.individualInputView}>
            <GenericInput
              error={passwordBooleanValidator() ? firstPasswordStringValidator() : ''}
              label={'Senha'}
              hidePassword={true}
              keyboardType={'numeric'}
              maxLength={6}
              placeholder={'-   -   -   -   -   -'}
              value={firstInputValue}
              onChange={onFirstInputChange}
            />
          </View>
          <View style={Styles.individualInputView}>
            <GenericInput
              error={passwordBooleanValidator() ? secondPasswordStringValidator() : ''}
              label={'Confirme sua senha'}
              hidePassword={true}
              keyboardType={'numeric'}
              maxLength={6}
              placeholder={'-   -   -   -   -   -'}
              value={secondInputValue}
              onChange={onSecondInputChange}
            />
          </View>
        </View>
      </ScrollView>
      <ButtonComponent
        size={'m'}
        disabled={passwordBooleanValidator()}
        mainButton={true}
        text={'Finalizar'}
        onPress={onPress}
      />
    </Container>
  );
};

export default Password;
