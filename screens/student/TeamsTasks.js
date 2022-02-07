import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import DisplayTasks from '../../components/TeamTasks/DisplayTasks'

const TeamsTasks = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <DisplayTasks />
        </ImageBackground>
    )
}

export default TeamsTasks

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems:'center', 
    },
})
