import React from "react";
import styles from "../styles/Personal.module.scss";

class Personal extends React.Component {
    render() {
        return (
                <section className={styles.topSection}>
                    <h3>Personal Information</h3>
                    <label>First Name</label>
                    <input type='text' name="firstName" />
                    <label>Last Name</label>
                    <input type='text' name='lastName' />
                    <label>Email</label>
                    <input type='text' name='email' />
                    <label>Phone Number</label>
                    <input type='text' name='phoneNumber' />

                </section>
        )
    }
}

export default Personal;