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
        return (
            <section className={styles.sectionContainer}>
                <h4>Skills</h4>
                <SkillsItems />
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