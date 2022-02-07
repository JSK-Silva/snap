import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import LHBody from '../../components/LecHome/LHBody'
import background from '../../assets/background.jpg'
import LecFooter from '../../components/LecHome/LecFooter'

const LecHome = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={{alignItems:"center", justifyContent:"center", flex:1,}}>
                <LHBody navigation={navigation}/>
            </View>
            <LecFooter navigation={navigation}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    }
})

export default LecHome
