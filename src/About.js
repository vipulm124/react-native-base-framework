import React, {useState, useEffect} from "react";
import {View, Text} from 'react-native';
import { AsyncStorageService } from "../services/AsyncStorageService";

function About({...props}){

    const [name, setName] = useState('');

    const readData = async() =>{
        const value = await AsyncStorageService.readAKey('NAME_KEY');
        setName(value);
    }

    useEffect(() => {
        readData();
      },[])

return(
    <View>
        <Text>This is About Me!</Text>
        <Text>The below value is coming from AsyncStorage</Text>
        <Text>{name}</Text>
    </View>
)
}

export default About;