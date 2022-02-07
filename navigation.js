import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/student/Home'
import ResultsFirst from './screens/student/ResultsFirst'
import ResultsSecond from './screens/student/ResultsSecond'
import TeamsFirst from './screens/student/TeamsFirst'
import TeamsSecond from './screens/student/TeamsSecond'
import LecHome from './screens/lecturer/LecHome'
import LecTeams01 from './screens/lecturer/LecTeams01'
import LecResults01 from './screens/lecturer/LecResults01'
import UserScreen from './screens/UserScreen'
import AddTeamTaskScreen from './screens/lecturer/AddTeamTaskScreen'
import AddTeamTaskB8 from './screens/lecturer/AddTeamTaskB8'
import AddResultB7 from './screens/lecturer/AddResultB7'
import AddResultB8 from './screens/lecturer/AddResultB8'
import TeamsTasks from './screens/student/TeamsTasks'
import ResultsThird from './screens/student/ResultsThird'
import ChooseRole from './screens/ChooseRole'


const Stack = createStackNavigator()
const screenOptions = {
    headerShown: true,
    headerStyle:{
        backgroundColor:"#A7D3F5",
    },
    headerTintColor:"black",
    headerTitleStyle:{
        fontWeight:"bold",
    }
}

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Role' 
            screenOptions={screenOptions}
        >
            <Stack.Screen name='Role' component ={ChooseRole} options={{headerShown:false}}/>
            <Stack.Screen name='SHome' component={Home} options={{title:'Home'}}/>
            <Stack.Screen name='Semester Modules' component={ResultsSecond} />
            <Stack.Screen name='STeams' component={TeamsFirst} options={{title:'Teams'}}/>
            <Stack.Screen name='Modules' component={TeamsSecond}/>
            <Stack.Screen name='SResults' component={ResultsFirst} options={{title: 'Results'}}/>
            <Stack.Screen name='profile' component={UserScreen}/>
            <Stack.Screen name='Tasks' component={TeamsTasks}/>
            <Stack.Screen name='Result' component={ResultsThird}/>

            <Stack.Screen name='LecHome' component={LecHome} options={{title:'Home'}} />
            <Stack.Screen name='LecTeams01' component={LecTeams01} options={{title:'Teams'}} />
            <Stack.Screen name='LecResults01' component={LecResults01} options={{title: 'Results'}} />
            <Stack.Screen name='Lprofile' component={UserScreen}/>
            <Stack.Screen name='Batch 07' component={AddTeamTaskScreen}/>
            <Stack.Screen name='Batch 08' component={AddTeamTaskB8}/>
            <Stack.Screen name='Batch 07 Results' component={AddResultB7}/>
            <Stack.Screen name='Batch 08 Results' component={AddResultB8}/>
        </Stack.Navigator>
    </NavigationContainer>    
)

// export const LecturerSignedInStack = () => (
//     <NavigationContainer>
//         <Stack.Navigator 
//             initialRouteName='LecHome' 
//             screenOptions={screenOptions}
//         >
//             <Stack.Screen name='LecHome' component={LecHome} options={{title:'Home'}} />
//             <Stack.Screen name='LecTeams01' component={LecTeams01} options={{title:'Teams'}} />
//             <Stack.Screen name='LecResults01' component={LecResults01} options={{title: 'Results'}} />
//             <Stack.Screen name='profile' component={UserScreen}/>
//             <Stack.Screen name='Batch 07' component={AddTeamTaskScreen}/>
//             <Stack.Screen name='Batch 08' component={AddTeamTaskB8}/>
//             <Stack.Screen name='Batch 07 Results' component={AddResultB7}/>
//             <Stack.Screen name='Batch 08 Results' component={AddResultB8}/>
//             <Stack.Screen name='CooseRole' component={ChooseRole} />
//         </Stack.Navigator>
//     </NavigationContainer>    
// )

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Login' 
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
)
