import React from "react";

import { Column, Stack, Text, Row, Img, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const DroneCatalogMissionPOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate64() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate65() {
    navigate("/initialversiondroneb");
  }
  function handleNavigate66() {
    navigate("/initialversiondroneb");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[194px] xl:pb-[242px] 2xl:pb-[273px] 3xl:pb-[327px] w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] w-[88%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[24%]">
              <Row className="items-center ml-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[76%]">
                <Img
                  src="images/img_offer.svg"
                  className="offer3"
                  alt="offer"
                />
                <Text className="rowoffer1" variant="body1">
                  Dashboard
                </Text>
              </Row>
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[73%]">
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="ListMenu21" variant="body12">
                  Drone Cloud Tracking
                </Text>
              </Row>
              <Column className="bg-bluegray_900 items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-end my-[3px] w-[99%]">
                  <Img
                    src="images/img_clock.svg"
                    className="call"
                    alt="clock"
                  />
                  <Text className="ListMenu27" variant="body12">
                    Drone Catalog
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright27"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[89%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question"
                />
                <Text className="ListMenu11" variant="body12">
                  Service History
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_One2"
                  alt="arrowright One"
                />
              </Row>
              <Row className="items-center xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]">
                <Img src="images/img_music.svg" className="call" alt="music" />
                <Text className="ListMenu6" variant="body12">
                  Drone Data
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Two3"
                  alt="arrowright Two"
                />
              </Row>
              <List
                className="gap-[0] lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[90%]"
                orientation="vertical"
              >
                <Row className="listquestion_one1">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question One"
                  />
                  <Text className="ListMenu20" variant="body12">
                    Drone AI
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Three3"
                    alt="arrowright Three"
                  />
                </Row>
                <Row className="listquestion_one1">
                  <Img src="images/img_user.svg" className="call" alt="user" />
                  <Text className="ListMenu11" variant="body12">
                    Pilot Management
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Four4"
                    alt="arrowright Four"
                  />
                </Row>
              </List>
            </Column>
            <Column className="font-inter justify-start lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[73%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                Drone Booking
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[59%]">
                <Text
                  className="bg-light_blue_A700 lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] rowgroup557"
                  variant="body12"
                >
                  Booking Schedules
                </Text>
                <Button
                  className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  Mission Planner
                </Button>
                <Text
                  className="common-pointer bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rowgroup557"
                  variant="body12"
                  onClick={handleNavigate64}
                >
                  Pilot Management
                </Text>
              </Row>
              <Text
                className="lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] text-bluegray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Mission Planner
              </Text>
              <Text
                className="ml-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-bluegray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Drone ID #1
              </Text>
              <Row className="font-inter items-start ml-[3px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[92%]">
                <Text
                  className="font-light leading-[normal] text-bluegray_900 w-[42%]"
                  variant="body5"
                >
                  Service Details
                  <br />
                  ID# 1144
                  <br />
                  Mission Plan ID#: 200
                  <br />
                  Status: Active
                  <br />
                  <br />
                  Service Type: Rental - Data Collection
                  <br />
                  Time Start: 06/29/2022, 10:00 am
                  <br />
                  Time End: 06/29/2022, 5:00 pm
                  <br />
                  Land: West Plot A - Crop
                  <br />
                  Drone ID #1: DJI Mini SE
                </Text>
                <Text
                  className="font-light leading-[normal] lg:ml-[58px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] text-bluegray_900 w-[48%]"
                  variant="body5"
                >
                  <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Drone Profile Details
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    ID #1
                    <br />
                    Model:{" "}
                  </span>
                  <span className="text-bluegray_900 font-inter font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    DJI Mini SE
                    <br />
                  </span>
                </Text>
              </Row>
              <Stack className="font-poppins lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[47%]">
                <Stack className="absolute lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] left-[0] w-[95%]">
                  <Text
                    className="absolute font-inter font-light leading-[normal] text-bluegray_900 w-[100%]"
                    variant="body5"
                  >
                    Mission Plan
                    <br />
                    ID # 123
                  </Text>
                  <Text
                    className="absolute bg-red_300 bottom-[20%] font-medium font-poppins pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] right-[18%] rounded-radius5 text-white_A700 w-[63px]"
                    variant="body12"
                  >
                    Open
                  </Text>
                </Stack>
                <Button
                  className="absolute bottom-[20%] font-medium right-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillRed300"
                >
                  Save
                </Button>
              </Stack>
              <Img
                src="images/img_trackingdashbo.png"
                className="lg:h-[354px] xl:h-[443px] 2xl:h-[498px] 3xl:h-[597px] w-[90%]"
                alt="TrackingDashbo"
              />
              <Row className="font-inter items-center justify-end ml-[auto] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[93%]">
                <Button
                  className="common-pointer font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[33%]"
                  onClick={handleNavigate65}
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  Back
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[201px] xl:ml-[252px] 2xl:ml-[284px] 3xl:ml-[340px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[33%]"
                  onClick={handleNavigate66}
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillBluegray900"
                >
                  Confirm
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneCatalogMissionPOnePage;
