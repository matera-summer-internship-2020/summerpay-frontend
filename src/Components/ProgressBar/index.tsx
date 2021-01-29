import { Button, Text, View} from 'native-base';
import React, { useState } from 'react';
import Styles from './styles'

type IProps = {
  currentStep: number,
  numberOfSteps: number
};

const StepTrackerView = (props: IProps) => {
  let steps = [];
  let keyCreator = 1;
  for(let index = 1; index < props.currentStep; index++) {
    steps.push(
      <View key={keyCreator} style={Styles().stepTrackerContainer}>
        <View key={keyCreator + 1} style={Styles().betweenSteps}/>
        <View key={keyCreator + 2} style={Styles().completedSteps}/>
      </View>
    );
    keyCreator += 3;
  }
  for(let index = props.currentStep; index < props.numberOfSteps; index++) {
    steps.push(
      <View key={keyCreator} style={Styles().stepTrackerContainer}>
        <View key={keyCreator + 1} style={Styles().betweenSteps}/>
        <View key={keyCreator + 2} style={Styles().nextSteps}/>
      </View>
    );
    keyCreator += 3;
  }
  return (
    <View style={Styles().stepTrackerContainer}>
      <View key={0} style={Styles().completedSteps}/>
      {steps}
    </View>
  )
}


const ProgressBar: React.FunctionComponent<IProps> = (props: IProps) => {
  let ProgressBarCreator = StepTrackerView(props);
  
  return (
    <View style={Styles().progressBarContainer}>
      {ProgressBarCreator}
    </View>
  );
};

export default ProgressBar;
