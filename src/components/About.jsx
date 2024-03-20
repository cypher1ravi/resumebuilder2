import React from 'react';
import { IconButton, Grid, Paper, Divider, Typography } from '@mui/material';
import { Facebook, WhatsApp, LinkedIn, Twitter, MailOutline } from '@mui/icons-material';
import sideImage from '../images/About-us-image.png';

// AboutUs functional component
const AboutUs = () => {
  return (
    // Main grid container
    <Grid container padding={1}>
      {/* Section for Resume Builder title */}
      <Grid item>
        <Typography variant='h3'>Resume Builder</Typography>
        {/* Divider for visual separation */}
        <Divider orientation="horizontal" style={{ backgroundColor: 'blue', height: '3px' }} />
      </Grid>

      {/* Main content grid container */}
      <Grid container spacing={0} paddingTop={'2rem'}>
        {/* Left side content */}
        <Grid item xs={12} md={6} lg={7} xl={8}>
          <div>
            {/* Paragraphs introducing the Resume Builder */}
            <p>
              Welcome to our Resume Builder website! We are dedicated to helping you create professional and visually
              appealing resumes that stand out.
            </p>
            <p>
              Our mission is to provide an easy-to-use platform where you can craft your resume with confidence. Whether
              you're a recent graduate or a seasoned professional, our tools and templates are designed to suit your
              needs.
            </p>
            <p>
              Feel free to explore our features, customize your resume, and download the final result in various formats.
              Your success is our priority!
            </p>
            <p>
              Thank you for choosing our Resume Builder. If you have any questions or feedback, please don't hesitate to
              reach out to us. We're here to help you on your journey to career success.
            </p>
          </div>
          {/* Social media sharing icons */}
          <div style={{ margin: '20px' }}>
            <h3>Share With your friend</h3>
            {/* IconButton components with social media links */}
            <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ color: '#1877f2', fontSize: '30px' }} />
            </IconButton>
            <IconButton href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <WhatsApp style={{ color: '#25D366', fontSize: '30px' }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn style={{ color: '#0077B5', fontSize: '30px' }} />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ color: '#1DA1F2', fontSize: '30px' }} />
            </IconButton>
            <IconButton href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
              <MailOutline style={{ color: '#333', fontSize: '30px' }} />
            </IconButton>
          </div>
        </Grid>

        {/* Divider for visual separation */}
        <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Divider orientation="vertical" style={{ backgroundColor: 'red', width: '1px', }} />
        </Grid>

        {/* Right side content (Image) */}
        <Grid item xs={12} md={5} lg={4} xl={3}>
          {/* Paper container for the side image */}
          <Paper elevation={3} style={{ padding: '10px', borderRadius: '8px', background: '#ccc' }}>
            <img
              src={sideImage}
              alt="SideImage"
              style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

// Exporting the AboutUs component
export default AboutUs;
