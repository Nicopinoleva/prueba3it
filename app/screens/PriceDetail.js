import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image, ActivityIndicator, FlatList} from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import apiConnect from '../utils/apiConnect';
import ValueIndicator from '../components/ValueIndicator';

export default function PriceDetail({route}) {
  const [isLoading, setLoading] = useState(true);
  const [unit, setUnit] = useState()
  const [dataList, setDataList] = useState();
  const [refresh, setRefresh] = useState();
  const [refreshLoading, setRefreshLoading] = useState(false);
  const {codigo,nombre} = route.params;

  useEffect(() => {
    apiConnect(codigo).then((response)=>{
      setDataList(response.data.serie);
      setUnit(response.data.unidad_medida);
      setLoading(false);
      setRefreshLoading(false);
    });
  }, [refresh]);

  return (
    <View style={styles.parentView}>
      {isLoading ? (
        <View style={styles.loaderTask}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>):(
          <>
            <FlatList 
              data={dataList}
              renderItem={(data) => <ValueIndicator data={data} unit={unit}/>}
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'column',
    marginTop:15,
  },
  loaderTask: {
    marginTop:10,
    marginBottom: 10,
    alignItems: "center"
  }
});