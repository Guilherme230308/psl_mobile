import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, AsyncStorage, Image, Text, TextInput, StyleSheet, Button, View, Linking } from 'react-native';

import api from '../services/api';

import logo from '../assets/images/logo.png';

export default function Message({ navigation }) {

    async function navigateProfile() {
        navigation.navigate('Profile');
    }

    async function navigateDirectories() {
        navigation.navigate('List');
    }

    async function navigateNews() {
        navigation.navigate('News');
    }

    async function exit() {
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo} />

            <View>
                <TouchableOpacity onPress={navigateProfile} style={styles.button}>
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { Linking.openURL('https://psl.org.br/filiacao.html') }} style={styles.button}>
                    <Text style={styles.buttonText} >Filie-se ao PSL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateDirectories} style={styles.button}>
                    <Text style={styles.buttonText}>Diretórios</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateNews} style={styles.button}>
                    <Text style={styles.buttonText}>Notícias</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={exit} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    logo: {
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 80
    },

    button: {
        height: 40,
        backgroundColor: '#00008B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 40,
        width: 360
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30
    }

});