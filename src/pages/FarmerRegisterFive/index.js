import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate137() {
    navigate("/farmerregistersix");
  }
  function handleNavigate143() {
    navigate("/farmerregisterseven");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="justify-end w-[100%]">
          <Stack className="3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[396px] xl:ml-[495px] 2xl:ml-[557px] 3xl:ml-[668px] 3xl:mr-[102px] lg:mr-[60px] xl:mr-[75px] 2xl:mr-[85px] w-[53%]">
                <Text className="rowlanguage" variant="body12">
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
          <Row className="items-start justify-end lg:ml-[235px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] 2xl:mr-[105px] 3xl:mr-[126px] lg:mr-[74px] xl:mr-[93px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[74%]">
              <Img
                src="images/img_progressbar_light_blue_A700.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Column className="justify-start lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Billing Information
                    </Text>
                    <Text className="SelectRoleto_Two2" variant="body9">
                      Fill in the billing information for your profile.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-semibold text-bluegray_901 w-[auto]"
                        variant="body5"
                      >
                        Payment Method
                      </Text>
                      <Row className="items-start mt-[2px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Img
                          src="images/img_camera_24X24.svg"
                          className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] call"
                          alt="camera"
                        />
                        <Img
                          src="images/img_creditcard1.png"
                          className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                          alt="creditcardOne"
                        />
                        <div className="bg-white_A701 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[15%]"></div>
                        <div className="border-2 border-black_901 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                        <Img
                          src="images/img_image1.png"
                          className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[15%]"
                          alt="imageOne"
                        />
                      </Row>
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Text className="Field" variant="body12">
                        Name on Card
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body12">
                        Card Number
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                    </Column>
                    <Row className="items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body12">
                          Expiration{" "}
                        </Text>
                        <Line className="bg-gray_301 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                      </Column>
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body12">
                          CVV
                        </Text>
                        <div className="bg-gray_701 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[1px]"></div>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
                      </Column>
                    </Row>
                    <Column className="font-spartan items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[85%]">
                      <Text className="Field2" variant="body10">
                        By Clicking “Confirm Payment” I agree to the companies
                        term of services
                      </Text>
                    </Column>
                  </Column>
                  <Row className="font-inter items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Button
                      className="common-pointer font-medium mb-[1px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                      onClick={handleNavigate143}
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillGray401"
                    >
                      Back
                    </Button>
                    <Button
                      className="common-pointer font-medium mt-[1px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                      onClick={handleNavigate137}
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillBluegray900"
                    >
                      Next
                    </Button>
                  </Row>
                  <Button
                    className="font-medium lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                    shape="RoundedBorder5"
                    size="3xl"
                    variant="FillBluegray900"
                  >
                    Next
                  </Button>
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

export default FarmerRegisterFivePage;
