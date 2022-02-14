import React from "react";
import TextArea from "../Utils/TextArea";
import FileInput from "../Utils/FIleInput";
import styles from "../../styles/Personal.module.scss";

const Personal = ({
  personalInfo,
  handleChange
}) => {
  return (
    <section className={styles.sectionContainer}>
      <h3>Personal Information</h3>
      <div className={styles.wrapper} >
        <input
          onChange={handleChange}
          value={personalInfo.firstName}
          type='text' name="firstName"
          placeholder="First name"
        />

        <input
          onChange={handleChange}
          value={personalInfo.lastName}
          type='text' name='lastName'
          placeholder="Last name"
        />


        <input
          onChange={handleChange}
          value={personalInfo.title}
          type='text' name='title'
          placeholder="Title"
        />

        <FileInput
          onChange={handleChange}
          value={personalInfo.photo}
          name="photo" label="Photo"
        />

        <input
          onChange={handleChange}
          value={personalInfo.address}
          type='text' name='address'
          placeholder="Mailing Address"
        />

        <input
          onChange={handleChange}
          value={personalInfo.city}
          type='text' name='city'
          placeholder="City"
        />

        <input
          onChange={handleChange}
          value={personalInfo.state}
          type='text' name='state'
          placeholder="State"
        />

        <input
          onChange={handleChange}
          value={personalInfo.zipCode}
          type='text' name='zipCode'
          placeholder="Zipcode"
        />

        <input
          onChange={handleChange}
          value={personalInfo.email}
          type='text' name='email'
          placeholder="Email"
        />

        <input
          onChange={handleChange}
          value={personalInfo.phoneNumber}
          type='text' name='phoneNumber'
          placeholder="Phone number"
        />

        <input
          onChange={handleChange}
          value={personalInfo.website}
          type='text' name='website'
          placeholder="Website"
        />

        <TextArea
          onChange={handleChange}
          value={personalInfo.description}
          name="description"
          placeholder="Description"
        />

      </div>

    </section>
  )
}
// FIX STATE AND RENDERING THE INFO FROM THE STATE;
export default Personal;