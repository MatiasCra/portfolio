import React from "react";
import * as contactStyles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={contactStyles.background} id="contact">
      <div className={contactStyles.container} id="contact">
        <h1 className={contactStyles.title}>Contact Me</h1>
        <form className={contactStyles.form}>
          <div className={contactStyles.formSection}>
            <div>
              <label>
                Name<span className={contactStyles.required}>*</span>
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Email<span className={contactStyles.required}>*</span>
                <input type="email" />
              </label>
            </div>
          </div>

          <label>
            Subject<span className={contactStyles.required}>*</span>
            <input type="text" className={contactStyles.fullWidth} />
          </label>

          <label>
            Message<span className={contactStyles.required}>*</span>
            <textarea
              rows="10"
              columns="50"
              className={contactStyles.fullWidth}
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
