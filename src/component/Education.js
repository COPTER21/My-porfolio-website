import '../styles/Education.css'

const Education = () => {
  return (
    <div className='educate-container'>
      <h2>EDUCATION</h2>
      <div className='educate-item-container'>
        <div className='educate-item'>
          <span className='educational-institution'>Computer Engineering</span>
          <span className='institution'>Khon Kaen University</span>
          <span className='gpa'>GPA: 2.51</span>
          <span className='graduate-period'>Jul 2019 - May 2023</span>
        </div>
      </div>
      <div className='educate-item-container'>
        <div className='educate-item'>
          <span className='educational-institution'>High School - Senior High School</span>
          <span className='institution'>Khon Kaen Wittayayon School</span>
          <span className='gpa'>GPA: 3.49</span>
          <span className='graduate-period'>Sep 2014 - May 2019</span>
        </div>
      </div>

    </div>
  );
};

export default Education;