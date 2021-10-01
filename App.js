import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PagerView from 'react-native-pager-view';

export default () => {
  const [index, setIndex] = useState(0);

  const ref = useRef(null);

  const tryAgain = useCallback(() => {
    setIndex(ind => ind + 1);
  }, []);

  const scrollToFirstPage = useCallback(() => {
    ref.current?.setPage(0);
  }, []);

  return (
    <View key={index} style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Try again" onPress={tryAgain} />
        <Button title="Scroll to first page" onPress={scrollToFirstPage} />
      </View>
      <PagerView style={styles.pagerView} initialPage={2} ref={ref}>
        <View key="0">
          <Text>First page</Text>
        </View>
        <View key="1">
          <Text>Second page</Text>
        </View>
        <View key="2">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pagerView: {
    flex: 1,
  },
});
