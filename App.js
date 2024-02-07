import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import colors from './src/global/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  }
})

