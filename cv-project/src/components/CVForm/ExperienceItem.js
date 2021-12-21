import styles from '../../styles/Experience.module.scss';

const ExperienceItem = ({ experienceItem, onChange}) => {
  console.log(experienceItem);
    return (
        <div className={styles.wrapper}>
            <input
              value={experienceItem.position}
              onChange={onChange}
              type='text' name='position'
              placeholder='Position'
            />

            <input
              value={experienceItem.company}
              onChange={onChange}
              type='text' name='company'
              placeholder='Company'
            />

            <input
              value={experienceItem.city}
              onChange={onChange}
              type='text' name='city'
              placeholder='City'
            />

            <input
              value={experienceItem.from}
              onChange={onChange}
              type='text' name='from'
              placeholder='From'
            />

            <input
              value={experienceItem.to}
              onChange={onChange}
              type='text' name='to'
              placeholder='To'
            />
        </div>
    )
}

export default ExperienceItem;