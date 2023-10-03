import React, { useState } from "react";
import styled from "styled-components";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {supabase} from "../lib/api";

const Hero = () => {
  // component state
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // notification alert
    const notify = () => toast.error("Please Enter Your Email!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

  // handling email subscription
  const handleEmailSubscription = async (e) => {
    // prevent default form behavior
    e.preventDefault();
    if(email === ''){
        notify();
    }else{
        setLoading(true)
        const { error} = await supabase.auth.signInWithOtp({email})
        if(error){
           alert('Check Your email and try again');
        }else{
            alert('Check your email and confirm subscription');
        }
        setLoading(false);
        setEmail("");
    }
  };
  return (
    <HeroContainer className="hero">
      <HeroHeading data-test='header'>Frontend Matters</HeroHeading>
        <ToastContainer />
      <HeroDescription data-test='description'>
        Explore some of the most trending topics in the Frontend world! There
        are different code snippets for every article explaining about a code
        concept.
      </HeroDescription>
      <HeroForm onSubmit={handleEmailSubscription}>
        <HeroFormInput
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <HeroFormButton type="submit">{loading ? 'Loading...' : 'Subscribe'}</HeroFormButton>
      </HeroForm>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 150px 0px;
  // width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 150px 20px;
  }
`;

const HeroHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2;

  @media (max-width: 768px) {
    margin-top: 50px;
    line-height: 1.8;
  }
`;

const HeroDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 2;
  margin-top: 30px;
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    line-height: 1.8;
  }
`;

const HeroForm = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const HeroFormInput = styled.input`
  padding: 15px;
  outline: none;
  border-radius: 10px;
  border: 0.5px solid grey;
  width: 60%;

  :focus {
    border: 1px solid #2596be;
    box-shadow: 0 0 0 0.1rem #eb4034 !important;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const HeroFormButton = styled.button`
  padding: 15px;
  outline: none;
  border-radius: 10px;
  border: none;
  width: 30%;
  margin-left: 30px;
  cursor: pointer;
  background: #2596be;
  font-weight: 500;
  color: #fff;

  &:hover{
    background: #0e699e;
  }

  @media (max-width: 768px) {
    width: 30%;
    margin-left: 10px;
  }
`;

export default Hero;
