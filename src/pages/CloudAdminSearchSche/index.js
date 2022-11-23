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

const CloudAdminSearchSchePage = () => {
  const navigate = useNavigate();

  function handleNavigate89() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate90() {
    navigate("/dronecatalogmissionp");
  }
  function handleNavigate91() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate92() {
    navigate("/cloudadminsearchstar");
  }
  function handleNavigate96() {
    navigate("/");
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
          <Row className="font-poppins items-start justify-between w-[100%]">
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
                onClick={handleNavigate96}
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
                  onClick={handleNavigate89}
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
            <Column className="font-inter justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[78%]">
              <Column className="justify-start lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[49%]">
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
                    onClick={handleNavigate90}
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Mission Planner
                  </Button>
                  <Text
                    className="common-pointer Group555"
                    variant="body12"
                    onClick={handleNavigate91}
                  >
                    Pilot Management
                  </Text>
                </Row>
                <Text className="SelectRoleto_Two6" as="h1" variant="h1">
                  Booking Schedules
                </Text>
              </Column>
              <Stack className="font-dmsans xl:h-[1137px] 2xl:h-[1279px] 3xl:h-[1535px] lg:h-[909px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Column className="absolute bg-white_A700 justify-start left-[0] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 top-[0] w-[62%]">
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
                <Stack className="absolute bottom-[0] 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] w-[100%]">
                  <Stack className="absolute 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] w-[100%]">
                    <Column className="absolute font-poppins items-center justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Column className="items-center justify-start 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[36%]">
                          <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                            <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[99%]">
                              <Row className="font-poppins items-end justify-between w-[100%]">
                                <Column className="justify-start mb-[1px] w-[21%]">
                                  <Text className="ServiceID4" variant="body12">
                                    Service ID #
                                  </Text>
                                  <Text className="One66" variant="body6">
                                    1000
                                  </Text>
                                </Column>
                                <Column className="bg-lime_50_99 border border-amber_500 border-solid items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[22%]">
                                  <Text
                                    className="columnfinished_one"
                                    variant="body12"
                                  >
                                    Finished
                                  </Text>
                                </Column>
                              </Row>
                              <Text
                                className="font-dmsans columndjiminise2"
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
                        <Column
                          className="bg-cover bg-repeat justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[64%]"
                          style={{
                            backgroundImage: "url('images/img_group400.png')",
                          }}
                        >
                          <Column className="bg-white_A700 border border-bluegray_101 border-solid items-center justify-end lg:ml-[410px] xl:ml-[513px] 2xl:ml-[577px] 3xl:ml-[692px] lg:mr-[40px] xl:mr-[50px] 2xl:mr-[57px] 3xl:mr-[68px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] py-[4px] rounded-radius2 w-[5%]">
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
                          <Stack className="lg:h-[197px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[333px] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[90px] lg:mr-[207px] xl:mr-[259px] 2xl:mr-[292px] 3xl:mr-[350px] lg:mt-[413px] xl:mt-[516px] 2xl:mt-[581px] 3xl:mt-[697px] w-[41%]">
                            <Stack className="absolute bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] right-[0] rounded-radius12 shadow-bs5 top-[18%] w-[91%]">
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
                            <Column className="absolute bg-green_50_99 bottom-[35%] lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] right-[38%] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                              <div className="bg-amber_500 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                            </Column>
                            <Column
                              className="absolute bg-cover bg-repeat justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group568.svg')",
                              }}
                            >
                              <Column className="bg-gradient6  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] items-center justify-start lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[79px] xl:mt-[99px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]">
                                <Text className="Services" variant="body12">
                                  Services
                                </Text>
                                <Text className="One74" as="h4" variant="h4">
                                  1
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                    <Text
                      className="font-dmsans left-[0] top-[5%] tracking-ls1 Addaflightti"
                      variant="body5"
                    >
                      1 Booking Found in Region
                    </Text>
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[13%] rounded-radius15 shadow-bs6 top-[14%] w-[27%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="defaultNoData.png"
                        className="createfromfra_Three"
                        alt="createfromfra"
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
                  <Img
                    src="images/img_ellipse1_147X149.png"
                    className="absolute lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] left-[20%] rounded-radius50 top-[16%] w-[4%]"
                    alt="EllipseOne"
                  />
                </Stack>
                <Column className="absolute font-inter items-center justify-start right-[1%] top-[13%] w-[36%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-bold p-[0] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="GroupTwo"
                    placeholder="Mariposa, CA 95338"
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
                      name="Group712"
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
                    <Column
                      className="common-pointer liststartdate"
                      onClick={handleNavigate92}
                    >
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
                      name="Group714"
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
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CloudAdminSearchSchePage;
