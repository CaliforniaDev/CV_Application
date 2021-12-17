import React from 'react';
import Personal from './Personal';
import styles from '../styles/CvForm.module.scss';

class CvForm extends React.Component {
    render() {
        return (
            <main className={styles.mainWrapper}>
                <form className={styles.formContainer}>
                    <Personal />
                </form>
            </main>
        )
    }
}
export default CvForm;