import React from 'react';
import Personal from './Personal';
import styles from '../styles/CVForm.module.scss';

class CVForm extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { handleChangeProp } = this.props;
        return (
            <main className={styles.mainWrapper}>
                <form className={styles.formContainer}>
                    <Personal handleChangeProp={handleChangeProp}/>
                </form>
            </main>
        )
    }
}
export default CVForm;