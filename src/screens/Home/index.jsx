import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles";
import Cafe from "../../components/cafeHome/Cafes"

export default function Home() {
  return (
    <View style={Styles.container}>
          
          <Text style={Styles.textTitulo}>Bem-vindo á cafeteria do felps</Text>

      <View style={Styles.view1}>
        <Image
          source={require("../../../assets/cafeteria.png")}
          style={Styles.cafeteriaImageStyle}
        />
        <Text style={Styles.text1}>
          Seja bem-vindo à nossa cafeteria, onde cada aroma conta uma história e
          cada xícara é uma experiência única. Desfrute de nossos cafés
          cuidadosamente preparados. Em nosso espaço acolhedor, você encontrará
          o refúgio perfeito para relaxar, trabalhar ou simplesmente apreciar um
          momento de tranquilidade.
        </Text>
      </View>


      <View>

      <Text style={Styles.textTitulo}>conheça nossos produtos</Text>

      <Cafe image={require("../../../assets/cafe.png")}/>

      </View>

      <View >
        <Text style={Styles.textEnd}>todos os direitos reservados</Text>
      </View>

    </View>
  );
}
