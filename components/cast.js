import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function cast({ cast, navigation }) {
  let personName = "Andrea Barrientos";
  let characterName = "Patricio Santibáñez";
  return (
    <View style={{ marginVertical: 24 }}>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          marginLeft: 16,
          marginBottom: 5,
        }}
      >
        Protagonistas
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: 8, alignItems: "center" }}
                onPress={() => navigation.navigat("Person", person)}
              >
                <Image
                  style={{
                    borderRadius: 8,
                    aspectRatio: 2 / 2,
                    height: 70,
                    width: 40,
                  }}
                  source={require("../assets/images/persona1.png")}
                />

                <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}
                </Text>
                <Text style={{ color: "white", fontSize: 10, marginTop: 4 }}>
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
