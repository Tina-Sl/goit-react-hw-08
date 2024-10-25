import insertImg from "../../assets/bPhoto-min.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <h1>
        <FaPhoneSquareAlt />
        &nbsp;PHONE BOOK
      </h1>
      <div className={s.box}>
        <img
          className={s.imgCard}
          src={insertImg}
          width={370}
          alt="telephone booth"
        />
      </div>
    </div>
  );
};

export default HomePage;
