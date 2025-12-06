// Show / Hide Password Toggle

import { useState, useEffect } from "react";
import "./password-field.css";

const PasswordField = () => {

  const initialState = false;
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleShowAndHide = () => setIsVisible(prev => !prev);

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    console.log("isVisible status changed:", isVisible);
    document.title = isVisible ? "text" : "password";
  }, [isVisible]);

  return (
    <div className="password-container">
      <input type = {isVisible ? "text" : "password"} className = "password-input" placeholder = "Enter password"/>
      <button onClick = {toggleShowAndHide} className = "toggle-btn">{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
};

export default PasswordField;