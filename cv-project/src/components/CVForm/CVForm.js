import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Button from '../Utils/Button';
import styles from '../../styles/CVForm.module.scss';
import styledButton from '../../styles/Button.module.scss';

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
            handleAddEducation, 
            handleDeleteExperience, 
            handleDeleteEducation,
            handleChangePersonal,
            handleReset 
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
                      handleAddEducation={handleAddEducation}
                      handleDeleteEducation={handleDeleteEducation}
                     />

                     <Button
                       name="Reset"
                       classNameProp={styledButton.resetButton}
                       onClick={e => handleReset(e, experience, education)} 
                     />
                </form>
            </main>
        )
    }
}
export default CVForm;