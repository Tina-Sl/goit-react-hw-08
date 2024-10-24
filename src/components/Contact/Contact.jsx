import { FaUser, FaPhoneAlt, FaEdit, FaTimes } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "react-modal";
import ContactEditModal from "../ContactEditModal/ContactEditModal";
import { useToggle } from "../../hooks/useToggle";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import s from "./Contact.module.css";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  let [showModal, setShowModal] = useState(false);
  const contact = useRef(item);
  const { isOpen, openModal, closeModal } = useToggle();

  return (
    <div>
      <li className={s.card}>
        <div className={s.cardContent}>
          <span className={s.cardLine}>
            <FaUser /> {item.name}
          </span>
          <span className={s.cardLine}>
            <FaPhoneAlt /> {item.number}
          </span>
        </div>
        <div className={s.btns}>
          <button className={s.edit} title="edit" onClick={openModal}>
            <FaEdit />
          </button>
          {isOpen && <ContactEditModal contact={item} onClose={closeModal} />}
          <button
            className={s.delete}
            title="delete"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FaTimes />
          </button>
        </div>
      </li>
      <Modal
        className={s.modal}
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <p className={s.question}>Are you sure you want to delete contact:</p>
        <p className={s.questionData}>
          {contact.current.name} &nbsp;&nbsp; {contact.current.number}?
        </p>
        <div className={s.btnBox}>
          <button
            className={s.btnModal}
            onClick={() => {
              dispatch(deleteContact(contact.current.id));
              setShowModal(false);
            }}
          >
            Yes
          </button>
          <button className={s.btnModal} onClick={() => setShowModal(false)}>
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
