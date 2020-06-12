import { StyleSheet } from 'react-native';
import { Colors, Fonts } from './themes';

export const main = StyleSheet.create({
  content: {
    backgroundColor: Colors.content,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export const button = StyleSheet.create({
  default: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'stretch',
  },
  outline: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'stretch',
  },
  textDefault: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
  },
  textOutline: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
  },
});
