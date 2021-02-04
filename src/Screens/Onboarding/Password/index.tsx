import { Container, Text, View } from 'native-base';
import React from 'react';
import ProgressBar from '../../../Components/ProgressBar';
import Styles from './styles';
import GenericInput from '../../../Components/GenericInput';
import ButtonComponent from '../../../Components/ButtonComponent';
import { CentralNavigationService } from '../../../Services/Navigation';
import { OnboardingActionTypes } from '../../../Ducks/Onboarding/types';
import { OnboardingStackParamList } from '../types';

const Password: React.FunctionComponent = () => {
  const [firstInputValue, setFirstInputValue] = React.useState<string>('');
  const [secondInputValue, setSecondInputValue] = React.useState<string>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const onFirstInputChange = (value: string): void => {
    setFirstInputValue(value);
  };

  const onSecondInputChange = (value: string): void => {
    setSecondInputValue(value);
  };

  const passwordStringValidator = (firstValue: string, secondValue: string): string => {
    return 'Senhas são diferentes';
  };

  const passwordBooleanValidator = (value: string): boolean => {
    return true;
  };

  const onPress = (): void => {
    centralNavigationService.navigate('Document');
  };

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={7} numberOfSteps={7}/>
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.instructionText}>
          Por fim, insira uma senha de 6 dígitos e confime:
        </Text>
        <View style={Styles.inputView}>
          <GenericInput
            error={
              ''
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
        <View style={Styles.inputView}>
          <GenericInput
            error={
              ''
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
        <ButtonComponent 
          size={'m'} 
          disabled={passwordBooleanValidator('firstInputValue')} 
          mainButton={true}
          text={'Finalizar'} 
          onPress={onPress} 
        /> 
      </Container>
    </Container>
  );
};

export default Password;