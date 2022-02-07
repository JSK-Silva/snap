import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import SignupForm from '../components/SignUp/SignupForm'
import background from '../assets/background.jpg'

const SignUp = ({navigation}) => (
  <ImageBackground source={background} style={styles.container}> 
    <View style={styles.logoContainer}>
      <Image 
      style={{width:100 , height: 100 ,borderRadius:50}} 
      source={require('../assets/logo.png')}
      />
    </View>
    <SignupForm navigation={navigation}/>
  </ImageBackground>
)  
    
const styles = StyleSheet.create ({
  container:{
    flexGrow: 1, 
    alignItems:"center",
    justifyContent:"center" 
  },
  logoContainer:{
      alignItems:'center',
  }     
    })

export default SignUp