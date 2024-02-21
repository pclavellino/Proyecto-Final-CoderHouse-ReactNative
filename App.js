import { StyleSheet} from 'react-native';
import { StatusBar } from 'react-native';
import Navigator from './src/navigation/Navigator';
import colors from './src/global/colors';
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";


export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar/>
      <Navigator/>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  }
})

