import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import TeamsBody from '../../components/TeamsSecond/TeamsBody'
import background from '../../assets/background.jpg'

const TeamsSecond = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}> 
            <View style={{alignItems:"center", justifyContent:"center", flex:1,}}>
                <TeamsBody navigation={navigation}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flex: 1,
        alignItems: "center",
    },
})

export default TeamsSecond
