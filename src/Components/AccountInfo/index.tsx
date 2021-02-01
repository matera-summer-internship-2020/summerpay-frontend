import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

type IProps = {
  userName: String;
  agency: String;
  account: String;
  welcome: boolean;
  hideInfo: boolean;
}

const getFirstName = (userName: String): String => {

  return userName.split(' ')[0];
}

const getLastName = (userName: String): String => {
  let nameArray: String[]  = userName.split(' ');
  return nameArray[nameArray.length - 1];
}

const getInicials = (userName: String): String => {
  let names: String[] = userName.split(" ");

  let inicials = names[0][0] + names[names.length - 1][0];
  return inicials;
}

const hideInfo = (info: String): String => {
  let l: number = info.length;

  let mask: string = '****';
  if (l === 4) {
    mask = '**'
  }
  return mask + info.toString()[l - 2] + info.toString()[l - 1];
}

const AccountInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.circle}>
        <Text style={Styles.inicials}>{getInicials(props.userName)}</Text>
      </View>
      <View style={Styles.infoContainer}>
        {
          props.welcome
          // case welcome message must be displayed
          ? <Text style={Styles.nameLine}>Bem vindo, {getFirstName(props.userName)}</Text> 
          // otherwise
          : <Text style={Styles.nameLine}>{getFirstName(props.userName) + " " + getLastName(props.userName)}</Text>
        }
        {
          props.hideInfo
          // case agency and account info must be hidden
          ? <Text style={Styles.infoLine}> ag {hideInfo(props.agency)} c/c {hideInfo(props.account)} </Text>
          // otherwise
          : <Text style={Styles.infoLine}> ag {props.agency} c/c {props.account} </Text>
        }
      </View>
    </View>
  );
};

export default AccountInfo;
