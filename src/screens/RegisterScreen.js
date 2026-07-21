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

function RegisterScreen() {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const navigation = useNavigation();

    async function handleRegister() {

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === ''
        ) {

            Alert.alert(
                'Error',
                'Please fill all fields'
            );

            return;
        }
        if (password !== confirmPassword) {

            Alert.alert(
                'Error',
                'Passwords do not match'
            );

            return;

        }

        try {


            const app = auth().app;

            await auth().createUserWithEmailAndPassword(
                email,
                password,
            );

            await auth().currentUser.updateProfile({
                displayName: name,
            });

            Alert.alert(
                'Success',
                'Account Created Successfully',
            );

            navigation.replace('Login');

            console.log('4');

        } catch (error) {

            console.log(error);

            Alert.alert(
                'Error',
                error.message,
            );

        }
    }
    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <Image
                    source={require('../assets/logoapp.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Create Account
                </Text>

                <Text style={styles.subTitle}>
                    Create your account
                </Text>

            </View>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Pressable
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>
                    Create Account
                </Text>
            </Pressable>
            <View style={styles.loginContainer}>

                <Text style={styles.loginText}>
                    Already have an account?
                </Text>

                <Pressable
                    onPress={() => navigation.replace('Login')}
                >
                    <Text style={styles.loginLink}>
                        Login
                    </Text>
                </Pressable>

            </View>

        </View>




    );

}

export default RegisterScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },

    title: {
        fontSize: 32,
        fontFamily: FONTS.bold,
        color: COLORS.black,
    },

    input: {
        width: '90%',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        padding: 12,
        marginTop: 15,
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.black,
    },

    button: {
        width: '90%',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: FONTS.bold,
    },

    registerText: {
        marginTop: 20,
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: FONTS.semiBold,
    },

    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    loginText: {
        color: COLORS.gray,
        fontSize: 15,
        fontFamily: FONTS.regular,
    },

    loginLink: {
        color: COLORS.primary,
        fontSize: 15,
        fontFamily: FONTS.bold,
        marginLeft: 5,
    },

    header: {
        alignItems: 'center',
        marginBottom: 20,
    },

    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginBottom: 5,
    },

    subTitle: {
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.gray,
        marginTop: 5,
    },

});