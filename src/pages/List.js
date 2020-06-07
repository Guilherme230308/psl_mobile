import React, { useState, useEffect } from 'react';
import { SafeAreaView, AsyncStorage, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TextInput, StyleSheet, Button, View } from 'react-native';

import DirectoryList from '../components/DirectoryList';

import api from '../services/api';

import logo from '../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function List({ navigation }) {
    //const [initials, setInitials] = useState([]);
    
    /*useEffect(() => {
        AsyncStorage.getItem('initials').then(storagedInitials => {
            const initialsArray = storagedInitials.split(',').map(initial => initial.trim());

            setInitials(initialsArray);
        })
    }, []);*/

    async function handleSubmit() {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo} />

            <ScrollView>
                <DirectoryList/>
            </ScrollView>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </SafeAreaView>

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

    button: {
        height: 42,
        backgroundColor: '#00008B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    }

})