import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "./styles";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <Text style={Styles.text1}>Quem somos nós?</Text>
            <View style={Styles.view1}>
                <Image
                    source={require("../../../assets/cafeteria.png")}
                    style={Styles.cafeteriaImageStyle}
                />
                <Text style={Styles.text2}>Venha se deliciar na nossa cafeteria, onde cada aroma conta uma história e cada xícara é uma experiência única. Desfrute de nossos cafés cuidadosamente selecionados e preparados por nossos baristas apaixonados. Em nosso espaço acolhedor, você encontrará o refúgio perfeito para relaxar, trabalhar ou simplesmente apreciar um momento de tranquilidade. Seja bem-vindo à nossa cafeteria, onde o café é mais do que uma bebida, é uma paixão compartilhada</Text>
            </View>

            <TouchableOpacity
                style={Styles.buttonImageIconStyle}
                onPress={() => navigation.navigate("SobreMim")}
            >
                <Image
                    source={require("../../../assets/cheff1.png")}
                    style={[Styles.imageIconStyle, { width: 128, height: 128 }]}
                />
                <Text style={Styles.text}>Sobre nosso cheff</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.navButton}
                onPress={() => navigation.navigate("Categoria")}
            >
                <Text>Go to Categoria</Text>
            </TouchableOpacity>
        </View>
    );
}
