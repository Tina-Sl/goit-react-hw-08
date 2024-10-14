import s from "./Notification.module.css";

const Notification = ({ text }) => {
  return <p className={s.message}>{text}</p>;
};

export default Notification;
