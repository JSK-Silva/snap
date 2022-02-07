import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import background from '../../assets/background.jpg'
import LT1Body from '../../components/LecTeams01/LT1Body'

const LecTeams = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <LT1Body navigation={navigation}/>
        </ImageBackground>
    )
}

export default LecTeams

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    }
})
