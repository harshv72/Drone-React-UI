import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Button,
  Line,
  List,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterFourPage = () => {
  const navigate = useNavigate();

  function handleNavigate134() {
    navigate("/farmerregistereight");
  }
  function handleNavigate135() {
    navigate("/mapregisterplotvtwo");
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
          <Row className="items-start justify-end ml-[auto] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[75%]">
            <Button
              className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center 2xl:mt-[1047px] 3xl:mt-[1257px] lg:mt-[744px] xl:mt-[931px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
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
            <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[69%]">
              <Img
                src="images/img_progressbar_1.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                <Column className="font-inter justify-start lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Let’s verify your farm.
                  </Text>
                  <Text className="SelectRoleto_Two2" variant="body5">
                    Fill in more data regarding your farm certification.
                  </Text>
                </Column>
                <Column className="border border-gray_301 border-solid font-poppins justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                  <Column className="items-center justify-start w-[49%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body3"
                    >
                      Land Ownership Certificate
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Text className="Field" variant="body5">
                      Name of Land Owner
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
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listfieldlabel_three">
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
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                      </Column>
                    </Row>
                    <Row className="listfieldlabel_three">
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Total area (square feet)
                        </Text>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                      </Column>
                      <Column className="w-[48%]">
                        <Text className="Field" variant="body5">
                          Date of certificate issue
                        </Text>
                        <Line className="bg-light_blue_A700 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                      </Column>
                    </Row>
                  </List>
                </Column>
                <Column className="bg-gray_101 border border-dashed border-gray_600 font-poppins items-center justify-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius9 w-[100%]">
                  <Img
                    src="images/img_camera.svg"
                    className="camera"
                    alt="camera"
                  />
                  <Text className="columncamera" variant="body8">
                    Upload pdf/image of certificate
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-bluegray_901 Space"
                  wrapClassName="2xl:mt-[32px] 3xl:mt-[38px] lg:mt-[22px] w-[100%] xl:mt-[28px]"
                  name="Space"
                  placeholder="Add Another Certificate"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="OutlineGray301"
                ></Input>
              </Column>
            </Column>
            <Img src="images/img_close.svg" className="close" alt="close" />
          </Row>
          <Row className="items-center justify-center lg:ml-[235px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[52%]">
            <Button
              className="common-pointer font-medium mb-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              onClick={handleNavigate135}
              shape="RoundedBorder5"
              size="4xl"
              variant="FillGray401"
            >
              Back
            </Button>
            <Button
              className="common-pointer font-medium lg:ml-[170px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] mt-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              onClick={handleNavigate134}
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

export default FarmerRegisterFourPage;
