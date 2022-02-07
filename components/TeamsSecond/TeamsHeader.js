import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const TeamsHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={{uri:'https://img.icons8.com/ios-filled/50/000000/back.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
            <Text style={styles.text}>TEAMS</Text>
            <TouchableOpacity>
                <Image
                    source={{uri:'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    icon: {
        width:30,
        height:30,
        justifyContent:"flex-end",
        marginLeft:10,
        marginRight:10,
    },
    text:{
        fontWeight:"bold",
        fontSize:25,
    }
})

export default TeamsHeader
