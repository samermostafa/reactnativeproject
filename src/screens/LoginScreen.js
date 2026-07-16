import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';
import auth from '@react-native-firebase/auth';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function handleLogin() {

        if (
            email.trim() === '' ||
            password.trim() === ''
        ) {
            Alert.alert(
                'Error',
                'Please enter email and password'
            );
            return;
        }
        try {
            await auth().signInWithEmailAndPassword(
                email,
                password,
            );
            navigation.replace('Main');
        } catch (error) {

    if (error.code === 'auth/invalid-credential') {
        Alert.alert(
            'Login Failed',
            'Invalid email or password'
        );
    } else {
        Alert.alert(
            'Error',
            error.message
        );
    }

}

    }

    return (

        <View style={styles.container}>
            <Image
                source={require('../assets/logoapp.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.header}>

                <Text style={styles.title}>
                    Welcome Back
                </Text>

                <Text style={styles.subTitle}>
                    Sign in to continue
                </Text>

            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Pressable
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </Pressable>

            <View style={styles.registerContainer}>

                <Text style={styles.registerText}>
                    Don't have an account?
                </Text>

                <Pressable
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerLink}>
                        Register
                    </Text>
                </Pressable>

            </View>

        </View>




    );

}

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        paddingHorizontal: 25,
    },

    input: {
        backgroundColor: COLORS.lightGray,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 55,
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        marginBottom: 15,
    },

    button: {
        backgroundColor: COLORS.primary,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: FONTS.bold,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    logo: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginBottom: 5,
    },

    title: {
        fontSize: 28,
        fontFamily: FONTS.bold,
        color: COLORS.black,
    },

    subTitle: {
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.gray,
        marginTop: 5,
    },

    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    registerText: {
        color: COLORS.gray,
        fontSize: 15,
        fontFamily: FONTS.regular,
    },

    registerLink: {
        color: COLORS.primary,
        fontSize: 15,
        fontFamily: FONTS.bold,
        marginLeft: 5,
    },

});