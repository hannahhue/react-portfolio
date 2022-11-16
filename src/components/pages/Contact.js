import React from "react";
import { useState } from "react";
import catImg from "../../images/cat-typing.gif";

const styles = {
  img: {
    maxWidth: "700px",
  },
  imgClick: {
    maxWidth: "80px",
  },
};

export default function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <div>
      <img src={catImg} className="catGif" />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="message"
          className="form-control"
          id="message"
          placeholder="name@example.com"
          value={message}
          onChange={handleChange}
        />
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <a className="btn btn-primary">Send</a>
    </div>
  );
}
