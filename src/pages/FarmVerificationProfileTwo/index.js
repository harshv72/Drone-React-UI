import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmVerificationProfileTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate166() {
    navigate("/farmverificationprofilethree");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[27px] xl:pb-[34px] 2xl:pb-[39px] 3xl:pb-[46px] w-[100%]"
        onClick={handleNavigate166}
      >
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
          <Column className="justify-start 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Farm Verification: Farm Operation
            </Text>
            <Img
              src="images/img_progressbar_2.svg"
              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[57%]"
              alt="Progressbar"
            />
            <Row className="items-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[70%]">
              <Column className="items-center justify-start w-[81%]">
                <Column className="justify-start w-[100%]">
                  <Column className="justify-start w-[94%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Farm Operation
                    </Text>
                    <Text className="SelectRoleto_Two2" variant="body5">
                      Your farm’s utliliy bill. This can be an electric bill, or
                      alternatively a water bill.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start w-[26%]">
                      <Text
                        className="font-semibold text-bluegray_901 w-[auto]"
                        variant="body3"
                      >
                        Farm Utility Bill
                      </Text>
                    </Column>
                    <Line className="bg-gray_301 h-[1px] lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Statement Agreement ID
                        </Text>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                      </Column>
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Date of bill statement
                        </Text>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                      </Column>
                    </Row>
                  </Column>
                  <Column className="font-poppins items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Column className="bg-gray_101 border border-dashed border-gray_600 items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius9 w-[100%]">
                      <Img
                        src="images/img_camera.svg"
                        className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[4%]"
                        alt="camera"
                      />
                      <Text className="columncamera1" variant="body8">
                        Upload pdf/image of utility bill
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Button
                className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[81px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                shape="icbRoundedBorder8"
                size="mdIcn"
                variant="icbOutlineBlueA40085"
              >
                <Img
                  src="images/img_floatingicon.svg"
                  className="flex items-center justify-center lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px]"
                  alt="floatingicon"
                />
              </Button>
            </Row>
            <Row className="items-center justify-end ml-[auto] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[40%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
                shape="RoundedBorder5"
                size="4xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
                shape="RoundedBorder5"
                size="4xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FarmVerificationProfileTwoPage;
