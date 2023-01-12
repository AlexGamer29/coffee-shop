import React, { useRef } from "react";
import styled from "styled-components";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div id="page-contact">
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label className="label-contact">Name</label>
          <input type="text" name="user_name" />
          <label className="label-contact">Email</label>
          <input type="email" name="user_email" />
          <label className="label-contact">Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid red;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid red;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
