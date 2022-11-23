import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const BillingSurveillancePage = () => {
  const navigate = useNavigate();

  function handleNavigate139() {
    navigate("/farmerdashboard");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[36px] xl:pb-[45px] 2xl:pb-[51px] 3xl:pb-[61px] w-[100%]">
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
        <Column className="justify-start lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[68%]">
          <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
            Service ID# 1222 Bill
          </Text>
          <Stack className="font-worksans lg:h-[399px] xl:h-[499px] 2xl:h-[561px] 3xl:h-[673px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end left-[1%] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[40px] rounded-tr-[40px] w-[89%]">
              <Column className="justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[97%]">
                <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[48%]">
                  <Text
                    className="font-semibold text-gray_800 w-[auto]"
                    variant="body6"
                  >
                    Summary
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] text-gray_800 w-[auto]"
                    variant="body6"
                  >
                    Service ID# 1222, Drone ID #2
                  </Text>
                </Row>
                <Row className="items-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                  <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] mt-[4px] w-[17%]">
                    <Stack className="absolute lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] inset-x-[7%] w-[85%]">
                      <Text className="Car3" variant="body9">
                        Car
                      </Text>
                      <div className="absolute bg-white_A700 border border-gray_300 border-solid lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius6 w-[100%]"></div>
                    </Stack>
                    <Img
                      src="images/img_ghiblifrontuk.png"
                      className="ghiblifrontUK4"
                      alt="ghiblifrontUK"
                    />
                  </Stack>
                  <Column className="justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[39%]">
                    <Text className="DJIMiniSE1" variant="body9">
                      DJI Phantom 4 Pro
                    </Text>
                    <Text className="DataCollection2" variant="body12">
                      Surveillance
                    </Text>
                    <Row className="items-start mt-[3px] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="location"
                        alt="location"
                      />
                      <Text className="rowlocation1" variant="body12">
                        3671 Old Toll Road, Mariposa, CA 95338 <br />
                        East Plot D: Livestock
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] p-[3px] rounded-radius6 w-[15%]">
                    <Img
                      src="images/img_ellipse2_72X73.png"
                      className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] mb-[1px] rounded-radius50 w-[63%]"
                      alt="EllipseTwo"
                    />
                  </Column>
                  <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[19%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body9"
                    >
                      Drone Pilot
                    </Text>
                    <Text className="JohnRoland" variant="body12">
                      John Roland
                    </Text>
                    <Text className="LicenseFAEightyOne" variant="body12">
                      License #: FA817G7834
                    </Text>
                    <Text className="Phone0912665" variant="body12">
                      Phone: 0912 665 8621
                    </Text>
                  </Column>
                </Row>
                <Column className="justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] w-[97%]">
                  <Column className="items-center justify-start w-[55%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start justify-end ml-[auto] w-[68%]">
                        <Img
                          src="images/img_calendar_15X14.svg"
                          className="calendar4"
                          alt="calendar"
                        />
                        <Text className="rowcalendar" variant="body12">
                          06/29/2022 to 06/29/2023 - 12 months
                        </Text>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mr-[103px] 3xl:mr-[123px] lg:mr-[73px] xl:mr-[91px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[76%]" />
                    </Column>
                  </Column>
                  <Column className="bg-gray_202 justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[100%]">
                    <Column className="items-center justify-start my-[3px] w-[92%]">
                      <Column className="justify-start w-[99%]">
                        <Row className="items-start w-[67%]">
                          <Text
                            className="font-semibold text-gray_800 w-[auto]"
                            variant="body12"
                          >
                            Drone Base Cost
                          </Text>
                          <Text className="price" variant="body14">
                            $100
                          </Text>
                          <Text className="Materials1" variant="body12">
                            Materials
                          </Text>
                        </Row>
                        <Line className="bg-gray_403 h-[1px] ml-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[42%]" />
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="rowhourlyflights1" variant="body12">
                            Hourly Flights Per Day
                          </Text>
                          <Column className="items-center justify-start w-[42%]">
                            <Row className="items-center justify-between w-[97%]">
                              <Text
                                className="font-medium text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                (None)
                              </Text>
                              <Text
                                className="font-medium text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                $0
                              </Text>
                            </Row>
                            <Line className="bg-gray_403 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                          </Column>
                        </Row>
                        <Row className="items-start ml-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[68%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            variant="body14"
                          >
                            1x 10:00 AM - 1:00 PM PST Flight: Half day
                          </Text>
                          <Text
                            className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] text-gray_800 w-[auto]"
                            variant="body14"
                          >
                            $10
                          </Text>
                          <Text className="Equipment1" variant="body12">
                            Equipment
                          </Text>
                        </Row>
                        <Row className="items-start justify-end ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                          <Text className="time_One" variant="body14">
                            1x 8:00 PM - 10:00 PM Flight: Nighttime
                          </Text>
                          <Text
                            className="lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] time_One"
                            variant="body14"
                          >
                            $10
                          </Text>
                          <Text className="language_One3" variant="body14">
                            1x Thermal Camera{" "}
                          </Text>
                          <Text className="price_Four1" variant="body14">
                            $20
                          </Text>
                        </Row>
                      </Column>
                      <Row className="items-start justify-between w-[100%]">
                        <Column className="justify-start w-[44%]">
                          <Line className="bg-gray_403 h-[1px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[96%]" />
                          <Text
                            className="ml-[4px] columnlinefive"
                            variant="body12"
                          >
                            Hourly Service Operations Per Day
                          </Text>
                          <Row className="items-center justify-between lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[93%]">
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              1x Surveilance - Livestock Behavior{" "}
                            </Text>
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              $10
                            </Text>
                          </Row>
                          <Row className="items-center justify-between lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[3px] w-[93%]">
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              1x Surveillance - Anomaly Detection{" "}
                            </Text>
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              $10
                            </Text>
                          </Row>
                          <Line className="bg-gray_403 h-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[96%]" />
                          <Text
                            className="font-semibold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-gray_800 w-[auto]"
                            variant="body12"
                          >
                            Service Duration
                          </Text>
                          <Row className="items-center justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[93%]">
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              12 Days - 12-Month Subscription
                            </Text>
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              x 12
                            </Text>
                          </Row>
                          <Line className="bg-gray_403 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[96%]" />
                          <Row className="items-center justify-between ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              Payment method
                            </Text>
                            <Text
                              className="font-medium text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              Card ending in 1234
                            </Text>
                          </Row>
                          <Row className="items-center justify-between lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]">
                            <Text
                              className="font-semibold text-gray_800 w-[auto]"
                              variant="body13"
                            >
                              Total Price
                            </Text>
                            <Text
                              className="font-semibold text-gray_800 w-[auto]"
                              variant="body13"
                            >
                              $920
                            </Text>
                          </Row>
                        </Column>
                        <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[42%]">
                          <Line className="bg-gray_403 h-[1px] w-[100%]" />
                          <Text
                            className="ml-[2px] rowhourlyflights"
                            variant="body12"
                          >
                            Pilot Charge
                          </Text>
                          <Row className="items-start justify-between ml-[2px] mt-[1px] w-[99%]">
                            <Text className="price_Four" variant="body14">
                              Drone setup and labor
                            </Text>
                            <Text
                              className="font-medium mb-[4px] text-gray_800 w-[auto]"
                              variant="body14"
                            >
                              $80
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Text
              className="absolute right-[0] top-[30%] columnghiblifrontuk"
              variant="body12"
            >
              Address: 6391 Elgin St Celina, Delaware
            </Text>
            <Column className="absolute font-inter justify-start left-[0] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] top-[0] w-[74%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Your total bill is below.
              </Text>
            </Column>
          </Stack>
          <Button
            className="common-pointer font-medium lg:ml-[173px] xl:ml-[217px] 2xl:ml-[244px] 3xl:ml-[292px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[29%]"
            onClick={handleNavigate139}
            shape="RoundedBorder5"
            size="3xl"
            variant="FillBluegray900"
          >
            Make Payment
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default BillingSurveillancePage;
