import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  let movieName = "Super-Man La Saga En Español 5 Estrellas";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar película..."
          placeholderTextColor="lightgray"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            borderRadius: 999,
            padding: 12,
            margin: 4,
            backgroundColor: "#4A5568",
          }}
        >
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Resultados */}
      {results.length > 0 ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          style={{ margin: 0, padding: 0 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              marginLeft: 1,
              marginBottom: 12,
            }}
          >
            Resultados ({results.length})
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View style={{ marginVertical: 8, width: "48%" }}>
                    <Image
                      style={{
                        borderRadius: 12,
                        aspectRatio: 3 / 5,
                        width: "100%",
                        height: undefined,
                      }}
                      source={require("../assets/images/pelicula2.png")}
                    />
                    <Text
                      style={{ color: "#A0AEC0", marginLeft: 1, marginTop: 4 }}
                    >
                      {movieName.length > 22
                        ? movieName.slice(0, 22) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../assets/images/iconosPersonas.png")}
            style={{ height: 350, width: 350 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4A5568",
    borderRadius: 999,
  },
  input: {
    flex: 1,
    paddingStart: 16,
    paddingBottom: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    letterSpacing: 1,
  },
});
