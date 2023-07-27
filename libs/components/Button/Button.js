import React from "react";

const Button = ({
  label,
  type,
  className,
  action,
  icon,
  labelClass,
  isDisabled,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={action}
      disabled={isDisabled}
    >
      {icon && icon}
      <p className={labelClass}>{label}</p>
    </button>
  );
};

export default Button;
