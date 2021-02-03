import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: '10%',
        backgroundColor: '#002D80',
        alignItems: 'center'
      },
      instructionText: {
        fontSize: 24,
        width: '80%',
        color: '#fcfcfc',
        
      },
      inputAndLabelContainer: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#002D80',
        
      },
      inputView: {
        width: '100%'
      }
  });

export default Styles;
