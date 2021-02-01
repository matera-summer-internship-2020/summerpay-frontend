import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BaseNavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppStackNavigator';
import {
  AppState,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {navigationRef, saveCurrentRoute} from './Services/Navigation';
import {changeAppStateAction} from './Ducks/AppStatus/Actions';

const AppContent: React.FunctionComponent = () => {
  const stackState: any = useSelector(
    (state: any): any => state.appStatus.stackState,
  );
  const dispatch: any = useDispatch();

  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState: any): void => {
    dispatch(changeAppStateAction(nextAppState));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent />
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <BaseNavigationContainer
            ref={navigationRef}
            onStateChange={saveCurrentRoute}
            initialState={stackState ? JSON.parse(stackState) : null}>
            <AppNavigator />
          </BaseNavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider> 
  );
};

export default AppContent;
