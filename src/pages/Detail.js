import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Detail({ navigation }) {

    const id = navigation.getParam('id');
    const thumbnail_url = navigation.getParam('thumbnail_url');
    const city = navigation.getParam('city');
    const president = navigation.getParam('president');
    const address = navigation.getParam('address');
    const phone = navigation.getParam('phone');

    async function route() {

    }

    async function handleSubmit() {
        navigation.navigate('Message');
    }

    async function back() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.top}>
                <Text style={styles.title}>Bem vindo ao diretório de</Text>
                <Text style={styles.diretorio}>{city}</Text>
            </View>

            <View>
                <Image style={styles.image} source={{uri: thumbnail_url}} />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Presidente: <Text style={styles.text}>{president}</Text></Text>

                <Text style={styles.label}>Telefone: <Text style={styles.text}>{phone}</Text></Text>
                <Text style={styles.label}>Endereço: <Text style={styles.text}>{address}</Text></Text>
            </View>

            <View style={styles.button_container}>
                <TouchableOpacity onPress={() => { Linking.openURL('https://psl.org.br/filiacao.html') }} style={styles.button}>
                    <Text style={styles.buttonText} >Navegue</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Fale com o presidente</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={back} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00008B',
        marginTop: 80,
        textAlign: 'center',
    },

    diretorio: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#00008B',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 10
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 2,
        fontSize: 16,
        color: '#00008B',
        textAlign: 'center',
    },

    text: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#00008B',
        textAlign: 'center'
    },

    button_container: {
        flex: 1,
        marginTop: 20     
    },

    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 34,
        backgroundColor: '#00008B',
        borderRadius: 12,
        marginTop: 10,
        width: 340
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    image: {
        height: 10,
        width: 340,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100,
        marginTop: 20,
        borderRadius: 12
    },

    content: {
        marginTop: 20,
        paddingHorizontal: 20
    }

});