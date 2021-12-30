import React from "react";
import CVHeader from "./CVHeader";
import styles from '../../styles/CVPreview.module.scss';

class CVPreview extends React.Component {
    constructor(props){
        super();
    }

    render() {
        const { state } = this.props;
        console.log(state);
        return (
            <div className={styles.previewContainer}>
            <CVHeader personalInfo={state.personalInfo}/>
            </div>
        )
    }
}
export default CVPreview;