import React from "react";
import dev from "./images/dev.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:mailtojadduharish@gmail.com">
        mailtopetsharish@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/harish-s-973578328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          User Name: HARISH
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/dashboard">
          HARISH
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/rolax_harish_?igsh=MTJhZjJkYjVtdTBreA==">
          @petsharish
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +91 902 567 8885
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={dev} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
