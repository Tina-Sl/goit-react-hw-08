import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <h1>PHONE BOOK</h1>
      <img
        className={s.imgCard}
        src="../../assets/bPhoto-min.png"
        width={320}
        alt="telephone booth"
      />
    </div>
  );
};

export default HomePage;
