import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  let movieName = "Super-Man La Saga En Español 5 Estrellas";
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    // Realiza llamadas a la API u otra lógica necesaria
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleFavourite(!isFavourite)}
            style={styles.icon}
          >
            <HeartIcon
              size={28}
              color={isFavourite ? theme.colors.background : "white"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../assets/images/pelicula2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
            style={{
              width,
              height: height * 0.4,
              position: "absolute",
              bottom: 0,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      {/* Título */}
      <View
        style={{
          marginTop: -(height * 0.09),
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            letterSpacing: 1.5,
          }}
        >
          {movieName}
        </Text>
      </View>

      {/* Detalles */}
      <Text
        style={{
          color: "#A0AEC0",
          fontWeight: "600",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Acción ⬤ 2023 ⬤ 2:00 horas.
      </Text>

      {/* Descripción */}
      <Text
        style={{
          color: "#A0AEC0",
          marginLeft: 16,
          marginRight: 16,
          letterSpacing: 1,
        }}
      >
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen.
      </Text>

      {/* Cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* Películas similares */}
      <MovieList
        title="Películas similares"
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  safeAreaView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  backButton: {
    borderRadius: 20,
    padding: 8,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  icon: {
    borderRadius: 20,
    padding: 8,
  },
});
