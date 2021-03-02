import { Container, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SadFace from '../../../Assets/Images/sad-face.svg';
import ButtonComponent from '../../../Components/ButtonComponent';
import GenericInput from '../../../Components/GenericInput';

import { deleteAccountAction } from '../../../Ducks/DeleteAccount/Actions';
import { passwordValidationAction } from '../../../Ducks/Password/Actions';
import { PasswordActionTypes } from '../../../Ducks/Password/types';
import { CentralNavigationService } from '../../../Services/Navigation';
import { ConfigurationStackParamList } from '../types';

import Styles from './styles';

const DeleteAccount: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<ConfigurationStackParamList>();
  const passwordValidated: boolean = useSelector((state: any): boolean => state.password.passwordValidated);
  const [passwordInput, setPasswordInput] = React.useState<string>('');
  const [deleteConfirmation, setDeleteConfirmation] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const onDeletePress = (): void => {
    if (deleteConfirmation) {
      dispatch(passwordValidationAction(passwordInput));
      if (passwordValidated) {
        dispatch(deleteAccountAction());
      }
    } else {
      setDeleteConfirmation(true);
    }
  };

  const onCancelButtonPress = (): void => {
    dispatch({ payload: false, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
    centralNavigationService.navigate('ConfigurationScreen');
  };

  return (
    <Container style={Styles.mainContainer}>
      {deleteConfirmation ? (
        <>
          <View style={Styles.passwordView}>
            <Text style={Styles.passwordText}>Confirme sua senha para deletar sua conta</Text>
            <View style={Styles.inputView}>
              <GenericInput
                keyboardType={'numeric'}
                hidePassword={true}
                placeholder={'-   -   -   -   -   -   -   -'}
                value={passwordInput}
                onChange={setPasswordInput}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={Styles.questionView}>
            <Text style={Styles.questionText}>Você tem certeza que deseja deletar sua conta para sempre?</Text>
            <SadFace width={30} height={30} style={Styles.sadFace} />
          </View>
        </>
      )}
      <View style={Styles.buttonsView}>
        <ButtonComponent
          onPress={onCancelButtonPress}
          disabled={false}
          mainButton={false}
          size={'s'}
          text={'Cancelar'}
        />
        <ButtonComponent
          onPress={onDeletePress}
          disabled={deleteConfirmation ? passwordInput.length === 0 : false}
          mainButton={true}
          size={'s'}
          text={deleteConfirmation ? 'Deletar' : 'Confirmar'}
        />
      </View>
    </Container>
  );
};

export default DeleteAccount;
