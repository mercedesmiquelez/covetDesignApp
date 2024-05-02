import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native"
import { colors } from "./src/constants/colors"
import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <Navigator/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.grey400,
  },
})

export default App