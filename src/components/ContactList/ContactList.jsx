import Contact from "../Contact/Contact";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <ul className={s.list}>
      {contacts.length === 0 && !loading && !isError ? (
        <Notification text="No contacts" />
      ) : (
        contacts.map((item) => <Contact key={item.id} {...item} />)
      )}
    </ul>
  );
};

export default ContactList;
