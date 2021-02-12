import { Container, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Styles from './styles';

const ChangeData: React.FunctionComponent = () => {
  return (
    <Container style={Styles.container}>
      <View style={Styles.boxView}>
        <View style={Styles.firstRow}>
          <Text style={Styles.boxTitle}>Dados pessoais</Text>
          <TouchableOpacity>
            <Text style={Styles.edit}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxContent}>
          <Text style={Styles.contentTitle}>Letícia Nunes</Text>

          <Text style={Styles.contentText}>123.456.789-10</Text>
          <Text style={Styles.contentText}>(19) 99976-8133</Text>
          <Text style={Styles.contentText}>Casado(a)</Text>
        </View>
      </View>
      <View style={Styles.boxView}>
        <View style={Styles.firstRow}>
          <Text style={Styles.boxTitle}>Endereço</Text>
          <TouchableOpacity>
            <Text style={Styles.edit}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxContent}>
          <Text style={Styles.contentTitle}>Av. Oscar Pedroso, 1932</Text>

          <Text style={Styles.contentText}>apto. 54, próximo ao posto</Text>
          <Text style={Styles.contentText}>Campinas, SP</Text>
          <Text style={Styles.contentText}>13028-192</Text>
        </View>
      </View>
    </Container>
  );
};

export default ChangeData;
