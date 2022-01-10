import { v4 as uuidv4 } from 'uuid';
import examplePhoto from '../../assets/images/confused-black-man.jpeg';


const exampleCV = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Web Developer / UX & UI Designer',
    photo: examplePhoto,
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
      to: '2021',
      description: "Responsive Wordpress portfolio site. Developed with intentions to promote a small business product branding team. Nybblebox was built on the focus that product design was key to a business success. Clean modern and thoughtful designs. "
    },
    {
      id: uuidv4(),
      position: 'Web Developer',
      company: 'Cup Kayz',
      city: 'Riverside',
      state: 'CA',
      from: '2015',
      to: '2019',
      description: "Developed a Responsive E-Commerce Web App utilizing HTML5, CSS3, and JavaScript programing languages. Google API is used to render map points between delivery and recipient. Written in modern, performant, maintainable code. Crafted interactive wireframes before coding using Adobe XD."
    }
  ],
  education: [
    {
      id: uuidv4(),
      school: 'University of Riverside',
      city: 'Riverside',
      state: 'CA',
      degree: 'Bachelors',
      subject: 'Computer Science',
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