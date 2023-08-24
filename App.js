import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styledemo} from './styles/styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <View style={styledemo.box}>
          <Text>testing</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
