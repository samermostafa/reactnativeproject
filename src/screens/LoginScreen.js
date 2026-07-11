import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
} from 'react-native';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function handleLogin() {

        if (email === '' || password === '') {

            Alert.alert(
                'Error',
                'Please enter email and password'
            );

            return;
        }

        navigation.replace('Main');

    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Login
            </Text>

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

            <Pressable
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.registerText}>
                    Don't have an account? Register
                </Text>
            </Pressable>

        </View>




    );

}

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8c978',
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
        marginTop: 25,
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

});