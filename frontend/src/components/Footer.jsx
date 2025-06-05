import React from "react";

const Footer = () => (
    <footer style={{
        background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center",
        boxShadow: "0 -2px 16px rgba(78,84,200,0.1)"
    }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ margin: 0, fontWeight: 700, letterSpacing: "1px" }}>CollabCraft</h2>
            <p style={{ margin: "0.5rem 0 1.5rem", fontSize: "1.1rem", opacity: 0.85 }}>
                Empowering collaboration, creativity, and community.
            </p>
            <div style={{ marginBottom: "1rem" }}>
                <a href="/about" style={linkStyle}>About</a>
                <span style={dividerStyle}>|</span>
                <a href="/contact" style={linkStyle}>Contact</a>
                <span style={dividerStyle}>|</span>
                <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            </div>
            <div style={{ fontSize: "0.95rem", opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} CollabCraft. All rights reserved.
            </div>
        </div>
    </footer>
);

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 0.5rem",
    fontWeight: 500,
    transition: "color 0.2s",
};

const dividerStyle = {
    margin: "0 0.5rem",
    opacity: 0.5,
};

export default Footer;