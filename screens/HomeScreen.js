import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpComing] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      {/* logotipo */}
      <StatusBar style="light" />
      <View style={styles.header}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        <Text style={styles.title}>
          <Text style={{ ...styles.title, color: "#ea4208" }}>P</Text>elículas
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Carrusel de Películas */}
        <TrendingMovies data={trending} />

        {/* Lista de Películas */}
        <MovieList title="Upcoming" data={upcoming} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
