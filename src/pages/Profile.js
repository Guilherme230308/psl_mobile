import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

import api from '../services/api';

import logo from '../assets/images/logo.png';

export default function Detail({ navigation }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCuty] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');


    async function save() {
        const response = await api.post('/user', {
            email, name, surname, city, senha, confirmaSenha
        })

        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('surname', surname);
        await AsyncStorage.setItem('city', city);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('senha', senha);
        await AsyncStorage.setItem('confirmaSenha', confirmaSenha);

        navigation.navigate('Login');

        alert("Usuário Criado com Sucesso")

    }


    async function cancel() {
        navigation.navigate('Menu')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image style={styles.image} source={logo} />
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Sobrenome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={surname}
                    onChangeText={setSurname}
                />

                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua cidade"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={true}
                    value={city}
                    onChangeText={setCuty}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                />

                <Text style={styles.label}>Confirmar Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    placeholderTextColor='#999'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                />

            </View>

            <View style={styles.button_container}>
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={cancel} style={styles.button}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginTop: 20
    },

    label: {
        fontWeight: 'bold',
        color: '#00008B',
        marginBottom: 2,
        fontSize: 16
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginBottom: 40,
        borderRadius: 6
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#444',
        height: 30,
        marginBottom: 8,
        borderRadius: 6
    },

    button_container: {
        flex: 1,
        marginTop: 20
    },

    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#00008B',
        borderRadius: 12,
        marginTop: 10,
        width: 360
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100,
        marginTop: 20,
        height: 120,
        width: 240,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 80
    },

    content: {
        marginTop: 20,
    },

});