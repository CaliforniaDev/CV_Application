import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import styles from '../../styles/CVForm.module.scss';

class CVForm extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { 
            personalInfo, 
            experience,
            education, 
            onChangeExperience, 
            onChangeEducation, 
            handleAddExperience, 
            handleDeleteExperience, 
            handleChangePersonal 
            } = this.props;
        return (
            <main className={styles.mainWrapper}>
                <form className={styles.formContainer}>
                    <Personal 
                      personalInfo={personalInfo}
                      handleChange={handleChangePersonal}
                    />
                    <Experience
                      experience={experience}
                      onChangeExperience={onChangeExperience}
                      handleAddExperience={handleAddExperience}
                      handleDeleteExperience={handleDeleteExperience} 
                    />
                    <Education
                      education={education}
                      onChangeEducation={onChangeEducation}
                     />
                </form>
            </main>
        )
    }
}
export default CVForm;