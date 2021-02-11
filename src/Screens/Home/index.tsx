import { Container, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Config from '../../Assets/Images/config.svg';
import HomeAccountBackground from '../../Assets/Images/home-account-background.svg';
import Money from '../../Assets/Images/money.svg';
import AccountInfo from '../../Components/AccountInfo';
import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import Styles from './styles';

const Home: React.FunctionComponent = () => {
  // Start of Static Example
  const balance = 4532.12;
  const accountNumber = '12345-1';
  const agency = '000-1';
  const name = 'Mariana Megumi';
  // End Example
  const centralNavigationService = CentralNavigationService<AppStackParamList>();
  const [showOrHideValue, setShowOrHideValue] = React.useState<boolean>(false);
  const [showOrHideText, setShowOrHideText] = React.useState<string>('Ocultar');

  const onShowOrHidePress = (): void => {
    if (!showOrHideValue) {
      setShowOrHideValue(true);
      setShowOrHideText('Exibir');
    } else {
      setShowOrHideValue(false);
      setShowOrHideText('Ocultar');
    }
  };

  return (
    <Container style={Styles().mainContainer}>
      <HomeAccountBackground width={'100%'} height={'100%'} style={Styles().imageBackground} />
      <View style={Styles().accountInfoView}>
        <AccountInfo account={accountNumber} agency={agency} userName={name} welcome={false} />
      </View>
      <View style={Styles().balanceView}>
        <Text style={Styles().balanceText}>Saldo Atual</Text>
        <Text style={Styles({ hide: showOrHideValue }).balanceNumberText}>R$ {balance}</Text>
        <TouchableOpacity onPress={onShowOrHidePress}>
          <Text style={Styles().hideAndShowText}>{showOrHideText}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles().buttonsView}>
        {/* Change button path to transfer */}
        <TouchableOpacity onPress={() => centralNavigationService.navigate('Home')} style={Styles().individualButton}>
          <Money />
          <Text>Transferir</Text>
        </TouchableOpacity>
        {/* Change button path to config */}
        <TouchableOpacity onPress={() => centralNavigationService.navigate('Home')} style={Styles().individualButton}>
          <Config />
          <Text>Configurações</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
