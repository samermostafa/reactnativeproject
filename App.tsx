import React from 'react';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createBottomTabNavigator,
    createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  createDrawerScreen,
} from '@react-navigation/drawer';

import Home from './src/screens/Home';
import TaskDetails from './src/screens/TaskDetails';
import Profile from './src/screens/Profile';

const RootStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: Home,
            options: {
                headerShown: false,
            },
        },

        TaskDetails: {
            screen: TaskDetails,
            options: {
                title: 'Task Details',
            },
        },
    },
});

const MyTabs = createBottomTabNavigator({
    screens: {
        Home: createBottomTabScreen({
            screen: RootStack,
            options: {
                headerShown: false,
            },
        }),
        Profile: createBottomTabScreen({
            screen: Profile,
            options: {
                title: 'Profile',
            },
        }),
    },
});
const MyDrawer = createDrawerNavigator({
  screens: {
    Home: createDrawerScreen({
      screen: MyTabs,
    }),

    Profile: createDrawerScreen({
      screen: Profile,
    }),
  },
});

const Navigation = createStaticNavigation(MyDrawer);

export default function App() {
    return <Navigation />;
}