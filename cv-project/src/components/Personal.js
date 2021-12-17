import React from "react";
import styles from "../styles/Personal.module.scss";

class Personal extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { handleChangeProp } = this.props;
        return (
                <section className={styles.topSection}>
                    <h3>Personal Information</h3>
                    <label>First Name</label>
                    <input onChange={handleChangeProp} type='text' name="firstName" />
                    <label>Last Name</label>
                    <input onChange={handleChangeProp} type='text' name='lastName' />
                    <label>Email</label>
                    <input onChange={handleChangeProp} type='text' name='email' />
                    <label>Phone Number</label>
                    <input onChange={handleChangeProp} type='text' name='phoneNumber' />

                </section>
        )
    }
}

export default Personal;