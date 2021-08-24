import moment from "moment";
import React from "react";
import { Text, View} from "react-native";
import {Message} from '../../types';
import styles from '../ChatMessage/style';
export type ChatMessageProp={
    message:Message;

}
const ChatMessage=(props:ChatMessageProp)=>{
    const {message}=props;
    const ismymessage=()=>{
return message.user.id==='u1';
    }
    return(
        <View style={styles.container}>
            <View style={[styles.messagebox,{backgroundColor:ismymessage()?'#FFCCCC':'white',
                                            marginRight:ismymessage()?0:50,
                                            marginLeft:ismymessage()?50:0}]}>
               {!ismymessage() && <Text style={styles.name}>{message.user.name}</Text>} 
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
        
}
export default ChatMessage;