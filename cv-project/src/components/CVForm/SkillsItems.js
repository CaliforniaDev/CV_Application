import styles from '../../styles/Skills.module.scss';

const SkillsItems = props => {
    return (
        <div className={styles.wrapper}>
            <input
              type='text' placeholder='Enter a skill'
            />
        </div>
    );
}

export default SkillsItems;