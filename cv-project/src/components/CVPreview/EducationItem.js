const EducationItem = ({ educationItem }) => {
    const {
        school,
        city,
        state,
        degree,
        subject,
        from,
        to
    } = educationItem;
    return (
        <div>
            <p>{school}</p>
            <p>Degree: {degree}</p>
            <p>Subject: {subject}</p>
        </div>
    );
}

export default EducationItem;