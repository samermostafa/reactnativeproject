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

function RegisterScreen() {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function handleRegister() {

        if (
            name === '' ||
            email === '' ||
            password === ''
        ) {

            Alert.alert(
                'Error',
                'Please fill all fields'
            );

            return;
        }

        Alert.alert(
            'Success',
            'Account Created Successfully'
        );

        navigation.replace('Login');
    }
    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Register
            </Text>

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
                secureTextEntry={true}
            />
            <Pressable
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>
                    Register
                </Text>
            </Pressable>

        </View>




    );

}

export default RegisterScreen;

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