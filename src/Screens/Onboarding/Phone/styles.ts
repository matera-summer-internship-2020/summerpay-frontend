import {StyleSheet} from 'react-native';
import { round } from 'react-native-reanimated';

const Styles = StyleSheet.create( {
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
        color: '#FCFCFC',
    },
    inputAndLabelContainer: {
        backgroundColor: '#002D80',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'       
    },
    inputView: {
        width: '100%'
    }
  })

export default Styles;
