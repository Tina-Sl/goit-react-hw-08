import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.card}>
      <div className={s.cardContent}>
        <span className={s.cardLine}>
          <FaUser /> {name}
        </span>
        <span className={s.cardLine}>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
