import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import AddResultsForm from '../../components/AddResultB7/AddResultsForm'

const AddResultB7 = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <AddResultsForm/>
        </ImageBackground>
    )
}

export default AddResultB7

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
    }
})
