import { Container, Text, View } from 'native-base';
import React from 'react';

import { useDispatch } from 'react-redux';

import ButtonComponent from '../../../Components/ButtonComponent';
import ProgressBar from '../../../Components/ProgressBar';
import SelectionInput from '../../../Components/SelectionInput';

import { changeMaritalStatusAction } from '../../../Ducks/Onboarding/Actions';
import { MaritalStatusOptions } from '../../../Helpers/MaritalStatus';
import { CentralNavigationService } from '../../../Services/Navigation';
import { MaritalStatusEntity, SelectionData, ValueType } from '../../../types';
import { OnboardingStackParamList } from '../types';

import Styles from './styles';

const MaritalStatus: React.FunctionComponent = () => {
  const [selectionValue, setSelectionValue] = React.useState<ValueType>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const dispatch: any = useDispatch();

  const onChange = (value: ValueType): void => {
    setSelectionValue(value);
  };

  const onPress = (): void => {
    const changedMaritalStatus: MaritalStatusEntity = {
      maritalStatusId: Number(selectionValue),
      maritalStatus: MaritalStatusOptions.filter((obj: SelectionData) => obj.value === selectionValue)[0].label
    };

    dispatch(changeMaritalStatusAction(changedMaritalStatus));

    centralNavigationService.navigate('Address');
  };

  const validateInput = (input: ValueType): boolean => {
    return input === 0;
  };

  return (
    <Container style={Styles.container}>
      {/* TODO: change number of steps if we add confirmation screen */}
      <ProgressBar currentStep={4} numberOfSteps={6} />
      <View style={Styles.inputAndLabelView}>
        <Text style={Styles.instructionText}>Qual é o seu estado civil?</Text>
        <View style={Styles.inputView}>
          <SelectionInput data={MaritalStatusOptions} selectedValue={onChange} />
        </View>
        <ButtonComponent
          disabled={validateInput(selectionValue)}
          mainButton={true}
          text="Próximo"
          size="m"
          onPress={onPress}
        />
      </View>
    </Container>
  );
};

export default MaritalStatus;
