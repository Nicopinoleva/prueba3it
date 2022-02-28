import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image } from 'react-native';
import { Icon,Divider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
// import apiConnect from './app/utils/apiConnect';

export default function DailyIndicator(props) {
    const navigation = useNavigation();
    const {data,lat,lon} = props;
    const {nombre,unidad_medida,codigo} = data.item;
    
    return( 
      <View style={styles.parentView}>
        <View style={styles.contentView}>
          <Text style={styles.indicatorName} numberOfLines={10}
    ellipsizeMode='tail' onPress={()=>navigation.navigate('priceDetail',{nombre,codigo})}> {nombre} </Text>
          <View style={styles.iconView}>
            <Icon
              type="material-community"
              name={"alert-circle-outline"}
              iconStyle={styles.iconRight}
              onPress={()=>navigation.navigate('priceGraph',{nombre,codigo,lat,lon})}
            />
            <Icon
              type="material-community"
              name={"chevron-right"}
              iconStyle={styles.iconRight}
              onPress={()=>navigation.navigate('priceGraph',{nombre,codigo,lat,lon})}
            />
          </View>
        </View>
        <Text style={styles.indicatorUnit} onPress={()=>navigation.navigate('priceDetail',{nombre,codigo})}> {unidad_medida} </Text>
        <Divider style={styles.divider} />
      </View>
    );
};

const styles = StyleSheet.create({
  parentView: {
    marginTop:15
  },
  contentView: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  iconView: {
    flexDirection: 'row',
  },
  indicatorName: {
    fontWeight:'bold',
    fontSize: 18,
    marginBottom:5,
    color:'#000000'
  },
  indicatorUnit: {
    fontSize: 12,
    color:'#259df8'
  },
  iconRight : {
    color:'#259df8'
  },
  divider:{
    backgroundColor: '#0000',
  }
});