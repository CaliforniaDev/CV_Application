import styles from '../../styles/Experience.module.scss';
import styledButton from '../../styles/Button.module.scss';
import Button from '../Utils/Button';

const ExperienceItem = ({ experienceItem, id, onChange }) => {

  return (
    <div className={styles.wrapper}>
      <input
        value={experienceItem.position}
        onChange={e => onChange(e, id)}
        type='text' name='position'
        placeholder='Position'
      />

      <input
        value={experienceItem.company}
        onChange={e => onChange(e, id)}
        type='text' name='company'
        placeholder='Company'
      />

      <input
        value={experienceItem.city}
        onChange={e => onChange(e, id)}
        type='text' name='city'
        placeholder='City'
      />

      <input
        value={experienceItem.from}
        onChange={e => onChange(e, id)}
        type='text' name='from'
        placeholder='From'
      />

      <input
        value={experienceItem.to}
        onChange={e => onChange(e, id)}
        type='text' name='to'
        placeholder='To'
      />
      <Button
        classNameProp={styledButton.deleteButton}
        onClick={(e) => { e.preventDefault() }}
        name="Delete"
      />
    </div>
  )
}

export default ExperienceItem;