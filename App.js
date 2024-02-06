import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from "react-native";

import estilos from "./estilos";

export default function App() {
  const vai = () => {
    Alert.alert("Yeah!", "Olá 😁");
  };
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar barStyle="default" />
      <View style={estilos.um}>
        <Text style={estilos.titulo}>React Native</Text>
      </View>
      <View style={estilos.dois}>
        <Text style={estilos.subtitulo}>
          Trabalhando com desenvolvimento de apps
        </Text>
        <Button title="Toca aqui mano/mana!" onPress={vai} />
      </View>
    </SafeAreaView>
  );
}
