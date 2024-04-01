import { StatusBar, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import colors from './src/global/colors';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import Store from './src/store';
import { init } from './src/db';

init()

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }

    return (
      <>
        <Provider store={Store}>
          <StatusBar/>
          <MainNavigator/>
        </Provider>
      </>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  }
})

