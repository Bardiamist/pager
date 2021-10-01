import React, {
  memo,
  useCallback,
} from 'react';
import {
  ViewStyle,
  TextStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Props,
} from './types';
import {
  styles,
} from './styles';

export const Button = memo(({
  title,
  isFocused,
  isFirst,
  isLast,
  routeKey,
  routeName,
  navigation,
}: Props) => {
  const onPress = useCallback(() => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  }, [isFocused, routeKey, routeName, navigation]);

  let touchableStyle: ViewStyle;
  if (isFirst) {
    touchableStyle = styles.firstTouchable;
  } else if (isLast) {
    touchableStyle = styles.lastTouchable;
  } else {
    touchableStyle = {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  let activeOpacity: number;
  let titleStyle: TextStyle;

  if (isFocused) {
    activeOpacity = 1;
    titleStyle = styles.pressedTitle;
  } else {
    activeOpacity = 0.6;
    titleStyle = styles.idleTitle;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={touchableStyle}
      activeOpacity={activeOpacity}
    >
      <Text style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});
