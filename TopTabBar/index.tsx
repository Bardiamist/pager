import React, {
  memo,
} from 'react';
import {
  View,
} from 'react-native';
import {
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

import {
  Button,
} from './Button';
import {
  styles,
} from './styles';

export const TopTabBar = memo(({
  state,
  descriptors,
  state: {
    routes,
  },
  navigation,
}: MaterialTopTabBarProps) => (
  <>
    <View style={styles.container}>
      {routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const {
          tabBarLabel,
        } = options;

        return (
          <Button
            key={route.key}
            title={typeof tabBarLabel === 'string' ? tabBarLabel : ''}
            isFocused={state.index === index}
            isFirst={index === 0}
            isLast={index === routes.length - 1}
            routeKey={route.key}
            routeName={route.name}
            navigation={navigation}
          />
        );
      })}
    </View>
  </>
));

export const renderTopTabBar = (props) => <TopTabBar {...props} />;
