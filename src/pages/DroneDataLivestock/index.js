import React from "react";

import { Column, Stack, Text, Row, Img, List, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const DroneDataLivestockPage = () => {
  const navigate = useNavigate();

  function handleNavigate70() {
    navigate("/dronedata");
  }
  function handleNavigate77() {
    navigate("/dronedatalivestockda");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="justify-end w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] mr-[auto] w-[76%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[28%]">
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
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
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
              <Column className="bg-bluegray_900 items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-center my-[3px] w-[99%]">
                  <Img
                    src="images/img_walletmoney2.svg"
                    className="call"
                    alt="walletmoneyTwo"
                  />
                  <Text className="ListMenu10" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright_Two3"
                    alt="arrowright Two"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[90%]"
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
            <Column className="font-inter justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[69%]">
              <Text
                className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Drone Data
              </Text>
              <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                <Row className="bg-gray_401 font-worksans items-center ml-[1px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[71%]">
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillLightblue500"
                  >
                    Data Collection
                  </Button>
                  <Text
                    className="common-pointer bg-light_blue_A700 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[14px] xl:pb-[18px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowgroup557"
                    variant="body12"
                    onClick={handleNavigate77}
                  >
                    Data Processsing
                  </Text>
                  <Text
                    className="bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] lg:py-[9px] rowdata_collection_one"
                    variant="body12"
                  >
                    Data Analysis
                  </Text>
                </Row>
                <Stack className="font-inter lg:h-[298px] xl:h-[372px] 2xl:h-[419px] 3xl:h-[502px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[92%]">
                  <Stack className="absolute lg:h-[298px] xl:h-[372px] 2xl:h-[419px] 3xl:h-[502px] left-[0] w-[59%]">
                    <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="text-bluegray_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Drone ID # 4
                        </Text>
                        <Text
                          className="font-light leading-[normal] ml-[4px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_900 w-[99%]"
                          variant="body5"
                        >
                          Service Details
                          <br />
                          ID# 1000
                          <br />
                          Status: Finished
                          <br />
                          Service Type: Subscription - Surveillance
                          <br />
                          Time Start: 06/24/2022, 10:00 am
                          <br />
                          Time End: 06/24/2022, 5:00 pm
                          <br />
                          Land: East Plot D - Livestock
                          <br />
                          Drone ID #4: DJI Phantom Pro
                        </Text>
                      </Column>
                    </Column>
                    <Column className="absolute font-dmsans justify-start left-[0] top-[0] w-[92%]">
                      <Column
                        className="common-pointer bg-white_A700 border-2 border-deep_purple_A400 border-solid items-end justify-start p-[1px] rounded-radius12 shadow-bs5 w-[69%]"
                        onClick={handleNavigate70}
                      >
                        <Row className="items-start justify-end lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] ml-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[93%]">
                          <Column className="lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                            <Column className="justify-start w-[97%]">
                              <Text className="DroneID3" variant="body12">
                                Drone ID #
                              </Text>
                              <Text className="One66" variant="body6">
                                1
                              </Text>
                            </Column>
                            <Text className="columndjiminise2" variant="body12">
                              DJI Mini SE
                            </Text>
                          </Column>
                          <Img
                            src="images/img_group87174.png"
                            className="lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[60%]"
                            alt="ghiblifrontUK"
                          />
                        </Row>
                      </Column>
                      <Line className="bg-gray_203 h-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[100px] xl:mt-[126px] 2xl:mt-[142px] 3xl:mt-[170px] w-[95%]" />
                    </Column>
                  </Stack>
                  <Column className="absolute font-dmsans justify-start right-[0] top-[0] w-[55%]">
                    <Column className="bg-gray_201 border-2 border-deep_purple_A400 border-solid items-end justify-start p-[3px] rounded-radius12 shadow-bs5 w-[69%]">
                      <Row className="items-start justify-end xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] ml-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[93%]">
                        <Column className="justify-start mt-[3px] w-[34%]">
                          <Column className="justify-start ml-[1px] w-[84%]">
                            <Text className="DroneID3" variant="body12">
                              Drone ID #
                            </Text>
                            <Text className="One66" variant="body6">
                              4
                            </Text>
                          </Column>
                          <Text className="columndjiphantom1" variant="body12">
                            DJI Phantom
                          </Text>
                        </Column>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[60%]"
                          alt="ghiblifrontUK One"
                        />
                      </Row>
                    </Column>
                    <Line className="bg-white_A700 h-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[100px] xl:mt-[126px] 2xl:mt-[142px] 3xl:mt-[170px] w-[95%]" />
                  </Column>
                </Stack>
                <Text
                  className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rowselectroleto_three1"
                  variant="body3"
                >
                  Data Collection
                </Text>
                <Text
                  className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rowselectroleto_three1"
                  variant="body5"
                >
                  Images
                </Text>
                <List
                  className="font-dmsans lg:gap-[45px] xl:gap-[56px] 2xl:gap-[64px] 3xl:gap-[76px] grid grid-cols-2 min-h-[auto] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[16px] xl:mr-[20px] 2xl:mr-[23px] 3xl:mr-[27px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[95%]"
                  orientation="horizontal"
                >
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="Image"
                        alt="Image"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:00 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            (37.558381,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_8.png"
                        className="Image"
                        alt="Image One"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:15 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            (37.558400,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                </List>
                <Text
                  className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[1px] rowselectroleto_three1"
                  variant="body3"
                >
                  Infrared Images
                </Text>
                <List
                  className="font-dmsans lg:gap-[45px] xl:gap-[56px] 2xl:gap-[64px] 3xl:gap-[76px] grid grid-cols-2 min-h-[auto] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] lg:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[95%]"
                  orientation="horizontal"
                >
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="Image"
                        alt="Image Two"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:00 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            (37.558381,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="Image"
                        alt="Image Three"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:15 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            (37.558400,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                </List>
                <Text
                  className="font-semibold SelectRoleto_One6"
                  variant="body3"
                >
                  Videos
                </Text>
                <Row className="font-dmsans items-center justify-end ml-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[95%]">
                  <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[46%]">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                      <Img
                        src="images/img_image_9.png"
                        className="Image"
                        alt="Image Four"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Video at 10:00 AM
                        </Text>
                        <Text className="duration9" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            (37.558381,-122.048111)
                            <br />
                            Duration: 15 seconds
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <div className="bg-white_A700 lg:h-[190px] xl:h-[238px] 2xl:h-[268px] 3xl:h-[321px] lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] rounded-radius10 w-[45%]"></div>
                </Row>
                <Stack className="font-poppins lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] xl:mt-[104px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[83px] w-[39%]">
                  <Stack className="absolute lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] left-[0] w-[71%]">
                    <Text
                      className="absolute font-inter font-semibold leading-[normal] text-bluegray_900 w-[100%]"
                      variant="body5"
                    >
                      Videos
                    </Text>
                    <Text
                      className="absolute bg-red_300 bottom-[3%] font-medium font-poppins left-[1%] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] py-[2px] rounded-radius5 text-white_A700 w-[98px]"
                      variant="body12"
                    >
                      Play Video
                    </Text>
                  </Stack>
                  <Text
                    className="absolute bg-red_300 font-medium xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] py-[2px] right-[0] rounded-radius5 text-white_A700 top-[30%] w-[97px]"
                    variant="body12"
                  >
                    View More
                  </Text>
                </Stack>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneDataLivestockPage;
