import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles=StyleSheet.create({
    container:{
        padding:10,
    },
    messagebox:{
        marginRight:50,
        borderRadius:5,
        padding:5,
    },
    name:{
        fontSize:12,
        color:Colors.light.tint,
        fontWeight:'bold',
        marginBottom:5,
    },
    time:{
        alignSelf:'flex-end',
        fontSize:10,
        color:'grey'
    },
    message:{

    }
});
export default styles;