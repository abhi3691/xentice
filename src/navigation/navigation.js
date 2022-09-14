import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home_screen/HomeScreen';
import PostScreen from '../screens/post_screen/PostScreen';

const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        />
        <Stack.Screen
        name='PostScreen'
        component={PostScreen}
        />
    </Stack.Navigator>
  )
}

export default Navigation