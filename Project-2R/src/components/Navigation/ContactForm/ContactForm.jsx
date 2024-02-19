
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import ContactHeader from "../ContactHeader/ContactHeader";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  const [name, setName] = useState("Pooja");
  const [email, setEmail] = useState("Hi@dosomecoding.com");
  const [text, setText] = useState("Description");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button className={styles.one}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button  className={styles.two} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          className={styles.three}
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div>
        <div>
          <ContactHeader/>
        </div>
      <div className={styles.contact_image}>
        <img src="./images/img2.jpg" alt="contact image" />
      </div>
    
      </div>
      
    </section>
  );
};

export default ContactForm;