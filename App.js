import { StatusBar } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import colors from './src/global/colors';
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar/>
      {categorySelected ? 
      <ItemListCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected}/> :
      <Home setCategorySelected={setCategorySelected}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  }
})

