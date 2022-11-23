import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate177() {
    navigate("/registerone");
  }
  function handleNavigate178() {
    navigate("/farmerregistertwo");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="justify-end w-[100%]">
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
          <Row className="items-start justify-end lg:ml-[235px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] 2xl:mr-[105px] 3xl:mr-[126px] lg:mr-[74px] xl:mr-[93px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pb-[24px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] w-[74%]">
              <Img
                src="images/img_progressbar_white_A700.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Stack className="lg:h-[531px] xl:h-[664px] 2xl:h-[747px] 3xl:h-[896px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="absolute bottom-[1%] justify-start w-[100%]">
                  <Column className="justify-start w-[83%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Farmer Information
                    </Text>
                    <Text className="SelectRoleto_Two1" variant="body5">
                      Fill in the data for your profile. It will only take a
                      couple of minutes.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="Field" variant="body5">
                        Name
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Phone Number
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Email
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Birthday
                      </Text>
                      <Img
                        src="images/img_select.svg"
                        className="Select"
                        alt="Select"
                      />
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Text className="Field" variant="body5">
                        Gender
                      </Text>
                      <Img
                        src="images/img_select.svg"
                        className="Select_One"
                        alt="Select One"
                      />
                    </Column>
                  </Column>
                  <Button
                    className="common-pointer font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                    onClick={handleNavigate177}
                    shape="RoundedBorder5"
                    size="3xl"
                    variant="FillGray401"
                  >
                    Back
                  </Button>
                </Column>
                <Button
                  className="common-pointer absolute bottom-[0] font-medium right-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                  onClick={handleNavigate178}
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillBluegray900"
                >
                  Next
                </Button>
              </Stack>
            </Column>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterOnePage;
