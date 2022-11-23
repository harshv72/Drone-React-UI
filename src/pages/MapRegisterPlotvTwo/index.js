import React from "react";

import { Column, Row, Input, Img, Text, Button, SelectBox } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MapRegisterPlotvTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate156() {
    navigate("/farmerregisterfour");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="common-pointer bg-cover bg-gray_901 bg-repeat font-poppins items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] w-[100%]"
        style={{ backgroundImage: "url('images/img_mapregisterpl.png')" }}
        onClick={handleNavigate156}
      >
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
              <Row className="items-center lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[1px] w-[95%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-bold p-[0] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="flex w-[27%]"
                  name="GroupEightyNine"
                  placeholder="Farm Address, City, Country, Zip "
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[1px] lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[25px] xl:h-[26px] xl:mr-[8px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[9px] 3xl:w-[35px] 3xl:h-[36px] 3xl:mr-[11px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#000000"
                        className="cursor-pointer lg:w-[20px] lg:h-[21px] lg:ml-[8px] lg:mr-[19px] xl:w-[25px] xl:h-[26px] xl:ml-[10px] xl:mr-[23px] 2xl:w-[29px] 2xl:h-[30px] 2xl:ml-[12px] 2xl:mr-[26px] 3xl:w-[35px] 3xl:h-[36px] 3xl:ml-[14px] 3xl:mr-[32px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="smSrc"
                  variant="srcFillGray100"
                ></Input>
                <Img
                  src="images/img_globe.svg"
                  className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[36px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[35px]"
                  alt="globe"
                />
                <Row className="bg-gray_100 items-center lg:ml-[410px] xl:ml-[513px] 2xl:ml-[578px] 3xl:ml-[693px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[14%]">
                  <Text
                    className="cursor-pointer hover:font-bold font-bold text-gray_901 w-[auto]"
                    variant="body12"
                  >
                    Change type
                  </Text>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[36px] mb-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[35px]"
                    alt="arrowdown"
                  />
                </Row>
                <Button
                  className="2xl:ml-[7px] 3xl:ml-[8px] flex items-center justify-center lg:ml-[5px] text-center w-[11%] xl:ml-[6px]"
                  leftIcon={
                    <Img
                      src="images/img_mobile.svg"
                      className="text-center lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[25px] xl:h-[26px] xl:mr-[8px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[9px] 3xl:w-[35px] 3xl:h-[36px] 3xl:mr-[11px]"
                      alt="mobile"
                    />
                  }
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                    Add Plot
                  </div>
                </Button>
              </Row>
            </Row>
          </header>
          <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[35px] w-[95%]">
            <Column className="justify-start 3xl:mr-[1198px] lg:mr-[710px] xl:mr-[888px] 2xl:mr-[999px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] w-[27%]">
              <Column className="font-montserrat items-center justify-start w-[19%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  variant="body5"
                >
                  Plots
                </Text>
              </Column>
              <SelectBox
                className="font-bold font-poppins lg:mb-[161px] xl:mb-[202px] 2xl:mb-[227px] 3xl:mb-[273px] mt-[4px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-green_400 w-[100%]"
                placeholderClassName="text-green_400"
                name="ListBoxMain"
                placeholder="Select Plots"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_901.svg"
                    className="lg:w-[8px] lg:h-[5px] lg:mr-[19px] xl:w-[10px] xl:h-[6px] xl:mr-[23px] 2xl:w-[12px] 2xl:h-[7px] 2xl:mr-[26px] 3xl:w-[14px] 3xl:h-[8px] 3xl:mr-[32px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder8"
                size="2xl"
                variant="OutlineBlack90019"
              ></SelectBox>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-start lg:ml-[279px] xl:ml-[349px] 2xl:ml-[393px] 3xl:ml-[471px] lg:mt-[128px] xl:mt-[160px] 2xl:mt-[180px] 3xl:mt-[216px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[35px] w-[18%]"
              style={{ backgroundImage: "url('images/img_group18.svg')" }}
            >
              <Text
                className="font-bold leading-[normal] 2xl:mb-[10px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] rotate-[39deg] text-bluegray_100 w-[51%]"
                variant="body12"
              >
                Selected <br />
                Plot
              </Text>
            </Column>
            <Img
              src="images/img_rectangle1313_113X32.svg"
              className="xl:h-[123px] 2xl:h-[138px] 3xl:h-[166px] lg:h-[98px] xl:ml-[1186px] 2xl:ml-[1335px] 3xl:ml-[1601px] lg:ml-[948px] mt-[1px] w-[3%]"
              alt="Rectangle1313"
            />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default MapRegisterPlotvTwoPage;
