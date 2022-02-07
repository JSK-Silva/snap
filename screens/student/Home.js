import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native'
import BodyTabs from '../../components/Home/BodyTabs'
import Header from '../../components/Home/Header'
import background from '../../assets/background.jpg'

const Home = ({navigation}) => {
    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={{alignItems:"center", justifyContent:"center", flex:1,}}>
                <BodyTabs navigation={navigation}/>
            </View>
            <Header navigation={navigation}/>
        </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        flex:1,
        justifyContent:"center",
    }
})

export default Home
