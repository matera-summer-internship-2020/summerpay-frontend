import { StyleSheet } from 'react-native';

type IProps = {
  hide?: boolean;
};

export const Styles = (props?: IProps) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: '#002D80',
      alignItems: 'center'
    },
    imageBackground: {
      position: 'absolute',
      alignSelf: 'center'
    },
    accountInfoView: {
      paddingHorizontal: '8%',
      marginVertical: '8%',
      width: '100%'
    },
    balanceView: {
      backgroundColor: '#FCFCFC',
      color: '#0F0F0F',
      width: '80%',
      borderRadius: 5,
      minHeight: '35%',
      paddingHorizontal: '6%',
      paddingVertical: '5%',
      elevation: 7,
      marginVertical: '5%'
    },
    balanceText: {
      fontSize: 20
    },
    balanceNumberText: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: '15%',
      backgroundColor: props && props?.hide ? '#E0E0E0' : '#FCFCFC',
      color: props && props?.hide ? '#E0E0E0' : '#0F0F0F'
    },
    hideAndShowText: {
      fontSize: 20,
      textAlign: 'right'
    },
    buttonsView: {
      flexDirection: 'row',
      minHeight: '15%',
      width: '100%',
      justifyContent: 'space-evenly'
    },
    individualButton: {
      backgroundColor: '#FCFCFC',
      color: '#0F0F0F',
      width: '35%',
      borderRadius: 5,
      paddingHorizontal: '3%',
      paddingVertical: '5%',
      elevation: 7,
      marginVertical: '10%'
    }
  });

export default Styles;
