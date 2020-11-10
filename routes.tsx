import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import AddTask from './src/screens/AddTask';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="ToDo" component={Home} />
          <Tab.Screen name="AddTask" component={AddTask} />
        </Tab.Navigator>
    );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabRoute" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
