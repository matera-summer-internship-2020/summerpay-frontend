import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create( {
    container: {
        paddingHorizontal: '5%',
        paddingBottom: '10%',
        backgroundColor: '#002D80',
        alignItems: 'center',
    },
    instructionText: {
        fontSize: 24,
        width: '100%',
        color: '#FCFCFC',
    },
    inputAndLabelContainer: {
        backgroundColor: '#002D80',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputView: {
        width: '60%',
    }
})

export default Styles;