import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { B7USERS } from '../../data/users'

const AddResultsForm = () => {
    return (
        <View style={{marginTop:75}}>
            <View>
                <Text style={styles.txt}>Result Title</Text>
                <TextInput style={[styles.inputField,{width:300,height:50}]}/>
            </View>
            <View style={{marginTop:50}}>
                {B7USERS.map((user,index) => (
                    <View key={index}>
                        <UserInfo user={user}/>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> Alert.alert('Successfully Submitted')}>
                <Text style={styles.txt}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const UserInfo = (props) => (
    <View style={{flexDirection:"row"}}>
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.user.email}</Text>
        </View>
        <TextInput style={styles.inputField}/>
    </View>
)

export default AddResultsForm

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#A7D3F5",
        width:250,
        height:50,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"flex-start",
        borderRadius:10,
        flexDirection:"row",
        marginLeft:20
    },
    itemText:{
        color:"black",
        fontWeight:"600",
        fontSize:19,
        marginLeft:15,
        fontStyle:"italic"
    },
    inputField:{
        width:105,
        borderRadius:10,
        padding:10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom:15,
        borderWidth:1,
        paddingHorizontal:16,
        marginLeft:20
    },
    txt:{
        marginLeft:20,
        marginBottom:10,
        fontSize:20,
        fontWeight:"bold",
    },
    btn:{
        width:375,
        backgroundColor:"#A7D3F5",
        alignItems: 'center',
        justifyContent:'center',
        minHeight:50,
        borderRadius:15,
        marginTop:20,
        marginLeft:20
    },
})
