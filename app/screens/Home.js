import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image, ActivityIndicator, FlatList} from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import apiConnect from '../utils/apiConnect';
import DailyIndicator from '../components/DailyIndicator';
import Geolocation from '@react-native-community/geolocation';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [dataList, setDataList] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [refresh, setRefresh] = useState();
  const [refreshLoading, setRefreshLoading] = useState(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(info=>{
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)},error=>console.log(error));
    apiConnect().then((response)=>{
      let responseArr = [];
      let responseKeys = Object.keys(response.data);
      // console.log('keys->',responseKeys);
      for (let i = 0; i<responseKeys.length;i++){
        // console.log(typeof response.data[responseKeys[i]])
        if (typeof response.data[responseKeys[i]]=='object')
          responseArr.push(response.data[responseKeys[i]]);
      }
      setDataList(responseArr);
      setLoading(false);
      setRefreshLoading(false);
    });
  }, [refresh]);

  return (
    <SafeAreaView style={styles.parentView}>
      {isLoading ? (
        <View style={styles.loaderTask}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>):(
          <>
            <FlatList 
              data={dataList}
              renderItem={(data) => <DailyIndicator data={data} lat={latitude} lon={longitude}/>}
              keyExtractor={(item, index) => index.toString()}
              // onEndReached={()=>pendingTaskList!= '0' && setRequestNum(requestNum+1)}
              // onEndReachedThreshold={3}
              refreshing={refreshLoading}
              onRefresh={()=>{
                setRefresh(!refresh);
                setRefreshLoading(true);
              }}
            />
          </>)
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'column',
    marginBottom:15,
  },
  loaderTask: {
    marginTop:100,
    marginBottom: 10,
    alignItems: "center"
  }
});