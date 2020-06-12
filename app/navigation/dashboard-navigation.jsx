import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import DetailsScreen from '../screens/home-screen/detail';
import FeedScreen from '../screens/home-screen/feed';
import MessageScreen from '../screens/home-screen/message';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const menuIcon = require("../assets/images/icons/menu.png");
const searchIcon = require("../assets/images/icons/search.png");

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts"
        component={DashboardTab}
        options={{
          headerTitleAlign: '',

          headerLeft: (navigation) => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.menuIcon}
                source={menuIcon} />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <Image style={styles.searchIcon}
              source={searchIcon} />
          ),
          headerStyle: {
            backgroundColor: '#33b2ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      />

      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const DashboardTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    width: 25,
    height: 25,
    left: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
    right: 10
  },
});
