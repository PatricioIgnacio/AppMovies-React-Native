import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { fetchTrendingMovies, image500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

export default function TrendingMovies() {
  const [trending, setTrending] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Llamar a la API y obtener las películas tendencia al montar el componente
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const data = await fetchTrendingMovies();
      if (data && data.results) {
        setTrending(data.results);
      }
    } catch (error) {
      console.error("Error al obtener las películas tendencia:", error);
    }
  };

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Películas:</Text>
      <Carousel
        data={trending}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.7}
        sliderWidth={600}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginLeft: 16,
    marginBottom: 5,
  },
});
