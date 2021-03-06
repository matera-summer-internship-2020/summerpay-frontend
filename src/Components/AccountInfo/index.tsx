import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

type IProps = {
  userName: string;
  agency: string;
  account: string;
  welcome: boolean;
};

const AccountInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  const getFirstName = (userName: string): string => {
    return userName.split(' ')[0];
  };

  const getLastName = (userName: string): string => {
    const nameArray: string[] = userName.split(' ');

    return nameArray[nameArray.length - 1];
  };

  const getInicials = (userName: string): string => {
    const names: string[] = userName.split(' ');

    const inicials = names[0][0] + names[names.length - 1][0];

    return inicials;
  };

  const hideInfo = (info: string): string => {
    const l: number = info.length;

    let mask = '****';
    if (l === 4) {
      mask = '**';
    }

    return mask + info.toString()[l - 2] + info.toString()[l - 1];
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.circle}>
        <Text style={Styles.inicials}>{getInicials(props.userName)}</Text>
      </View>
      <View style={Styles.infoContainer}>
        {props.welcome ? (
          // case welcome message must be displayed
          <Text style={Styles.nameLine}>Bem vindo, {getFirstName(props.userName)}</Text>
        ) : (
          // otherwise
          <Text style={Styles.nameLine}>{getFirstName(props.userName) + ' ' + getLastName(props.userName)}</Text>
        )}
        {props.welcome ? (
          // case agency and account info must be hidden
          <Text style={Styles.infoLine}>
            {' '}
            ag {hideInfo(props.agency)} c/c {hideInfo(props.account)}{' '}
          </Text>
        ) : (
          // otherwise
          <Text style={Styles.infoLine}>
            {' '}
            ag {props.agency} c/c {props.account}{' '}
          </Text>
        )}
      </View>
    </View>
  );
};

export default AccountInfo;
