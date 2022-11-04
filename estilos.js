import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  um: {
    // paddingTop: 20,
    width: "100%",
    backgroundColor: "salmon",
    flex: 2,
  },
  dois: {
    width: "100%",
    backgroundColor: "lightgreen",
    flex: 3,
  },
  titulo: {
    color: "blue",
    fontSize: 32,
  },
  subtitulo: {
    color: "#f00",
    fontSize: 24,
  },
});

export default estilos;
