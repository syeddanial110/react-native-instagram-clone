import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactStackNavigator, MainStackNavigator } from './StackNavigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="ContactUs" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator