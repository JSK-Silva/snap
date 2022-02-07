import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import AddTaskForm from '../../components/AddTeamTaskScreen/AddTaskForm'

const AddTeamTaskScreen = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <AddTaskForm />
        </ImageBackground>
    )
}

export default AddTeamTaskScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

