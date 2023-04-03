import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import About  from "./components/About";

const Stack = createNativeStackNavigator();

function App(){
return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={Home}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>

)
}

export default App;