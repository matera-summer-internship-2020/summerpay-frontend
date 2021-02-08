import { Container, Text, View } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import ProgressBar from '../../../Components/ProgressBar';
import Styles from './styles';
import GenericInput from '../../../Components/GenericInput';
import ButtonComponent from '../../../Components/ButtonComponent';
import { CentralNavigationService } from '../../../Services/Navigation';
import { OnboardingStackParamList } from '../types';
import { changePasswordAction } from '../../../Ducks/Onboarding/Actions';
import { useDispatch } from 'react-redux';

const Password: React.FunctionComponent = () => {
  const [firstInputValue, setFirstInputValue] = React.useState<string>('');
  const [secondInputValue, setSecondInputValue] = React.useState<string>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();
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
    return ((secondPasswordStringValidator() !== '' || firstPasswordStringValidator() !== '') 
    || 
    (firstInputValue === '' || secondInputValue === ''))
  };

  const onPress = (): void => {
    dispatch(changePasswordAction(secondInputValue));
    // centralNavigationService.navigate('Finish');
  };

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={7} numberOfSteps={7}/>
      <ScrollView style={Styles.inputAndLabelView}>
        <Text style={Styles.instructionText}>
          Por fim, insira uma senha numérica de 6 dígitos e confime:
        </Text>
        <View style={Styles.inputView}>
          <View style={Styles.individualInputView}>
            <GenericInput
              error={
                passwordBooleanValidator() 
                ? firstPasswordStringValidator()
                : ''
              }
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
              error={
                passwordBooleanValidator() 
                ? secondPasswordStringValidator()
                : ''
              }
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