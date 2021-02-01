import {View, Item, Picker, Icon} from 'native-base';
import React from 'react';
import Styles from './styles'
import { ValueType } from '../../types'
import { SelectionData } from '../../types'

type IProps = {
  data: SelectionData[];
  selectedValue: (value: ValueType)  => void;
}

const SelectionInput: React.FunctionComponent<IProps> = (props: IProps) => {
  
  const [selectedValue, setSelectValue] = React.useState<ValueType>('');     // State

  const changeValue = (value: ValueType):void  => {  // Changes the selected value
    setSelectValue(value);  
  }   

  return (  
    <View>
      <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={Styles.pickerStyle}
          selectedValue={selectedValue}  
          onValueChange={changeValue}   
        >
          {props.data.map((dataValue)  => {          // dataValue list
            return (
              <Picker.Item label={dataValue.label} value={dataValue.value} key={dataValue.label}/>
            )
          })}
        </Picker>
      </Item>
    </View>
  );
};

export default SelectionInput;
