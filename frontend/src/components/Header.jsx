import React from "react";

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="text-center" style={{
        backgroundColor: "#9b51e0",
        color: "white",
        padding: "1rem",
        fontSize: "2rem",
        fontWeight: "bold",
        width: "100%",
        fontFamily:"monospace"
      }}>
        <a href="/" className="inline-block" style={{
          textDecoration: "none",
          transition: "transform 0.2s ease-in-out",
        }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          BELAGAVI BAKERY
        </a>
      </div>
    </div>
  );
};

export default Header;
