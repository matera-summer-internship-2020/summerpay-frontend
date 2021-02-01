import { Root } from 'native-base';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider as StoreProvider } from 'react-redux';

import AppContent from './AppContent';
import Store from './Store';

enableScreens();
const App: React.FunctionComponent = () => (
  <Root>
    <StoreProvider store={Store}>
      <AppContent />
    </StoreProvider>
  </Root>
);

export default App;
