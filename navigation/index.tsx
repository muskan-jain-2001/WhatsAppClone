/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import colors from "../constants/Colors";
import { View,Image} from 'react-native';
import { MaterialCommunityIcons, Fontisto,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScreen';
import StatusScreen from '../screens/StatusScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
       
      headerStyle:{
        backgroundColor:colors.light.tint,

      },
      headerTintColor:colors.light.background,
      headerTitleAlign:'left',
    }}>
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator}
        options={{ title:'WhatsApp' ,
        headerRight:()=>(
          <View style={{flexDirection:'row',width:60,justifyContent:'space-between',marginRight:10,backgroundColor:colors.light.tint }}>
          < Fontisto name="search" size={24} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" color="white"size={24}/>
          </View>
        )
                  
       }}
         />
         <Stack.Screen 
         name="ChatRoom"
          component={ChatRoomScreen} 
          options={({route})=>({ 
            title: route.params.name,
            headerRight:()=>(
              <View style={{flexDirection:'row',width:100,justifyContent:'space-between',marginRight:10,backgroundColor:colors.light.tint}}>
                <MaterialIcons name="call" size={24} color="white"/>
                <FontAwesome name="video-camera" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" color="white"size={24}/>
              </View>
                )
          } )}
           />
      <Stack.Screen name="Contacts" component={ContactScreen}  />
 

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
