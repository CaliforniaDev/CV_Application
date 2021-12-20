import React from 'react';
import styles from '../../styles/Experience.module.scss';
import Button from '../Utils/Button';

class Experience extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { experience, handleAddExperience } = this.props;
        return (
            <section className={styles.sectionContainer}>
                <h4>Experience</h4>
                
                <Button 
                  onClick={e => handleAddExperience(e)} 
                />
            </section>
        )
    }
}


export default Experience;


{
    /*
<div className={styles.wrapper}>
<input 
  type='text' name='position' 
  placeholder='Position' 
/>

<input 
  type='text' name='company' 
  placeholder='Company' 
/>

<input 
  type='text' name='city' 
  placeholder='City' 
/>

<input 
  type='text' name='from' 
  placeholder='From' 
/>

<input 
  type='text' name='to' 
  placeholder='To' 
/>
</div>
    */
}
