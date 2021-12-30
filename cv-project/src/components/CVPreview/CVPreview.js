import React from "react";
import styles from '../../styles/CVPreview.module.scss';

class CVPreview extends React.Component {
    constructor(props){
        super();
    }

    render() {
      
        const { firstName, lastName, email, phoneNumber } = this.props.personalInfo;
        return (
            <div className={styles.previewContainer}>
                <section>
                <p> {firstName} </p>
                <p> {lastName} </p>
                <p> {email} </p>
                <p> {phoneNumber} </p>
                </section>
            </div>
        )
    }
}
export default CVPreview;