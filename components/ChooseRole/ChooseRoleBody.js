import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/logo.png'

const ChooseRoleBody = ({navigation}) => {

    return (
        <>
        <Image
            source={logo} style={styles.logo}
        />
            <View style={styles.chooseRoleContainer}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Are you a?</Text>
                <View style={{width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.push('SHome')}>
                        <LottieView 
                            style={{height: 160, alignSelf:"center", marginBottom:10}}
                            source={require('../../assets/Anmations/student.json')}
                            autoPlay
                            speed={1.3}
                            loop={true}
                        />
                        <Text style={{fontSize:18,fontWeight:"bold"}}>Student</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:18,fontWeight:"bold"}}> or </Text>

                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.push('LecHome')}>
                        <LottieView 
                            style={{height:160, alignSelf:"center", marginBottom:10}}
                            source={require('../../assets/Anmations/profesor.json')}
                            autoPlay
                            speed={1.3}
                            loop={false}
                        />
                        <Text style={{fontSize:18,fontWeight:"bold"}}>Lecturer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
    )
}

export default ChooseRoleBody

const styles = StyleSheet.create({
    logo:{
        width:300,
        height:300,
    },
    chooseRoleContainer:{
        backgroundColor:"#A7D3F5",
        height:350,
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:30,
        borderRadius:15,
    },
    btn:{
        alignItems:"center",
        justifyContent:"center"
    }
})
