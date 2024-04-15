import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"COVET DESIGN"}/>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.white200,
    },
  })

export default App