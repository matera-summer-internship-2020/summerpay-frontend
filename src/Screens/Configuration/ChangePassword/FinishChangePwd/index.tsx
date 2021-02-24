import { Container, Text, View } from 'native-base';

import React from 'react';

import ConfirmIcon from '../../../../Assets/Images/confirm.svg';
import ButtonComponent from '../../../../Components/ButtonComponent';
import { CentralNavigationService } from '../../../../Services/Navigation';
import { ConfigurationStackParamList } from '../../types';

import Styles from './styles';

const FinishChangePwd: React.FunctionComponent = () => {
  const configurationNavigationService = CentralNavigationService<ConfigurationStackParamList>();

  const onOkButtonPress = (): void => {
    configurationNavigationService.reset('ConfigurationScreen');
  };

  return (
    <Container style={Styles.container}>
      <View style={Styles.confirmIconAndTextView}>
        <ConfirmIcon width={'18%'} height={'100%'} />
        <Text style={Styles.confirmText}>Senha alterada com sucesso!</Text>
      </View>
      <ButtonComponent disabled={false} mainButton={true} text={'OK'} onPress={onOkButtonPress} size={'m'} />
    </Container>
  );
};

export default FinishChangePwd;
