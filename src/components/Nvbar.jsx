import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from "../images/almabetter_logo.svg";

// Styled components for customizing MUI components
const MyToolbar = styled(Toolbar)({
    backgroundColor: '#3B3486', // Background color for the toolbar
    display: 'flex',
    justifyContent: 'space-between', // Align logo and buttons horizontally
    alignItems: 'center', // Align items vertically
    '@media (max-width: 600px)': {
        flexDirection: 'column', // Change flex direction to column for smaller screens
        alignItems: 'center', // Align items vertically for smaller screens
        textAlign: 'center', // Center text content for smaller screens
    },
});

const MyButton = styled(Button)({
    // Add any specific styles if needed
});

const MyTypography = styled(Typography)({
    // Add any specific styles if needed
});

const LogoImage = styled('img')({
    width: '70%', // Set width of the logo image
    height: 'auto', // Maintain aspect ratio
});

function Navbar() {
    return (
        <AppBar position="sticky">
            {/* Customized toolbar */}
            <MyToolbar>
                {/* Logo */}
                <MyTypography component="div">
                    <MyButton component={Link} to="/">
                        <LogoImage src={logo} alt="AlmaBatter" />
                    </MyButton>
                </MyTypography>
                {/* Navigation links */}
                <div>
                    <MyButton color="inherit" component={Link} to="/">Resume Templates</MyButton>
                    <MyButton color="inherit" component={Link} to="/Preview">My Resumes</MyButton>
                    <MyButton color="inherit" component={Link} to="/about">About Us</MyButton>
                </div>
            </MyToolbar>
        </AppBar>
    );
}

export default Navbar;
