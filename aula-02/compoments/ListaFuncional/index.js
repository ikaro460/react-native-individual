import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

export function ListaFuncional() {
  const [inputText, setInputText] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(["React", "JavaScript", "React-native"]);
  }, []);

  const adicionarItem = () => {
    setLista([...lista, inputText]);
    setInputText("");
    console.log(lista);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Adicionar" onPress={adicionarItem} />
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
