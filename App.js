import React from 'react';
import AuthNavigation from './AuthNavigation';
import LT1Body from './components/LecTeams01/LT1Body';
import { LecturerSignedInStack, SignedOutStack } from './navigation';
import ChooseRole from './screens/ChooseRole';
import AddResultB7 from './screens/lecturer/AddResultB7';
import AddTeamTaskScreen from './screens/lecturer/AddTeamTaskScreen';
import LecTeams from './screens/lecturer/LecTeams01';
import ResultsThird from './screens/student/ResultsThird';
import TeamsTasks from './screens/student/TeamsTasks';


export default function App({navigation}) {
  return (
    <AuthNavigation />
  );
}