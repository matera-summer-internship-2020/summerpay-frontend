import { Container, View } from 'native-base';
import React from 'react';

import ButtonComponent from '../../../Components/ButtonComponent';
import { CentralNavigationService } from '../../../Services/Navigation';
import { ConfigurationStackParamList } from '../types';

import Styles from './styles';

const Configuration: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<ConfigurationStackParamList>();

  return (
    <Container style={Styles.mainContainer}>
      <View style={Styles.buttonView}>
        <ButtonComponent
          disabled={false}
          mainButton={false}
          text={'Alterar dados pessoais'}
          onPress={() => centralNavigationService.navigate('ChangeData')}
          size={'l'}
        />
      </View>
      <View style={Styles.buttonView}>
        <ButtonComponent
          disabled={false}
          mainButton={false}
          text={'Alterar senha'}
          onPress={() => centralNavigationService.navigate('ChangePassword')}
          size={'l'}
        />
      </View>
      <View style={Styles.buttonView}>
        {/* Change path to delete account */}
        <ButtonComponent
          disabled={false}
          mainButton={false}
          text={'Deletar conta'}
          onPress={() => centralNavigationService.navigate('ChangePassword')}
          size={'l'}
        />
      </View>
      <View style={Styles.buttonView}>
        {/* Change path to logout */}
        <ButtonComponent
          disabled={false}
          mainButton={false}
          text={'Sair da conta'}
          onPress={() => centralNavigationService.navigate('ChangePassword')}
          size={'l'}
        />
      </View>
    </Container>
  );
};

export default Configuration;
