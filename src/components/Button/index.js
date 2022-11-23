import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder15: "rounded-radius15",
  CustomBorderLR8:
    "rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px]",
  icbRoundedBorder12: "rounded-radius12",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder19: "rounded-radius19",
  icbRoundedBorder21: "rounded-radius21855",
};
const variants = {
  FillGray51: "bg-gray_51",
  FillLightblueA701: "bg-light_blue_A701 text-white_A700",
  FillLightblue500: "bg-light_blue_500 text-white_A700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineGray402: "border-2 border-gray_402 border-solid text-gray_801",
  FillGray401: "bg-gray_401 text-white_A700",
  FillGray100: "bg-gray_100 text-green_400",
  FillGreen400: "bg-green_400 text-white_A700",
  OutlineGray300:
    "bg-white_A700 border border-gray_300 border-solid text-gray_800",
  OutlineLightblue500:
    "bg-gray_51 border border-light_blue_500 border-solid text-gray_700",
  OutlineTeal500:
    "bg-teal_A700_60 border border-solid border-teal_500 text-teal_700",
  OutlineRedA701:
    "bg-deep_orange_100 border border-red_A701 border-solid text-red_A700",
  OutlineLightblue500_1:
    "bg-cyan_50_99 border border-light_blue_500 border-solid",
  OutlineGray201:
    "bg-gray_102 border border-gray_201 border-solid text-bluegray_801",
  OutlineDeeppurpleA400:
    "bg-deep_purple_A400 border border-deep_purple_A400 border-solid text-white_A700",
  FillRed300: "bg-red_300 text-white_A700",
  OutlineRedA701_1:
    "bg-deep_orange_100_60 border border-red_A701 border-solid text-red_A701",
  FillGray808: "bg-gray_808 text-white_A700",
  FillRed301: "bg-red_301 text-white_A700",
  OutlineBlack9000c: "bg-green_400 shadow-bs text-white_A700",
  FillWhiteA700: "bg-white_A700",
  OutlineBlack9000c_1: "bg-light_blue_A700 shadow-bs text-white_A700",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineRedA702:
    "bg-deep_orange_100_60 border border-red_A702 border-solid text-red_A701",
  FillLightblueA700: "bg-light_blue_A700 text-white_A700",
  OutlineGray70020: "bg-gray_808 shadow-bs4 text-white_A700",
  icbOutlineGray106: "border border-gray_106 border-solid",
  icbOutlineBlueA40085:
    "bg-white_A700_85 border border-blue_A400_85 border-solid",
  icbFillIndigo50b2: "bg-indigo_50_b2",
  icbFillIndigo51: "bg-indigo_51",
  icbOutlineIndigo507f1: "bg-white_A700 shadow-bs5",
};
const sizes = {
  sm: "p-[3px]",
  md: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lg: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  xl: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  "2xl": "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  "3xl": "lg:p-[14px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  "4xl": "lg:p-[19px] xl:p-[24px] p-[27px] 3xl:p-[32px]",
  "5xl": "lg:p-[21px] xl:p-[26px] p-[30px] 3xl:p-[36px]",
  "6xl": "lg:p-[24px] xl:p-[31px] p-[35px] 3xl:p-[42px]",
  smIcn: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder10",
    "RoundedBorder15",
    "CustomBorderLR8",
    "icbRoundedBorder12",
    "icbRoundedBorder8",
    "icbCircleBorder19",
    "icbRoundedBorder21",
  ]),
  variant: PropTypes.oneOf([
    "FillGray51",
    "FillLightblueA701",
    "FillLightblue500",
    "FillBluegray900",
    "OutlineGray402",
    "FillGray401",
    "FillGray100",
    "FillGreen400",
    "OutlineGray300",
    "OutlineLightblue500",
    "OutlineTeal500",
    "OutlineRedA701",
    "OutlineLightblue500_1",
    "OutlineGray201",
    "OutlineDeeppurpleA400",
    "FillRed300",
    "OutlineRedA701_1",
    "FillGray808",
    "FillRed301",
    "OutlineBlack9000c",
    "FillWhiteA700",
    "OutlineBlack9000c_1",
    "FillBlueA700",
    "OutlineRedA702",
    "FillLightblueA700",
    "OutlineGray70020",
    "icbOutlineGray106",
    "icbOutlineBlueA40085",
    "icbFillIndigo50b2",
    "icbFillIndigo51",
    "icbOutlineIndigo507f1",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "smIcn",
    "mdIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
