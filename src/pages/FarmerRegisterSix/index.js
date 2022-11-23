import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const FarmerRegisterSixPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[7px] xl:pb-[9px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
          <Row className="items-start justify-end ml-[auto] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[74%]">
              <Img
                src="images/img_progressbar_light_blue_A700.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="justify-start xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pb-[9px] xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[15px] lg:pr-[9px] w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Review Registration Information
                  </Text>
                </Column>
                <Column className="border border-gray_301 border-solid font-poppins justify-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[22px] xl:pt-[28px] 2xl:pt-[32px] 3xl:pt-[38px] lg:px-[22px] xl:px-[28px] 2xl:px-[32px] 3xl:px-[38px] rounded-radius8 w-[100%]">
                  <Column className="items-center justify-start w-[25%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body5"
                    >
                      User Information
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Text className="Field3" variant="body12">
                      Name
                      <br />
                      Phone Number
                      <br />
                      Email
                      <br />
                      Birthday
                      <br />
                      Gender
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body5"
                    >
                      Farm Information and Map Boundaries
                    </Text>
                    <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[12%]">
                      <Text className="Field3" variant="body12">
                        Farm Name
                        <br />
                        Address
                        <br />
                        Plots
                        <br />
                        Boundaries
                      </Text>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:pb-[19px] xl:pb-[24px] 2xl:pb-[28px] 3xl:pb-[33px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body5"
                    >
                      Verification
                    </Text>
                    <Column className="items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Text className="Field3" variant="body12">
                        Land Owner Certificate
                        <br />
                        Business License
                      </Text>
                    </Column>
                  </Column>
                  <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pb-[49px] xl:pb-[62px] 2xl:pb-[70px] 3xl:pb-[84px] lg:pr-[49px] xl:pr-[62px] 2xl:pr-[70px] 3xl:pr-[84px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body5"
                    >
                      Billing
                    </Text>
                  </Column>
                </Column>
                <Text
                  className="bg-gray_401 font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[23px] 3xl:pt-[27px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] text-white_A700 w-[252px]"
                  variant="body6"
                >
                  Back
                </Text>
              </Column>
            </Column>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
          <Button
            className="font-medium lg:ml-[585px] xl:ml-[733px] 2xl:ml-[824px] 3xl:ml-[989px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[18%]"
            shape="RoundedBorder5"
            size="3xl"
            variant="FillBluegray900"
          >
            Finish
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterSixPage;
