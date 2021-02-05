import { Container, Text, View } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProgressBar from '../../../Components/ProgressBar/index'
import GenericInput from '../../../Components/GenericInput/index'
import ButtonComponent from '../../../Components/ButtonComponent/index'
import { cpfMask } from '../../../Helpers/Masks'
import { cpfValidator } from '../../../Helpers/CpfValidator';
import Styles from './styles'
import { CentralNavigationService } from '../../../Services/Navigation'
import { OnboardingStackParamList } from '../types';
import { changeIdentityDocumentEntityListAction } from '../../../Ducks/Onboarding/Actions';
import { identityDocumentEntity } from '../../../types';

const Document: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();
  const identityDocumentEntityList: identityDocumentEntity[] = useSelector(
    (state: any): identityDocumentEntity[] => state.onboarding.identityDocumentEntityList);
  const dispatch = useDispatch();

  const onChange = (value: string): void => {
    setInputValue(value);
  };

  const onPress = (): void => {
    const newIdentityDocumentEntityList: identityDocumentEntity[] = [
      ...identityDocumentEntityList,
      {
        identityDocumentTypeEntity: {
          identityDocumentTypeId: 2
        },
        identityDocument: inputValue.replace(/\D/g, '')
      }
    ]
    dispatch(changeIdentityDocumentEntityListAction(newIdentityDocumentEntityList));
    // TODO uncomment when the phone screen is created
    // centralNavigationService.navigate('Phone')
  };

  return (
    <Container style={Styles.container}>
      <ProgressBar currentStep={2} numberOfSteps={7} />
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.textLabel}>
          Agora, vamos precisar do seu CPF:
        </Text>
        <View style={Styles.inputView}>
          <GenericInput
            error={
              inputValue.length == 14 && 
              !cpfValidator(inputValue) ?
                'CPF Inválido'
              :
                ''
            }
            keyboardType={'numeric'}
            maxLength={14}
            placeholder={'000.000.000-00'}
            value={cpfMask(inputValue)}
            onChange={onChange}
          />
        </View> 
        <ButtonComponent 
          size={'m'} 
          disabled={!cpfValidator(inputValue)} 
          mainButton={true}
          text={'Próximo'} 
          onPress={onPress} 
        /> 
      </Container>
    </Container>
  );
};

export default Document;
