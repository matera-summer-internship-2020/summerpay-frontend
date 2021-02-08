import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create( {
       container: {
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: '10%',
        backgroundColor: '#002D80',
        alignItems: 'center'
    },
    lineContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    lineStyle: {
        flexDirection: 'row',
        borderColor: '#EAB745',
        borderWidth: 2.5,
        borderRadius: 10,
        alignSelf: 'center',
        flex: 1
    },
    confirmImage: {
        marginTop: 30,
        alignSelf: 'center',   
    },
    mainText: {
        alignContent: 'center',
        fontSize: 24,
        color: '#FCFCFC',
    },
    secundaryText: {
        fontSize: 22,
        width: '100%',
        color: '#FCFCFC',
    },
    bottomContainer: {
        backgroundColor: '#002D80',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'       
    },
  })

export default Styles;