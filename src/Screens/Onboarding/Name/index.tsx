import { Container, Text, View } from 'native-base';
import React from 'react';
import ButtonComponent from '../../../Components/ButtonComponent';
import GenericInput from '../../../Components/GenericInput';
import ProgressBar from '../../../Components/ProgressBar';
import Styles from './styles';
import { CentralNavigationService } from '../../../Services/Navigation'
import { OnboardingStackParamList } from '../types';
import {useDispatch} from 'react-redux';

import {changeNameAction} from '../../../Ducks/Onboarding/Actions';

const Name: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const dispatch: any = useDispatch();

  const onChange = (value: string): void => {
    setInputValue(value);
  };

  const onPress = (): void => {

    dispatch(changeNameAction(inputValue));

    // centralNavigationService.navigate('Document');
  };

  const validateInput = (input: string): boolean => {
    let names: string[] = input.split(" ").filter(i => i.length > 1);
    if (names.length > 1) {
      return true;
    }
    return false;
  }

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={1} numberOfSteps={7}/>
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.instructionText}>Para começar, qual é o seu nome completo?</Text>
        <View style={Styles.inputView}>
          <GenericInput keyboardType='default' placeholder='Nome completo' value={inputValue} onChange={onChange}/>
        </View>
        <ButtonComponent disabled={!validateInput(inputValue)} mainButton={true} text="Próximo" size='m' onPress={onPress}/>
      </Container>
    </Container>
  );
};

export default Name;
