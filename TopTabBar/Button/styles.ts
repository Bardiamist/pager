import {
  TextStyle,
  StyleSheet,
} from 'react-native';

const horizontalOffset = 8;

const title: TextStyle = {
  fontSize: 15,
};

export const styles = StyleSheet.create({
  firstTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: horizontalOffset,
  },
  lastTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: horizontalOffset,
  },
  idleTitle: {
    ...title,
    color: 'gray',
  },
  pressedTitle: {
    ...title,
    color: 'black',
  },
});
