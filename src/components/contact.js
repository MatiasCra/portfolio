import React from "react";
import * as contactStyles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={contactStyles.background} id="contact">
      <div className={contactStyles.container} id="contact">
        <h1 className={contactStyles.title}>Contact Me</h1>
        <from className={contactStyles.form}>
          <div className={contactStyles.formSection}>
            <div>
              <label for="name">
                Name<span className={contactStyles.required}>*</span>
                <input type="text" id="name" />
              </label>
            </div>
            <div>
              <label for="email">
                Email<span className={contactStyles.required}>*</span>
                <input type="email" id="email" />
              </label>
            </div>
          </div>

          <label for="subject">
            Subject<span className={contactStyles.required}>*</span>
            <input
              type="text"
              className={contactStyles.fullWidth}
              id="subject"
            />
          </label>

          <label for="message">
            Message<span className={contactStyles.required}>*</span>
            <textarea
              rows="10"
              columns="50"
              className={contactStyles.fullWidth}
              id="message"
            ></textarea>
          </label>

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={contactStyles.send}
          >
            Send Message
          </button>
        </from>
      </div>
    </div>
  );
};

export default Contact;
