import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import ResultsBody from '../../components/ResultsSecond/ResultsBody'

const ResultsSecond = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={{alignItems:"center", justifyContent:"center", flex:1,}}>
                <ResultsBody navigation={navigation}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})

export default ResultsSecond
