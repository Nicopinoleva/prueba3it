import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,Image } from 'react-native';
import { Icon,Divider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
// import apiConnect from './app/utils/apiConnect';

export default function DailyIndicator(props) {
    const navigation = useNavigation();
    const {data,unit} = props;
    const {fecha,valor} = data.item;
    
    return( 
      <View style={styles.parentView}>
        <View style={styles.contentView}>
          <Text style={styles.indicatorName}> {fecha.slice(0,10)} </Text>
          <Text style={styles.indicatorContent}> <Text style={styles.indicatorContent}> {unit == 'Pesos' ? '$':'%'}</Text>{valor} </Text>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
};

const styles = StyleSheet.create({
  parentView: {
    marginTop:10,
  },
  contentView: {
    flexDirection: 'row',
    flex: 1,
    marginBottom:10,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  iconView: {
    flexDirection: 'row',
  },
  indicatorName: {
    fontSize: 20,
    marginBottom:5,
    color:'#259df8'
  },
  indicatorContent: {
    fontSize: 14,
    color:'#7ec3ef',
    fontWeight:'bold',
    color:'#000000'
  },
  iconRight : {
    color:'#7ec3ef'
  },
  divider:{
    backgroundColor: '#0000'
  }
});