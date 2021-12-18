import React from "react";

class CVPreview extends React.Component {
    constructor(props){
        super();
    }

    render() {
        const { firstName, lastName, email, phoneNumber } = this.props.personalInfo;
        return (
            <div>
                <p> {firstName} </p>
                <p> {lastName} </p>
                <p> {email} </p>
                <p> {phoneNumber} </p>
            </div>
        )
    }
}
export default CVPreview;