import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#002D80',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '15%'
  },

  instructionText: {
    color: '#FCFCFC',
    fontSize: 24
  },

  inputsView: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: '10%'
  },

  inputView: {
    marginVertical: '15%',
    alignSelf: 'center',
    width: '100%'
  },

  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Styles;
