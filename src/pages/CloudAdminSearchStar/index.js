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
  Slider,
  Input,
  SelectBox,
} from "components";
import { useNavigate } from "react-router-dom";

const CloudAdminSearchStarPage = () => {
  const navigate = useNavigate();

  function handleNavigate105() {
    navigate("/draftcloudadminboo");
  }
  function handleNavigate106() {
    navigate("/draftcloudadminboo");
  }
  function handleNavigate109() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate110() {
    navigate("/dronecatalogmissionp");
  }
  function handleNavigate111() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate115() {
    navigate("/");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[174px] xl:pb-[217px] 2xl:pb-[245px] 3xl:pb-[294px] w-[100%]">
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
                onClick={handleNavigate115}
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
                  onClick={handleNavigate109}
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
                    onClick={handleNavigate110}
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Mission Planner
                  </Button>
                  <Text
                    className="common-pointer Group555"
                    variant="body12"
                    onClick={handleNavigate111}
                  >
                    Pilot Management
                  </Text>
                </Row>
                <Text className="SelectRoleto_Two6" as="h1" variant="h1">
                  Booking Schedules
                </Text>
              </Column>
              <Stack className="2xl:h-[1072px] 3xl:h-[1286px] lg:h-[762px] xl:h-[953px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Column className="absolute bg-white_A700 font-dmsans justify-start left-[1%] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 top-[0] w-[61%]">
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
                <Column className="absolute bottom-[0] font-dmsans justify-start lg:pb-[24px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] w-[100%]">
                  <Text className="font-bold rowoffer1" variant="body5">
                    4 Bookings Found in Region
                  </Text>
                  <Stack className="lg:h-[488px] xl:h-[610px] 2xl:h-[686px] 3xl:h-[823px] mb-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <Stack className="absolute font-worksans lg:h-[488px] xl:h-[610px] 2xl:h-[686px] 3xl:h-[823px] left-[0] w-[85%]">
                      <Stack className="absolute lg:h-[488px] xl:h-[610px] 2xl:h-[686px] 3xl:h-[823px] w-[100%]">
                        <Stack className="absolute lg:h-[386px] xl:h-[483px] 2xl:h-[543px] 3xl:h-[651px] top-[0] w-[100%]">
                          <Column className="absolute items-center justify-start left-[0] top-[0] w-[43%]">
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
                                    <Text className="columnone" variant="body6">
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
                            <Column className="items-center justify-start mt-[1px] w-[90%]">
                              <Line className="bg-gray_203 h-[1px] w-[100%]" />
                              <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                            </Column>
                          </Column>
                          <Slider
                            slidesToShow={50}
                            activeIndex={sliderState}
                            onSlideChanged={(e) => {
                              setsliderState(e?.item);
                            }}
                            activeSlideCSS="scale-[1.00] absolute"
                            ref={sliderRef}
                            className="absolute bottom-[0] w-[100%]"
                            items={[...Array(150)].map(() => (
                              <React.Fragment key={Math.random()}>
                                <Column className="items-center justify-start w-[100%]">
                                  <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[99%]">
                                    <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[97%]">
                                      <Row className="font-poppins items-start justify-between w-[100%]">
                                        <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[22%]">
                                          <Text
                                            className="ServiceID4"
                                            variant="body12"
                                          >
                                            Service ID #
                                          </Text>
                                          <Text
                                            className="One66"
                                            variant="body6"
                                          >
                                            1222
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
                                        Data Collection
                                      </Text>
                                    </Column>
                                  </Column>
                                  <Line className="bg-gray_203 h-[1px] mt-[1px] w-[89%]" />
                                  <Stack className="lg:h-[186px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
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
                              </React.Fragment>
                            ))}
                            Indicator={({ isActive }) => {
                              if (isActive) {
                                return <div className="" />;
                              }
                              return (
                                <div className="" role="button" tabIndex={0} />
                              );
                            }}
                          />
                        </Stack>
                        <Column className="absolute bottom-[0] items-center justify-start left-[1%] w-[43%]">
                          <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                            <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                              <Row className="font-poppins items-end justify-between w-[100%]">
                                <Column className="justify-start w-[22%]">
                                  <Text className="ServiceID4" variant="body12">
                                    Service ID #
                                  </Text>
                                  <Text className="One66" variant="body6">
                                    1000
                                  </Text>
                                </Column>
                                <Column className="bg-lime_50_99 border border-amber_500 border-solid items-center justify-start mb-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[23%]">
                                  <Text
                                    className="columnfinished_one"
                                    variant="body12"
                                  >
                                    Finished
                                  </Text>
                                </Column>
                              </Row>
                              <Text
                                className="columndatacollection"
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
                        <List
                          className="absolute gap-[0] left-[16%] min-h-[auto] top-[4%] w-[33%]"
                          orientation="vertical"
                        >
                          <Stack className="listcreatefromfra">
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
                            className="bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] mr-[4px] lg:my-[32px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] rounded-radius15 shadow-bs6 w-[99%]"
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
                                North Plot B
                              </Text>
                              <Text className="Crop" variant="body9">
                                Fruit
                              </Text>
                            </Column>
                          </Stack>
                          <Stack
                            className="bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] mx-[2px] lg:my-[32px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] rounded-radius15 shadow-bs6 w-[99%]"
                            style={{
                              backgroundImage:
                                "url('images/defaultNoData.png')",
                            }}
                          >
                            <Img
                              src="defaultNoData.png"
                              className="createfromfra_One"
                              alt="createfromfra Two"
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
                      </Stack>
                      <Stack
                        className="absolute bg-cover bg-repeat bottom-[26%] lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[16%] rounded-radius15 shadow-bs6 w-[32%]"
                        style={{
                          backgroundImage: "url('images/defaultNoData.png')",
                        }}
                      >
                        <Img
                          src="defaultNoData.png"
                          className="createfromfra_Three"
                          alt="createfromfra Three"
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
                    <Row className="absolute font-worksans items-start justify-between left-[21%] top-[5%] w-[47%]">
                      <Img
                        src="images/img_ellipse1_147X149.png"
                        className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius50 w-[9%]"
                        alt="EllipseOne"
                      />
                      <Input
                        className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-light_blue_500 text-light_blue_500 w-[100%]"
                        wrapClassName="2xl:mb-[7px] 3xl:mb-[8px] lg:mb-[4px] w-[34%] xl:mb-[6px]"
                        name="date"
                        placeholder="29/06/2022"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray200"
                      ></Input>
                    </Row>
                    <Column className="absolute font-worksans h-[max-content] inset-y-[0] justify-start left-[20%] my-[auto] w-[50%]">
                      <Row className="items-start justify-end ml-[auto] w-[37%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="cursor-pointer lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[14%]"
                          onClick={() => sliderRef.current?.slidePrev()}
                          alt="arrowleft"
                        />
                        <Text
                          className="font-semibold 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] mt-[2px] text-gray_800 w-[auto]"
                          variant="body12"
                        >
                          June 2022
                        </Text>
                      </Row>
                      <Column className="font-inter justify-start lg:mr-[24px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[40px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[94%]">
                        <Img
                          src="images/img_ellipse1.png"
                          className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius25 w-[9%]"
                          alt="EllipseThree"
                        />
                        <Img
                          src="images/img_ellipse1_147X149.png"
                          className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] ml-[3px] 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] rounded-radius50 w-[9%]"
                          alt="EllipseOne One"
                        />
                        <Row className="items-start justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 3xl:mt-[115px] lg:mt-[68px] xl:mt-[85px] 2xl:mt-[96px] w-[98%]">
                          <Img
                            src="images/img_ellipse1_147X149.png"
                            className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius50 w-[9%]"
                            alt="EllipseOne Two"
                          />
                          <Button
                            className="common-pointer font-medium lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[57%]"
                            onClick={handleNavigate106}
                            shape="RoundedBorder5"
                            size="3xl"
                            variant="FillGray401"
                          >
                            Back
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="common-pointer absolute bottom-[14%] font-inter font-medium right-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[26%]"
                      onClick={handleNavigate105}
                      shape="RoundedBorder5"
                      size="3xl"
                      variant="FillBluegray900"
                    >
                      Search
                    </Button>
                    <Row className="absolute font-worksans items-center justify-center right-[28%] top-[2%] w-[20%]">
                      <Text className="Farm3671Old1" variant="body14">
                        From
                      </Text>
                      <Text
                        className="lg:ml-[118px] xl:ml-[147px] 2xl:ml-[166px] 3xl:ml-[199px] Farm3671Old1"
                        variant="body14"
                      >
                        Until
                      </Text>
                    </Row>
                    <Input
                      className="absolute font-normal font-worksans not-italic p-[0] right-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-light_blue_500 text-light_blue_500 top-[0] w-[100%]"
                      wrapClassName="2xl:mr-[158px] 2xl:mt-[36px] 3xl:mr-[189px] 3xl:mt-[43px] absolute lg:mr-[112px] lg:mt-[25px] right-[14%] top-[5%] w-[16%] xl:mr-[140px] xl:mt-[32px]"
                      name="date One"
                      placeholder="29/06/2022"
                      shape="RoundedBorder8"
                      size="md"
                      variant="FillGray200"
                    ></Input>
                    <Img
                      src="images/img_arrowright_gray_700.svg"
                      className="absolute cursor-pointer lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] right-[14%] top-[14%] w-[3%]"
                      onClick={() => sliderRef.current?.slideNext()}
                      alt="arrowright Six"
                    />
                  </Stack>
                </Column>
                <Row className="absolute bg-light_blue_500 font-worksans items-start justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] right-[1%] rounded-radius10 top-[4%] w-[62%]">
                  <Column className="bg-blue_A700 justify-start my-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius5 w-[23%]">
                    <Text className="Service" variant="body12">
                      Region
                    </Text>
                    <SelectBox
                      className="font-semibold mb-[2px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[94%]"
                      placeholderClassName="text-white_A700"
                      name="Group702"
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
                      className="font-semibold mb-[2px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[94%]"
                      placeholderClassName="text-white_A700"
                      name="Group704"
                      placeholder="All"
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
                <Text
                  className="absolute font-inter right-[17%] text-bluegray_900 top-[19%] w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Search Schedule Start Date
                </Text>
                <Column className="absolute font-inter items-center justify-start right-[12%] top-[25%] w-[47%]">
                  <Text
                    className="font-light text-bluegray_900 w-[auto]"
                    variant="body5"
                  >
                    Search for all bookings at or after the selected start date
                  </Text>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CloudAdminSearchStarPage;
