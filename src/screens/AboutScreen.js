import React from 'react';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Image
                source={require('../assets/logoapp.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.screenTitle}>
                About
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    About App
                </Text>

                <Text style={styles.text}>
                    To Do List App
                </Text>

                <Text style={styles.text}>
                    Version: 1.0
                </Text>

                <Text style={styles.description}>
                    A simple task management application developed using React Native and Firebase.
                    It allows users to create, edit and delete tasks securely.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    About Developer
                </Text>

                <Image
                    source={require('../assets/my photo.jpg')}
                    style={styles.developerImage}
                />

                <Text style={styles.text}>
                    Samer Qunoo
                </Text>

                <Text style={styles.text}>
                    Software Engineering Student
                </Text>

                <Text style={styles.text}>
                    University of Palestine
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Technologies Used
                </Text>

                <Text style={styles.text}>
                    • React Native
                </Text>

                <Text style={styles.text}>
                    • Firebase Authentication
                </Text>

                <Text style={styles.text}>
                    • Cloud Firestore
                </Text>

                <Text style={styles.text}>
                    • React Navigation
                </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
        marginTop: 20,
    },

    screenTitle: {
        fontSize: 30,
        fontFamily: FONTS.bold,
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: 25,
    },

    card: {
        width: '100%',
        backgroundColor: COLORS.lightGray,
        borderRadius: 12,
        padding: 18,
        marginBottom: 20,
    },

    cardTitle: {
        fontSize: 20,
        fontFamily: FONTS.bold,
        color: COLORS.primary,
        marginBottom: 12,
    },

    text: {
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.gray,
        marginBottom: 6,
    },

    description: {
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.gray,
        lineHeight: 22,
        marginTop: 5,
    },

    developerImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        alignSelf: 'center',
        marginBottom: 15,
        borderWidth: 3,
        borderColor: COLORS.primary,
    },

});