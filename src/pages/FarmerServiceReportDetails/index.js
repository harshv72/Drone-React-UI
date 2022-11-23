import React from "react";

import { Column, Stack, Text, Row, Img, Button, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const FarmerServiceReportDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
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
          <Row className="font-poppins items-start justify-between overflow-auto w-[100%]">
            <Sidebar className="w-[21%]" />
            <Column className="font-inter justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[98%]">
              <Stack className="lg:h-[185px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[70%]">
                <Row className="absolute items-start justify-between w-[100%]">
                  <Stack className="lg:h-[184px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] mt-[2px] w-[69%]">
                    <Text
                      className="absolute right-[0] text-bluegray_900 top-[0] w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Service Report ID# 1144
                    </Text>
                    <Text
                      className="absolute bottom-[0] font-light leading-[normal] left-[0] text-bluegray_900 w-[60%]"
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
                      <br />
                      Price: $140
                    </Text>
                  </Stack>
                  <Img
                    src="images/img_ellipse1_147X149.png"
                    className="lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius50 w-[19%]"
                    alt="EllipseOne"
                  />
                </Row>
                <Stack className="absolute bottom-[21%] xl:h-[119px] 2xl:h-[134px] 3xl:h-[160px] lg:h-[95px] right-[18%] w-[38%]">
                  <Text
                    className="absolute font-light leading-[normal] text-bluegray_900 w-[100%]"
                    variant="body5"
                  >
                    <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Farmer Signature
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Not Signed
                      <br />
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Pilot Signature
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Signed on 07/01/22
                    </span>
                  </Text>
                  <Column className="absolute font-poppins justify-start right-[31%] top-[5%] w-[16%]">
                    <Text
                      className="bg-red_300 font-medium pb-[2px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[55px]"
                      variant="body12"
                    >
                      Sign
                    </Text>
                    <Button
                      className="font-medium lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="FillRed300"
                    >
                      View{" "}
                    </Button>
                  </Column>
                </Stack>
              </Stack>
              <Text
                className="font-semibold lg:ml-[265px] xl:ml-[331px] 2xl:ml-[373px] 3xl:ml-[447px] text-bluegray_900 w-[auto]"
                variant="body3"
              >
                Service Results
              </Text>
              <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[73%]">
                <Text
                  className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rowselectroleto_three1"
                  variant="body5"
                >
                  Images
                </Text>
                <Button
                  className="font-medium font-poppins mb-[4px] lg:ml-[359px] xl:ml-[449px] 2xl:ml-[505px] 3xl:ml-[606px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillRed300"
                >
                  View More
                </Button>
                <Text
                  className="lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] mt-[2px] rowselectroleto_three1"
                  variant="body5"
                >
                  Videos
                </Text>
                <Button
                  className="font-medium font-poppins mb-[4px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:ml-[97px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                  shape="RoundedBorder5"
                  size="md"
                  variant="FillRed300"
                >
                  View More
                </Button>
              </Row>
              <Column className="font-dmsans justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <List
                    className="lg:gap-[27px] xl:gap-[33px] 2xl:gap-[38px] 3xl:gap-[45px] grid grid-cols-2 min-h-[auto] w-[49%]"
                    orientation="horizontal"
                  >
                    <Stack className="listcolor">
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
                  <List
                    className="font-poppins lg:gap-[27px] xl:gap-[33px] 2xl:gap-[38px] 3xl:gap-[45px] grid grid-cols-2 min-h-[auto] w-[23%]"
                    orientation="horizontal"
                  >
                    <Stack className="listcolor">
                      <div className="bg-white_A700 Color_Three"></div>
                      <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                        <Column
                          className="bg-cover bg-repeat justify-start lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group97.png')",
                          }}
                        >
                          <Text
                            className="bg-red_300 font-medium lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] pb-[2px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[98px]"
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
                    <Stack className="font-dmsans listcolor">
                      <Img
                        src="images/img_color.png"
                        className="Color_Three"
                        alt="Color Three"
                      />
                      <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                        <Img
                          src="images/img_image_3.png"
                          className="Image"
                          alt="Image Two"
                        />
                        <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                          <Text
                            className="font-medium text-black_901 w-[auto]"
                            variant="body4"
                          >
                            Video from 10:30 AM{" "}
                          </Text>
                          <Text
                            className="font-normal lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-black_900_7e w-[100%]"
                            variant="body12"
                          >
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
                  </List>
                  <div className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[23%]"></div>
                </Row>
                <Stack className="font-inter lg:h-[185px] xl:h-[231px] 2xl:h-[260px] 3xl:h-[311px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[62%]">
                  <Text
                    className="absolute bottom-[0] font-light leading-[normal] left-[0] text-bluegray_900 w-[48%]"
                    variant="body5"
                  >
                    Drone Pilot
                    <br />
                    John Roland
                    <br />
                    (912) 665-8621
                  </Text>
                  <Row className="absolute items-start justify-between left-[1%] top-[0] w-[35%]">
                    <Img
                      src="images/img_ellipse2_72X73.png"
                      className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius50 w-[24%]"
                      alt="EllipseTwo"
                    />
                    <Column className="justify-start w-[39%]">
                      <Text className="rowselectroleto_three1" variant="body5">
                        Mission Plan
                      </Text>
                      <Button
                        className="font-medium font-poppins lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[80%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="FillRed300"
                      >
                        View More
                      </Button>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_trackingdashbo.png"
                    className="absolute lg:h-[174px] xl:h-[218px] 2xl:h-[245px] 3xl:h-[293px] right-[0] top-[0] w-[56%]"
                    alt="TrackingDashbo"
                  />
                </Stack>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerServiceReportDetailsPage;
