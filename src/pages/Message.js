import React, { useState } from 'react';
import { KeyboardAvoidingView, AsyncStorage, TouchableOpacity, Platform, Image, Text, TextInput, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/images/logo.png';

export default function Message({ navigation }) {

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const date = day + '/' + month + '/' + year;


    const [text, setText] = useState('');
    const [city, setCuty] = useState('');
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');

    async function save() {
        const response = await api.post('/message', {
            date, text, city, sender, receiver
        })

        await AsyncStorage.setItem('text', text);
        await AsyncStorage.setItem('city', city);
        await AsyncStorage.setItem('sender', sender);
        await AsyncStorage.setItem('receiver', receiver);

    }

    async function handleBack() {
        navigation.navigate('Detail');
    }

    return (
        <KeyboardAvoidingView behavior='padding' enabled={Platform.OS = 'ios'} style={styles.container}>

            <Image style={styles.logo} source={logo} />
           
            <Text style={styles.label}>Escreva sua mensagem</Text>
            <TextInput style={styles.message}
                multiline={true}
                autoCorrect={true}
                numberOfLines={4}
                autoFocus
                value={text}
                onChangeText={setText}
            />

            <Text style={styles.label}>Sua cidade</Text>
            <TextInput style={styles.input}
                autoCorrect={true}
                value={city}
                onChangeText={setCuty}
            />

            <Text style={styles.label}>Escreva seu nome</Text>
            <TextInput style={styles.input}
                autoCorrect={true}
                value={sender}
                onChangeText={setSender}
            />

            <Text style={styles.label}>Escreva o destinatário</Text>
            <TextInput style={styles.input}
                autoCorrect={true}
                value={receiver}
                onChangeText={setReceiver}
            />

            <TouchableOpacity onPress={save} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBack} style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 60
    },

    message: {
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: "flex-start",
        width: 340,
        height: 100,
        borderRadius: 12,
        backgroundColor: '#dae1f7',
        paddingVertical: 10,
        fontSize: 20,
        textAlignVertical: 'top',
    },

    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#00008B',
        borderRadius: 12,
        marginTop: 20,
        width: 340,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    label: {
        fontWeight: 'bold',
        color: '#00008B',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
        color: '#444',
        height: 34,
        width: 340,
        marginBottom: 10,
        borderRadius: 6,
        alignSelf: 'center',
    }



});