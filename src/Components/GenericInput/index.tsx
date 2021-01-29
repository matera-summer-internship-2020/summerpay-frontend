import {Text, View, Input, Item} from 'native-base';
import React from 'react';
import Styles from './styles';

type IProps = {
  disabled?: boolean;
  error?: string;
  hidePassword: boolean;
  keyboardType: 'default' | 'numeric';
  label?: string;
  maxLength?: number;
  placeholder: string;
  value: string;
};

const GenericInput: React.FunctionComponent<IProps> = (props: IProps) => {
  const hasError = (): boolean => {
    console.log('AHHHHHHHHHHHHH', props.error?.length > 0);
    return true;
  };

  return (
    <View style={Styles().container}>
      <Item underline style={Styles(hasError()).errorInput}>
        <Input
          disabled={props.disabled ? props.disabled : false}
          keyboardType={props.keyboardType}
          label={props.label ? props.label : ''}
          maxLength={props.maxLength ? props.maxLength : 255}
          placeholder={props.placeholder}
        />
      </Item>
      {props.error ? <Text>{props.error}</Text> : null}
    </View>
  );
};

export default GenericInput;
