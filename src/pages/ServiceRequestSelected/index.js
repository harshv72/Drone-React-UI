import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  SelectBox,
  List,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestSelectedPage = () => {
  const navigate = useNavigate();

  function handleNavigate171() {
    navigate("/servicerequestestimated");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] w-[100%]"
        onClick={handleNavigate171}
      >
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
              src="images/img_progressbar_6.svg"
              className="Progressbar7"
              alt="Progressbar"
            />
            <Text className="columnselectroleto" as="h1" variant="h1">
              Selected Drone
            </Text>
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[26%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                This is your selected drone
              </Text>
            </Column>
            <Row className="font-poppins items-center lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[73%]">
              <Column className="w-[49%]">
                <Column className="items-center justify-start w-[55%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Drone Information
                  </Text>
                </Column>
                <Stack className="font-worksans lg:h-[160px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]">
                  <Img
                    src="images/img_arrowright.svg"
                    className="absolute bottom-[15%] 3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] left-[14%] w-[4%]"
                    alt="arrowright"
                  />
                  <Column className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[100%]">
                    <Column className="justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Column className="justify-start w-[46%]">
                          <Text
                            className="font-semibold text-gray_700 w-[auto]"
                            variant="body9"
                          >
                            DJI Phantom 4 Pro
                          </Text>
                          <Text className="Surveillance" variant="body10">
                            Surveillance
                          </Text>
                          <Text className="ID11" variant="body12">
                            ID #2
                          </Text>
                          <Text className="duration3" variant="body12">
                            3-Axis Gimbal
                          </Text>
                          <Text className="test_27KCamera1" variant="body12">
                            4K Camera
                          </Text>
                          <Text className="duration3" variant="body12">
                            30 Minute Flight Time
                          </Text>
                          <Text className="test_6LminSprayR" variant="body12">
                            13 m/s Flight Speed
                          </Text>
                          <Text className="test_13msFlightS" variant="body12">
                            1374 grams
                          </Text>
                        </Column>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="ghiblifrontUK2"
                          alt="ghiblifrontUK"
                        />
                      </Row>
                      <Row className="font-roboto items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[94%]">
                        <Row className="items-center justify-between w-[37%]">
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
                        <SelectBox
                          className="font-bold lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-white_A700 w-[49%]"
                          placeholderClassName="text-white_A700"
                          name="CTA"
                          placeholder="Selected"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowright_white_A700.svg"
                              className="lg:w-[15px] lg:h-[16px] lg:mr-[15px] xl:w-[18px] xl:h-[19px] xl:mr-[19px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[22px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[26px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGreen400"
                        ></SelectBox>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
                <Column className="font-poppins items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[37%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Date & Time
                  </Text>
                </Column>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-black_901 w-[40%]"
                  variant="body12"
                >
                  29/06/2022
                  <br />
                  Duration: 12 Months
                </Text>
                <Column className="font-poppins items-center justify-start ml-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[25%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Location
                  </Text>
                </Column>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic text-black_901 w-[73%]"
                  variant="body12"
                >
                  3671 Old Toll Road, Mariposa, CA 95338 <br />
                  East Plot D: Livestock
                </Text>
              </Column>
              <Column className="font-roboto items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] w-[45%]">
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
            <Row className="font-inter items-center justify-end ml-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[87%]">
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[162px] xl:ml-[203px] 2xl:ml-[229px] 3xl:ml-[275px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ServiceRequestSelectedPage;
