import { View, Text } from 'react-native'
import React from 'react'
import Styles from "./styles";
import Cafe from '../../components/cafeHome/Cafes';


export default function Categoria() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>nossos cafes</Text>
      <Cafe style={Styles.cafe} image={require("../../../assets/cafe.png")} /> 
      <Cafe style={Styles.cafe} image={require("../../../assets/cafe.png")} />
      <Cafe style={Styles.cafe} image={require("../../../assets/cafe.png")} />
    </View>
  )
}