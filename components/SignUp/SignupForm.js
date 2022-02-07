import React, { useState } from 'react'
import { View, Text ,TextInput ,Button, Pressable , StyleSheet ,TouchableOpacity ,Touchable } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import { firebase , db } from '../../firebase'

const SignupForm = ({navigation}) => {

  const SignupFormSchema = Yup.object().shape({
    email:Yup.string().email().required('An email is required'),
    username:Yup.string().required().min(2, 'A username is required'),
    role:Yup.string().required().min(2, 'A user role is required'),
    password:Yup.string()
      .required()
      .min(6 , 'your password has to have at least 6 characters')
  })

  const onSignUp = async (email, password, username, role) => {
    try{
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log("User created successfully", email,password)
      if(role==='lecturer'){
        db.collection('lecturer')
        .doc(authUser.user.email)
        .set({
          uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          role: role,
        })
    }else {
      db.collection('student')
        .doc(authUser.user.email)
        .set({
          uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          role: role,
        })
    }
    }
    catch(error) {
      alert(error.message)
    };
  }

  return(
    <View style={styles.wrapper}>
    <Formik
      initialValues = {{ email:'' , username: '', password:'', role:''}}
      onSubmit = {values => {
        onSignUp(values.email, values.password, values.username, values.role)
      }} 
      validationSchema = {SignupFormSchema}
      validateOnMount = {true}
    >

    {({handleChange , handleBlur , handleSubmit , values , isValid}) => (
      <>
      <View
        style={[
          styles.inputField,
          {
            borderColor:
              values.email.length < 1 || Validator.validate(values.email) ? '#ccc' :'#FF0000',
          },
        ]}
      >
      <TextInput
        placeholderTextColor='#ccc'
        placeholder='email'
        keyboardType='email-address'
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
              1 > values.username.length || values.username.length >= 2 ? '#ccc' :'#FF0000',
          },
        ]}
      >
        <TextInput
          placeholderTextColor='#ccc'
          placeholder='username'
          autoCapitalize='none'
          textContentType='username'
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
        />
      </View>

      <View
        style={[
          styles.inputField,
          {
            borderColor: '#CCC'
          },
        ]}
      >
        <TextInput
          placeholderTextColor='#CCC'
          placeholder='give it as "lecturer" or "student"'
          autoCapitalize='none'
          textContentType='jobTitle'
          onChangeText={handleChange('role')}
          onBlur={handleBlur('role')}
          value={values.role}
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
          placeholderTextColor='#CCC'
          placeholder='password'
          autoCapitalize='none'
          autoConnect={false}
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
      >
        <Text style={styles.buttonText}> Sign Up </Text>
      </Pressable>  

      <View style={styles.loginContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color:'#cd853f'}}> Log In</Text>
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
    borderRadius: 25,
    padding:10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom:15,
    borderWidth:1,
    paddingHorizontal:16,
  },

  button: isValid => ({
    backgroundColor: isValid ? 'rgba(255,255,255,0.3)' : '#9ACAF7',
    alignItems: 'center',
    justifyContent:'center',
    minHeight:50,
    borderRadius:25,
    marginTop:50,
  } ),

  buttonText:{
    fontWeight:'600',
    color:'#fff',
    fontSize:20,
  },

  loginContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50,
  },
 
 })
 
 export default SignupForm