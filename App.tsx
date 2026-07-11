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

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import TaskDetails from './src/screens/TaskDetails';
import Profile from './src/screens/Profile';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


const HomeStack = createNativeStackNavigator({
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
            screen: HomeStack,
            options: {
                title: 'Home',
                headerShown: false,
            },
        }),

        Profile: createBottomTabScreen({
            screen: Profile,
            options: {
                title: 'Profile',
                headerShown: false,
            },
        }),
    },
});


const MyDrawer = createDrawerNavigator({
    screens: {
        Home: createDrawerScreen({
            screen: MyTabs,
            options: {
                title: 'Home',
                headerShown: true,
            },
        }),

        Profile: createDrawerScreen({
            screen: Profile,
            options: {
                title: 'Profile',
            },
        }),
    },
});


const RootStack = createNativeStackNavigator({
    initialRouteName: 'SplashScreen',

    screens: {
        SplashScreen: {
            screen: SplashScreen,
            options: {
                headerShown: false,
            },
        },
        Login: {
            screen: LoginScreen,
            options: {
                headerShown: false,
            },
        },
        Register: {
            screen: RegisterScreen,
            options: {
                headerShown: false,
            },
        },

        Main: {
            screen: MyDrawer,
            options: {
                headerShown: false,
            },
        },
    },
});


const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation />;
}