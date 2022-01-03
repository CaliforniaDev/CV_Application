import React from "react";
import CVHeader from "./CVHeader";
import CVBody from "./CVBody";
import styles from '../../styles/CVPreview.module.scss';

class CVPreview extends React.Component {
    constructor(props){
        super();
    }

    render() {
        const { state } = this.props;
        return (
            <div className={styles.previewContainer}>
            <CVHeader personalInfo={state.personalInfo}/>
            <CVBody
              personalInfo={state.personalInfo}
              experience={state.experience}
              education={state.education}
              skills={state.skills} 
            />
            </div>
        )
    }
}
export default CVPreview;