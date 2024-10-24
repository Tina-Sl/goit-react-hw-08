import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <div className={s.user}>user: {user.name}</div>
      <button
        className={s.btnExit}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
