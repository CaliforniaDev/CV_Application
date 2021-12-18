import React from "react";
import styles from "../../styles/Personal.module.scss";

class Personal extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { personalInfo, handleChange } = this.props;
        return (
                <section className={styles.topSection}>
                    <h3>Personal Information</h3>
                    
                    <label>First Name</label>
                    <input 
                      onChange={handleChange} 
                      value={personalInfo.firstName} 
                      type='text' name="firstName" 
                    />

                    <label>Last Name</label>
                    <input 
                      onChange={handleChange} 
                      value={personalInfo.lastName} 
                      type='text' name='lastName' 
                    />

                    <label>Email</label>
                    <input 
                      onChange={handleChange}
                      value={personalInfo.email}
                      type='text' name='email' 
                    />

                    <label>Phone Number</label>
                    <input 
                      onChange={handleChange}
                      value={personalInfo.phoneNumber} 
                      type='text' name='phoneNumber'
                    />
                </section>
        )
    }
}
// FIX STATE AND RENDERING THE INFO FROM THE STATE;
export default Personal;