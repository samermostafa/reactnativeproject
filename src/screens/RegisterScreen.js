import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

        console.log('1');

        try {

            console.log('2');

            const app = auth().app;
            console.log(app.name);

            console.log('3');

            await auth().createUserWithEmailAndPassword(
                email,
                password,
            );

            console.log('4');

        } catch (error) {

            console.log(error);

            Alert.alert(
                'Error',
                error.message,
            );

        }}
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
            backgroundColor: '#ffffff',
        },

        title: {
            fontSize: 32,
            fontWeight: 'bold',
        },

        input: {
            width: '90%',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            padding: 12,
            marginTop: 15,
        },
        button: {
            width: '90%',
            backgroundColor: '#F4A825',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 15,
        },

        buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
        registerText: {
            marginTop: 20,
            color: '#F4A825',
            fontSize: 16,
            fontWeight: '600',
        },
        loginContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
        },

        loginText: {
            color: '#555',
            fontSize: 15,
        },

        loginLink: {
            color: '#F4A825',
            fontSize: 15,
            fontWeight: 'bold',
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
            color: '#666',
            marginTop: 5,
        },

    });