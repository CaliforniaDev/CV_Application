import React from 'react';
import styles from '../../styles/Experience.module.scss';
import styledButton from '../../styles/Button.module.scss';
import ExperienceItem from './ExperienceItem';
import Button from '../Utils/Button';

class Experience extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { experience, handleAddExperience, handleDeleteExperience, onChangeExperience } = this.props;
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
                  classNameProp={styledButton.addButton}
                  onClick={e => handleAddExperience(e)}
                  name="Add" 
                />
            </section>
        )
    }
}


export default Experience;
