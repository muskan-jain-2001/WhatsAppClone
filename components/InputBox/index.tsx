import React from "react";
import { Text,TouchableOpacity,View } from "react-native";
import styles from "../InputBox/style";
import { FontAwesome, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const InputBox=()=>{
    const [message,setMessage]=useState('');
    const onMicroPhonePress=()=>{
        console.warn(`microphone`)
    }
    const onSendPress=()=>{
        console.warn('Sending message')
        setMessage('');
    }
    const onPress=()=>{
        if(!message){
            onMicroPhonePress();
        }else{
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.typingbox}>
                <MaterialCommunityIcons name="sticker-emoji" size={24} color="black"style={{marginHorizontal:5}} />
                <TextInput 
                placeholder="Type a message"
                style={styles.input} 
                multiline
                value={message}
                onChangeText={setMessage}/>
                 <MaterialCommunityIcons name="attachment" size={24} color="black" style={{marginHorizontal:5}}/>
                {!message && <FontAwesome name="camera" size={24} color="black"style={{marginHorizontal:5}} />}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                {
                    !message
                    ?<FontAwesome name="microphone" size={24} color="white" />
                    : <Ionicons name="send" size={24} color="white" />
                }
                
               
            </View>
            </TouchableOpacity>
            
        </View>
    )
}
export default InputBox;