import Button from '../Utils/Button';
import styles from '../../styles/Skills.module.scss';
const SkillsItems = ({ skillItem, id, onChange, deleteItem }) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={skillItem.skill}
        onChange={e => onChange(e, id)}
        type='text' name='skill'
        placeholder='Enter a skill'
      />

      <Button
        deleteButton
        text='Delete'
        onClick={e => deleteItem(e, id)}
      />
    </div>
  );
}

export default SkillsItems;