import React from 'react';
import styles from '../../styles/Experience.module.scss';
import ExperienceItem from './ExperienceItem';
import Button from '../Utils/Button';

const Experience = ({
  experience,
  handleAddExperience,
  handleDeleteExperience,
  onChangeExperience
}) => {
  const experienceItems = experience.map(experienceItem => {
    return (
      <ExperienceItem
        key={experienceItem.id}
        id={experienceItem.id}
        deleteItem={handleDeleteExperience}
        onChange={onChangeExperience}
        experienceItem={experienceItem}
      />
    )
  })

  return (
    <section className={styles.sectionContainer}>
      <h4>Experience</h4>
      {experienceItems}
      <Button
        addButton
        text="Add"
        onClick={e => handleAddExperience(e)}
      />
    </section>
  )
}


export default Experience;
