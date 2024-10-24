// import Modal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from "react";
import ReactDOM from "react-dom";

import s from "./ContactEditModal.module.css";

const modalRoot = document.querySelector("#modal-root");

const ContactEditModal = ({ contact, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>editing contact:</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        <ContactForm contact={contact} onClose={onClose} />
      </div>
    </div>,
    modalRoot
  );
};

export default ContactEditModal;
