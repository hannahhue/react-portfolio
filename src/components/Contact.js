import React from "react";
import catImg from "../images/cat-typing.gif";

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
      <img src={catImg} />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name
        </label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button>Send</button>
    </div>
  );
}
