import React from "react";
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    return (
        <footer>
            <h5>&copy; {formattedDate} All rights reserved</h5>
        </footer>
    );
};

export default Footer;
