import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Cafe({ image }) {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Categoria")}>
        <Image source={image} style={Styles.image} />
      </TouchableOpacity>

    </View>
  );
}
