import React from "react";
import Button from '../Utils/Button';
import SkillsItems from "./SkillsItems";
import styles from '../../styles/Skills.module.scss';

const Skills = ({
  skills,
  onChangeSkills,
  handleAddSkill,
  handleDeleteSkill
}) => {
  const skillItem = skills.map(skillItem => {
    return (
      <SkillsItems
        key={skillItem.id}
        id={skillItem.id}
        onChange={onChangeSkills}
        deleteItem={handleDeleteSkill}
        skillItem={skillItem}
      />
    );
  })
  return (
    <section className={styles.sectionContainer}>
      <h4>Skills</h4>
      {skillItem}
      <Button
        addButton
        text='Add'
        onClick={e => handleAddSkill(e)}
      />
    </section>
  )
}

export default Skills;