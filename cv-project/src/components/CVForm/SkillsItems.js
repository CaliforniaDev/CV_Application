import styles from '../../styles/Skills.module.scss';

const SkillsItems = ({ skillItem, id, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <input
              value={skillItem.skill}
              onChange={e => onChange(e, id)}
              type='text' name='skill'
              placeholder='Enter a skill'
            />
        </div>
    );
}

export default SkillsItems;