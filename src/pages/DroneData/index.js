import React from "react";

import { Column, Stack, Text, Row, Img, Button, Line, List } from "components";
import { useNavigate } from "react-router-dom";

const DroneDataPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/dronedatadataprocessing");
  }
  function handleNavigate22() {
    navigate("/dronedatadataanalysis");
  }
  function handleNavigate23() {
    navigate("/dronedatalivestock");
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
          <Row className="font-poppins items-start ml-[3px] mr-[auto] w-[74%]">
            <aside className="w-[29%]">
              <div className="">
                <Column className="justify-start lg:mb-[514px] xl:mb-[643px] 2xl:mb-[723px] 3xl:mb-[868px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mr-[17px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[83%]">
                  <Row className="items-center w-[77%]">
                    <Img
                      src="images/img_offer.svg"
                      className="offer3"
                      alt="offer"
                    />
                    <Text className="rowoffer1" variant="body1">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[74%]">
                    <Img
                      src="images/img_call.svg"
                      className="call"
                      alt="call"
                    />
                    <Text className="ListMenu21" variant="body12">
                      Drone Cloud Tracking
                    </Text>
                  </Row>
                  <Row className="items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[91%]">
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
                  <Row className="items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[91%]">
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
                  <Column className="bg-bluegray_900 items-center justify-start ml-[3px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[99%]">
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
                  <Row className="items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[91%]">
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
                  <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[91%]">
                    <Img
                      src="images/img_user.svg"
                      className="call"
                      alt="user"
                    />
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
              </div>
            </aside>
            <Column className="font-inter justify-start lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[68%]">
              <Text className="columnselectroleto_one9" as="h4" variant="h4">
                Drone Data
              </Text>
              <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                <Row className="bg-gray_401 font-worksans items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[74%]">
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillLightblue500"
                  >
                    Data Collection
                  </Button>
                  <Text
                    className="common-pointer bg-light_blue_A700 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] pt-[3px] rowgroup557"
                    variant="body12"
                    onClick={handleNavigate21}
                  >
                    Data Processsing
                  </Text>
                  <Text
                    className="common-pointer bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rowdata_collection_one"
                    variant="body12"
                    onClick={handleNavigate22}
                  >
                    Data Analysis
                  </Text>
                </Row>
                <Stack className="font-inter lg:h-[293px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[495px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                  <Stack className="absolute lg:h-[293px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[495px] left-[0] w-[59%]">
                    <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="text-bluegray_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Drone ID # 1
                        </Text>
                        <Text
                          className="font-light leading-[normal] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[97%]"
                          variant="body5"
                        >
                          Service Details
                          <br />
                          ID# 1144
                          <br />
                          Status: Finished
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
                      </Column>
                    </Column>
                    <Column className="absolute font-dmsans justify-start right-[3%] top-[0] w-[90%]">
                      <Column className="bg-gray_201 border-2 border-deep_purple_A400 border-solid items-end justify-start p-[1px] rounded-radius12 shadow-bs5 w-[69%]">
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
                  <Column className="absolute font-dmsans justify-start right-[0] top-[0] w-[53%]">
                    <Column
                      className="common-pointer bg-white_A700 border-2 border-deep_purple_A400 border-solid items-end justify-start p-[3px] rounded-radius12 shadow-bs5 w-[69%]"
                      onClick={handleNavigate23}
                    >
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
                  className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowselectroleto_three1"
                  variant="body3"
                >
                  Data Collection
                </Text>
                <Row className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[42%]">
                  <Text className="rowselectroleto_three1" variant="body5">
                    Images
                  </Text>
                  <Button
                    className="font-medium font-poppins xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillRed300"
                  >
                    View More
                  </Button>
                </Row>
                <Stack className="font-inter lg:h-[418px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]">
                  <Text
                    className="absolute font-semibold h-[max-content] inset-y-[0] left-[3%] my-[auto] text-bluegray_900 w-[auto]"
                    variant="body5"
                  >
                    Videos
                  </Text>
                  <Column className="absolute font-dmsans items-center justify-end w-[100%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-start justify-between lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[99%]">
                        <Stack className="lg:h-[210px] xl:h-[262px] 2xl:h-[295px] 3xl:h-[354px] w-[46%]">
                          <Stack className="absolute font-dmsans top-[0] listcolor">
                            <div className="bg-white_A700 Color_Three"></div>
                            <Column className="absolute justify-start w-[100%]">
                              <Img
                                src="images/img_image.png"
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
                                <Text
                                  className="language_One4"
                                  variant="body12"
                                >
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
                          <Button
                            className="absolute bottom-[0] font-medium font-poppins right-[2%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="FillRed300"
                          >
                            View More
                          </Button>
                        </Stack>
                        <Row className="items-center justify-between overflow-auto w-[46%]">
                          <Stack className="listcolor">
                            <div className="bg-white_A700 Color_Three"></div>
                            <Column className="absolute justify-start w-[100%]">
                              <Img
                                src="images/img_image_160X326.png"
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
                                <Text
                                  className="language_One4"
                                  variant="body12"
                                >
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
                          <Stack className="listcolor">
                            <Img
                              src="images/img_color_267X324.png"
                              className="Color_Three"
                              alt="Color Two"
                            />
                            <Column className="absolute justify-start w-[100%]">
                              <Img
                                src="images/img_image_10.png"
                                className="Image"
                                alt="Image Two"
                              />
                              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                                <Text
                                  className="font-medium text-black_901 w-[auto]"
                                  variant="body4"
                                >
                                  Image at 10:30 AM
                                </Text>
                                <Text
                                  className="language_One4"
                                  variant="body12"
                                >
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
                        </Row>
                      </Row>
                      <Row className="font-poppins items-start justify-between lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
                        <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[45%]">
                          <div className="bg-white_A700 Color_Three"></div>
                          <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                            <Column
                              className="bg-cover bg-repeat items-center justify-end lg:p-[38px] xl:p-[48px] 2xl:p-[54px] 3xl:p-[64px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group97.png')",
                              }}
                            >
                              <Text
                                className="bg-red_300 font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] pb-[2px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[98px]"
                                variant="body12"
                              >
                                Play Video
                              </Text>
                            </Column>
                            <Column className="font-dmsans justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                              <Text
                                className="font-medium text-black_901 w-[auto]"
                                variant="body4"
                              >
                                Video from 10:00 AM{" "}
                              </Text>
                              <Text className="duration9" variant="body12">
                                <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                  Location:{" "}
                                </span>
                                <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                  {" "}
                                  (37.558400,-122.048111)
                                  <br />
                                  Duration: 15 seconds
                                </span>
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                        <Row className="font-dmsans items-center justify-between xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] overflow-auto w-[45%]">
                          <Stack className="listcolor">
                            <div className="bg-white_A700 Color_Three"></div>
                            <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                              <Img
                                src="images/img_image.png"
                                className="Image"
                                alt="Image One"
                              />
                              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                                <Text
                                  className="font-medium text-black_901 w-[auto]"
                                  variant="body4"
                                >
                                  Video from 10:30 AM{" "}
                                </Text>
                                <Text className="duration9" variant="body12">
                                  <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                    Location:{" "}
                                  </span>
                                  <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                    {" "}
                                    (37.558400,-122.048111)
                                    <br />
                                    Duration: 15 seconds
                                  </span>
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                          <Stack className="listcolor">
                            <Img
                              src="images/img_color_1.png"
                              className="Color_Three"
                              alt="Color Two One"
                            />
                            <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                              <Img
                                src="images/img_image_11.png"
                                className="Image"
                                alt="Image One One"
                              />
                              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                                <Text
                                  className="font-medium text-black_901 w-[auto]"
                                  variant="body4"
                                >
                                  Video from 10:30 AM
                                </Text>
                                <Text className="duration9" variant="body12">
                                  <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                    Location:{" "}
                                  </span>
                                  <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                    (37.558400,-122.048111)
                                    <br />
                                    Duration: 15 seconds
                                  </span>
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                        </Row>
                      </Row>
                    </List>
                  </Column>
                </Stack>
                <Row className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[38%]">
                  <Text className="rowselectroleto_three1" variant="body5">
                    LiDAR
                  </Text>
                  <Button
                    className="font-medium font-poppins xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[35%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillRed300"
                  >
                    View More
                  </Button>
                </Row>
                <Stack className="font-inter lg:h-[210px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[60%]">
                  <Text
                    className="absolute bottom-[0] font-semibold inset-x-[0] mx-[auto] text-bluegray_900 w-[max-content]"
                    variant="body5"
                  >
                    Combined Near Infrared Images of Crop Field{" "}
                  </Text>
                  <Stack className="absolute font-dmsans lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] left-[0] top-[0] w-[75%]">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_12.png"
                        className="Image"
                        alt="Image Two"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Point Cloud at 10:00 AM
                        </Text>
                        <Text
                          className="font-normal lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-black_900_7e w-[auto]"
                          variant="body12"
                        >
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
                </Stack>
                <Stack className="font-dmsans lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] ml-[3px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[45%]">
                  <div className="bg-white_A700 Color_Three"></div>
                  <Column className="absolute justify-start w-[100%]">
                    <Img
                      src="images/img_image_13.png"
                      className="Image"
                      alt="Image Three"
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
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneDataPage;
