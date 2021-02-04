import { Container, Text, View } from 'native-base';
import React from 'react';
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

  const passwordStringValidator = (): string => {
    if (secondInputValue.length !== 6 && secondInputValue !== '') {
      return 'Senha precisa ter 6 dígitos';
    } else if (firstInputValue !== secondInputValue && secondInputValue !== firstInputValue) {
      return 'Senhas precisam ser iguais';
    }
    return '';
  };

  const passwordBooleanValidator = (): boolean => {
    return (passwordStringValidator() !== '')
  };

  const onPress = (): void => {
    dispatch(changePasswordAction(secondInputValue));
    // centralNavigationService.navigate('');
  };

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={7} numberOfSteps={7}/>
      <View style={Styles.inputAndLabelView}>
        <Text style={Styles.instructionText}>
          Por fim, insira uma senha numérica de 6 dígitos e confime:
        </Text>
        <View style={Styles.inputView}>
          <View style={Styles.individualInputView}>
            <GenericInput
              error={
                firstInputValue.length !== 6 && firstInputValue !== '' 
                ? 'Senha precisa ter 6 dígitos'
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
                ? passwordStringValidator()
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
        <ButtonComponent 
          size={'m'} 
          disabled={passwordBooleanValidator()} 
          mainButton={true}
          text={'Finalizar'} 
          onPress={onPress} 
        /> 
      </View>
    </Container>
  );
};

export default Password;