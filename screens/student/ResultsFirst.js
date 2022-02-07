import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import ResultsSemesters from '../../components/ResultsFirst/ResultsSemesters'

const ResultsFirst = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <ResultsSemesters navigation={navigation}/>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
    },
})
export default ResultsFirst