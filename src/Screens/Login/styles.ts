import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({

mainContainer: {
    backgroundColor: '#002D80',
    justifyContent: 'center'
},

imageBackground: {
    position: 'absolute',
    alignSelf: 'center',   
},

viewLogo:{
    alignSelf: 'center',
},

viewLoginData: {
    marginBottom: '5%',
    marginHorizontal: '20%',
},

viewDocumentInput: {
    marginBottom: 16
},

viewPswInput: {
    marginBottom: 32
},

textTitle: {
    color: '#FCFCFC',
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16
},

textSignIn: {
    color: '#FCFCFC',
    fontSize: 14,
    textAlign: "center"
},

buttonSignIn: {
    marginTop: 8
},

textButtonSignIn: {
    color: '#FCFCFC',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: "center"
},

});

export default Styles;