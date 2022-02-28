import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image } from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import SafeAreaView from 'react-native-safe-area-view';
// import apiConnect from './app/utils/apiConnect';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.parentView}>
      <Image 
        source={require("../../assets/3IT_logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.textStyle}> Prueba 3IT</Text>
      <Text style={styles.textStyle}> Nicolás Pino Leva </Text>
      <Text style={styles.textStyle}> Febrero 2022 </Text>
      <Button
        title='Iniciar'
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={()=>navigation.reset(
        { index: 0,
          routes: 
          [ { name: 'home'
            }
          ],
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'column',
    marginTop:15,
    alignItems: 'center',
    flex:1
  },
  logo:{
    width: "100%",
    height: 150,
    marginTop: 100
  },
  textStyle:{
    fontWeight:"bold",
    fontSize: 25,
    color:'#000'
  },
  btnContainer: {
    marginTop: 20,
    width: "100%",
  },
  btn: {
    backgroundColor: "#6B35E2",
    borderRadius: 50,
  },
});