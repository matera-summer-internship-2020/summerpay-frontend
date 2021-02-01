import { Button, Container, Text } from 'native-base';
import React from 'react';

import { CentralNavigationService } from '../../Services/Navigation';

import { AppStackParamList } from '../../types';

const Login: React.FunctionComponent = () => {
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  return (
    <Container>
      <Text>Login</Text>
      <Button onPress={() => centralNavigationService.navigate('Onboarding')}>
        <Text>Onboarding</Text>
      </Button>
    </Container>
  );
};

export default Login;
