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

        return (
            <section className={styles.sectionContainer}>
                <EducationItem
                  onChangeEducation={onChangeEducation}
                />
            </section>
        );
    }
}

export default Education;