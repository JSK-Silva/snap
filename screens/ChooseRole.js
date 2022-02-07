import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import background from '../assets/background.jpg'
import ChooseRoleBody from '../components/ChooseRole/ChooseRoleBody'

const ChooseRole = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <ChooseRoleBody navigation={navigation}/>
        </ImageBackground>
    )
}

export default ChooseRole

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
        width:300,
        height:300,
    },
    chooseRoleContainer:{
        backgroundColor:"#A7D3F5",
        height:350,
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:30,
        borderRadius:15,
    },
    btn:{
        alignItems:"center",
        justifyContent:"center"
    }
})
