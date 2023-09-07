import React from 'react'
import { useUser, UserButton, useAuth } from "@clerk/clerk-react";
import styles from '../style/Welcome.module.css';



function Welcome() {
    const {user, isLoaded} = useUser();
    const {sessionId} = useAuth();
    console.log(user)

    return (
        <div className={styles.container}>
            <div>
                <h1>Welcome {user.firstName}</h1>
                <p>Your session id is {sessionId}</p>
                <p>Your user id is {user.id}</p>
                <p>Your full name is {user.fullName}</p>

                <UserButton />
            </div>
        </div>
    )
}

export default Welcome