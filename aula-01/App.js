import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Ícaro");
  const [prof, setProf] = useState("Full-Stack Dev");

  return (
    <View style={styles.container}>
      <Text>Fala brabo!</Text>
      <Text>{nome}</Text>
      <Text>{prof}</Text>
      <Button
        title="Mudar"
        onPress={() => {
          setNome("Gasparzinho");
          setProf("Developer");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
