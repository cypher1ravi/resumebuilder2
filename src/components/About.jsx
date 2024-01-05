import React from 'react';
import { IconButton } from '@mui/material';
import { Facebook, WhatsApp, LinkedIn, Twitter, MailOutline } from '@mui/icons-material';
import '../css/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1><i>Resume Builder</i></h1>
      <p>
        Welcome to our Resume Builder website! We are dedicated to helping you create
        professional and visually appealing resumes that stand out.
      </p>
      <p>
        Our mission is to provide an easy-to-use platform where you can craft your
        resume with confidence. Whether you're a recent graduate or a seasoned
        professional, our tools and templates are designed to suit your needs.
      </p>
      <p>
        Feel free to explore our features, customize your resume, and download the
        final result in various formats. Your success is our priority!
      </p>
      <p>
        Thank you for choosing our Resume Builder. If you have any questions or
        feedback, please don't hesitate to reach out to us. We're here to help you
        on your journey to career success.
      </p>

      {/* Social Media Icons */}
      <div className="social-icons">
        <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <WhatsApp />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </IconButton>
        <IconButton href="mailto:info@example.com">
          <MailOutline />
        </IconButton>
      </div>
    </div>
  );
};

export default AboutUs;
