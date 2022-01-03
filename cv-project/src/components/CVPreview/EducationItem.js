import styles from '../../styles/CVPreview.module.scss';

const EducationItem = ({ educationItem }) => {
    return (
        <div>
            <p>{educationItem.school}</p>
        </div>
    );
}

export default EducationItem;