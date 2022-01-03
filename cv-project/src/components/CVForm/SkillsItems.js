import Button from '../Utils/Button';
import styles from '../../styles/Skills.module.scss';
import styledButton from '../../styles/Button.module.scss';

const SkillsItems = ({ skillItem, id, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <input
              value={skillItem.skill}
              onChange={e => onChange(e, id)}
              type='text' name='skill'
              placeholder='Enter a skill'
            />

            <Button
              classNameProp={styledButton.deleteButton}
              name='Delete'
            />
        </div>
    );
}

export default SkillsItems;