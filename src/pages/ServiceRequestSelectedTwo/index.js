import React from "react";

import { Column, Stack, Text, Row, Img, List, Button } from "components";

const ServiceRequestSelectedTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[354px] xl:ml-[442px] 2xl:ml-[498px] 3xl:ml-[597px] lg:mr-[179px] xl:mr-[224px] 2xl:mr-[253px] 3xl:mr-[303px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[46%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
          <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[59%]">
            <Img
              src="images/img_progressbar_light_blue_A700_12X148.svg"
              className="Progressbar7"
              alt="Progressbar"
            />
            <Text className="columnselectroleto" as="h1" variant="h1">
              Add a New Drone
            </Text>
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[32%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Finalize details for the new drone
              </Text>
            </Column>
            <Row className="font-worksans items-start lg:mt-[46px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[82%]">
              <Column className="justify-start w-[43%]">
                <Stack className="lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] w-[100%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="absolute bottom-[0] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] left-[37%] w-[4%]"
                    alt="calendar"
                  />
                  <Img
                    src="images/img_arrowright.svg"
                    className="absolute bottom-[37%] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[14%] w-[4%]"
                    alt="arrowright"
                  />
                  <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[4%] items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[100%]">
                    <Column className="items-center justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Column className="justify-start w-[47%]">
                          <Text
                            className="font-semibold text-gray_700 w-[auto]"
                            variant="body9"
                          >
                            DJI Phantom 4 Pro
                          </Text>
                          <Text className="Surveillance" variant="body10">
                            Surveillance
                          </Text>
                          <Text className="test_3AxisGimbal" variant="body12">
                            3-Axis Gimbal
                          </Text>
                          <Text className="test_27KCamera" variant="body12">
                            4K Camera
                          </Text>
                          <Text className="test_3AxisGimbal" variant="body12">
                            30 Minute Flight Time
                          </Text>
                          <Text className="test_8msFlightSp" variant="body12">
                            13 m/s Flight Speed
                          </Text>
                          <Text className="weight" variant="body12">
                            1374 grams
                          </Text>
                        </Column>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="ghiblifrontUK2"
                          alt="ghiblifrontUK"
                        />
                      </Row>
                      <Column className="font-roboto items-center justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[35%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body3"
                          >
                            $100
                          </Text>
                          <Text className="hour" variant="body6">
                            / hour
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Stack>
                <Text className="columncalendar" variant="body12">
                  Availability
                </Text>
              </Column>
              <Column className="font-roboto items-center justify-start xl:ml-[108px] 2xl:ml-[121px] 3xl:ml-[146px] lg:ml-[86px] w-[40%]">
                <Column className="justify-start w-[100%]">
                  <Column className="items-center justify-start w-[61%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Flight Parameter Specs
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <List
                        className="lg:gap-[5px] xl:gap-[6px] 2xl:gap-[7px] 3xl:gap-[8px] grid grid-cols-2 min-h-[auto] w-[82%]"
                        orientation="horizontal"
                      >
                        <Column className="listflighttime">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body14"
                          >
                            Flight Time
                          </Text>
                          <Text className="duration_Two1" variant="body14">
                            30 minutes
                          </Text>
                        </Column>
                        <Column className="listflighttime">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body14"
                          >
                            Max Speed
                          </Text>
                          <Text className="duration_Two1" variant="body14">
                            P-mode: 8 m/s
                          </Text>
                        </Column>
                      </List>
                      <Column className="border border-gray_303 border-solid lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius10 w-[15%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Max Service Ceiling
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          6000 m
                        </Text>
                      </Column>
                      <Column className="border border-gray_303 border-solid lg:ml-[53px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[1px]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Wind Resistance
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          10 m/s
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Column className="items-center justify-start w-[38%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Camera Specs
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Column className="border border-gray_303 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Sensor
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          1-inch CMOS
                        </Text>
                      </Column>
                      <Column className="border border-gray_303 border-solid lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Lens
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          FOV 84° 8.8 mm/24 mm
                        </Text>
                      </Column>
                      <Column className="border border-gray_303 border-solid lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius10 w-[15%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Operating Range
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          0 - 10 m
                        </Text>
                      </Column>
                      <Column className="border border-gray_303 border-solid lg:ml-[53px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[1px]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body14"
                        >
                          Shutter Speed
                        </Text>
                        <Text className="duration_Two1" variant="body14">
                          8-1/2000 s
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[51%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Image/Video Specs
                    </Text>
                  </Column>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="list4k48643648">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="border border-gray_303 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body14"
                          >
                            Image Resolution
                          </Text>
                          <Text className="duration_Two1" variant="body14">
                            4K: 4864×3648
                          </Text>
                        </Column>
                        <Column className="border border-gray_303 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body14"
                          >
                            Video Resolution
                          </Text>
                          <Text className="duration_Two1" variant="body14">
                            4K: 3840×2160
                          </Text>
                        </Column>
                        <Column className="border border-gray_303 border-solid lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius10 w-[15%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body14"
                          >
                            Recording Rate
                          </Text>
                          <Text className="duration_Two1" variant="body14">
                            60 fps
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
                      <Column className="items-center justify-start w-[83%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body6"
                        >
                          Thermal Sensing System Specs
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Column className="border border-gray_303 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                            <Text
                              className="font-bold text-black_900 w-[auto]"
                              variant="body14"
                            >
                              Sensory Range
                            </Text>
                            <Text className="duration_Two1" variant="body14">
                              0.2 m - 7 m
                            </Text>
                          </Column>
                          <Column className="border border-gray_303 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[40%]">
                            <Text
                              className="font-bold text-black_900 w-[auto]"
                              variant="body14"
                            >
                              FOV
                            </Text>
                            <Text className="duration_Two1" variant="body14">
                              70° Horiz, ±10° Vert
                            </Text>
                          </Column>
                          <Column className="border border-gray_303 border-solid items-center lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius10 w-[15%]">
                            <Text
                              className="font-bold text-black_900 w-[auto]"
                              variant="body14"
                            >
                              Measuring Freq
                            </Text>
                            <Text className="duration_Two1" variant="body14">
                              10 Hz
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Row>
            <Row className="font-inter items-center justify-end ml-[auto] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[87%]">
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="2xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[162px] xl:ml-[203px] 2xl:ml-[229px] 3xl:ml-[275px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="2xl"
                variant="FillBluegray900"
              >
                Confirm
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ServiceRequestSelectedTwoPage;
