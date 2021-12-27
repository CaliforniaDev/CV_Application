import React from "react";
import EducationItem from "./EducationItem";
import styles from "../../styles/Education.module.scss";

class Education extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <section className={styles.sectionContainer}>
                <EducationItem />
            </section>
        );
    }
}

export default Education;