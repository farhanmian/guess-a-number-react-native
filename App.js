import { StyleSheet, Text, View } from "react-native";
import Header from "./components/partials/Header";
import StartGameScreen from "./components/app/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: -1,
  },
});
