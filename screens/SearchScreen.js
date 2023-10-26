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
import React, { useCallback, useState } from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";
import { fallbackMoviePoster, image500, searchMovies } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value) => {
    if (value && value.length > 2) {
      setLoading(true);
      searchMovies({
        query: value,
        include_adult: "false",
        language: "en-US",
        page: "1",
      }).then((data) => {
        setLoading(false);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleTextDebounce}
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
                      source={{
                        uri: image500(item?.poster_path || fallbackMoviePoster),
                      }}
                    />
                    <Text
                      style={{ color: "#A0AEC0", marginLeft: 1, marginTop: 4 }}
                    >
                      {item.title.length > 22
                        ? item.title.slice(0, 22) + "..."
                        : item.title}
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
