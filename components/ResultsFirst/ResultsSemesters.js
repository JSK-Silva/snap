import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native'

const ResultsSemesters = ({navigation}) => {
    return (
        <View style={{margin:100}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 01</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 02</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 03</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.push('Semester Modules')}>
                    <Text style={styles.itemText}>Semester 04</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 05</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 06</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 07</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Semester 08</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        marginTop:50,
    },
    item:{
        backgroundColor:"#A7D3F5",
        width:170,
        height:60,
        marginRight:15,
        marginLeft:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
    },
    itemText:{
        color:"black",
        fontWeight:"900",
        fontSize:17,
    },
})
export default ResultsSemesters