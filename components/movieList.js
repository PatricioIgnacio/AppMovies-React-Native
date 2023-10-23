import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  let movieName = "Super-Man La Saga En Español 5 Estrellas";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Ver más...</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View style={styles.movieItem}>
                <Image
                  source={require("../assets/images/pelicula2.png")}
                  style={styles.movieImage}
                />
                <Text style={styles.movieText}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 5,
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
    color: "red",
    fontSize: 20,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  movieItem: {
    marginRight: 4,
    marginTop: 20,
  },
  movieImage: {
    width: width * 0.33,
    height: height * 0.22,
    borderRadius: 10,
  },
  movieText: {
    color: "gray",
    marginLeft: 2,
  },
});
