import { Container, Text, View } from 'native-base';
import React from 'react';
import ButtonComponent from '../../../Components/ButtonComponent';
import ProgressBar from '../../../Components/ProgressBar';
import SelectionInput from '../../../Components/SelectionInput';
import Styles from './styles';
import { CentralNavigationService } from '../../../Services/Navigation'
import { OnboardingStackParamList } from '../types';
import {useDispatch} from 'react-redux';
import {changeMaritalStatusAction} from '../../../Ducks/Onboarding/Actions';
import { MaritalStatusOptions } from '../../../Helpers/MaritalStatus';
import { MaritalStatusEntity, ValueType } from '../../../types';

const MaritalStatus: React.FunctionComponent = () => {
  const [selectionValue, setSelectionValue] = React.useState<ValueType>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const dispatch: any = useDispatch();

  const onChange = (value: ValueType): void => {
    setSelectionValue(value);
  };

  const onPress = (): void => {
    
    const changedMaritalStatus : MaritalStatusEntity = { 
      maritalStatusId: Number(selectionValue),
      maritalStatus: MaritalStatusOptions.filter((obj) => {return obj.value === selectionValue})[0].label
    };

    dispatch(changeMaritalStatusAction(changedMaritalStatus));

    // centralNavigationService.navigate('Document');
  };

  const validateInput = (input: ValueType): boolean => {
    return input.toString() === "";
  }

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={5} numberOfSteps={7}/>
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.instructionText}>Qual é o seu estado civil?</Text>
        <View style={Styles.inputView}>
          <SelectionInput data={MaritalStatusOptions} selectedValue={onChange}/>
        </View>
        <ButtonComponent disabled={validateInput(selectionValue)} mainButton={true} text="Próximo" size='m' onPress={onPress}/>
      </Container>
    </Container>
  );
};

export default MaritalStatus;
