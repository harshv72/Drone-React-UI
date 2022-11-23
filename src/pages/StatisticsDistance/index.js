import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Input,
  List,
  Button,
  RadioGroup,
  Radio,
  Line,
  SelectBox,
} from "components";
import { useNavigate } from "react-router-dom";

const StatisticsDistancePage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate45() {
    navigate("/dronearvrtracking");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[275px] xl:pb-[344px] 2xl:pb-[387px] 3xl:pb-[464px] w-[100%]">
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
          <Row className="font-poppins items-center ml-[3px] w-[73%]">
            <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[29%]">
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
              <Input
                className="placeholder:text-white_A700 Group463"
                wrapClassName="2xl:ml-[6px] 2xl:mt-[54px] 3xl:ml-[7px] 3xl:mt-[64px] flex lg:ml-[4px] lg:mt-[38px] w-[98%] xl:ml-[5px] xl:mt-[48px]"
                name="Group526"
                placeholder="Drone Cloud Tracking"
                prefix={
                  <Img
                    src="images/img_icon_24_outline_keysquare.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:ml-[3px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:ml-[4px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[5px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[6px] 3xl:mr-[16px] my-[auto]"
                    alt="icon / 24 / outline / key-square"
                  />
                }
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray900"
              ></Input>
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]">
                <Img
                  src="images/img_airplane.svg"
                  className="call"
                  alt="airplane"
                />
                <Text className="ListMenu8" variant="body12">
                  Drone Catalog
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright27"
                  alt="arrowright"
                />
              </Row>
              <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
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
              <List
                className="gap-[0] min-h-[auto] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]"
                orientation="vertical"
              >
                <Row className="listmusic">
                  <Img
                    src="images/img_music.svg"
                    className="call"
                    alt="music"
                  />
                  <Text className="ListMenu6" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Two3"
                    alt="arrowright Two"
                  />
                </Row>
                <Row className="items-start ml-[2px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[99%]">
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
              </List>
              <Row className="items-start lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[89%]">
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
            </Column>
            <div className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] overflow-x-auto w-[71%]">
              <Column className="justify-start w-[100%]">
                <Text className="SelectRoleto_One6" as="h4" variant="h4">
                  Drone Cloud Tracking Statistics
                </Text>
                <Row className="bg-gray_401 font-worksans items-center lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[72%]">
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillLightblue500"
                  >
                    Fleet Statistics
                  </Button>
                  <Text
                    className="common-pointer rowfleet_statistics_one"
                    variant="body12"
                    onClick={handleNavigate44}
                  >
                    Drone Map Tracking
                  </Text>
                  <Button
                    className="common-pointer font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    onClick={handleNavigate45}
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillBlueA700"
                  >
                    AR/VR Tracking
                  </Button>
                </Row>
                <Text className="Text" variant="body4">
                  Number of Drones By Status
                </Text>
                <Stack className="font-dmsans lg:h-[346px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[93%]">
                  <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-start mx-[auto] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[99%]">
                    <Column className="justify-start lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] 3xl:mb-[90px] w-[70%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        variant="body4"
                      >
                        Number of Drones By Service Type
                      </Text>
                      <RadioGroup
                        className="flex ml-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[64%]"
                        name="radiogrouptext one"
                      >
                        <Radio
                          value="DataCollect"
                          className="font-normal mb-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext one"
                          label="Data Collect"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Surveillance"
                          className="font-normal mb-[2px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext one"
                          label="Surveillance"
                          size="sm"
                          variant="FillRedA702"
                        ></Radio>
                        <Radio
                          value="Payload"
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext one"
                          label="Payload"
                          size="sm"
                          variant="FillDeeppurpleA400"
                        ></Radio>
                      </RadioGroup>
                      <Row className="items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                        <Column className="bg-green_51 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-end px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Column
                            className="bg-cover bg-repeat justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[87%]"
                            style={{
                              backgroundImage: "url('images/img_group469.svg')",
                            }}
                          >
                            <Text className="columnsixtyseven" variant="body5">
                              67%
                            </Text>
                          </Column>
                        </Column>
                        <Stack className="bg-indigo_50 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Text className="FortySix" variant="body5">
                            46%
                          </Text>
                          <Img
                            src="images/img_oval.svg"
                            className="Oval"
                            alt="Oval"
                          />
                        </Stack>
                        <Stack className="bg-orange_50 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                          <Text className="FortySix" variant="body5">
                            15%
                          </Text>
                          <Img
                            src="images/img_signal.svg"
                            className="signal"
                            alt="signal"
                          />
                        </Stack>
                      </Row>
                    </Column>
                  </Column>
                  <Stack className="absolute font-poppins lg:h-[199px] xl:h-[249px] 2xl:h-[280px] 3xl:h-[335px] left-[0] top-[0] w-[91%]">
                    <div className="absolute bg-white_A700 lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] left-[5%] rounded-radius30 shadow-bs7 top-[0] w-[76%]"></div>
                    <Row className="absolute bottom-[0] inset-x-[0] items-start justify-end lg:pb-[58px] xl:pb-[72px] 2xl:pb-[82px] 3xl:pb-[98px] lg:pl-[58px] xl:pl-[72px] 2xl:pl-[82px] 3xl:pl-[98px] w-[100%]">
                      <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[9%]">
                        <Text className="Active" variant="body12">
                          Active
                        </Text>
                        <Text className="One" as="h4" variant="h4">
                          1
                        </Text>
                      </Column>
                      <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[11%]">
                        <Text className="rowedit" variant="body12">
                          Stopped
                        </Text>
                        <Text className="One_One" as="h4" variant="h4">
                          1
                        </Text>
                      </Column>
                      <Column className="justify-start lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[14%]">
                        <Text className="rowedit" variant="body12">
                          Connected
                        </Text>
                        <Text className="One_Two" as="h4" variant="h4">
                          1
                        </Text>
                      </Column>
                      <Column className="justify-start lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[13%]">
                        <Text className="rowedit" variant="body12">
                          Registered
                        </Text>
                        <Text className="Four" as="h4" variant="h4">
                          4
                        </Text>
                      </Column>
                      <Line className="bg-gray_200 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] lg:mb-[55px] xl:mb-[69px] 2xl:mb-[78px] 3xl:mb-[93px] lg:ml-[108px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[1px]" />
                    </Row>
                  </Stack>
                </Stack>
                <Column className="font-poppins justify-start mt-[4px] w-[100%]">
                  <Text className="columnchooseastatis" variant="body3">
                    Choose a statistic to view
                  </Text>
                  <Column className="bg-light_blue_500 font-worksans justify-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[23%]">
                    <Column className="bg-blue_A700 justify-start ml-[2px] mt-[3px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius5 w-[92%]">
                      <Text className="Service" variant="body12">
                        Statistic
                      </Text>
                      <SelectBox
                        className="font-semibold mb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[94%]"
                        placeholderClassName="text-white_A700"
                        name="Group730"
                        placeholder="Flight Distance"
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
                  </Column>
                  <Column className="font-manrope justify-end lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pt-[24px] xl:pt-[31px] 2xl:pt-[35px] 3xl:pt-[42px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-between pr-[4px] pt-[4px] w-[100%]">
                        <Text className="title" variant="body4">
                          Flight Distance: 50km avg
                        </Text>
                        <Img
                          src="images/img_arrowup_bluegray_904.svg"
                          className="arrowup"
                          alt="arrowup"
                        />
                      </Row>
                      <Line className="bg-gray_501 h-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%]" />
                    </Column>
                    <Column className="font-dmsans items-center justify-start w-[77%]">
                      <Column className="bg-white_A700 items-center justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius14 w-[100%]">
                        <Stack className="lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                          <Stack className="absolute lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] w-[100%]">
                            <Stack className="absolute lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] w-[100%]">
                              <Stack className="absolute lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] w-[100%]">
                                <Img
                                  src="images/img_frame48_1.svg"
                                  className="FrameFortyEight"
                                  alt="FrameFortyEight"
                                />
                                <div className="absolute bg-gradient4  lg:h-[124px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] inset-y-[0] left-[44%] my-[auto] rounded-radius10 w-[7%]"></div>
                              </Stack>
                              <Column
                                className="absolute bg-cover bg-repeat bottom-[4%] justify-start lg:p-[33px] xl:p-[41px] 2xl:p-[47px] 3xl:p-[56px] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group470.png')",
                                }}
                              >
                                <Row className="items-center mb-[2px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[44%]">
                                  <Column className="w-[37%]">
                                    <Text
                                      className="font-medium text-gray_604 w-[auto]"
                                      variant="body13"
                                    >
                                      Min Distance
                                    </Text>
                                    <Text className="test_50Km" variant="body6">
                                      10 Km
                                    </Text>
                                  </Column>
                                  <div className="bg-deep_purple_A100 border-bw3 border-solid border-white_A700 xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                                </Row>
                              </Column>
                            </Stack>
                            <Row className="absolute items-center justify-center left-[21%] top-[9%] w-[48%]">
                              <Column className="w-[29%]">
                                <Text
                                  className="font-medium text-gray_604 w-[auto]"
                                  variant="body13"
                                >
                                  Avg Distance
                                </Text>
                                <Text className="test_50Km" variant="body6">
                                  50 Km
                                </Text>
                              </Column>
                              <Column className="xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] w-[30%]">
                                <Text
                                  className="font-medium text-gray_604 w-[auto]"
                                  variant="body13"
                                >
                                  Max Distance
                                </Text>
                                <Text className="test_50Km" variant="body6">
                                  120 Km
                                </Text>
                              </Column>
                            </Row>
                          </Stack>
                          <Row className="absolute bottom-[2%] items-end justify-center left-[24%] w-[17%]">
                            <div className="bg-gradient4  lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] rounded-radius10 w-[40%]"></div>
                            <div className="bg-gradient4  xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] lg:h-[99px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius10 w-[39%]"></div>
                          </Row>
                        </Stack>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[97%]">
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                          <Text
                            className="font-medium text-bluegray_202 w-[auto]"
                            variant="body14"
                          >
                            12/9
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </div>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default StatisticsDistancePage;
