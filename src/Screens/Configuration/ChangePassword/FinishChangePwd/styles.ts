import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#002D80',
    justifyContent: 'space-evenly'
  },

  confirmIconAndTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '70%',
    paddingHorizontal: '5%'
  },

  confirmText: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 26,
    color: '#16C79A',
    marginLeft: '8%'
  }
});

export default Styles;
