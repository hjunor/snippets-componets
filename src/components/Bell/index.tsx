import BellIcon from "./img/bell_icon.svg";
import "./styles.css";
const Bell = () => (
  <div className="icon-wrapper" data-number="1">
    <img src={BellIcon} alt="" className="bell-icon" />
  </div>
);

export { Bell };
