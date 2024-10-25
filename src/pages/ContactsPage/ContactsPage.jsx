import { FaPhoneSquareAlt } from "react-icons/fa";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Notification from "../../components/Notification/Notification";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { useEffect } from "react";

const ContactPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h3>
        <FaPhoneSquareAlt />
        &nbsp; Contact book service
      </h3>
      <ContactForm />
      <div>
        <SearchBox />
        {loading && !isError && <Loader />}
        {isError && (
          <Notification text="Failed to load data. Check your Internet connection." />
        )}
        <ContactList />
      </div>
    </div>
  );
};

export default ContactPage;
