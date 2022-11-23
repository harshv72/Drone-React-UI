import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate158() {
    navigate("/mapregisterfarm");
  }
  function handleNavigate162() {
    navigate("/farmerregisterone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[401px] xl:ml-[502px] 2xl:ml-[565px] 3xl:ml-[678px] 3xl:mr-[111px] lg:mr-[66px] xl:mr-[82px] 2xl:mr-[93px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[52%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search1"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
          <Row className="items-start justify-end ml-[auto] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[74%]">
              <Img
                src="images/img_progressbar_white_A700_12X745.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Farm Information
                    </Text>
                    <Text className="SelectRoleto_Two1" variant="body5">
                      Fill in the data for your farm. It will only take a couple
                      of minutes.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start w-[25%]">
                      <Text
                        className="font-semibold text-bluegray_901 w-[auto]"
                        variant="body3"
                      >
                        Farm address
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Name
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Address
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body5">
                        City
                      </Text>
                      <Img
                        src="images/img_select.svg"
                        className="Select"
                        alt="Input"
                      />
                    </Column>
                    <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Country
                        </Text>
                        <Img
                          src="images/img_select.svg"
                          className="Select"
                          alt="Select"
                        />
                      </Column>
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Zip code
                        </Text>
                        <div className="bg-gray_701 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[1px]"></div>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
                      </Column>
                    </Row>
                  </Column>
                  <Row className="font-inter items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Button
                      className="common-pointer font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                      onClick={handleNavigate162}
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillGray401"
                    >
                      Back
                    </Button>
                    <Button
                      className="common-pointer font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                      onClick={handleNavigate158}
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillBluegray900"
                    >
                      Next
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterTwoPage;
