import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#002D80',
    color: '#FCFCFC'
  },
  questionText: {
    color: '#FCFCFC',
    fontSize: 24
  },
  questionView: {
    paddingHorizontal: '15%',
    paddingVertical: '20%',
    flex: 1
  },
  sadFace: {
    alignSelf: 'center',
    marginVertical: '5%'
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '8%'
  },
  inputView: {
    paddingHorizontal: '20%',
    paddingVertical: '10%'
  },
  passwordText: {
    color: '#FCFCFC',
    fontSize: 24
  },
  passwordView: {
    paddingHorizontal: '15%',
    flex: 1,
    justifyContent: 'center'
  }
});

export default Styles;
