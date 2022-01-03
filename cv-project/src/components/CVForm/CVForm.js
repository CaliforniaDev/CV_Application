import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
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
            skills, 
            onChangeExperience, 
            onChangeEducation, 
            onChangeSkills,
            handleAddExperience,
            handleAddEducation, 
            handleDeleteExperience, 
            handleDeleteEducation,
            handleChangePersonal,
            handleLoadExample,
            handleReset 
            } = this.props;
        return (
            <div className={styles.mainWrapper}>
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
                     <Skills
                       skills={skills}
                       onChangeSkills={onChangeSkills}
                     />

                     <Button
                       name="Load Example"
                       classNameProp={styledButton.loadExampleButton} 
                       onClick={e => handleLoadExample(e)}
                     />
                     <Button
                       name="Reset"
                       classNameProp={styledButton.resetButton}
                       onClick={e => handleReset(e)} 
                     />
                </form>
            </div>
        )
    }
}
export default CVForm;