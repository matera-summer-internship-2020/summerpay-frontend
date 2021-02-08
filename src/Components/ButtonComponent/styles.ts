import { StyleSheet } from 'react-native';

type IProps = {
  disabled?: boolean;
  mainButton?: boolean;
  size?: string;
};

export const Styles = (props?: IProps) =>
  StyleSheet.create({
    button: {
      width: getWidthButton(props?.size),
      height: 65,
      borderColor: '#CC7600',
      borderWidth: 1,
      backgroundColor: props?.mainButton ? '#CC7600' : '#FFF',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      opacity: props?.disabled ? 0.7 : 1
    },
    text: {
      color: props?.mainButton ? '#FFF' : '#CC7600',
      fontSize: 20
    }
  });

const getWidthButton = (size?: string): string => {
  if (size) {
    switch (size) {
      case 's':
        return '40%';

      case 'm':
        return '60%';

      case 'l':
        return '75%';

      default:
        return '60%';
    }
  }

  return '60%';
};
