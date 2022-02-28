import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image, ActivityIndicator, FlatList} from 'react-native';
import { Button } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import apiConnect from '../utils/apiConnect';
import Graph from '../components/Graph';

export default function PriceGraph({route}) {
  const [isLoading, setLoading] = useState(true);
  const [unit, setUnit] = useState()
  const [graphColumn, setGraphColumn] = useState();
  const [graphRow, setGraphRow] = useState();
  const [refresh, setRefresh] = useState();
  const [refreshLoading, setRefreshLoading] = useState(false);
  const {codigo,nombre,lat,lon} = route.params;

  useEffect(() => {
    apiConnect(codigo).then((response)=>{
      let graphRow = [response.data.serie[0].fecha.slice(0,10),response.data.serie[4].fecha.slice(0,10),response.data.serie[9].fecha.slice(0,10),]
      setGraphColumn(response.data.serie.map((data)=>data.valor).slice(0,10).reverse());
      setGraphRow(graphRow.reverse());
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
          <Graph graphColumn={graphColumn} graphRow={graphRow} name={nombre} unit={unit} lat={lat} lon={lon}/>)
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