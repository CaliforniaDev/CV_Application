const ExperienceItem = (props) => {
    return (
        <div>
            <input
              type='text' name='position'
              placeholder='Position'
            />

            <input
              type='text' name='company'
              placeholder='Company'
            />

            <input
              type='text' name='city'
              placeholder='City'
            />

            <input
              type='text' name='from'
              placeholder='From'
            />

            <input
              type='text' name='to'
              placeholder='To'
            />
        </div>
    )
}

export default ExperienceItem;