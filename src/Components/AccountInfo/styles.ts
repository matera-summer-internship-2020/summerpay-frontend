import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inicials: {
    color: '#002D80',
    fontSize: 14
  },
  infoContainer: {
    flexDirection: 'column',
    paddingLeft: 16,
    flex: 1,
    fontSize: 14
  },
  nameLine: {
    color: '#FCFCFC'
  },
  infoLine: {
    color: '#FCFCFC'
  }
});

export default Styles;
