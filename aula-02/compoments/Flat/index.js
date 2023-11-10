import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Flat() {
  const alunos = [
    { matricula: "123", nome: "Ana" },
    { matricula: "125", nome: "Sergio" },
    { matricula: "1212", nome: "Carlos" },
    { matricula: "1235", nome: "Jorge" },
    { matricula: "1238", nome: "João" },
    { matricula: "1239", nome: "Maria" },
    { matricula: "1230", nome: "Joaquim" },
    { matricula: "1240", nome: "Laura" },
    { matricula: "1241", nome: "Rafael" },
    { matricula: "1242", nome: "Juliana" },
    { matricula: "1243", nome: "Fernando" },
    { matricula: "1244", nome: "Mariana" },
    { matricula: "1245", nome: "Diego" },
    { matricula: "1246", nome: "Carolina" },
    { matricula: "1247", nome: "Pedro" },
    { matricula: "1248", nome: "Camila" },
    { matricula: "1249", nome: "Lucas" },
    { matricula: "1250", nome: "Gabriela" },
    { matricula: "1251", nome: "Eduardo" },
    { matricula: "1252", nome: "Isabela" },
    { matricula: "1253", nome: "Gabriel" },
    { matricula: "1254", nome: "Natália" },
    { matricula: "1255", nome: "Roberto" },
    { matricula: "1256", nome: "Amanda" },
    { matricula: "1257", nome: "Vinícius" },
    { matricula: "1258", nome: "Beatriz" },
    { matricula: "1259", nome: "Henrique" },
  ];

  const item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={item}
        data={alunos}
        keyExtractor={(a) => a.matricula}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
