import React, {useState} from "react";
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import { AsyncStorageService } from "../services/AsyncStorageService";

function Home({...props}){

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function routeToAbout(){
      //use navigation()
        props.navigation.navigate('About')
      }


    function onChangeText(value){
        setName(value);
      }

      const saveNameToAsync = async() => {
        const storageKey = "NAME_KEY";
        const response = await AsyncStorageService.saveData(storageKey, name);
        setMessage(response);
      }

      function clearStorage(){
        AsyncStorageService.clearStorage();
      }


return(
    <View>
        <Text>This is Home!</Text>

        <Button title="Press Me To Go To About!" onPress={() => routeToAbout()}></Button>

        <TextInput
      style={styles.input}
      value={name}
      placeholder="Enter"
      onChangeText={onChangeText}
      />
 

        <Button title="Save above text input to AsyncStorage" onPress={() => saveNameToAsync()}></Button>
        <Text>{message}</Text>
        <Button title="Clear Storage" onPress={() => clearStorage()}></Button>
        
    </View>
)
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Home;