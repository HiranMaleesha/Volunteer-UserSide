import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerInfoPage.css';

const VolunteerInfoPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/volunteer-registration');
  };

  return (
    <div className="container">
      <h1 className="header">Volunteer with Us</h1>
      
      <button onClick={handleRegisterClick} className="button">
        Register as Volunteer
      </button>
      
      <section className="section">
        <h2 className="subHeader">What is Volunteering?</h2>
        <p className="text">
          Volunteering for music events involves lending your time and talents to various musical activities, such as singing, dancing, and announcing. It’s a rewarding way to support and participate in the vibrant world of music and entertainment.
        </p>
      </section>
      
      <section className="section">
        <h2 className="subHeader">Tasks You Can Do</h2>
        <ul className="list">
          <li>Performing musical acts like singing or dancing</li>
          <li>Announcing and hosting music events</li>
          <li>Assisting with event logistics and setup</li>
          <li>Engaging with the audience and managing event interactions</li>
          <li>Supporting musicians and performers during events</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="subHeader">Benefits of Volunteering</h2>
        <ul className="list">
          <li>Showcase your musical and performance skills</li>
          <li>Meet and connect with other music enthusiasts</li>
          <li>Gain valuable experience in event management and performance</li>
          <li>Enhance your public speaking and hosting abilities</li>
          <li>Contribute to the success of memorable music events</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="subHeader">Volunteer Gallery</h2>
        <div className="gallery">
          <img src="/images/pic1.jpg" alt="Volunteers performing music" className="image" />
          <img src="/images/pic2.jpg" alt="Music event in action" className="image" />
          <img src="/images/pic3.jpg" alt="Dance performance at event" className="image" />
        </div>
      </section>
      
      <button onClick={handleRegisterClick} className="button">
        Register as Volunteer
      </button>
    </div>
  );
};

export default VolunteerInfoPage;
