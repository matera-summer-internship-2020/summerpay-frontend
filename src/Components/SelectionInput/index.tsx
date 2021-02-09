import { View, Item, Picker, Icon } from 'native-base';
import React from 'react';

import { ValueType, SelectionData } from '../../types';

import Styles from './styles';

type IProps = {
  data: SelectionData[];
  selectedValue: (value: ValueType) => void;
};

const SelectionInput: React.FunctionComponent<IProps> = (props: IProps) => {
  const [selectedValue, setSelectValue] = React.useState<ValueType>(''); // State

  const changeValue = (value: ValueType): void => {
    // Changes the selected value
    props.selectedValue(value);
    setSelectValue(value);
  };

  return (
    <View>
      <Item picker style={Styles.pickerItemStyle}>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={Styles.pickerStyle}
          selectedValue={selectedValue}
          onValueChange={changeValue}
        >
          {props.data.map((
            dataValue // dataValue list
          ) => (
            <Picker.Item label={dataValue.label} value={dataValue.value} key={dataValue.label} />
          ))}
        </Picker>
      </Item>
    </View>
  );
};

export default SelectionInput;
