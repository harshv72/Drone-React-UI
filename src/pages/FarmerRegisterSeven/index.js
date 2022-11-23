import React from "react";

import { Column, Stack, Text, Row, Img, Button, Line, Input } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterSevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate151() {
    navigate("/farmerregistereight");
  }
  function handleNavigate157() {
    navigate("/farmerregisterfive");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[31px] xl:pb-[39px] 2xl:pb-[44px] 3xl:pb-[52px] w-[100%]">
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
              className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[490px] xl:mt-[613px] 2xl:mt-[690px] 3xl:mt-[828px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
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
            <Column className="items-center justify-start lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[68%]">
              <Img
                src="images/img_progressbar_1.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="font-inter justify-start w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Let’s verify your farm operation.
                  </Text>
                  <Text className="SelectRoleto_Two2" variant="body5">
                    Please submit a copy of your farm’s utliliy bill. This can
                    be an electric bill, or alternatively a water bill.
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
                <Input
                  className="placeholder:text-bluegray_901 Space"
                  wrapClassName="2xl:mt-[32px] 3xl:mt-[38px] lg:mt-[22px] w-[100%] xl:mt-[28px]"
                  name="Space"
                  placeholder="Add Another Utility Bill"
                  shape="RoundedBorder8"
                  size="2xl"
                  variant="OutlineGray301"
                ></Input>
              </Column>
            </Column>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
          <Row className="items-center justify-center lg:ml-[235px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] lg:mt-[283px] xl:mt-[354px] 2xl:mt-[398px] 3xl:mt-[477px] w-[52%]">
            <Button
              className="common-pointer font-medium mb-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              onClick={handleNavigate151}
              shape="RoundedBorder5"
              size="4xl"
              variant="FillGray401"
            >
              Back
            </Button>
            <Button
              className="common-pointer font-medium lg:ml-[170px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] mt-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              onClick={handleNavigate157}
              shape="RoundedBorder5"
              size="4xl"
              variant="FillBluegray900"
            >
              Next
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterSevenPage;
