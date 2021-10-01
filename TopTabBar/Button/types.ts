import {
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

export interface Props {
  title: string;
  isFocused: boolean;
  isFirst: boolean;
  isLast: boolean;
  routeKey: string;
  routeName: string;
  navigation: MaterialTopTabBarProps['navigation'];
}
