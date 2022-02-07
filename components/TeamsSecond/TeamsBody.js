import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { MODULES } from '../../data/modules'

const TeamsBody = ({navigation}) => {
    return (
        <View style={{alignItems:"center"}}>
            <TouchableOpacity style={styles.item}>
                <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/000000/book.png'}}
                style={styles.icon} 
                /> 
                <Text style={styles.itemText}>CCS210 - Data Structures and Algorithms</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/000000/book.png'}}
                style={styles.icon} 
                /> 
                <Text style={styles.itemText}>CCS211 - Operating Systems and Platforms</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/000000/book.png'}}
                style={styles.icon} 
                /> 
                <Text style={styles.itemText}>CCS212 - Cloud Computing Fundamentals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=> navigation.push('Tasks')}>
                <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/000000/book.png'}}
                style={styles.icon} 
                /> 
                <Text style={styles.itemText}>CCS290 - Technology Challenge Competition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image
                source={{uri:'https://img.icons8.com/ios-filled/50/000000/book.png'}}
                style={styles.icon} 
                /> 
                <Text style={styles.itemText}>CMN210/BBMOM32013 - Project Management</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#A7D3F5",
        width:385,
        height:75,
        marginBottom:35,
        alignItems:"center",
        justifyContent:"flex-start",
        borderRadius:25,
        flexDirection:"row",
    },
    itemText:{
        color:"black",
        fontWeight:"600",
        fontSize:19,
        textTransform:"uppercase",
        marginLeft:10,
        fontStyle:"italic"
    },
    icon: {
        width:35,
        height:35,
        justifyContent:"flex-start",
        marginLeft:10
    }
})

export default TeamsBody
