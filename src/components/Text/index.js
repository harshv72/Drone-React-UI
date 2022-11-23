import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h2: "font-hairline lg:text-[24px] xl:text-[30px] text-[34.45px] 2xl:text-[34px] 3xl:text-[41px]",
  h3: "font-semibold lg:text-[23px] xl:text-[29px] text-[33px] 3xl:text-[39px]",
  h4: "font-semibold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "lg:text-[21px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h6: "lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  body1:
    "font-semibold lg:text-[18px] xl:text-[23px] text-[26px] 3xl:text-[31px]",
  body2:
    "font-medium lg:text-[17px] xl:text-[22px] text-[25px] 3xl:text-[30px]",
  body3: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body4: "lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body5: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body6: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body7:
    "font-medium lg:text-[12px] xl:text-[15px] text-[17.22px] 2xl:text-[17px] 3xl:text-[20px]",
  body8: "lg:text-[12px] xl:text-[15px] text-[17px] 3xl:text-[20px]",
  body9: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body10: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
  body11:
    "font-bold lg:text-[10px] xl:text-[12px] text-[14.16px] 2xl:text-[14px] 3xl:text-[17px]",
  body12: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body13: "xl:text-[11px] text-[13px] 3xl:text-[15px] lg:text-[9px]",
  body14: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body15: "text-[11px] 3xl:text-[13px] lg:text-[7px] xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
