import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, StyleSheet } from 'react-native';

import api from '../services/api'

import logo from '../assets/images/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [initials, setInitials] = useState('');

    /*useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Login');
            }
        })
    }, []);*/

    async function handleSubmit() {
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('initials', initials);

        navigation.navigate('Menu');

    }

    async function navigateProfile() {
        navigation.navigate('Profile');
    }

    return (
        <View behavior='padding' enabled={Platform.OS = 'ios'} style={styles.container}>
            <View style={styles.Image}>
                <Image source={logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu email"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={initials}
                    onChangeText={setInitials}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateProfile} style={styles.link}>
                    <Text style={styles.linkText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: 'bold',
        color: '#00008B',
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 6
    },

    Image: {
        height: 100,
        width: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 80
    },

    button: {
        height: 42,
        backgroundColor: '#00008B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    link: {
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },

    linkText: {
        color: '#00008B',
        fontWeight: 'bold',
        fontSize: 16
    }
});