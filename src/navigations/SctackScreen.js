
import React from 'react';
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../screens/ServiceScreen';
import LoginScreen from '../screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileScreen from '../screens/ProfileScreen';




const Stack = createStackNavigator();





export function ServiceStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} >
                    <Ionicons
                        color={'#000'} name={'ios-menu'} size={25}
                        onPress={() => { navigation.openDrawer(); }} />
                </TouchableOpacity>),
        }}>
            <Stack.Screen name='Service' component={ServiceScreen}
                options={{
                    headerTitle: "Services"
                }} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}


export function ProfileStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} >
                    <Ionicons
                        color={'#000'} name={'ios-menu'} size={25}
                        onPress={() => { navigation.openDrawer(); }} />
                </TouchableOpacity>),
        }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}


export function RootStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
    )
}