import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Button,
  RadioGroup,
  Radio,
  Line,
  Input,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const CloudAdminSearchScheOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate67() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate71() {
    navigate("/");
  }
  function handleNavigate72() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate73() {
    navigate("/dronecatalogmissionp");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[27px] xl:pb-[33px] 2xl:pb-[38px] 3xl:pb-[45px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
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
          <Row className="font-poppins items-start justify-evenly w-[100%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[21%]">
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
              <Row
                className="common-pointer items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[54%]"
                onClick={handleNavigate71}
              >
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="ListMenu21" variant="body12">
                  Drone Catalog
                </Text>
              </Row>
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
                <Img
                  src="images/img_airplane.svg"
                  className="call"
                  alt="airplane"
                />
                <Text className="ListMenu22" variant="body12">
                  Drone Management
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright32"
                  alt="arrowright"
                />
              </Row>
              <Column className="bg-bluegray_900 items-center justify-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-start mt-[4px] w-[99%]">
                  <Img
                    src="images/img_volume.svg"
                    className="call"
                    alt="volume"
                  />
                  <Text className="ListMenu7" variant="body12">
                    Drone Booking
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright_One3"
                    alt="arrowright One"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] min-h-[auto] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]"
                orientation="vertical"
              >
                <Row
                  className="common-pointer listmusic1"
                  onClick={handleNavigate72}
                >
                  <Img
                    src="images/img_music.svg"
                    className="call"
                    alt="music"
                  />
                  <Text className="ListMenu26" variant="body12">
                    Drone Cloud Tracking
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Two4"
                    alt="arrowright Two"
                  />
                </Row>
                <Row className="items-start ml-[2px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question"
                  />
                  <Text className="ListMenu24" variant="body12">
                    Service History
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Three4"
                    alt="arrowright Three"
                  />
                </Row>
              </List>
              <List
                className="gap-[0] lg:mb-[463px] xl:mb-[580px] 2xl:mb-[652px] 3xl:mb-[782px] min-h-[auto] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[89%]"
                orientation="vertical"
              >
                <Row className="listuser">
                  <Img src="images/img_user.svg" className="call" alt="user" />
                  <Text className="ListMenu24" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Four5"
                    alt="arrowright Four"
                  />
                </Row>
                <Row className="listuser">
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
                    alt="arrowright Five"
                  />
                </Row>
              </List>
            </Column>
            <Column className="font-inter justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[79%]">
              <Column className="justify-start lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[49%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Drone Booking
                </Text>
                <Row className="bg-gray_401 font-worksans items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[100%]">
                  <Text className="Group557" variant="body12">
                    Booking Schedules
                  </Text>
                  <Button
                    className="common-pointer font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[29%]"
                    onClick={handleNavigate73}
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Mission Planner
                  </Button>
                  <Text
                    className="common-pointer Group555"
                    variant="body12"
                    onClick={handleNavigate67}
                  >
                    Pilot Management
                  </Text>
                </Row>
                <Text className="SelectRoleto_Two6" as="h1" variant="h1">
                  Booking Schedules
                </Text>
              </Column>
              <Stack className="font-dmsans xl:h-[1137px] 2xl:h-[1279px] 3xl:h-[1535px] lg:h-[909px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Column className="absolute bg-white_A700 justify-start left-[1%] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 top-[0] w-[61%]">
                  <Column className="justify-start lg:mb-[171px] xl:mb-[214px] 2xl:mb-[241px] 3xl:mb-[289px] w-[45%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      variant="body4"
                    >
                      Booking Status
                    </Text>
                    <RadioGroup
                      className="flex ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]"
                      name="radiogrouptext"
                    >
                      <Radio
                        value="Active"
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                        inputClassName="h-[14px] mr-[5px] w-[14px]"
                        checked={false}
                        name="radiogrouptext"
                        label="Active"
                        size="sm"
                      ></Radio>
                      <Radio
                        value="Booked"
                        className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                        inputClassName="h-[14px] mr-[5px] w-[14px]"
                        checked={false}
                        name="radiogrouptext"
                        label="Booked"
                        size="sm"
                        variant="FillRedA702"
                      ></Radio>
                      <Radio
                        value="Finished"
                        className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                        inputClassName="h-[14px] mr-[5px] w-[14px]"
                        checked={false}
                        name="radiogrouptext"
                        label="Finished"
                        size="sm"
                        variant="FillAmber500"
                      ></Radio>
                    </RadioGroup>
                  </Column>
                </Column>
                <Text className="SearchSchedule" variant="body5">
                  Search Schedules by Region
                </Text>
                <Stack className="absolute bottom-[0] font-poppins 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] w-[100%]">
                  <Stack className="absolute 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] w-[100%]">
                    <Stack className="absolute 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Column className="items-center justify-start 3xl:mt-[118px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] w-[35%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                                <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                                  <Row className="font-poppins items-end justify-between w-[100%]">
                                    <Column className="justify-start w-[22%]">
                                      <Text
                                        className="ServiceID4"
                                        variant="body12"
                                      >
                                        Service ID #
                                      </Text>
                                      <Text
                                        className="columnone"
                                        variant="body6"
                                      >
                                        1144
                                      </Text>
                                    </Column>
                                    <Column className="bg-teal_A700_60 border border-solid border-teal_500 items-center justify-start mb-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[23%]">
                                      <Text
                                        className="columnactive_one"
                                        variant="body12"
                                      >
                                        Active
                                      </Text>
                                    </Column>
                                  </Row>
                                  <Text
                                    className="columndatacollection"
                                    variant="body12"
                                  >
                                    Data Collection
                                  </Text>
                                </Column>
                              </Column>
                              <Line className="bg-gray_203 h-[1px] mt-[1px] w-[90%]" />
                            </Column>
                            <Stack className="lg:h-[185px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                              <Line className="absolute bg-gray_203 h-[1px] inset-x-[0] mx-[auto] top-[45%] w-[90%]" />
                              <Column className="absolute items-center justify-start w-[100%]">
                                <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                                  <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                                    <Row className="font-poppins items-end justify-between w-[100%]">
                                      <Column className="justify-start w-[22%]">
                                        <Text
                                          className="ServiceID4"
                                          variant="body12"
                                        >
                                          Service ID #
                                        </Text>
                                        <Text
                                          className="columnone"
                                          variant="body6"
                                        >
                                          1111
                                        </Text>
                                      </Column>
                                      <Column className="bg-deep_orange_100_60 border border-red_A702 border-solid items-center justify-start mb-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[23%]">
                                        <Text
                                          className="columnbooked_one"
                                          variant="body12"
                                        >
                                          Booked
                                        </Text>
                                      </Column>
                                    </Row>
                                    <Text
                                      className="columndatacollection"
                                      variant="body12"
                                    >
                                      Data Collection
                                    </Text>
                                  </Column>
                                </Column>
                                <Column className="items-center justify-start mt-[1px] w-[90%]">
                                  <Line className="bg-gray_203 h-[1px] w-[100%]" />
                                  <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                                </Column>
                              </Column>
                            </Stack>
                          </Column>
                          <Stack
                            className="bg-cover bg-repeat 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] w-[63%]"
                            style={{
                              backgroundImage: "url('images/img_group452.png')",
                            }}
                          >
                            <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[5%] w-[97%]">
                              <Stack className="lg:h-[554px] xl:h-[693px] 2xl:h-[779px] 3xl:h-[935px] w-[100%]">
                                <Stack className="absolute lg:h-[554px] xl:h-[693px] 2xl:h-[779px] 3xl:h-[935px] w-[100%]">
                                  <Column
                                    className="absolute bg-cover bg-repeat bottom-[5%] items-end justify-start lg:p-[107px] xl:p-[134px] 2xl:p-[151px] 3xl:p-[181px] right-[0] w-[61%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group565.png')",
                                    }}
                                  >
                                    <Column className="bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start lg:mb-[123px] xl:mb-[154px] 2xl:mb-[174px] 3xl:mb-[208px] lg:mt-[103px] xl:mt-[129px] 2xl:mt-[146px] 3xl:mt-[175px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                      <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                                    </Column>
                                  </Column>
                                  <Column className="absolute bg-white_A700 border border-bluegray_101 border-solid items-center justify-end py-[4px] right-[12%] rounded-radius2 top-[0] w-[5%]">
                                    <Img
                                      src="images/img_plus_23X23.svg"
                                      className="plus4"
                                      alt="plus"
                                    />
                                    <div className="bg-bluegray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"></div>
                                    <Img
                                      src="images/img_minus.svg"
                                      className="minus1"
                                      alt="minus"
                                    />
                                  </Column>
                                  <Stack className="absolute bg-white_A700 bottom-[0] lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[18%] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 w-[36%]">
                                    <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[51%]">
                                      <Column className="bg-green_50 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                        <div className="bg-amber_500 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                                      </Column>
                                      <Text
                                        className="rowellipsefortyfive_one"
                                        variant="body9"
                                      >
                                        Mariposa
                                      </Text>
                                    </Row>
                                    <Text className="distance" variant="body14">
                                      Zoom in: 50 meters
                                    </Text>
                                  </Stack>
                                  <Column
                                    className="absolute bg-cover bg-repeat items-end justify-start left-[0] lg:p-[54px] xl:p-[67px] 2xl:p-[76px] 3xl:p-[91px] top-[1%] w-[39%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group567.svg')",
                                    }}
                                  >
                                    <Column className="bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start lg:mb-[27px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                      <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                                    </Column>
                                  </Column>
                                </Stack>
                                <Column className="absolute justify-start right-[2%] top-[6%] w-[90%]">
                                  <Stack className="bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 w-[40%]">
                                    <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[49%]">
                                      <Column className="bg-green_50 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                        <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                                      </Column>
                                      <Text
                                        className="rowellipsefortyfive_one"
                                        variant="body9"
                                      >
                                        San Jose
                                      </Text>
                                    </Row>
                                    <Text className="distance" variant="body14">
                                      Zoom in: 50 meters
                                    </Text>
                                  </Stack>
                                  <Column
                                    className="bg-cover bg-repeat justify-center lg:ml-[142px] xl:ml-[177px] 2xl:ml-[200px] 3xl:ml-[240px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[68%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_vector_indigo_A202.svg')",
                                    }}
                                  >
                                    <Stack className="bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[88px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 w-[67%]">
                                      <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[65%]">
                                        <Column className="bg-green_50 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                          <div className="bg-green_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                                        </Column>
                                        <Text
                                          className="rowellipsefortyfive_one"
                                          variant="body9"
                                        >
                                          San Francisco
                                        </Text>
                                      </Row>
                                      <Text
                                        className="distance"
                                        variant="body14"
                                      >
                                        Zoom in: 50 meters
                                      </Text>
                                    </Stack>
                                    <Column className="bg-gradient6  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] items-center justify-start lg:mb-[110px] xl:mb-[137px] 2xl:mb-[155px] 3xl:mb-[186px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mr-[179px] xl:mr-[225px] 2xl:mr-[253px] 3xl:mr-[303px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]">
                                      <Text
                                        className="Services"
                                        variant="body12"
                                      >
                                        Services
                                      </Text>
                                      <Text
                                        className="One74"
                                        as="h4"
                                        variant="h4"
                                      >
                                        2
                                      </Text>
                                    </Column>
                                  </Column>
                                </Column>
                              </Stack>
                              <Column className="bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start lg:ml-[166px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                                <div className="bg-amber_500 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                              </Column>
                            </Column>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[0] justify-end left-[14%] lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[38%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group568.svg')",
                              }}
                            >
                              <Column className="bg-gradient6  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] items-center justify-start lg:mb-[20px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]">
                                <Text className="Services" variant="body12">
                                  Services
                                </Text>
                                <Text className="One74" as="h4" variant="h4">
                                  1
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                        </Row>
                      </Column>
                      <Column className="absolute font-dmsans justify-start left-[0] top-[5%] w-[40%]">
                        <Text
                          className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] columnstationeddrone"
                          variant="body5"
                        >
                          3 Bookings Found
                        </Text>
                        <List
                          className="gap-[0] min-h-[auto] lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[67%]"
                          orientation="vertical"
                        >
                          <Stack
                            className="bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] ml-[3px] lg:my-[34px] xl:my-[43px] 2xl:my-[48px] 3xl:my-[58px] rounded-radius15 shadow-bs6 w-[99%]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <Img
                              src="defaultNoData.png"
                              className="createfromfra2"
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
                          <Stack
                            className="bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] mr-[3px] lg:my-[34px] xl:my-[43px] 2xl:my-[48px] 3xl:my-[58px] rounded-radius15 shadow-bs6 w-[99%]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <Img
                              src="defaultNoData.png"
                              className="createfromfra_One"
                              alt="createfromfra One"
                            />
                            <Column className="absolute items-center justify-start rounded-radius15 w-[100%]">
                              <Text className="timeZone_One" variant="body5">
                                South Plot C
                              </Text>
                              <Text className="Crop" variant="body9">
                                Nursery
                              </Text>
                            </Column>
                          </Stack>
                        </List>
                        <Column className="items-center justify-start lg:mr-[38px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[88%]">
                          <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                            <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                              <Row className="font-poppins items-start justify-between w-[100%]">
                                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[22%]">
                                  <Text className="ServiceID4" variant="body12">
                                    Service ID #
                                  </Text>
                                  <Text className="One66" variant="body6">
                                    1000
                                  </Text>
                                </Column>
                                <Column className="bg-lime_50_99 border border-amber_500 border-solid items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[23%]">
                                  <Text
                                    className="columnfinished_one"
                                    variant="body12"
                                  >
                                    Finished
                                  </Text>
                                </Column>
                              </Row>
                              <Text
                                className="columndatacollection_one"
                                variant="body12"
                              >
                                Surveillance
                              </Text>
                            </Column>
                          </Column>
                          <Column className="items-center justify-start mt-[1px] w-[90%]">
                            <Line className="bg-gray_203 h-[1px] w-[100%]" />
                            <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[13%] rounded-radius15 shadow-bs6 top-[40%] w-[26%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="defaultNoData.png"
                        className="createfromfra_Three"
                        alt="createfromfra Two"
                      />
                      <Column className="absolute items-center justify-start rounded-radius15 w-[100%]">
                        <Text className="timeZone_One" variant="body5">
                          East Plot D
                        </Text>
                        <Text className="Crop" variant="body9">
                          Livestock
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column className="absolute justify-start left-[20%] top-[14%] w-[4%]">
                    <Img
                      src="images/img_ellipse1_147X149.png"
                      className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius50 w-[90%]"
                      alt="EllipseOne"
                    />
                    <Img
                      src="images/img_ellipse1_147X149.png"
                      className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] rounded-radius50 w-[90%]"
                      alt="EllipseOne One"
                    />
                    <Img
                      src="images/img_ellipse1_147X149.png"
                      className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] 3xl:mt-[114px] lg:mt-[67px] xl:mt-[84px] 2xl:mt-[95px] rounded-radius50 w-[90%]"
                      alt="EllipseOne Two"
                    />
                  </Column>
                </Stack>
                <Column className="absolute font-inter items-center justify-start right-[1%] top-[13%] w-[35%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-bold p-[0] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="GroupTwo"
                    placeholder="San Francisco, CA 94500"
                    prefix={
                      <Img
                        src="images/img_search_bluegray_902.svg"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[11px] xl:w-[15px] xl:h-[16px] xl:ml-[8px] xl:mr-[14px] 2xl:w-[17px] 2xl:h-[18px] 2xl:ml-[10px] 2xl:mr-[16px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[19px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#333333"
                          className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[15px] xl:w-[15px] xl:h-[16px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[17px] 2xl:h-[18px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder7"
                    size="lgSrc"
                    variant="srcOutlineGray70019"
                  ></Input>
                </Column>
                <Row className="absolute bg-light_blue_500 font-worksans items-start justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] right-[1%] rounded-radius10 top-[4%] w-[62%]">
                  <Column className="bg-blue_A700 justify-start my-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius5 w-[23%]">
                    <Text className="Service" variant="body12">
                      Region
                    </Text>
                    <SelectBox
                      className="font-semibold mb-[2px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[94%]"
                      placeholderClassName="text-white_A700"
                      name="Group716"
                      placeholder="San Francisco"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[10px] lg:h-[7px] xl:w-[13px] xl:h-[9px] 2xl:w-[15px] 2xl:h-[10px] 3xl:w-[18px] 3xl:h-[11px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                    ></SelectBox>
                  </Column>
                  <List
                    className="lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-2 mb-[3px] min-h-[auto] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[49%]"
                    orientation="horizontal"
                  >
                    <Column className="liststartdate">
                      <Row className="items-center justify-between mb-[2px] w-[97%]">
                        <Column className="w-[58%]">
                          <Text className="Service" variant="body12">
                            Start Date
                          </Text>
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body12"
                          >
                            29/06/2022{" "}
                          </Text>
                        </Column>
                        <Img
                          src="images/img_calendar.svg"
                          className="calendar8"
                          alt="calendar"
                        />
                      </Row>
                    </Column>
                    <Column className="liststartdate">
                      <Row className="items-center justify-between mb-[2px] w-[97%]">
                        <Column className="w-[58%]">
                          <Text className="Service" variant="body12">
                            End Date
                          </Text>
                          <Text className="date_One" variant="body12">
                            29/06/2022{" "}
                          </Text>
                        </Column>
                        <Img
                          src="images/img_calendar.svg"
                          className="calendar8"
                          alt="calendar One"
                        />
                      </Row>
                    </Column>
                  </List>
                  <Column className="bg-blue_A700 justify-start mb-[3px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius5 w-[23%]">
                    <Text className="Service" variant="body12">
                      Farmer
                    </Text>
                    <SelectBox
                      className="font-semibold mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[94%]"
                      placeholderClassName="text-white_A700"
                      name="Group718"
                      placeholder="Andy Palmer"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[10px] lg:h-[7px] xl:w-[13px] xl:h-[9px] 2xl:w-[15px] 2xl:h-[10px] 3xl:w-[18px] 3xl:h-[11px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                    ></SelectBox>
                  </Column>
                </Row>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CloudAdminSearchScheOnePage;
