import React from 'react';
import { useEffect } from 'react';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

function SplashScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login");
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                To Do App
            </Text>

        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },

    title: {
        fontSize: 32,
        fontFamily: FONTS.bold,
        color: COLORS.white,
    },

});