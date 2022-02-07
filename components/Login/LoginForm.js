import React, { useState , useEffect } from 'react'
import { View, Text ,TextInput , Pressable , StyleSheet ,TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import { firebase } from '../../firebase'


const LoginScreen = ({navigation}) => {

  const LoginFormSchema = Yup.object().shape({
    email:Yup.string().email().required('An email is required'),
    password:Yup.string()
      .required()
      .min(6 , 'your password has to have at least 6 characters')
  })

  const onLogin = async (email,password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("login successful", email,password)
    } catch(error) {
      alert(error.message)
    }
  }

  return(
    <View style={styles.wrapper}>
      <Formik
        initialValues = {{ email:'' , password:''}}
        onSubmit = {values => {
          onLogin(values.email, values.password)
        }} 
        validationSchema = {LoginFormSchema}
        validateOnMount = {true}
      >

    {({handleChange , handleBlur , handleSubmit , values , isValid}) => (
      <>
      <View
        style={[
          styles.inputField,
          {
            borderColor:
              values.email.length < 1 || Validator.validate(values.email)
              ? '#ccc'
              :'#FF0000',
          },
        ]}
      >
        <TextInput
          placeholderTextColor ='#ccc'  
          placeholder='email'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
      </View>

      <View 
        style={[
          styles.inputField,
          {
            borderColor:
                1 > values.password.length || values.password.length >= 8 ? '#CCC' :'#FF0000'
          },
        ]}
      >
        <TextInput
          placeholderTextColor ='#ccc'  
          placeholder='password'
          autoCapitalize='none'
          autoConnect={false}
          autoFocus={true}
          secureTextEntry={true}
          textContentType='password'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
      </View>
        
      <Pressable 
        titleSize = {20} 
        style={styles.button(isValid)} 
        onPress={handleSubmit}
        disabled = {!isValid}
      >
        <Text style={styles.buttonText}> Log In </Text>
      </Pressable>  

      <View style={styles.signupContainer}>
        <Text style={styles.text}>Don`t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={{color:'#cd853f'}}> Sign up</Text>
        </TouchableOpacity>
      </View> 
      </>
    )}
      </Formik> 
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    marginTop:50,
  },
  inputField:{
    width:325,
    borderRadius: 25,
    padding:10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom:25,
    borderWidth:1,
    paddingHorizontal:16,  
  },

  button: isValid => ({
    backgroundColor: isValid ? '#0096f6' : '#9ACAF7',
    width:325,
    alignItems: 'center',
    justifyContent:'center',
    minHeight:50,
    borderRadius:25,
    marginBottom:10,
  } ),

  buttonText:{
    fontWeight:'600',
    color:'#fff',
    fontSize:20,
      
  },

  signupContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50,
  },

  text:{
    color:'#ffffff'
  },

})

export default LoginScreen