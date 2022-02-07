import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import AddTaskFormB8 from '../../components/AddTeamTaskB8/AddTaskFormB8'

const AddTeamTaskB8 = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <AddTaskFormB8 />
        </ImageBackground>
    )
}

export default AddTeamTaskB8

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})