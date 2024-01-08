import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import logo from "../images/almabetter_logo.svg";

const MyToolbar = styled(Toolbar)({
    backgroundColor: '#3B3486',
    display: 'flex',
    justifyContent: 'space-between', // Align logo and buttons
    alignItems: 'center',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
});

const MyButton = styled(Button)({
    // Add any specific styles if needed
});

const MyTypography = styled(Typography)({
    // Add any specific styles if needed
});

const LogoImage = styled('img')({
    width: '70%',
    height: 'auto',
});

function Navbar() {
    return (
        <AppBar position="sticky">
            <MyToolbar>
                <MyTypography component="div">
                    <MyButton component={Link} to="/">
                        <LogoImage src={logo} alt="AlmaBatter" />
                    </MyButton>
                </MyTypography>
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
