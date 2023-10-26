import React,{useState} from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Text,
  PermissionsAndroid
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [lat,setLat] = useState("");
  const [long,setLong] = useState("");

  async function myLoc() {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Example App',
          'message': 'Example App access to your location '
        }
      );
      Geolocation.getCurrentPosition(info =>{
        setLat(info?.coords?.latitude);
        setLong(info?.coords?.longitude);
        console.log("my Location info : ", info)
      } 
      );
    } catch (err) {
      console.log("error caught : ", err);

    }
  }

  return (
    <SafeAreaView>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Button onPress={myLoc} title='Click Me' />
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 30 }}>
        <Text style={{color:"#111",fontWeight:'bold',fontSize:14}}>
          Lat : {lat}
        </Text>
        <Text style={{color:"#111",fontWeight:'bold',fontSize:14}}>
          Long : {long}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 30,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20
  }
})