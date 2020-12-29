import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/Products';
import { NavigationContainer } from '@react-navigation/native';
import  LoginScreen  from '../screens/LoginScreen';


const Stack = createStackNavigator();



const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} initialRouteName={"Login"}>
                <Stack.Screen name="Products" component={ProductScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNav;