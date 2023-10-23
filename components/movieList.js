import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function MovieList({ title, data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Ver más...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginHorizontal: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
