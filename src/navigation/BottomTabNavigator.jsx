import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import { colors } from "../constants/colors"
import CartStack from "./CartStackNavigator"
import OrderStack from "./OrderStackNavigator"
import Header from "../components/Header"
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import CartTemp from "../screens/CartTemp"
import OrdersTemp from "../screens/OrdersTemp"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="COVET DESIGN"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Entypo name="shop" size={24} color="white" />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6
                                    name="cart-shopping"
                                    size={24}
                                    color={focused ? "black" : colors.grey900}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="Orders"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="receipt-outline" size={24} color={ focused ? 'white' : colors.white100} />
                            </View>
                        )
                    },
                }}
            />
            {/* <Tab.Screen
                name="Orders"
                component={OrdersTemp}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons
                                    name="receipt"
                                    size={24}
                                    color={focused ? "black" : colors.teal600}
                                />
                            </View>
                        )
                    },
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.grey400,
        shadowColor: "black",
        elevation: 4,
        borderRadius: 15,
        height: 60,
    },
})