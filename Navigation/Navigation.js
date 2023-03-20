

import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native'
import Splash from '../Home/Splash'
import Home from '../Home/Home'
import Profile from '../Home/Profile'
import Product_Details from '../Home/Product_Details'
import Card from '../Home/Card'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Const from '../constant/Const'

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("window");


function app() {
    const [showspalsh, setShowsplash] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowsplash(false)
        }, 1000);
    }, [])
    return (
        <>
            {
                showspalsh ? (
                    <Splash />)

                    : null
            }
            <NavigationContainer>

                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: {
                            position: 'absolute',
                            backgroundColor: Const.first_color,
                            height: height * .08,
                            paddingBottom: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            

                        },
                        headerShown: false,
                        tabBarActiveTintColor: 'tomato',
                        

                    }}

                >

                    <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home" color={color} size={16} />
                            ),
                        }}
                    />

                     <Tab.Screen name="Card" component={Card}
                        options={{
                            tabBarBadge: 2,
                            tabBarLabel: 'Cart',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="md-cart-outline" color={color} size={16} />
                            ),
                        }}
                    /> 
                    <Tab.Screen name="Profile" component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="person" color={color} size={16} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default app;