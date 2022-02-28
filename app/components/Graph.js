import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image,Dimensions } from 'react-native';
import { Icon,Divider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import {LineChart,} from "react-native-chart-kit";
// import apiConnect from './app/utils/apiConnect';

export default function Graph(props) {
  const navigation = useNavigation();
  const {graphColumn,graphRow,name,unit,lat,lon} = props;
  const screenWidth = Dimensions.get("window").width;
  return( 
    <View style={styles.parentView}>
      <Text style={styles.indicatorTitle}> <Text style={styles.indicatorContent}> {unit == 'Pesos' || unit == 'Dólar' ? '$':'%'}</Text>{graphColumn[0]} </Text>
      <View style={styles.contentView}>
        <View style={styles.childView}>
          <Text style={styles.indicatorName}> Nombre: </Text>
          <Text style={styles.indicatorName}> {name} </Text>
        </View>
        <View style={styles.childView}>
          <Text style={styles.indicatorName}> Fecha: </Text>
          <Text style={styles.indicatorName}> {graphRow[0].slice(0,10)} </Text>
        </View>
        <View style={styles.childView}>
          <Text style={styles.indicatorName}> Unidad: </Text>
          <Text style={styles.indicatorName}> {unit} </Text>
        </View>
        {lat && <Text style={styles.indicatorName}> Ubicación actual: {lat},{lon} </Text>}
      </View>
        <LineChart
          data={{
            labels: graphRow,
            datasets: [
              {
                data: graphColumn
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={300}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#1273de",
            backgroundGradientTo: "#1273de",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft:20,
            marginRight:20
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center'
  },
  contentView: {
    flexDirection: 'column',
    marginBottom:10,
    alignItems: 'flex-start',
  },
  childView: {
    flexDirection: 'row',
  },
  indicatorName: {
    fontSize: 15,
    marginBottom:5,
    color:'#000000'
  },
  indicatorTitle: {
    fontSize: 25,
    color:'#259df8',
    fontWeight:'bold',
    marginBottom:10,
  },
});