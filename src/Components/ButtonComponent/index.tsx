import { Button, Text } from 'native-base';
import React from 'react';

import { Styles } from './styles';

type IProps = {
  disabled: boolean;
  mainButton: boolean;
  text: string;
  onPress: any;
  size: 's' | 'm' | 'l';
};

const ButtonComponent: React.FunctionComponent<IProps> = (props: IProps) => (
  <Button
    disabled={props.disabled}
    onPress={props.onPress}
    style={Styles({ disabled: props.disabled, mainButton: props.mainButton, size: props.size }).button}
  >
    <Text uppercase={false} style={Styles({ mainButton: props.mainButton }).text}>
      {props.text}
    </Text>
  </Button>
);

export default ButtonComponent;
