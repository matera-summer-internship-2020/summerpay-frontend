import { Container, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import ButtonComponent from '../../../Components/ButtonComponent/index';
import GenericInput from '../../../Components/GenericInput/index';
import ProgressBar from '../../../Components/ProgressBar/index';
import SelectionInput from '../../../Components/SelectionInput/index';

import { changeAddressAction } from '../../../Ducks/Onboarding/Actions';
import { cepMask } from '../../../Helpers/Masks';
import { StatesList } from '../../../Helpers/States';
import { CentralNavigationService } from '../../../Services/Navigation';
import { AddressEntity, ValueType } from '../../../types';
import { OnboardingStackParamList } from '../types';

import Styles from './styles';

const Address: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();
  const [selectedState, setSelectedState] = React.useState<ValueType>('');
  const [inputCityValue, setInputCityValue] = React.useState<string>('');
  const [inputCepValue, setInputCepValue] = React.useState<string>('');
  const [inputStreetValue, setInputStreetValue] = React.useState<string>('');
  const [inputNumberValue, setInputNumberValue] = React.useState<string>('');
  const [inputComplementValue, setInputComplementValue] = React.useState<string>('');
  const [hideFields, setHideFields] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);
  const keyboardDidShow = (): void => {
    setHideFields(true);
  };
  const keyboardDidHide = (): void => {
    setHideFields(false);
  };

  const onChangeSelectedState = (state: ValueType): void => {
    setSelectedState(state);
  };
  const onChangeInputCityValue = (city: string): void => {
    setInputCityValue(city);
  };
  const onChangeInputCepValue = (cep: string): void => {
    setInputCepValue(cep);
  };
  const onChangeInputStreetValue = (street: string): void => {
    setInputStreetValue(street);
  };
  const onChangeInputNumberValue = (number: string): void => {
    setInputNumberValue(number);
  };
  const onChangeInputComplementValue = (complement: string): void => {
    setInputComplementValue(complement);
  };

  const inputsValidation = (): boolean => {
    return selectedState &&
      inputCityValue &&
      inputCepValue &&
      inputStreetValue &&
      inputNumberValue &&
      inputComplementValue
      ? true
      : false;
  };

  const onPress = (): void => {
    const newAddress: AddressEntity = {
      streetName: inputStreetValue,
      state: selectedState,
      zipCode: inputCepValue.replace(/\D/g, ''),
      complement: inputComplementValue,
      number: Number(inputNumberValue),
      city: inputCityValue
    };
    dispatch(changeAddressAction(newAddress));
    // TODO uncomment when the next screen is created
    // centralNavigationService.navigate('Confirm')
  };

  return (
    <Container style={Styles.container}>
      {hideFields ? null : (
        <>
          <ProgressBar currentStep={5} numberOfSteps={7}></ProgressBar>
          <Text style={Styles.instructionText}>Insira seu endereço:</Text>
        </>
      )}
      <ScrollView style={Styles.inputsView}>
        <View style={Styles.twoInputsView}>
          <View style={Styles.leftInputViewFromTwoInputsView}>
            <SelectionInput data={StatesList} selectedValue={onChangeSelectedState} />
          </View>
          <View style={Styles.rightInputViewFromTwoInputsView}>
            <GenericInput
              keyboardType={'default'}
              placeholder={'Cidade'}
              value={inputCityValue}
              onChange={onChangeInputCityValue}
            />
          </View>
        </View>
        <View style={Styles.oneLineInputView}>
          <GenericInput
            keyboardType={'numeric'}
            maxLength={9}
            placeholder={'CEP'}
            value={cepMask(inputCepValue)}
            onChange={onChangeInputCepValue}
          />
        </View>
        <View style={Styles.oneLineInputView}>
          <GenericInput
            keyboardType={'default'}
            placeholder={'Rua/Av.'}
            value={inputStreetValue}
            onChange={onChangeInputStreetValue}
          />
        </View>
        <View style={Styles.twoInputsView}>
          <View style={Styles.leftInputViewFromTwoInputsView}>
            <GenericInput
              keyboardType={'numeric'}
              placeholder={'Nº'}
              value={inputNumberValue.replace(/\D/g, '')}
              onChange={onChangeInputNumberValue}
            />
          </View>
          <View style={Styles.rightInputViewFromTwoInputsView}>
            <GenericInput
              keyboardType={'default'}
              placeholder={'Complemento'}
              value={inputComplementValue}
              onChange={onChangeInputComplementValue}
            />
          </View>
        </View>
      </ScrollView>
      <ButtonComponent size={'m'} disabled={!inputsValidation()} mainButton={true} text={'Próximo'} onPress={onPress} />
    </Container>
  );
};

export default Address;
