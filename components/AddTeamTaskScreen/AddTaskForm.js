import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import { firebase, db } from '../../firebase'

import * as Yup from 'yup'
import { Formik } from 'formik'

const AddTaskForm = () => {

    const AddTaskFormSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        number: Yup.number().required(),
        otherInfo: Yup.string(),
    })

    const onAdding = (name, description, number, otherInfo) =>{
        try{
            db.collection('tasks')
            .doc('team tasks')
            .collection('batch7')
            .add({
                email: firebase.auth().currentUser?.email,
                name: name,
                description: description,
                number: number,
                otherInfo: otherInfo
            })
            console.log('adding succesful');
        }catch(error){
           alert(error.message)     
        }
    }

    return (
        <SafeAreaView> 
        <Formik
            initialValues = {{ name:'' , description: '', number:'', otherInfo:''}}
            onSubmit = {values => {
                onAdding(values.name, values.description, values.number, values.otherInfo)
            }} 
            validationSchema={AddTaskFormSchema}
        >

        {({handleChange, handleSubmit, values}) => (
            <>
            <Text style={{marginBottom:10, fontSize:17, fontWeight:"bold"}}>Task Name</Text>
            <TextInput 
                style={styles.inputField}
                value={values.name}
                onChangeText={handleChange('name')}
            />

            <Text style={{marginBottom:10, fontSize:17, fontWeight:"bold"}}>Description</Text>
            <TextInput
                multiline={true} 
                numberOfLines={10}
                style={styles.inputField}
                value={values.description}
                onChangeText={handleChange('description')}

            />

            <Text style={{marginBottom:10, fontSize:17, fontWeight:"bold"}}>Number Of Members For Each Group</Text>
            <TextInput
                style={styles.inputField}
                value={values.number}
                onChangeText={handleChange('number')}
            />
            <Text style={{marginBottom:10, fontSize:17, fontWeight:"bold"}}>Other Information</Text>
            <TextInput 
                style={styles.inputField}
                value={values.otherInfo}
                onChangeText={handleChange('otherInfo')}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text>Add Task</Text>
            </TouchableOpacity>
            </>
        )}
        </Formik>
        </SafeAreaView>
    )
}

export default AddTaskForm

const styles = StyleSheet.create({
    inputField:{
        width:350,
        borderRadius:7,
        padding:10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom:20,
        borderWidth:1,
        paddingHorizontal:16,
      },
      btn:{
        backgroundColor:"#A7D3F5",
        alignItems: 'center',
        justifyContent:'center',
        minHeight:50,
        borderRadius:25,
        marginTop:20,
      },
})
