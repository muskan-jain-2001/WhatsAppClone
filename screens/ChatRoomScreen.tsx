import React from "react";
import { Text ,FlatList,ImageBackground} from "react-native";
import { useRoute } from "@react-navigation/native";
import chatRoomdata from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import bg from '../assets/images/bg.png';
import InputBox from "../components/InputBox";
export default function ChatRoomScreen(){
    const route=useRoute();
    const chatdata=chatRoomdata.messages;
    return(
        <ImageBackground source={bg} style={{width:"100%",height:"100%"}}>
        <FlatList
         data={chatRoomdata.messages}
         renderItem={({item})=><ChatMessage message={item}/> }
         initialScrollIndex={chatdata.length - 1}
         />
         <InputBox/>
         </ImageBackground>
    )
}
