import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function StatusScreen() {
  return (
    <TouchableWithoutFeedback>
    <View style={styles.container}>
      <Text style={styles.heading}>My Status</Text>
      <Text style={styles.subheading}>tap to add status update</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,
    padding:5,
  },
  heading:{
    fontSize:15,
    fontWeight:'bold',
    
  },
  subheading:{
    fontSize:12,
    color:'grey'

  }
  
});
