import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const variants = {
  OutlineBlack90019: "bg-white_A700 shadow-bs2",
  FillGray52: "bg-gray_52",
  FillLightblueA701: "bg-light_blue_A701",
  FillGreen400: "bg-green_400",
  OutlineBlack9000a: "bg-white_A700 shadow-bs1",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder20: "rounded-radius2023",
};
const sizes = {
  sm: "pt-[1px]",
  md: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  lg: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] lg:pt-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
  xl: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  "2xl":
    "lg:pb-[12px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[14px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] lg:px-[12px] xl:px-[16px] px-[18px] 3xl:px-[21px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#ffffff",
              "&:hover": { backgroundColor: "#ffffff", color: "#404040" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder20"]),
  variant: PropTypes.oneOf([
    "OutlineBlack90019",
    "FillGray52",
    "FillLightblueA701",
    "FillGreen400",
    "OutlineBlack9000a",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  shape: "",
  variant: "",
  size: "",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };
