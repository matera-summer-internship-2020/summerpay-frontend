import { Button, Container, Text, View } from 'native-base';
import React from 'react';
import GenericInput from '../../../Components/GenericInput'
import ProgressBar from '../../../Components/ProgressBar'
import Styles from './styles'
import {phoneMask} from '../../../Helpers/Masks'
import ButtonComponent from '../../../Components/ButtonComponent'

type IProps = {
  disabled: boolean,
  textColor: string,
  buttonColor: string,
};

const Phone: React.FunctionComponent<IProps> = (props: IProps) => {

  const [inputValue, setInputValue] = React.useState<string>('');

  const onChange = (value: string): void => {
    setInputValue(value);
  };

  const onPress = (): void => {
    // centralNavigationService.navigate('Phone')
  };


  return (
    <Container style={Styles.container}>
        <ProgressBar currentStep={4} numberOfSteps={7}/>
        <Container style={Styles.inputAndLabelContainer}>
          <Text style={Styles.instructionText}>
            Qual seu número de celular e DDD?
          </Text>
          <View style={Styles.inputView}>
            <GenericInput
              keyboardType={'numeric'}
              placeholder={'(00) 0000-0000'}
              value={phoneMask(inputValue)}
              onChange={onChange}
            />
          </View>
          {inputValue.length >=  14
          ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <ButtonComponent size={'m'} disabled={false} mainButton={true} text={'Próximo'} onPress={onPress} />
            </View>
          ) 
          : (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <ButtonComponent size={'m'} disabled={true} mainButton={true} text={'Próximo'} onPress={onPress} />
            </View>
          )}
        </Container>
    </Container>
  );
};

export default Phone;
