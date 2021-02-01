import {View, Item, Picker, Icon} from 'native-base';
import React from 'react';
import Styles from './styles'
import {valueType} from './types'
import {selectionData} from './types'

interface IProps {
  data: selectionData[];
  selectedValue: (value: valueType)  => void;
}

const SelectionInput: React.FunctionComponent<IProps> = (props: IProps) => {
  
  const [selectedValue, setSelectValue] = React.useState<valueType>('');     // State

  const changeValue = (value: valueType):void  => {  // Changes the selected value
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
