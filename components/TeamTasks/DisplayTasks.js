import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { TASKS } from '../../data/TeamTasks'

const DisplayTasks = () => {
    return (
        <View style={styles.item}>
            {TASKS.map((task,index) => (
                <View key={index}>
                    <TaskInfo task={task}/>
                </View>
            ))}
        </View>
    )
}

export default DisplayTasks

const TaskInfo = (props) => (
    <View>
        <View>
            <Text style={{fontSize:25,marginTop:10,fontWeight:"bold"}}>{props.task.name}</Text>
        </View>
        <View>
            <Text 
                style={{fontSize:21,marginTop:17, fontWeight:"bold"}}
            >Description </Text>

            <Text 
                style={{marginTop:5,fontSize:18,}}
            >{props.task.description}</Text>

            <Text 
                style={{fontSize:21,marginTop:17, fontWeight:"bold"}}
            >Number Of Members for a group</Text>

            <Text 
                style={{marginTop:5,fontSize:18,}}
            > {props.task.number_of_members}</Text>

            <Text 
                style={{fontSize:21,marginTop:17, fontWeight:"bold"}}
            >Other Information</Text>
            <Text>{props.task.other_Information}</Text>
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
        alignItems:"center",
        borderRadius:10,
        marginLeft:20,
        marginTop:60,
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
})
