import React from "react";

import { Column, Stack, Text, Row, Img, Button, Input } from "components";
import { useNavigate } from "react-router-dom";

const FarmlandProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate145() {
    navigate("/farmverificationprofileone");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] w-[100%]"
        onClick={handleNavigate145}
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
          <Text
            className="lg:ml-[109px] xl:ml-[136px] 2xl:ml-[154px] 3xl:ml-[184px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Farmland
          </Text>
          <Row className="font-poppins items-start justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[89%]">
            <Column className="justify-start w-[58%]">
              <Column className="border border-gray_301 border-solid font-poppins justify-start lg:pl-[22px] xl:pl-[28px] 2xl:pl-[32px] 3xl:pl-[38px] lg:pt-[22px] xl:pt-[28px] 2xl:pt-[32px] 3xl:pt-[38px] rounded-radius8 w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center lg:pr-[32px] xl:pr-[40px] 2xl:pr-[46px] 3xl:pr-[55px] w-[100%]">
                    <Column className="lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[89%]">
                      <Text
                        className="font-semibold text-bluegray_901 w-[auto]"
                        variant="body5"
                      >
                        West Plot A
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
                <Row className="font-montserrat items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[21%]">
                  <Img
                    src="images/img_edit_24X24.svg"
                    className="rounded-radius50 call"
                    alt="edit"
                  />
                  <Text
                    className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rowedit"
                    variant="body12"
                  >
                    Change Picture
                  </Text>
                </Row>
                <Stack
                  className="bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] rounded-radius15 shadow-bs6 w-[42%]"
                  style={{ backgroundImage: "url('images/defaultNoData.png')" }}
                >
                  <Img
                    src="defaultNoData.png"
                    className="absolute lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[0] rounded-radius15 w-[57%]"
                    alt="createfromfra"
                  />
                  <Column className="absolute items-center justify-start rounded-radius15 w-[100%]">
                    <Text className="timeZone_One" variant="body5">
                      West Plot A
                    </Text>
                    <Text className="Crop" variant="body9">
                      Crop
                    </Text>
                  </Column>
                </Stack>
                <Column className="font-poppins justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] 3xl:pr-[10px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] w-[21%]">
                  <Text className="Field" variant="body12">
                    Plot Type
                  </Text>
                  <Text
                    className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_901 w-[77%]"
                    variant="body12"
                  >
                    {" "}
                    ( ) Livestock
                    <br /> ( X ) Crops
                    <br /> ( ) Fruit
                    <br /> ( ) Nursery
                  </Text>
                </Column>
              </Column>
              <Text
                className="font-normal font-poppins lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] ml-[2px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_900 w-[91%]"
                variant="body12"
              >
                <span className="text-gray_900 font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Type (in detail)
                  <br />
                </span>
                <span className="text-gray_900 lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  A rectangular field of corn crops. In the west direction of my
                  farm.
                  <br />
                  <br />
                </span>
                <span className="text-gray_900 font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Map Boundaries (Latitude, Longitude):
                  <br />
                </span>
                <span className="text-gray_900 lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Top-left corner: (37.558381,-122.048111)
                  <br />
                  Top-right corner: (37.558400,-122.048111)
                  <br />
                  Bottom-left corner: (37.558381,-122.04800)
                  <br />
                  Bottom-right corner: (37.558400,-122.048111)
                </span>
              </Text>
              <Button
                className="font-inter font-medium lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Save
              </Button>
            </Column>
            <Column className="justify-start lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[37%]">
              <Row className="items-start justify-between lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[99%]">
                <Button
                  className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
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
                <Input
                  className="font-semibold p-[0] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                  wrapClassName="w-[79%]"
                  name="Space"
                  placeholder="Add Another Plot"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="OutlineGray301"
                ></Input>
              </Row>
              <Column className="font-inter items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[94%]">
                <Button
                  className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillBluegray900"
                >
                  West Plot A
                </Button>
                <Button
                  className="font-medium lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  North Plot B
                </Button>
                <Button
                  className="font-medium lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  South Plot C
                </Button>
                <Button
                  className="font-medium lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  East Plot D
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmlandProfilePage;
