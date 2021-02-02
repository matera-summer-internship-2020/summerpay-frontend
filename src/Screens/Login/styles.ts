import {StyleSheet} from 'react-native';

type IProps = {
    disabledButton?: boolean;
};

const Styles = (props?: IProps) => StyleSheet.create({

mainContainer: {
    backgroundColor: '#002D80',
    justifyContent: 'center'
},

viewFakeLogo: {
    borderRadius: 100,
    borderColor: '#CC7600',
    borderWidth: 10,
    width: 125,
    height: 125,
    alignSelf: "center"
},

viewLoginData: {
    // backgroundColor: 'green',
    marginVertical: 32,
    marginHorizontal: 80,
},

viewSpaceBetween: {
    height: 16
},

textTitle: {
    color: '#FCFCFC',
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16
},

buttonLogin: {
    backgroundColor: '#CC7600',
    borderRadius: 10,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {height: 4, width: 4},
    elevation: 2,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    marginTop: 32,
    opacity: props && props.disabledButton ? 0.5 : 1,
},

textButtonLogin: {
    color: '#FCFCFC',
    fontSize: 20,
    textTransform: 'capitalize',
},

textSignIn: {
    // backgroundColor: 'pink',
    color: '#FCFCFC',
    fontSize: 14,
    textAlign: "center"
},

buttonSignIn: {
    // backgroundColor: 'red',
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