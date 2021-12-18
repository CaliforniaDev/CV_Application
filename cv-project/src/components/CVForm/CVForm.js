import React from 'react';
import Personal from './Personal';
import styles from '../../styles/CVForm.module.scss';

class CVForm extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { personalInfo, handleChangePersonal } = this.props;
        return (
            <main className={styles.mainWrapper}>
                <form className={styles.formContainer}>
                    <Personal 
                      personalInfo={personalInfo}
                      handleChange={handleChangePersonal}
                    />
                </form>
            </main>
        )
    }
}
export default CVForm;