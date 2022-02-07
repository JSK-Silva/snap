import React, { useState, useEffect } from 'react'
import { LecturerSignedInStack, SignedInStack, SignedOutStack, StudentSignedInStack } from './navigation'
import { firebase , db } from './firebase'
import ChooseRole from './screens/ChooseRole'


const AuthNavigation = () => {

    const[ currentUser, setCurrentUser ] = useState(null)

    const userHandler = user => 
        user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(
        () => firebase.auth().onAuthStateChanged(user => userHandler(user)),
        []
    )
    
    return <>{currentUser ? <SignedInStack/> : <SignedOutStack/> }</>
    
}
export default AuthNavigation 