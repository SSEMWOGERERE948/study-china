import React, { useState } from "react";
import "./courses.css";
import "./course.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const [fullName, setFullName] = useState("");
  const [pricingPlan, setPricingPlan] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [transcriptsFile, setTranscriptsFile] = useState(null);
  const [nationalIdFile, setNationalIdFile] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [school, setSchool] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [email, setEmail] = useState("");
  const [passportPhoto, setPassportPhoto] = useState(null);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePricingPlanChange = (event) => {
    setPricingPlan(event.target.value);
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleTranscriptsUpload = (event) => {
    const file = event.target.files[0];
    setTranscriptsFile(file);
  };

  const handleNationalIdUpload = (event) => {
    const file = event.target.files[0];
    setNationalIdFile(file);
  };

  const handleCourseSelectionChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleYearOfStudyChange = (event) => {
    setYearOfStudy(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassportPhotoUpload = (event) => {
    const file = event.target.files[0];
    setPassportPhoto(file);
  };

  const handleEnrollClick = () => {
    // Handle enrollment logic here using the collected data
    console.log("Enrolling:", {
      fullName,
      pricingPlan,
      resumeFile,
      transcriptsFile,
      nationalIdFile,
      selectedCourse,
      school,
      yearOfStudy,
      email,
      passportPhoto,
    });
  };

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          <div className='additional-info-form'>

          <label htmlFor='fullName'>Full Name:</label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={handleFullNameChange}
            />
            
            <label htmlFor='nationalId'>National ID/Student ID (PDF):</label>
            <input
              type='file'
              id='nationalId'
              accept='.pdf'
              onChange={handleNationalIdUpload}
            />


<label htmlFor='email'>Email Address:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
            />

            <label htmlFor='courseSelection'>Select Course:</label>
            <select
              id='courseSelection'
              value={selectedCourse}
              onChange={handleCourseSelectionChange}
            >
              <option value=''>-- Select Course --</option>
              <option value='softwareEngineering'>Software Engineering</option>
              <option value='civilEngineering'>Civil Engineering</option>
              {/* Add more options as needed */}
            </select>

          </div>

          {/* Additional information form */}
          <div className='additional-info-form'>
           

            <label htmlFor='pricingPlan'>Pricing Plan:</label>
            <select
              id='pricingPlan'
              value={pricingPlan}
              onChange={handlePricingPlanChange}
            >
              <option value=''>-- Select Pricing Plan --</option>
              <option value='undergradPlanA'>Undergraduate Plan A</option>
              <option value='undergradPlanB'>Undergraduate Plan B</option>
              <option value='undergradPlanC'>Undergraduate Plan C</option>
              <option value='mastersPremium'>Master's Premium Plan</option>
              <option value='mastersBasic'>Master's Basic Plan</option>
            </select>

            <label htmlFor='resume'>Resume/CV:</label>
            <input
              type='file'
              id='resume'
              accept='.pdf'
              onChange={handleResumeUpload}
            />

            <label htmlFor='transcripts'>Transcripts (PDF):</label>
            <input
              type='file'
              id='transcripts'
              accept='.pdf'
              onChange={handleTranscriptsUpload}
            />

          
            <label htmlFor='school'>School:</label>
            <input
              type='text'
              id='school'
              value={school}
              onChange={handleSchoolChange}
            />

            <label htmlFor='yearOfStudy'>Year of Study:</label>
            <input
              type='text'
              id='yearOfStudy'
              value={yearOfStudy}
              onChange={handleYearOfStudyChange}
            />

            <label htmlFor='passportPhoto'>Passport Photo:</label>
            <input
              type='file'
              id='passportPhoto'
              accept='.jpg, .jpeg, .png'
              onChange={handlePassportPhotoUpload}
            />
          </div>

          {coursesCard.map((val) => (
  <div className='items' key={val.coursesName}>
    {/* ... (Previous code) */}
    <button className='outline-btn' onClick={handleEnrollClick}>
      APPLY NOW for {selectedCourse || "a course"}!
    </button>
  </div>
))}
<button className='outline-btn' onClick={handleEnrollClick}>
  SUBMIT
</button>
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
