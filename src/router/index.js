import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, TambahKontak } from '../pages'

const Stack = new createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="TambahKontak" component={TambahKontak}/>   
        </Stack.Navigator>
    )
}

export default Router;
