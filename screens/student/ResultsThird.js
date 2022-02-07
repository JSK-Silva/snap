import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import DisplayResults from '../../components/ResultsThird/DisplayResults'
import background from '../../assets/background.jpg'

const ResultsThird = () => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <DisplayResults />
        </ImageBackground>
    )
}

export default ResultsThird

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})
