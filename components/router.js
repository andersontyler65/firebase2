import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation"
import ItWorked from './auth/itworked'

const TabNavigator = createBottomTabNavigator({
  Logout: { screen: ItWorked },

})

export default createAppContainer(TabNavigator);
