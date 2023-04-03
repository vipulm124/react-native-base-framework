import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import About  from "./src/About";
import Navigator from "./src/Navigator";

const Stack = createNativeStackNavigator();

function App(){
return(

   <Navigator/>

)
}

export default App;