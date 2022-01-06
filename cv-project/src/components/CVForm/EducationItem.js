import Button from "../Utils/Button";
import styles from "../../styles/Education.module.scss";


const EducationItem = ({ educationItem, id, onChangeEducation, deleteItem }) => {
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
        type="text" name="state"
        value={educationItem.state}
        onChange={e => onChangeEducation(e, id)}
        placeholder="State"
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

      <Button
        deleteButton
        text="Delete"
        onClick={e => deleteItem(e, id)}
      />

    </div>
  )
}

export default EducationItem