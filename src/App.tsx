import { Root } from 'native-base';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import Store from './Store';
import AppContent from './AppContent';

enableScreens();
const App: React.FunctionComponent = () => (
  <Root>
    <StoreProvider store={Store}>
      <AppContent />
    </StoreProvider>
  </Root>
);

export default App;
