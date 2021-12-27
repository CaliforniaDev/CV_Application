import styles from "../../styles/Education.module.scss";
const EducationItem = ({ educationItem, id, onChangeEducation }) => {
    console.log(educationItem);
    return (
        <div className={styles.wrapper}>
            <input
              type="text" name="school"
              value={educationItem.school}
              onChange={e => onChangeEducation(e, id)}
              placeholder="University Name" 
            />

            <input
              type="text" name="city"
              value={educationItem.city}
              onChange={e => onChangeEducation(e, id)}
              placeholder="City"
            />

            <input
              type="text" name="degree"
              value={educationItem.degree}
              onChange={e => onChangeEducation(e, id)}
              placeholder="Degree" 
            />

            <input
              type="text" name="subject"
              value={educationItem.subject}
              onChange={e => onChangeEducation(e, id)}
              placeholder="Subject" 
            />

            <input
              type="text" name="from"
              value={educationItem.from}
              onChange={e => onChangeEducation(e, id)}
              placeholder="From" 
            />

            <input
              type="text" name="to"
              value={educationItem.to}
              onChange={e => onChangeEducation(e, id)}
              placeholder="To" 
            />
        </div>
    )
}

export default EducationItem