import { StyleSheet} from 'react-native';
import { StatusBar } from 'react-native';
import colors from './src/global/colors';
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import TabNavigator from './src/navigation/TabNavigator';


export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar/>
      <TabNavigator/>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  }
})

