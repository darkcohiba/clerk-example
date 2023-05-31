import React from 'react'
import { useUser, UserButton } from "@clerk/clerk-react";
import styles from '../style/Welcome.module.css';



function Welcome() {
    const {user, isLoaded} = useUser();

    return (
        <div className={styles.container}>
            <div>
                <h1>Welcome {user.firstName}</h1>
                <UserButton />
            </div>
        </div>
    )
}

export default Welcome