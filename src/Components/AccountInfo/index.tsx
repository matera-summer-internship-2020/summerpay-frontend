import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

interface IProps {
  userName: String;
  agency: number;
  account: number;
  welcome: boolean;
  hideInfo: boolean;
}

const getFirstName = (userName: String): String => {

  // generates list of names ("first_name", "second_name", "third_name", ...)
  let names: String[] = userName.split(" ");

  // selects first of list
  return names[0];
}

const getInicials = (userName: String): String => {
  let names: String[] = userName.split(" ");

  // Case only one name
  if (names.length < 2) {
    return names[0][0] + names[0][0];
  }

  // Case more than one name
  let inicials = names[0][0] + names[1][0];
  return inicials;
}

const hideInfo = (info: number): String => {
  let l = info.toString().length;

  if (l < 2) {
    return "****" + info.toString()[l - 1];
  }

  let hiddenInfo = info.toString()[l - 1] + info.toString()[l - 2];

  
  return "***" + hiddenInfo;
}

const AccountInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <TouchableOpacity style={Styles.container}>
      <View style={Styles.circle}>
        <Text style={Styles.inicials}>{getInicials(props.userName)}</Text>
      </View>
      <View style={Styles.infoContainer}>
        {
          props.welcome
          // case welcome message must be displayed
          ? <Text style={Styles.nameLine}>Bem vindo, {getFirstName(props.userName)}</Text> 
          // otherwise
          : <Text style={Styles.nameLine}>{props.userName}</Text>
        }
        {
          props.hideInfo
          // case agency and account info must be hidden
          ? <Text style={Styles.infoLine}> ag {hideInfo(props.agency)} c/c {hideInfo(props.account)} </Text>
          // otherwise
          : <Text style={Styles.infoLine}> ag {props.agency} c/c {props.account} </Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default AccountInfo;
