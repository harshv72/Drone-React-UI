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
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const DroneARVRTrackingPage = () => {
  const navigate = useNavigate();

  function handleNavigate85() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate86() {
    navigate("/admindashboarddronet");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[104px] xl:pb-[130px] 2xl:pb-[147px] 3xl:pb-[176px] w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] w-[95%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[22%]">
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
                name="Group406"
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
            <Column className="font-inter justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[77%]">
              <Text
                className="lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                AR/VR Tracking
              </Text>
              <Column className="font-worksans justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[98%]">
                <Row className="bg-gray_401 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[52%]">
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Fleet Statistics
                  </Button>
                  <Text
                    className="common-pointer bg-light_blue_A700 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowgroup557"
                    variant="body12"
                    onClick={handleNavigate85}
                  >
                    Drone Map Tracking
                  </Text>
                  <Button
                    className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillLightblue500"
                  >
                    AR/VR Tracking
                  </Button>
                </Row>
                <Row className="font-inter items-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[93%]">
                  <Text
                    className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    VR View
                  </Text>
                  <Text
                    className="2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[349px] xl:ml-[436px] 2xl:ml-[491px] 3xl:ml-[589px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Selected Drone: ID # 1
                  </Text>
                </Row>
                <Row className="font-inter items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                  <Stack className="bg-white_A700 2xl:h-[1002px] 3xl:h-[1202px] lg:h-[712px] xl:h-[891px] w-[55%]">
                    <Img
                      src="images/img_group30.png"
                      className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] left-[0] top-[37%] w-[1px]"
                      alt="GroupThirty"
                    />
                    <Column
                      className="absolute bg-cover bg-repeat bottom-[0] justify-end 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group412.png')",
                      }}
                    >
                      <Column className="justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[123px] 2xl:mt-[139px] 3xl:mt-[166px] lg:mt-[98px] w-[78%]">
                        <Column className="bg-white_A700 justify-start xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius2111 shadow-bs11 w-[100%]">
                          <Column className="justify-start lg:ml-[120px] xl:ml-[150px] 2xl:ml-[169px] 3xl:ml-[202px] rounded-radius123 w-[28%]">
                            <Text
                              className="font-bold text-lime_500 tracking-ls1 w-[auto]"
                              variant="body12"
                            >
                              Nearest Street Address
                            </Text>
                            <Text
                              className="test_3BirrelAvenue"
                              as="h2"
                              variant="h2"
                            >
                              3 Birrel Avenue
                            </Text>
                          </Column>
                          <Row className="items-start justify-end lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[auto] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[27%]">
                            <Img
                              src="images/img_location_15X13.svg"
                              className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[3px] w-[12%]"
                              alt="location"
                            />
                            <Text
                              className="mb-[1px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] text-gray_404 tracking-ls1 w-[auto]"
                              variant="body7"
                            >
                              10 Mtr Left
                            </Text>
                          </Row>
                        </Column>
                        <div className="bg-black_900_0c lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] rounded-radius308 w-[64%]"></div>
                      </Column>
                    </Column>
                    <Column
                      className="absolute bg-cover bg-repeat justify-end lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group411.png')",
                      }}
                    >
                      <Row className="items-center lg:mb-[20px] xl:mb-[25px] 2xl:mb-[29px] 3xl:mb-[34px] mr-[auto] 3xl:mt-[1016px] lg:mt-[602px] xl:mt-[753px] 2xl:mt-[847px] w-[79%]">
                        <Stack className="bg-white_A700_ce lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius10 w-[38%]">
                          <Img
                            src="images/img_offer_29X97.svg"
                            className="absolute lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] inset-[0] justify-center m-[auto] w-[63%]"
                            alt="offer One"
                          />
                        </Stack>
                        <Stack className="bg-bluegray_902 lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius16 shadow-bs11 w-[37%]">
                          <Img
                            src="images/img_close_24X29.svg"
                            className="absolute bottom-[0] lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] inset-x-[0] mx-[auto] w-[20%]"
                            alt="close"
                          />
                        </Stack>
                      </Row>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[490px] xl:h-[613px] 2xl:h-[690px] 3xl:h-[828px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[39%]">
                    <Stack className="absolute lg:h-[389px] xl:h-[486px] 2xl:h-[547px] 3xl:h-[656px] inset-x-[0] top-[0] w-[100%]">
                      <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[99%]">
                        <Column className="bg-gray_201 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                          <Row className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]">
                            <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                              <Column className="justify-start pt-[2px] w-[97%]">
                                <Column className="font-cabin items-center justify-start w-[100%]">
                                  <Text
                                    className="columndroneid"
                                    variant="body12"
                                  >
                                    Drone ID #
                                  </Text>
                                </Column>
                                <Text className="columnone" variant="body6">
                                  1
                                </Text>
                              </Column>
                              <Text
                                className="columndjiminise2"
                                variant="body12"
                              >
                                DJI Mini SE
                              </Text>
                            </Column>
                            <Img
                              src="images/img_group87174.png"
                              className="ghiblifrontUK_Four"
                              alt="ghiblifrontUK"
                            />
                            <Button
                              className="font-medium font-poppins lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[23%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="OutlineTeal500"
                            >
                              Active
                            </Button>
                          </Row>
                        </Column>
                        <Column className="items-center justify-start w-[90%]">
                          <Line className="bg-gray_203 h-[1px] w-[100%]" />
                          <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                        <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[99%]">
                          <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[94%]">
                            <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                              <Column className="justify-start pt-[2px] w-[97%]">
                                <Column className="font-cabin items-center justify-start w-[100%]">
                                  <Text
                                    className="columndroneid"
                                    variant="body12"
                                  >
                                    Drone ID #
                                  </Text>
                                </Column>
                                <Text className="One66" variant="body6">
                                  2
                                </Text>
                              </Column>
                              <Text
                                className="columndjiminise2"
                                variant="body12"
                              >
                                DJI Mini SE
                              </Text>
                            </Column>
                            <Img
                              src="images/img_group87174.png"
                              className="ghiblifrontUK_Five"
                              alt="ghiblifrontUK One"
                            />
                            <Text className="rowdroneid_one" variant="body12">
                              Registered
                            </Text>
                          </Row>
                        </Column>
                        <Line className="bg-gray_203 h-[1px] mt-[1px] w-[89%]" />
                        <Stack className="lg:h-[186px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                          <Line className="absolute bg-gray_203 h-[1px] inset-x-[0] mx-[auto] top-[45%] w-[90%]" />
                          <Column className="absolute items-center justify-start w-[100%]">
                            <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                              <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                                <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                                  <Column className="justify-start w-[97%]">
                                    <Text className="DroneID3" variant="body12">
                                      Drone ID #
                                    </Text>
                                    <Text className="One66" variant="body6">
                                      3
                                    </Text>
                                  </Column>
                                  <Text
                                    className="columndjiminise2"
                                    variant="body12"
                                  >
                                    DJI Mini SE
                                  </Text>
                                </Column>
                                <Img
                                  src="images/img_group87174.png"
                                  className="ghiblifrontUK_Five"
                                  alt="ghiblifrontUK Two"
                                />
                                <Button
                                  className="font-medium font-poppins lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[23%]"
                                  shape="RoundedBorder5"
                                  size="md"
                                  variant="OutlineRedA702"
                                >
                                  Stopped
                                </Button>
                              </Row>
                            </Column>
                            <Column className="items-center justify-start mt-[1px] w-[90%]">
                              <Line className="bg-gray_203 h-[1px] w-[100%]" />
                              <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Column>
                    </Stack>
                    <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[99%]">
                      <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                        <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                          <Column className="font-dmsans justify-start mt-[3px] w-[24%]">
                            <Column className="justify-start ml-[1px] w-[84%]">
                              <Text className="DroneID3" variant="body12">
                                Drone ID #
                              </Text>
                              <Text className="One66" variant="body6">
                                4
                              </Text>
                            </Column>
                            <Text className="columndjiminise2" variant="body12">
                              DJI Phantom
                            </Text>
                          </Column>
                          <Img
                            src="images/img_ghiblifrontuk.png"
                            className="ghiblifrontUK_Seven"
                            alt="ghiblifrontUK Three"
                          />
                          <Text className="rowdroneid_three" variant="body12">
                            Connected
                          </Text>
                        </Row>
                      </Column>
                      <Column className="items-center justify-start mt-[1px] w-[90%]">
                        <Line className="bg-gray_203 h-[1px] w-[100%]" />
                        <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                      </Column>
                    </Column>
                  </Stack>
                </Row>
              </Column>
              <Button
                className="common-pointer font-medium lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[27%]"
                onClick={handleNavigate86}
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneARVRTrackingPage;
