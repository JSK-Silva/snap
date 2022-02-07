import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'

const LT1Body = ({navigation}) => {
    return (
        <View style={{marginTop:100}}>
            <View style={styles.item}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/ios-filled/100/000000/student-male--v1.png"}}
                        style={styles.icon}/>
                    <Text style={styles.itemText}>Batch 07</Text>
                </View>
                <View style={{justifyContent:"flex-start", flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:12}} onPress={()=> navigation.push("Batch 07")}>
                        <LottieView 
                        style={{height:70, alignSelf:"center", marginTop:10}}
                        source={require('../../assets/Anmations/add-button.json')}
                        autoPlay
                        speed={1.3}
                        loop={true}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.item}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image 
                        source={{uri:"https://img.icons8.com/ios-filled/100/000000/student-male--v1.png"}}
                        style={styles.icon}/>
                    <Text style={styles.itemText}>Batch 08</Text>
                </View>
                <View style={{justifyContent:"flex-start", flexDirection:"row"}}>
                    <TouchableOpacity style={{margin:12}} onPress={()=> navigation.push("Batch 08")}>
                        <LottieView 
                        style={{height:70, alignSelf:"center", marginTop:10}}
                        source={require('../../assets/Anmations/add-button.json')}
                        autoPlay
                        speed={1.3}
                        loop={true}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LT1Body

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#A7D3F5",
        width:250,
        height:200,
        marginBottom: 50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
    },
    icon: {
        width:50,
        height:50,
        justifyContent:"flex-start",
        marginRight:10
    },
    itemText:{
        color:"black",
        fontWeight:"900",
        fontSize:20,
        textTransform:"uppercase",
        marginLeft: 20,
    },
})

