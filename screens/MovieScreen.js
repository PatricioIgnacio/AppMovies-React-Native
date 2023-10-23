import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  useEffect(() => {
    // Realiza llamadas a la API u otra lógica necesaria
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <SafeAreaView style={styles.safeAreaView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size={28}
              color={isFavourite ? theme.colors.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/pelicula2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]} // Cambiar los valores de color
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
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    alignItems: "center", // Alineación vertical de elementos
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
};
