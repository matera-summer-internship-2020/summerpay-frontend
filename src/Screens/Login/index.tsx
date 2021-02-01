import { Container, Text} from 'native-base';
import React from 'react';
import AccountInfo from '../../Components/AccountInfo';

const Login: React.FunctionComponent = () => {
  return (
    <Container>
      <Text>Login</Text>
      <AccountInfo userName="Gabriel Seabra"/>
    </Container>
  );
};

export default Login;
