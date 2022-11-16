import React from "react";
import catImg from "../../images/cat-typing.gif";

const styles = {
  img: {
    maxWidth: "700px",
  },
  imgClick: {
    maxWidth: "80px",
  },
};

export default function contact() {
  return (
    <div>
      <img src={catImg} className="catGif" />
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
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
        <label for="exampleFormControlTextarea1" className="form-label">
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
