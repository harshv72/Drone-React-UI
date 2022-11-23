import React from "react";

import { Column, Stack, Text, Row, Img, Button, Line, Input } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate141() {
    navigate("/mapregisterfarm");
  }
  function handleNavigate142() {
    navigate("/mapregisterplotvtwo");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[34px] xl:pb-[42px] 2xl:pb-[48px] 3xl:pb-[57px] w-[100%]">
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
          <Row className="items-start justify-end ml-[auto] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[76%]">
            <Button
              className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[461px] xl:mt-[577px] 2xl:mt-[649px] 3xl:mt-[779px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
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
            <Stack className="lg:h-[578px] xl:h-[723px] 2xl:h-[813px] 3xl:h-[975px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[68%]">
              <Column className="absolute items-center justify-start top-[0] w-[100%]">
                <Img
                  src="images/img_progressbar_12X745.svg"
                  className="Progressbar1"
                  alt="Progressbar"
                />
                <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                  <Column className="font-inter items-center justify-start w-[33%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Farm Information
                    </Text>
                    <Text className="SelectRoleto_Two1" variant="body9">
                      Fill in more data about your farm.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pl-[22px] xl:pl-[28px] 2xl:pl-[32px] 3xl:pl-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[32px] 3xl:py-[38px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center lg:pr-[32px] xl:pr-[40px] 2xl:pr-[46px] 3xl:pr-[55px] w-[100%]">
                        <Column className="lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[89%]">
                          <Text
                            className="font-semibold text-bluegray_901 w-[auto]"
                            variant="body5"
                          >
                            Farm Plot 1
                          </Text>
                        </Column>
                        <Column className="items-end lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[6%]">
                          <Text className="Field" variant="body5">
                            EDIT
                          </Text>
                          <Img
                            src="images/img_icon.svg"
                            className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[60%]"
                            alt="Icon"
                          />
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[15%]">
                      <Text className="Field" variant="body12">
                        Plot Type
                      </Text>
                      <Text
                        className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_901 w-[100%]"
                        variant="body12"
                      >
                        {" "}
                        ( ) Livestock
                        <br /> ( ) Crops
                        <br /> ( ) Fruit
                        <br /> ( ) Nursery
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[96%]">
                      <Text className="Field" variant="body12">
                        Type (in detail)
                      </Text>
                      <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                    </Column>
                  </Column>
                  <Input
                    className="placeholder:text-bluegray_901 Space"
                    wrapClassName="2xl:mt-[32px] 3xl:mt-[38px] lg:mt-[22px] w-[100%] xl:mt-[28px]"
                    name="Space"
                    placeholder="Add Another Plot"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="OutlineGray301"
                  ></Input>
                  <Text
                    className="common-pointer bg-gray_401 font-inter font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[23px] 3xl:pt-[27px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius5 text-white_A700 w-[252px]"
                    variant="body6"
                    onClick={handleNavigate141}
                  >
                    Back
                  </Text>
                </Column>
              </Column>
              <Button
                className="common-pointer absolute bottom-[0] font-medium right-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                onClick={handleNavigate142}
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Stack>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterThreePage;
