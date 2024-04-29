import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
    <View style={styles.Imagecontainer}>
      <Image
      source={require("../assets/leão marinho.jpg")}
      style={styles.image} 
      />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Filoastroux Shopping List</Text>
      <Text style={styles.Text}>Monte sua lista de compras e não esqueça mais o que precisa
      comprar ao sair de casa!!!</Text>
      <Link style={styles.button} href={"/home"}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Imagecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: "#dadada",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: "Bold",
    marginTop: 28,
    marginBottom: 20,
    textAling: 'center'
  },

  Text: {
    color: 'gray',
    fontSize: 16,
  },

  button: {
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 50,
    bottom: '15%',
    paddingVertical: 15,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },

});
