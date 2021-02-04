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
        // backgroundColor: 'red'
    },
    inputAndLabelView: {
        // backgroundColor: 'green',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
        paddingVertical: '10%'
    },
    inputView: {
        width: '60%',
        // backgroundColor: 'pink',
        marginVertical: '8%'
    },
    individualInputView: {
        marginVertical: '10%'
    }
})

export default Styles;