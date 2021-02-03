import { Container, Text, View } from 'native-base';
import React from 'react';
import ButtonComponent from '../../../Components/ButtonComponent';
import GenericInput from '../../../Components/GenericInput';
import ProgressBar from '../../../Components/ProgressBar';
import Styles from './styles';
import { CentralNavigationService } from '../../../Services/Navigation'
import { OnboardingStackParamList } from '../types';

const Name: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const onChange = (value: string): void => {
    setInputValue(value);
  };

  const onPress = (): void => {
    // centralNavigationService.navigate('Document')
  };

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={1} numberOfSteps={7}/>
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.instructionText}>Para começar, qual é o seu nome completo?</Text>
        <View style={Styles.inputView}>
          <GenericInput keyboardType='default' placeholder='Nome completo' value={inputValue} onChange={onChange}/>
        </View>
        <ButtonComponent disabled={inputValue.length < 2} mainButton={true} text="Próximo" size='m' onPress={onPress}/>
      </Container>
    </Container>
  );
};

export default Name;
