import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = {
  FillGreenA700: "bg-green_A700",
  FillRedA702: "bg-red_A702",
  FillAmber500: "bg-amber_500",
  FillDeeppurpleA400: "bg-deep_purple_A400",
  FillLightblueA700: "bg-light_blue_A700",
  FillLime500: "bg-lime_500",
  FillRedA700: "bg-red_A700",
};

const sizes = { sm: "p-[2px]" };
const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} ${
              sizes[size] || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "FillGreenA700",
    "FillRedA702",
    "FillAmber500",
    "FillDeeppurpleA400",
    "FillLightblueA700",
    "FillLime500",
    "FillRedA700",
  ]),
  size: PropTypes.oneOf(["sm"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "FillGreenA700",
  size: "",
};

export { Radio };
