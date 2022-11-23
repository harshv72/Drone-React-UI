import React from "react";

import { Column, Stack, Text, Row, Img, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const DroneDataDataProcessingPage = () => {
  const navigate = useNavigate();

  function handleNavigate107() {
    navigate("/dronedatadataanalysis");
  }
  function handleNavigate108() {
    navigate("/dronedata");
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
          <Row className="font-poppins items-start ml-[3px] mr-[auto] w-[80%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[27%]">
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
            <Column className="font-inter justify-start lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[71%]">
              <Text className="columnselectroleto_one9" as="h4" variant="h4">
                Data Processing
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[66%]">
                <Button
                  className="common-pointer font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                  onClick={handleNavigate108}
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillLightblueA700"
                >
                  Data Collection
                </Button>
                <Text
                  className="bg-light_blue_500 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:pl-[19px] xl:pl-[24px] 2xl:pl-[28px] 3xl:pl-[33px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rowgroup557"
                  variant="body12"
                >
                  Data Processsing
                </Text>
                <Text
                  className="common-pointer bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pl-[17px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] rowdata_collection_one"
                  variant="body12"
                  onClick={handleNavigate107}
                >
                  Data Analysis
                </Text>
              </Row>
              <Column className="font-inter justify-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[97%]">
                <Text
                  className="font-semibold ml-[2px] text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Image Labeling
                </Text>
                <Row className="font-dmsans items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[61%]">
                  <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[68%]">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_14.png"
                        className="Image"
                        alt="Image"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:30 AM
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
                  <Row className="items-start lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[22%]">
                    <Img
                      src="images/img_close_16X14.svg"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] w-[13%]"
                      alt="close"
                    />
                    <Text className="ElementsInfo1" variant="body12">
                      Crop Disease
                    </Text>
                  </Row>
                </Row>
                <Text
                  className="font-semibold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Video Labeling
                </Text>
                <Row className="font-dmsans items-start ml-[2px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[60%]">
                  <Stack className="lg:h-[209px] xl:h-[261px] 2xl:h-[294px] 3xl:h-[352px] w-[69%]">
                    <Stack className="absolute font-dmsans top-[0] listcolor">
                      <div className="bg-white_A700 Color_Three"></div>
                      <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                        <Img
                          src="images/img_image_14.png"
                          className="Image"
                          alt="Image One"
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
                              Frame: 1 / 15, Duration: 15 seconds
                            </span>
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Text
                      className="absolute bottom-[0] left-[5%] rowselectroleto_three1"
                      variant="body5"
                    >
                      LiDAR Ground Filtering
                    </Text>
                  </Stack>
                  <Row className="items-start lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[73px] xl:mt-[91px] w-[23%]">
                    <Img
                      src="images/img_close_16X14.svg"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] w-[13%]"
                      alt="close One"
                    />
                    <Text className="ElementsInfo1" variant="body12">
                      Crop Disease
                    </Text>
                  </Row>
                </Row>
                <Row className="font-dmsans items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[55%]">
                  <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[75%]">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_15.png"
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
                  <Column className="items-center justify-start lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[15%]">
                    <Row className="items-start pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_close_2.svg"
                        className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] my-[1px] w-[22%]"
                        alt="close Two"
                      />
                      <Text className="mt-[4px] ElementsInfo" variant="body12">
                        Crops
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pr-[3px] py-[3px] w-[100%]">
                      <Img
                        src="images/img_close_1.svg"
                        className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] w-[22%]"
                        alt="close Three"
                      />
                      <Text className="ElementsInfo" variant="body12">
                        Soil
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="font-inter items-start justify-between lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[98%]">
                  <Column className="justify-start w-[55%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      variant="body3"
                    >
                      Combine Images - Select Images
                    </Text>
                    <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
                      <Text
                        className="absolute bottom-[2%] font-semibold leading-[normal] text-bluegray_900 w-[100%]"
                        variant="body3"
                      >
                        Combine Images - Apply NDVI: Normalized Difference
                        Vegetation Index
                      </Text>
                      <Stack className="absolute lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] left-[0] w-[80%]">
                        <div className="absolute bg-white_A700 lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] rounded-radius10 top-[0] w-[100%]"></div>
                        <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] inset-x-[0] mx-[auto] top-[0] w-[97%]">
                          <Img
                            src="images/img_image_16.png"
                            className="absolute Image"
                            alt="Image Three"
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack className="font-dmsans lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] ml-[4px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[77%]">
                      <div className="bg-white_A700 Color_Three"></div>
                      <Column className="absolute justify-start w-[100%]">
                        <Img
                          src="images/img_image_17.png"
                          className="Image"
                          alt="Image Four"
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
                  <Column className="justify-start lg:mt-[184px] xl:mt-[231px] 2xl:mt-[260px] 3xl:mt-[312px] w-[42%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      variant="body3"
                    >
                      Combine Images - Result
                    </Text>
                    <Stack className="font-dmsans lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] listcolor">
                      <div className="bg-white_A700 Color_Three"></div>
                      <Column className="absolute justify-start w-[100%]">
                        <Img
                          src="images/img_image_13.png"
                          className="Image"
                          alt="Image Five"
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
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneDataDataProcessingPage;
