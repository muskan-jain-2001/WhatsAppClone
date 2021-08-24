/**git
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontDisplay } from 'expo-font';
import * as React from 'react';
import { Fontisto } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/StatusScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="CHATS"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor:'#D3D3D3',
        style: {
          backgroundColor: Colors[colorScheme].tint,
          height:40,
          
          
        },
        activeBackgroundColor:'#D3D3D3',
      labelStyle: {
          fontWeight: 'bold',
          fontSize:15,
          paddingBottom:10,
        },
        
        
      }}>
        <BottomTab.Screen
        name="CAMERA"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel: () => null
        }}
      />
      <BottomTab.Screen
        name="CHATS"
        component={ChatScreen}
        
      />
      <BottomTab.Screen
        name="STATUS"
        component={TabTwoNavigator}
      
      />
      <BottomTab.Screen
        name="CALLS"
        component={TabTwoNavigator}
      
      />
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab One Title'
        
       }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
           headerTitle: 'My Status',
          
       }}
      />
    </TabTwoStack.Navigator>
  );
}
