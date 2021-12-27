import React from "react";
import EducationItem from "./EducationItem";
import Button from "../Utils/Button";
import styles from "../../styles/Education.module.scss";
import styledButton from "../../styles/Button.module.scss";

class Education extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const {
            education,
            onChangeEducation,
            handleAddEducation
        } = this.props;

        
        const educationItem = education.map(educationItem => {
            return (
                <EducationItem
                  key={educationItem.id}
                  id={educationItem.id}
                  educationItem={educationItem}
                  onChangeEducation={onChangeEducation}
                />
            )
        })


        return (
            <section className={styles.sectionContainer}>
                <h4>Education</h4>
                {educationItem}
                <Button
                  name="Add"
                  classNameProp={styledButton.addButton}
                  onClick={e => handleAddEducation(e)}
                />
            </section>
        );
    }
}

export default Education;