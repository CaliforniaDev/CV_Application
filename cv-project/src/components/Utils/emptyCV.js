import {v4 as uuidv4 } from "uuid";

const emptyCV = {
    personalInfo: {
      firstName: '',
      lastName: '',
      title: '',
      address:'',
      city:'',
      state: '',
      zipCode:'',
      email: '',
      phoneNumber: '',
      website: '',
      description: ''
    },
    experience: [
      {
        id: uuidv4(),
        position: '',
        company: '',
        city: '',
        state: '',
        from: '',
        to: ''
      }
    ],
    education: [
      {
        id: uuidv4(),
        school: '',
        city: '',
        state: '',
        degree: '',
        subject: '',
        from: '',
        to: ''
      }
    ],
  }

  export default emptyCV;