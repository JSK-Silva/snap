import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'

const LecFooter = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/*notification icon */}
            <TouchableOpacity onPress={()=> Alert.alert('Future Improvements')}>
                <Image
                    source={{uri:'https://img.icons8.com/ios-glyphs/50/000000/filled-appointment-reminders.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
            {/*message icon */}
            <TouchableOpacity onPress={()=> Alert.alert('Future Improvements')}>
                <Image
                    source={{uri:'https://img.icons8.com/ios-glyphs/60/000000/sms.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
            {/*user icon*/}
            <TouchableOpacity onPress={()=> navigation.push("profile")}>
                <Image
                    source={{uri:'https://img.icons8.com/ios-glyphs/60/000000/user--v1.png'}}
                    style={styles.icon} 
                />
            </TouchableOpacity>
        </View>
    )
}

export default LecFooter

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#A7D3F5",
        width:"100%",
        height:100,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        borderTopEndRadius:30,
        borderTopStartRadius:30,
    },
    icon: {
        width:30,
        height:30,
        justifyContent:"flex-end",
        margin:10
    },
})
