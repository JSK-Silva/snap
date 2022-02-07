import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RESULTS } from '../../data/results'

const DisplayResults = () => {
    return (
        <View style={styles.item}>
            <Text style={{fontSize:28,marginTop:10,marginLeft:15,fontWeight:"bold",marginBottom:20}}>Mid Exam</Text>
            {RESULTS.map((result,index) => (
                <View key={index}>
                    <ResultsInfo result={result}/>
                </View>
            ))}
        </View>
    )
}

export default DisplayResults

const ResultsInfo = (props) => (
    <View style={{width:"95%",flexDirection:"row", justifyContent:"space-between",}}>
        <View>
            <Text style={{fontSize:20,marginTop:10,marginLeft:15}}>{props.result.email}</Text>
        </View>
        <View>
            <Text style={{fontSize:20,marginTop:10,marginRight:15,marginBottom:10,fontStyle:"italic"}}>{props.result.marks}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#A7D3F5",
        width:"90%",
        minHeight:100,
        marginBottom:10,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        borderRadius:10,
        marginLeft:20,
        marginTop:60,
    },
})
