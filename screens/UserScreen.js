import LottieView from 'lottie-react-native'
import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import background from '../assets/background.jpg'
import { db, firebase } from '../firebase'
import { SignedOutStack } from '../navigation'

const UserScreen = () => {

    const handleSignOut = async () => {
        try{
            await firebase.auth().signOut()
            console.log("sign out sucessful!")
        } catch (error) {
            console.log(error.message)
        }
        
    }

    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null) 

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db
            .collection('users')
            .where('owner_uid','==', user.uid).limit(1).onSnapshot(
                snapshot => snapshot.docs.map(doc => {
                    setCurrentLoggedInUser({
                        username: doc.data().username,
                    })
                }) 
            )
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])

    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.imageContainer}>
                <LottieView 
                    style={{height:300, alignSelf:"center", marginBottom:20}}
                    source={require('../assets/Anmations/user.json')}
                    autoPlay
                    speed={0.9}
                    loop={true}
                />
            </View>

            <View style={{
                backgroundColor:"white",
                width:"80%",
                height:"7%",
                borderRadius:15,
                alignItems:"center",
                justifyContent:"center" }}
            >   
                <Text style={{color:"black",fontWeight:"900",fontSize:20,margin:10}}>
                   Email: {firebase.auth().currentUser?.email}
                </Text>
            </View>
            
            <TouchableOpacity style={styles.signOutContainer} onPress={handleSignOut}>
                <Text
                    style={{fontSize:22, fontWeight:"900"}}
                >Sign Out </Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    imageContainer:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:100,
    },
    img:{
        width:150,
        height:150,
        justifyContent:"center",
        margin:10
    },
    signOutContainer:{
        width:"80%",
        height:"7%",
        marginTop:30,
        backgroundColor:"#A7D3F5",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
    }
})
