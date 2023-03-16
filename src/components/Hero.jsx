import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Hero = () => {
  // component state
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // handling email subscription
  const handleEmailSubscription = (e) => {
    // prevent default form behavior
    e.preventDefault();
    const newEmail = {
      email,
    };
    console.log(newEmail);
    setEmail("");
  };
  return (
    <div className="hero">
      <h1>Frontend Matters</h1>
      <p>Explore some of the most trending topics in the Frontend world!</p>
      <form onSubmit={handleEmailSubscription}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default Hero;
