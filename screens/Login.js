import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, KeyboardAvoidingView } from 'react-native'
import LoginForm from '../components/Login/LoginForm'
import background from '../assets/background.jpg'

const Login = ({navigation}) => (
    <ImageBackground source={background} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
          style={{width:100 , height: 100 ,borderRadius:50}} 
          source={require('../assets/logo.png')}
          />
          <Text style={styles.LogoText}>SNAP LOGIN</Text>
       </View>
      <LoginForm navigation={navigation}/>
    </ImageBackground>
    )
    
    
const styles = StyleSheet.create ({  
    container:{
        flex: 1, 
        alignItems:'center',
        justifyContent:'center', 
    },

    logoContainer:{
        alignItems:'center',
    },
    LogoText:{
        color: 'white',
        fontSize: 30,
        fontStyle: 'normal',
        marginVertical:9,
        fontWeight:'700',
    },    
})

export default Login