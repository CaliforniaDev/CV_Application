import React from "react";
import Button from '../Utils/Button';
import SkillsItems from "./SkillsItems";
import styles from '../../styles/Skills.module.scss';
import styledButton from '../../styles/Button.module.scss';

class Skills extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { skills, onChangeSkills } = this.props;
        const skillItem = skills.map(skillItem => {
            return(
                <SkillsItems
                  key={skillItem.id}
                  id={skillItem.id}
                  onChange={onChangeSkills}
                  skillItem={skillItem} 
                />
            );
        })
        return (
            <section className={styles.sectionContainer}>
                <h4>Skills</h4>
                {skillItem}
                <Button 
                  classNameProp={styledButton.addButton}
                  name='Add' 
                />
                <Button
                  classNameProp={styledButton.deleteButton}
                  name='Delete'
                />
            </section>
        )
    }
}

export default Skills;