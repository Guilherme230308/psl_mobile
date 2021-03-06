import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, View, Text, StyleSheet, FlatList, Image } from 'react-native';

import api from '../services/api';

import logo from '../assets/images/logo.png';

function DirectoryList({ email, initial, navigation }) {
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        async function loadDirectories() {
            const response = await api.get('./directories/');
                        
            setDirectories(response.data);

        }

        loadDirectories();

    }, []);

    function handleNavigate(id, thumbnail_url, city, president, address, phone) {
        navigation.navigate('Detail', { id, thumbnail_url, city, president, address, phone });
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Encontre o seu diretório:</Text>

            <FlatList
                style={styles.list}
                data={directories}
                keyExtractor={directory => directory.id}
                vertical
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.city}>{item.city}</Text>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <TouchableOpacity onPress={() =>
                            handleNavigate(
                                item.id,
                                item.thumbnail_url,
                                item.city,
                                item.president,
                                item.address,
                                item.phone)}
                            style={styles.buttom}>
                            <Text style={styles.buttonText}>Visualizar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        fontWeight: 'bold'
    },

    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20

    },

    listItem: {
        marginRight: 14,
        paddingVertical: 12

    },

    thumbnail: {
        width: 340,
        height: 140,
        borderRadius: 12,
        alignSelf: 'center',
        resizeMode: 'stretch',

    },

    city: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    },

    telephone: {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },

    buttom: {
        height: 32,
        width: 340,
        backgroundColor: '#00008B',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 12

    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    }

});

export default withNavigation(DirectoryList);