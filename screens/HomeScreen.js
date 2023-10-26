import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/core";
import { fetchTrendingMovies } from "../api/moviedb";

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpComing] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  {
    /* Llamado a la API */
  }

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    console.lgo("Ir a películas tendencia: ", data);
    if (data && data.result) setTrending(data.results);
    setLoading(false);
  };

  {
    /* Fin de constante de llamado a la API */
  }

  return (
    <View style={styles.container}>
      {/* logotipo */}
      <StatusBar style="light" />
      <View style={styles.header}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        <Text style={styles.title}>
          <Text style={{ ...styles.title, color: "#ea4208" }}>P</Text>elículas
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Carrusel de Películas */}
        {trending.length > 0 && <TrendingMovies data={trending} />}

        {/* Lista de Acción */}
        <MovieList title="Acción" data={upcoming} />

        {/* Lista de Romance */}
        <MovieList title="Romance" data={topRated} />
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
