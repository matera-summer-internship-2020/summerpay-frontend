import { StyleSheet } from 'react-native';

type IProps = {
  error?: boolean;
};

const Styles = (props?: IProps) =>
  StyleSheet.create({
    labelStyle: {
      color: '#FCFCFC',
      fontWeight: 'bold'
    },

    inputStyle: {
      color: '#FCFCFC'
    },

    underlineInputError: {
      borderBottomColor: props?.error ? '#FF6E6E' : '#FCFCFC',
      borderBottomWidth: 1
    },

    messageInputError: {
      marginTop: 8,
      color: '#FF6E6E',
      fontSize: 14
    }
  });

export default Styles;
