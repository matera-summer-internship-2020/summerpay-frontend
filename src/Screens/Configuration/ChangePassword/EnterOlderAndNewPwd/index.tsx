import { Container, View } from 'native-base';
import React from 'react';

import { ScrollView, Keyboard } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import ButtonComponent from '../../../../Components/ButtonComponent';
import GenericInput from '../../../../Components/GenericInput';
import { changePasswordAction, passwordValidationAction } from '../../../../Ducks/Password/Actions';
import { PasswordActionTypes } from '../../../../Ducks/Password/types';
import { CentralNavigationService } from '../../../../Services/Navigation';

import { ConfigurationStackParamList } from '../../types';

import Styles from './styles';

const EnterOlderAndNewPwd: React.FunctionComponent = () => {
  const [olderPwdInputValue, setOlderPwdInputValue] = React.useState<string>('');
  const [firstNewPwdInputValue, setFirstNewPwdInputValue] = React.useState<string>('');
  const [secondNewPwdInputValue, setSecondNewPwdInputValue] = React.useState<string>('');
  const [showFields, setShowFields] = React.useState<boolean>(false);
  const configurationNavigationService = CentralNavigationService<ConfigurationStackParamList>();
  const passwordValidated: boolean = useSelector((state: any): boolean => state.password.passwordValidated);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setShowFields(passwordValidated);
  }, [passwordValidated]);

  const onOlderPwdInputValueChange = (value: string): void => {
    setOlderPwdInputValue(value);
  };

  const onFirstNewPwdInputValueChange = (value: string): void => {
    setFirstNewPwdInputValue(value);
  };

  const onSecondNewPwdInputValueChange = (value: string): void => {
    setSecondNewPwdInputValue(value);
  };

  const onCancelButtonPress = (): void => {
    dispatch({ payload: false, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
    configurationNavigationService.reset('ConfigurationScreen');
  };

  const onConfirmButtonPress = (): void => {
    dispatch(passwordValidationAction(olderPwdInputValue));
    Keyboard.dismiss();
  };

  const onAlterButtonPress = (): void => {
    dispatch(changePasswordAction(secondNewPwdInputValue));
  };

  const firstNewPasswordStringValidator = (): string => {
    const isFirstNum = /^\d+$/.test(firstNewPwdInputValue);
    if (firstNewPwdInputValue !== '') {
      if (firstNewPwdInputValue.length !== 6) {
        return 'Senha deve ter 6 dígitos';
      } else if (!isFirstNum) {
        return 'Senha deve conter apenas números';
      }
    }

    return '';
  };

  const secondNewPasswordStringValidator = (): string => {
    const isSecondNum = /^\d+$/.test(secondNewPwdInputValue);
    if (secondNewPwdInputValue !== '') {
      if (secondNewPwdInputValue.length !== 6) {
        return 'Senha deve ter 6 dígitos';
      } else if (!isSecondNum) {
        return 'Senha deve conter apenas números';
      } else if (secondNewPwdInputValue !== firstNewPwdInputValue) {
        return 'Senhas precisam ser iguais';
      }
    }

    return '';
  };

  const newPasswordBooleanValidator = (): boolean => {
    return (
      secondNewPasswordStringValidator() !== '' ||
      firstNewPasswordStringValidator() !== '' ||
      firstNewPwdInputValue === '' ||
      secondNewPwdInputValue === ''
    );
  };

  return (
    <Container style={Styles.container}>
      <ScrollView style={Styles.inputsView}>
        <View style={Styles.inputView}>
          <GenericInput
            disabled={false}
            hidePassword={true}
            label={'Digite a sua senha atual'}
            keyboardType={'numeric'}
            placeholder={'-   -   -   -   -   -   -   -   -'}
            value={olderPwdInputValue}
            onChange={onOlderPwdInputValueChange}
          />
        </View>
        {!showFields ? null : (
          <>
            <View style={Styles.inputView}>
              <GenericInput
                disabled={false}
                error={firstNewPasswordStringValidator()}
                hidePassword={true}
                label={'Digite sua nova senha'}
                keyboardType={'numeric'}
                maxLength={6}
                placeholder={'-   -   -   -   -   -   -   -   -'}
                value={firstNewPwdInputValue}
                onChange={onFirstNewPwdInputValueChange}
              />
            </View>
            <View style={Styles.inputView}>
              <GenericInput
                disabled={false}
                error={secondNewPasswordStringValidator()}
                hidePassword={true}
                label={'Confirme sua nova senha'}
                keyboardType={'numeric'}
                maxLength={6}
                placeholder={'-   -   -   -   -   -   -   -   -'}
                value={secondNewPwdInputValue}
                onChange={onSecondNewPwdInputValueChange}
              />
            </View>
          </>
        )}
      </ScrollView>
      <View style={Styles.buttonsView}>
        <ButtonComponent
          size={'s'}
          disabled={false}
          mainButton={false}
          text={'Cancelar'}
          onPress={onCancelButtonPress}
        />
        {!showFields ? (
          <ButtonComponent
            size={'s'}
            disabled={olderPwdInputValue ? false : true}
            mainButton={true}
            text={'Confirmar'}
            onPress={onConfirmButtonPress}
          />
        ) : (
          <ButtonComponent
            size={'s'}
            disabled={newPasswordBooleanValidator()}
            mainButton={true}
            text={'Alterar'}
            onPress={onAlterButtonPress}
          />
        )}
      </View>
    </Container>
  );
};

export default EnterOlderAndNewPwd;
