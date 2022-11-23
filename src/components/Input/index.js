import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray200: "bg-gray_200",
  FillBluegray900: "bg-bluegray_900",
  OutlineGray301: "border border-gray_301 border-solid",
  FillBlueA700: "bg-blue_A700",
  srcFillGray52: "bg-gray_52",
  srcFillGray100: "bg-gray_100",
  srcOutlineGray70019: "bg-white_A700 shadow-bs3",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  srcRoundedBorder10: "rounded-radius10",
  srcRoundedBorder4: "rounded-radius4",
  srcRoundedBorder7: "rounded-radius7",
};
const sizes = {
  sm: "xl:pb-[11px] pb-[13px] 3xl:pb-[15px] lg:pb-[9px] lg:pt-[11px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] xl:px-[11px] px-[13px] 3xl:px-[15px] lg:px-[9px]",
  md: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "lg:pb-[24px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[22px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[22px] xl:px-[28px] px-[32px] 3xl:px-[38px]",
  xl: "lg:pb-[18px] xl:pb-[23px] pb-[26px] 3xl:pb-[31px] lg:pt-[22px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[18px] xl:px-[23px] px-[26px] 3xl:px-[31px]",
  "2xl":
    "lg:pb-[14px] xl:pb-[18px] pb-[21px] 3xl:pb-[25px] lg:pt-[22px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[14px] xl:px-[18px] px-[21px] 3xl:px-[25px]",
  smSrc: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  mdSrc: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  lgSrc:
    "lg:pb-[10px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] lg:pt-[15px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[10px] xl:px-[13px] px-[15px] 3xl:px-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "srcRoundedBorder10",
    "srcRoundedBorder4",
    "srcRoundedBorder7",
  ]),
  variant: PropTypes.oneOf([
    "FillGray200",
    "FillBluegray900",
    "OutlineGray301",
    "FillBlueA700",
    "srcFillGray52",
    "srcFillGray100",
    "srcOutlineGray70019",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smSrc",
    "mdSrc",
    "lgSrc",
  ]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
