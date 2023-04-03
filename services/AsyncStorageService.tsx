import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export class AsyncStorageService extends React.Component{
   
    static readAKey = async(storageKey : string) => {
        const value = await AsyncStorage.getItem(storageKey);
        console.log(value);
        return value;
    }

    static clearStorage = async() =>{
        await AsyncStorage.clear();
    }

    static saveData = async(storageKey : string, inputValue : string) =>{
        try{
            if(inputValue !== null){
              await AsyncStorage.setItem(storageKey, inputValue);
              return 'Data successfully saved';
            }
          }
          catch(e){
            return 'Failed to save the data to the storage';
      
          }

    }

}