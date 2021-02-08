import { Text, View, Input, Item } from 'native-base';
import React from 'react';

import Styles from './styles';

type IProps = {
  disabled?: boolean;
  error?: string;
  hidePassword?: boolean;
  label?: string;
  maxLength?: number;
  keyboardType: 'default' | 'numeric';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const GenericInput: React.FunctionComponent<IProps> = (props: IProps) => {
  const hasError = (): boolean => Boolean(props.error?.length);

  return (
    <View>
      {props.label ? <Text style={Styles().labelStyle}>{props.label}</Text> : null}
      <Item underline style={Styles({ error: hasError() }).underlineInputError}>
        <Input
          style={Styles().inputStyle}
          disabled={props.disabled ? props.disabled : false}
          secureTextEntry={props.hidePassword ? props.hidePassword : false}
          keyboardType={props.keyboardType}
          maxLength={props.maxLength ? props.maxLength : 255}
          placeholder={props.placeholder}
          placeholderTextColor="rgba(252, 252, 252, 0.5)"
          value={props.value}
          onChangeText={props.onChange}
        />
      </Item>
      {props.error ? <Text style={Styles().messageInputError}>{props.error}</Text> : null}
    </View>
  );
};

export default GenericInput;
