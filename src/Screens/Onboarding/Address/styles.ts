import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#002D80',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '20%',
    alignItems: 'center'
  },
  instructionText: {
    color: '#FCFCFC',
    fontSize: 24,
    marginTop: 48,
    marginBottom: 16
  },
  inputsView: {
    width: '80%',
    minHeight: 300
  },
  twoInputsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  leftInputViewFromTwoInputsView: {
    width: '30%'
  },
  rightInputViewFromTwoInputsView: {
    width: '60%'
  },
  oneLineInputView: {
    width: '100%',
    marginTop: 8
  }
});

export default Styles;
