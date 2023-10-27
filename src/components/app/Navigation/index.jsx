import Logo from "@Components/common/logo";
import Button from "@Components/common/button";

import useModal from "@Hooks/useModal";
import transactionModal from "@Modals/transaction/TransactionModal";

import useDarkMode from "@Hooks/useDarkMode";

import "./style.css";

const Navigation = () => {
  const [showModal] = useModal(transactionModal);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="top-wrapper">
      <Logo />
      <div className="btn-wrapper">
        <Button onClick={() => showModal({})}>New transaction</Button>
        <img
          onClick={toggleDarkMode}
          src={
            darkMode
              ? require("../../../assets/icons/moon-white-regular.png")
              : require("../../../assets/icons/sun-white-filled-regular.png")
          }
          alt="dark-mode-icon"
        />
      </div>
    </div>
  );
};

export default Navigation;
