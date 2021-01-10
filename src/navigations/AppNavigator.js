import React, { useEffect, useState, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import ServiceScreen from '../screens/ServiceScreen';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileStack, RootStack, ServiceStack } from './SctackScreen';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();



export default function AppNav(props) {
    const [IsLoading, setIsLoading] = useState(true);
    const [UserToken, setUserToken] = useState(null);

    const userData = useSelector(state => state.auth.userData);


    const authContext = useMemo(() => ({
        signIn: () => {
            setUserToken('hello')
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null)
            setIsLoading(false);
        },
    }), []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userData.token !== undefined ?
                    (
                        <Drawer.Navigator>
                            <Drawer.Screen name="Service" component={ServiceStack} />
                            <Drawer.Screen name="Dashboard" component={ProfileStack} />
                        </Drawer.Navigator>
                    )
                    : (
                        <RootStack />
                    )
                }
            </NavigationContainer>
        </AuthContext.Provider>

    );
};

