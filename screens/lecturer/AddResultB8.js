import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import AddResultsForm from '../../components/AddResultB8/AddResultForm'

const AddResultB8 = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <AddResultsForm/>
        </ImageBackground>
    )
}

export default AddResultB8

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
    }
})