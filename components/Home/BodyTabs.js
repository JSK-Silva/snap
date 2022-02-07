import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const BodyTabs = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.push('STeams')}>
                <Image
                    source={{uri:'https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-team-work-from-home-sbts2018-mixed-sbts2018.png'}}
                    style={styles.icon} 
                />
                <Text style={styles.itemText}>Teams</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.push('SResults')}>
                <Image
                    source={{uri:'https://img.icons8.com/ios-filled/50/000000/exam.png'}}
                    style={styles.icon} 
                />
                <Text style={styles.itemText}>Results</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#A7D3F5",
        width:250,
        height:100,
        marginBottom: 50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        flexDirection:"row",
    },
    itemText:{
        color:"black",
        fontWeight:"900",
        fontSize:20,
        textTransform:"uppercase",
        marginLeft: 20,
    },
    icon: {
        width:50,
        height:50,
        justifyContent:"flex-start",
        marginRight:10
    }
})

export default BodyTabs
//#8CD0D8