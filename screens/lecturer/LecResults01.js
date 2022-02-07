import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import LR1Body from '../../components/LecResults01/LR1Body'

const LecResults01 = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <LR1Body navigation={navigation}/>
        </ImageBackground>
    )
}

export default LecResults01

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    }
})
