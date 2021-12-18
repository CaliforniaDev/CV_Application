import React from 'react';
import styles from '../../styles/Experience.module.scss';

class Experience extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <section className={styles.sectionContainer}>
                <h4>Experience</h4>
                <div className={styles.wrapper}>
                    <input type='text' name='position' placeholder='Position' />
                    <input type='text' name='company' placeholder='Company' />
                    <input type='text' name='city' placeholder='City' />
                    <input type='text' name='from' placeholder='From' />
                    <input type='text' name='to' placeholder='To' />
                </div>
            </section>
        )
    }
}

export default Experience;