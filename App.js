import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';
import logo from "./images/logo.jpg";
import trangchu from "./images/TrangChu.jpg";
import dangky from "./images/DangKy.jpg";
import hotro from "./images/HoTro.jpg";
import Icon from 'react-native-vector-icons/FontAwesome';

const openURL = () => {
  Linking.openURL('https://www.jun88h.com/?uagt=junb03a&path=signup');
};

const openCall = () => {
  Linking.openURL('tel:0822445678');
};

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.logo}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.textHeader}>Jun88.Games</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonView}>
        <TouchableOpacity onPress={openURL} style={styles.button}>
          <Image source={trangchu} style={styles.buttonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openURL} style={styles.button}>
          <Image source={dangky} style={styles.buttonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openCall} style={styles.button}>
          <Image source={hotro} style={styles.buttonImage}/>
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff66ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 150,
    height: 150
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10
  },
  button:{
    width: 200,
    height: 50,
    margin: 5,
    borderRadius: 5
  },
  buttonImage:{
    width: 200,
    height: 50
  }
});
