import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingBottom: '10%',
    backgroundColor: '#002D80',
    alignItems: 'center'
  },
  instructionText: {
    fontSize: 24,
    width: '100%',
    color: '#FCFCFC'
  },
  inputAndLabelView: {
    width: '80%',
    flex: 1,
    marginVertical: '10%'
  },
  inputView: {
    width: '80%',
    marginVertical: '10%',
    alignSelf: 'center'
  },
  individualInputView: {
    marginVertical: '5%'
  }
});

export default Styles;
