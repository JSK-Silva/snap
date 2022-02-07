import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import TeamsSemesters from '../../components/TeamsFirst/TeamsSemesters'
import background from '../../assets/background.jpg'

const TeamsFirst = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <TeamsSemesters navigation={navigation}/>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
    },
})
export default TeamsFirst
