import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
    personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phoneNumber: '555-555-555'
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
}

export default exampleCV;