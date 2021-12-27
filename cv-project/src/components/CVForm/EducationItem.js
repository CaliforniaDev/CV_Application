import styles from "../../styles/Education.module.scss";
const EducationItem = ( onChangeEducation ) => {
    return (
        <div className={styles.wrapper}>
            <input 
              type="text" name="school"
              onChange={onChangeEducation}
              placeholder="University Name" 
            />

            <input
              type="text" name="city"
              onChange={onChangeEducation}
              placeholder="City"
            />

            <input
              type="text" name="degree"
              onChange={onChangeEducation}
              placeholder="Degree" 
            />

            <input
              type="text" name="subject"
              onChange={onChangeEducation}
              placeholder="Subject" 
            />

            <input
              type="text" name="from"
              onChange={onChangeEducation}
              placeholder="From" 
            />

            <input
              type="text" name="to"
              onChange={onChangeEducation}
              placeholder="To" 
            />
        </div>
    )
}

export default EducationItem