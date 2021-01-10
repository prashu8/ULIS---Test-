import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ServiceScreen from '../screens/ServiceScreen';



const Stack = createStackNavigator();



export default function AppNav(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} initialRouteName={"Login"}>
                <Stack.Screen name="Login" component={LoginScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Service" component={ServiceScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

