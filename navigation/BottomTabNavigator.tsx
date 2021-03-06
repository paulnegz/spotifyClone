/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import { BottomTabParamList, TabOneParamList } from '../types';
import AlbumScreen from '../screens/AlbumScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30}  style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="play" size={30}  style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30}  style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'SpotifyClone' }}
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'SpotifyClone' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </TabTwoStack.Navigator>
  );

  // const TabThreeStack = createStackNavigator<TabThreeParamList>();

  // function TabThreeNavigator() {
  //   return (
  //     <TabTwoStack.Navigator>
  //       <TabTwoStack.Screen
  //         name="SearchScreen"
  //         component={SearchScreen}
  //         options={{ headerTitle: 'Search' }}
  //       />
  //     </TabTwoStack.Navigator>
  //   );
}
