import React from "react";
import EducationItem from "./EducationItem";
import Button from "../Utils/Button";
import styles from "../../styles/Education.module.scss";

const Education = ({
  education,
  onChangeEducation,
  handleAddEducation,
  handleDeleteEducation
}) => {
  const educationItem = education.map(educationItem => {
    return (
      <EducationItem
        key={educationItem.id}
        id={educationItem.id}
        deleteItem={handleDeleteEducation}
        educationItem={educationItem}
        onChangeEducation={onChangeEducation}
      />
    )
  });
  return (
    <section className={styles.sectionContainer}>
      <h4>Education</h4>
      {educationItem}
      <Button
        text="Add"
        addButton
        onClick={e => handleAddEducation(e)}
      />
    </section>
  );
}

export default Education;