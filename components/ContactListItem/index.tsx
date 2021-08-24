import React from 'react';
import { View ,Text,Image,TouchableWithoutFeedback} from 'react-native';
import { User } from '../../types';
import styles from './style';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
export type ContactListItemProp={
    user:User;
}


const ContactListItem=(props:ContactListItemProp)=>{
    const {user}=props;
    const navigation=useNavigation();
    const onclick=()=>{
        
    }
return(
    <TouchableWithoutFeedback onPress={onclick}>
    <View style={styles.container}>
        <View style={styles.leftcontainer}>
            <Image source={{uri:user.imageUri}} style={styles.image}/>
                <View style={styles.namemsg}>
                     <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.status}>Busy..</Text>
                 </View>
        </View>
        
    </View>
    </TouchableWithoutFeedback>
)
};
export default ContactListItem;
