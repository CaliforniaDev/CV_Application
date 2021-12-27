import React from "react";
import EducationItem from "./EducationItem";
import styles from "../../styles/Education.module.scss";

class Education extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const {
            education,
            onChangeEducation
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
            </section>
        );
    }
}

export default Education;