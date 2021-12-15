import React from "react";
import styles from "../styles/Personal.module.scss";

class Personal extends React.Component {
    render() {
        return (
            <div className={styles.topSection}>
                <label>First Name</label>
                <input type='text' name="firstName" /> 
                <label>Last Name</label>
                <input type='text' name='lastName' />
                <label>Email</label>
                <input type='text' name='email' />
                <label>Phone Number</label>
                <input type='text' name='phoneNumber' />

            </div>
        )
    }
}

export default Personal;