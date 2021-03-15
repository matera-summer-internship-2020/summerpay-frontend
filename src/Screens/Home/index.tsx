import { Container, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Config from '../../Assets/Images/config.svg';
import HomeAccountBackground from '../../Assets/Images/home-account-background.svg';
import Money from '../../Assets/Images/money.svg';
import AccountInfo from '../../Components/AccountInfo';
import { root } from '../../Ducks/types';
import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import Styles from './styles';

const Home: React.FunctionComponent = () => {
  const agency: string = useSelector((state: root): string => state.client.accountData.agency);
  const balance: string = useSelector((state: root): string => String(state.client.accountData.balance));
  const accountNumber: string = useSelector((state: root): string => state.client.accountData.accountNumber);
  const name: string = useSelector((state: root): string => state.client.clientData.name);
  const centralNavigationService = CentralNavigationService<AppStackParamList>();
  const [showOrHideValue, setShowOrHideValue] = React.useState<boolean>(false);

  return (
    <Container style={Styles().mainContainer}>
      <HomeAccountBackground width={'100%'} height={'100%'} style={Styles().imageBackground} />
      <View style={Styles().accountInfoView}>
        <AccountInfo account={accountNumber} agency={agency} userName={name} welcome={false} />
      </View>
      <View style={Styles().balanceView}>
        <Text style={Styles().balanceText}>Saldo Atual</Text>
        <Text style={Styles({ hide: showOrHideValue }).balanceNumberText}>R$ {balance}</Text>
        <TouchableOpacity onPress={() => setShowOrHideValue(!showOrHideValue)}>
          <Text style={Styles().hideAndShowText}>{showOrHideValue ? 'Exibir' : 'Ocultar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles().buttonsView}>
        {/* TODO: Change button path to transfer */}
        <TouchableOpacity onPress={() => centralNavigationService.navigate('Home')} style={Styles().individualButton}>
          <Money />
          <Text>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => centralNavigationService.navigate('Configuration')}
          style={Styles().individualButton}
        >
          <Config />
          <Text>Configurações</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
