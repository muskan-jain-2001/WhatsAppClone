import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
    margin: 10,
    alignItems: 'flex-end',
    },
    typingbox:{
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: 'flex-end',
    },
    input:{
        flex:1,
        marginHorizontal:10,
        padding:5,
    },
    btn:{
        backgroundColor:'#8B0000',
        height:50,
        width:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    
    
    }
});
export default styles;