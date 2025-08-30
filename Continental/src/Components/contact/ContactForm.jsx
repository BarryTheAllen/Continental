import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleInputChange = (e, setValue, setError) => {
    setValue(e.target.value);
    if (setError) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("Имя обязательно");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.includes('@')) {
      setEmailError("Введите корректный email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!subject.trim()) {
      setSubjectError("Тема обязательна");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("Сообщение обязательно");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      console.log("Форма отправлена:", { name, email, subject, message });
    }
  };

  return (
    <form className="form contact-form" onSubmit={handleSubmit}>
      <div className="first-row">
        <input 
          placeholder="Name" 
          type="text"
          className={nameError ? "input-error" : ""}
          value={name}
          onChange={(e) => handleInputChange(e, setName, setNameError)}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>
      
      <div className="second-row">
        <input 
          placeholder="Email" 
          type="email"
          className={emailError ? "input-error" : ""}
          value={email}
          onChange={(e) => handleInputChange(e, setEmail, setEmailError)}
        />
        {emailError && <span className="error">{emailError}</span>}
        <input 
          placeholder="Subject" 
          type="text"
          className={subjectError ? "input-error" : ""}
          value={subject}
          onChange={(e) => handleInputChange(e, setSubject, setSubjectError)}
        />
        {subjectError && <span className="error">{subjectError}</span>}
      </div>
      
      <div className="third-row">
        <textarea 
          placeholder="Message"
          className={messageError ? "input-error" : ""}
          value={message}
          onChange={(e) => handleInputChange(e, setMessage, setMessageError)}
        ></textarea>
        {messageError && <span className="error">{messageError}</span>}
      </div>
      
      <button className="contant-btn inner-info-link" type="submit">
        Send Message
        <FaPaperPlane/>
      </button>
    </form>
  )
}

export default ContactForm;