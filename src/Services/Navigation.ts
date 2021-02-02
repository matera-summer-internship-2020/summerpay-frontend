import { CommonActions, StackActions } from '@react-navigation/native';
import React from 'react';

import { changeStackStateAction } from '../Ducks/AppStatus/Actions';
import Store from '../Store/index';

declare type ParamListBase = Record<string, object | undefined>;

declare type StackNavigationProp<ParamList extends ParamListBase> = {
  back(originRoute?: string): void;
  navigate<RouteName extends keyof ParamList>(
    ...args: ParamList[RouteName] extends undefined | any
      ? [RouteName] | [RouteName, ParamList[RouteName]]
      : [RouteName, ParamList[RouteName]]
  ): void;
  popToTop<RouteName extends keyof ParamList>(
    routeName: RouteName,
    params?: ParamList[RouteName],
    firstScreen?: string,
    index?: number
  ): void;
  replace<RouteName extends keyof ParamList>(
    ...args: ParamList[RouteName] extends undefined | any
      ? [RouteName] | [RouteName, ParamList[RouteName]]
      : [RouteName, ParamList[RouteName]]
  ): void;
  reset<RouteName extends keyof ParamList>(
    ...args: ParamList[RouteName] extends undefined | any
      ? [RouteName] | [RouteName, ParamList[RouteName]]
      : [RouteName, ParamList[RouteName]]
  ): void;
};

export const navigationRef: any = React.createRef();
const routeNameRef: any = React.createRef();

const getActiveRouteName = (state: any): string => {
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name as string;
};

export const saveCurrentRoute = (state: any) => {
  const previousRouteName = routeNameRef.current;
  const currentRouteName = getActiveRouteName(state);
  if (previousRouteName !== currentRouteName) {
    const stackState = JSON.stringify(state);
    Store.dispatch(changeStackStateAction(stackState));
  }
  routeNameRef.current = currentRouteName;
};

export const CentralNavigationService = <T extends Record<string, object | undefined>>(): StackNavigationProp<T> => ({
  back: () => {
    if (navigationRef.current) {
      navigationRef.current.goBack();
    }
  },
  navigate: async (...args: any[]) => {
    const routeName = args[0];
    const params = args.length > 1 ? args[1] : {};

    if (navigationRef.current) {
      await navigationRef.current.navigate(routeName, params);
    }
  },
  popToTop: async (...args: any[]) => {
    const routeName = args[0];
    const params = args.length > 1 ? args[1] : {};
    const firstScreen = args.length > 2 ? args[2] : '';
    const index = args.length > 3 ? args[3] : 1;

    if (navigationRef.current) {
      const routes = params ? [{ name: routeName, params }] : [{ name: routeName }];

      if (firstScreen && firstScreen.length > 0) {
        await navigationRef.current.dispatch(
          CommonActions.reset({
            index,
            routes: [{ name: firstScreen }, ...routes]
          })
        );
      } else {
        await navigationRef.current.dispatch(
          CommonActions.reset({
            index,
            routes
          })
        );
      }
    }
  },
  replace: (...args: any[]) => {
    const routeName = args[0] as string;
    const params = (args.length > 1 ? args[1] : {}) as {};

    if (navigationRef.current) {
      navigationRef.current.dispatch(StackActions.replace(routeName, params));
    }
  },
  reset: (...args: any[]) => {
    const routeName = args[0] as string;
    const params = (args.length > 1 ? args[1] : {}) as {};

    if (navigationRef.current) {
      navigationRef.current.dispatch(CommonActions.navigate(routeName, params));
    }
  }
});
