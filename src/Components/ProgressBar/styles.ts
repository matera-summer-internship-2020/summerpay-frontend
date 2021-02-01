import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  },

  stepTrackerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  nextSteps: {
    borderRadius: 100,
    borderColor: '#EAB745',
    borderWidth: 1,
    width: 15,
    height: 15
  },

  completedSteps: {
    borderRadius: 100,
    borderColor: '#EAB745',
    borderWidth: 7.5,
    width: 15,
    height: 15
  },

  betweenSteps: {
    borderColor: '#EAB745',
    borderWidth: 0.5,
    alignSelf: 'center',
    flex: 1
  }
});

export default Styles;
