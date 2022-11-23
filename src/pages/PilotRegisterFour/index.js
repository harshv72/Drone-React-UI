import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const PilotRegisterFourPage = () => {
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
            <Stack className="lg:h-[402px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[74%]">
              <Img
                src="images/img_progressbar_light_blue_A700.svg"
                className="absolute top-[0] Progressbar1"
                alt="Progressbar"
              />
              <Column className="absolute bottom-[0] justify-start w-[100%]">
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
                  <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pb-[19px] xl:pb-[24px] 2xl:pb-[28px] 3xl:pb-[33px] w-[100%]">
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
                  <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pb-[34px] xl:pb-[43px] 2xl:pb-[49px] 3xl:pb-[58px] lg:pr-[34px] xl:pr-[43px] 2xl:pr-[49px] 3xl:pr-[58px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body5"
                    >
                      Billing
                    </Text>
                  </Column>
                </Column>
                <Text className="Step33" variant="body6">
                  Back
                </Text>
              </Column>
              <Column className="absolute items-center justify-start w-[100%]">
                <Img
                  src="images/img_progressbar_light_blue_A700.svg"
                  className="Progressbar1"
                  alt="Progressbar One"
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
                    <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pb-[19px] xl:pb-[24px] 2xl:pb-[28px] 3xl:pb-[33px] w-[100%]">
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
                    <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pb-[34px] xl:pb-[43px] 2xl:pb-[49px] 3xl:pb-[58px] lg:pr-[34px] xl:pr-[43px] 2xl:pr-[49px] 3xl:pr-[58px] w-[100%]">
                      <Text
                        className="font-semibold text-bluegray_901 w-[auto]"
                        variant="body5"
                      >
                        Billing
                      </Text>
                    </Column>
                  </Column>
                  <Text className="Step33" variant="body6">
                    Back
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
          <Button
            className="font-medium lg:ml-[585px] xl:ml-[733px] 2xl:ml-[824px] 3xl:ml-[989px] lg:mt-[154px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[260px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[18%]"
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

export default PilotRegisterFourPage;
