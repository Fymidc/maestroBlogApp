import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import { StackParamList } from '../types'


const Stack = createNativeStackNavigator<StackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"

    // tabBar={props => <StackBar {...props} />}
    >
    


      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail"
        component={DetailScreen}
        options={() => {
          return {

            animation: "slide_from_right",
            headerShown: false
          }
        }}
      />
     
      

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation