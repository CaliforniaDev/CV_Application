import styles from "../../styles/Education.module.scss";
const EducationItem = () => {
    return (
        <div className={styles.wrapper}>
            <input 
              type="text" name="school"
              placeholder="University Name" 
            />

            <input
              type="text" name="city"
              placeholder="City"
            />

            <input
              type="text" name="degree"
              placeholder="Degree" 
            />

            <input
              type="text" name="subject"
              placeholder="Subject" 
            />

            <input
              type="text" name="from"
              placeholder="From" 
            />
            
            <input
              type="text" name="to"
              placeholder="To" 
            />
        </div>
    )
}

export default EducationItem