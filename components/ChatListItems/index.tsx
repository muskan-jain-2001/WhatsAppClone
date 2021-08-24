import React from 'react';
import { View ,Text,Image,TouchableWithoutFeedback} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
export type ChatListItemProp={
    chatRoom:ChatRoom;
}


const ChatListItem=(props:ChatListItemProp)=>{
    const {chatRoom}=props;
    const user=chatRoom.users[1];
    const navigation=useNavigation();
    const onclick=()=>{
        navigation.navigate('ChatRoom',{id:chatRoom.id,
        name:user.name,
    
    });
    }
return(
    <TouchableWithoutFeedback onPress={onclick}>
    <View style={styles.container}>
        <View style={styles.leftcontainer}>
            <Image source={{uri:user.imageUri}} style={styles.image}/>
                <View style={styles.namemsg}>
                     <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.lastmessage}>{chatRoom.lastMessage.content}</Text>
                 </View>
        </View>
        <Text style={styles.timestamp}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
    </View>
    </TouchableWithoutFeedback>
)
};
export default ChatListItem;
