import {StyleSheet} from 'react-native';

type IProps = {
  error?: boolean;
};

const Styles = (props:IProps) => StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },

  errorInput: {
    borderBottomColor: props.error ? 'red' : 'black',
  },
});
 
// const Styles = (props: IProps) => StyleSheet.create({
//   container: {
//     backgroundColor: 'green',
//   },

//   errorInput: {
//     borderBottomColor: props.error ? 'red' : 'black',
//   }
// });

export default Styles;
