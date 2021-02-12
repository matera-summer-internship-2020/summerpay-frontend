import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#002D80',
    alignItems: 'center',
    paddingTop: 32
  },
  boxView: {
    backgroundColor: '#FCFCFC',
    width: '80%',
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CC7600'
  },
  boxTitle: {
    fontSize: 16,
    color: '#CC7600'
  },
  edit: {
    fontSize: 12,
    color: '#CC7600'
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  boxContent: {},
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  contentText: {
    fontSize: 14,
    marginTop: 4
  }
});

export default Styles;
