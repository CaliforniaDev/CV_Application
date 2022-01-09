import styles from '../../styles/Experience.module.scss';
import Button from '../Utils/Button';
import TextArea from '../Utils/TextArea';

const ExperienceItem = ({ experienceItem, id, onChange, deleteItem }) => {

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
        value={experienceItem.state}
        onChange={e => onChange(e, id)}
        type='text' name='state'
        placeholder='State'
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

      <TextArea
        name="description"
        value={experienceItem.description}
        onChange={e => onChange(e, id)}
        placeholder="Description" 
      />
      <Button
        deleteButton
        text="Delete"
        onClick={(e) => deleteItem(e, id)}
      />
    </div>
  )
}

export default ExperienceItem;