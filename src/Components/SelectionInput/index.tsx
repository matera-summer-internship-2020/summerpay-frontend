import {View, Item, Picker, Icon} from 'native-base';
import React from 'react';
import Styles from './styles'

type dataValue = {
  label: string;
  value: string;
}

interface Iprops {
  data: any[];
  selectedValue: (value: string) => void;
}

const SelectionInput: React.FunctionComponent<Iprops> = (props: Iprops) => {
  
  const [selectedValue, setSelectValue] = React.useState<string>('');     // State

  const changeValue = (value: string):void  => {  // Changes the selected value
    setSelectValue(value);
    props.selectedValue(value);
  }   

  return (
    <View>
      <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={Styles.pickerStyle}
          placeholder="Select"
          selectedValue={selectedValue}  
          onValueChange={changeValue}   
        >
          {props.data.map((dataValue) => {          // dataValue list
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
