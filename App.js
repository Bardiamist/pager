import React, {useState, useRef, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {renderTopTabBar} from './TopTabBar';

const ExpensiveTree = () => {
  let now = performance.now();
  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 100ms
  }
  return <Text>I am a very slow component tree.</Text>;
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 88,
//     flex: 1,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   pagerView: {
//     flex: 1,
//   },
// });

// export default () => {
//   const [index, setIndex] = useState(0);

//   const ref = useRef(null);

//   const tryAgain = useCallback(() => {
//     setIndex(ind => ind + 1);
//   }, []);

//   const scrollToFirstPage = useCallback(() => {
//     ref.current?.setPage(0);
//   }, []);

//   return (
//     <View key={index} style={styles.container}>
//       <View style={styles.buttons}>
//         <Button title="Try again" onPress={tryAgain} />
//         <Button title="Scroll to first page" onPress={scrollToFirstPage} />
//       </View>
//       {/* <PagerView style={styles.pagerView} initialPage={2} ref={ref}>
//         <View key="0">
//           <Text>First page</Text>
//         </View>
//         <View key="1">
//           <Text>Second page</Text>
//           <ExpensiveTree />
//         </View>
//         <View key="2">
//           <Text>Third page</Text>
//         </View>
//       </PagerView> */}
//     </View>
//   );
// };

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({
  navigation: {
    navigate,
  },
}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Tab 3"
        onPress={() => {
          navigate('Tabs', {
            screen: 'Tab3',
          });
        }}
      />
    </View>
  );
};

const delay = 200;

const Tab1Screen = () => {
  const [tab1Index, setTab1Index] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTab1Index(ind => ind + 1);
    }, delay);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 1 {tab1Index}</Text>
      {/* <ExpensiveTree /> */}
    </View>
  );
};

const Tab2Screen = () => {
  const [tab2Index, setTab2Index] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTab2Index(ind => ind + 1);
    }, delay);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 2 {tab2Index}</Text>
      {/* <ExpensiveTree /> */}
    </View>
  );
};

const Tab3Screen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 3</Text>
    </View>
  );
};

const screenOptions = {lazy: true};
const sceneContainerStyle = {backgroundColor: 'white'};

const tab1Options = {tabBarLabel: 'Tab1'};
const tab2Options = {tabBarLabel: 'Tab2'};
const tab3Options = {tabBarLabel: 'Tab3'};

const TabsScreen = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={screenOptions}
      tabBar={renderTopTabBar}
      sceneContainerStyle={sceneContainerStyle}>
      <Tab.Screen name="Tab1" options={tab1Options} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={tab2Options} component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={tab3Options} component={Tab3Screen} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={TabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
