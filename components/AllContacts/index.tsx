import React from "react";
import {TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from "../AllContacts/style";
import { useNavigation } from "@react-navigation/native";
const AllContact=()=>{
    const navigation=useNavigation();
    const onPress=()=>{
        navigation.navigate('Contacts')
    }
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
       
            <AntDesign name="contacts" size={24} color="white" />
      
        </TouchableOpacity>
        </View>
    )
}
export default AllContact;