import PropTypes from "prop-types";

import ArrowUp from "@Assets/icons/arrow-circle-up-regular.png";
import ArrowUpWhite from "@Assets/icons/arrow-circle-up-white.png";
import ArrowDown from "@Assets/icons/arrow-circle-down-regular.png";
import ArrowDownWhite from "@Assets/icons/arrow-circle-down-white.png";

import "./style.css";

const Select = (props) => {
  const { field, id, label, variant, className, ...restProps } = props;
  const { name, value, onChange, onBlur } = field;

  const source =
    variant === "up"
      ? id === value
        ? ArrowUpWhite
        : ArrowUp
      : id === value
      ? ArrowDownWhite
      : ArrowDown;

  return (
    <div className="wrapper">
      <input
        className={variant === "up" ? "variant-up" : "variant-down"}
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
      <label htmlFor={id}>
        <img src={source} alt="icon" />
        {label}
      </label>
    </div>
  );
};

Select.defaultProps = {
  label: "Text",
  id: "my_select",
  variant: "down",
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
};

export default Select;
