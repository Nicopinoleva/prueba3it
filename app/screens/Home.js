import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image, ActivityIndicator} from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import apiConnect from '../utils/apiConnect';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = () => apiConnect();

  useEffect(() => {
    getData().then((data)=>console.log(data.data));
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.parentView}>
      {isLoading ? (
        <View style={styles.loaderTask}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>):(<></>)
      }
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
  loaderTask: {
    marginTop:100,
    marginBottom: 10,
    alignItems: "center"
  }
});