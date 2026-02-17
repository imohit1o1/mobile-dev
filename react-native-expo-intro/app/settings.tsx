import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function settings() {
    const [username, setUserName] = useState('');
    const [randomRepoName, setRandomRepoName] = useState('');

    const fetchRepo = () => {
        const data = fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            // .then(data => console.log("Data:", data))
            .then(data => setRandomRepoName(data[Math.floor(Math.random() * data.length)].name))
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <Text>
                Settings</Text>
            <TextInput
                placeholder="Enter your github username"
                value={username}
                onChangeText={setUserName}
                style={styles.input}
            />
            <Button
                title="Fetch Repos"
                onPress={fetchRepo}
            >
            </Button>
            <Text style={styles.repoName}>Random Repo : {randomRepoName} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: "white"
    },
    darkMode: {
        backgroundColor: "black",
    },
    repoName: {
        fontSize: 16,
        color: "black",
        marginTop: 10
    }
})