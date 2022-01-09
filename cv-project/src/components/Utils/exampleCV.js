import { v4 as uuidv4 } from 'uuid';


const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Web Developer / UX & UI Designer',
    address: '123 Sasame St',
    city: 'Alphabet',
    state: 'CA',
    zipCode: '92222',
    email: 'johndoe@example.com',
    phoneNumber: '555-555-555',
    website: 'www.johndoe.com',
    description:
      'I found my purpose the moment my hands landed on acomputer. Web Developement has been my passion for many years. I have a burning passion to deliver compelling interactive web experiences. Below are projects that showcase some of my skills and background in developing software.'
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Software Developer',
      company: 'Nybble Box',
      city: 'Eastvale',
      state: 'CA',
      from: '2020',
      to: '2021'
    },
    {
      id: uuidv4(),
      position: 'Web Developer',
      company: 'Cup Kayz',
      city: 'Riverside',
      state: 'CA',
      from: '2015',
      to: '2019'
    }
  ],
  education: [
    {
      id: uuidv4(),
      school: 'Devry',
      city: 'Santa Monica',
      state: 'CA',
      degree: 'Computer Science',
      subject: 'Bachelors',
      from: '2009',
      to: '2014'
    }
  ],
  skills: [
    {
      id: uuidv4(),
      skill: 'Web Development'
    },
    {
      id: uuidv4(),
      skill: 'JavaScript / ES6'
    },
    {
      id: uuidv4(),
      skill: 'UI / UX Design'
    },
    {
      id: uuidv4(),
      skill: 'Git / Github'
    },
    {
      id: uuidv4(),
      skill: 'MySQL'
    }
  ]
}


export default exampleCV;