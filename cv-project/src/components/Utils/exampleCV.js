import { v4 as uuidv4 } from 'uuid';


const exampleCV = {
    personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Web Developer / UX & UI Designer',
        address:'123 Sasame St',
        city:'Alphabet',
        state: 'CA',
        zipCode:'92222',
        email: 'johndoe@example.com',
        phoneNumber: '555-555-555',
        website: 'www.johndoe.com',
        description: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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