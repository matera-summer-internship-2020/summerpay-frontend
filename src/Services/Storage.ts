import SInfo from 'react-native-sensitive-info';
import { StorageKey } from './types';

export const getData = async (key: StorageKey): Promise<string> => {
  try {
    return await SInfo.getItem(key, {});
  } catch (error) {
    return '';
  }
};

export const storeData = async (key: StorageKey, value: string): Promise<void> => {
  try {
    SInfo.setItem(key, value, {});
  } catch (error) {
    return;
  }
};

export default { storeData, getData };
