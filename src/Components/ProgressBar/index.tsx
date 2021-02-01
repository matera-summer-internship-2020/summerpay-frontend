import { View } from 'native-base';
import React from 'react';

import Styles from './styles';

type IProps = {
  currentStep: number;
  numberOfSteps: number;
};

const StepTrackerView = (props: IProps) => {
  const steps: JSX.Element[] = [];
  let keyCreator: number = 2;
  for (let index: number = 1; index < props.currentStep && index < props.numberOfSteps; index++) {
    steps.push(
      <View key={keyCreator} style={Styles.stepTrackerContainer}>
        <View key={keyCreator + 1} style={Styles.betweenSteps} />
        <View key={keyCreator + 2} style={Styles.completedSteps} />
      </View>
    );
    keyCreator += 3;
  }
  for (let index: number = props.currentStep; index < props.numberOfSteps; index++) {
    steps.push(
      <View key={keyCreator} style={Styles.stepTrackerContainer}>
        <View key={keyCreator + 1} style={Styles.betweenSteps} />
        <View key={keyCreator + 2} style={Styles.nextSteps} />
      </View>
    );
    keyCreator += 3;
  }

  return (
    <View key={0} style={Styles.stepTrackerContainer}>
      <View key={1} style={Styles.completedSteps} />
      {steps}
    </View>
  );
};

const ProgressBar: React.FunctionComponent<IProps> = (props: IProps) => (
  <View style={Styles.progressBarContainer}>{StepTrackerView(props)}</View>
);

export default ProgressBar;
