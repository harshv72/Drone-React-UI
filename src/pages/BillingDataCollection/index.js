import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const BillingDataCollectionPage = () => {
  const navigate = useNavigate();

  function handleNavigate127() {
    navigate("/farmerdashboard");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[36px] xl:pb-[45px] 2xl:pb-[51px] 3xl:pb-[61px] w-[100%]">
        <Column className="items-center w-[100%]">
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
        </Column>
        <Text
          className="lg:ml-[183px] xl:ml-[229px] 2xl:ml-[258px] 3xl:ml-[309px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] text-bluegray_900 w-[auto]"
          as="h1"
          variant="h1"
        >
          Service ID #1111 Bill
        </Text>
        <Column className="font-worksans items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:px-[177px] xl:px-[221px] 2xl:px-[249px] 3xl:px-[298px] w-[100%]">
          <Stack className="lg:h-[412px] xl:h-[515px] 2xl:h-[579px] 3xl:h-[695px] w-[99%]">
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start left-[0] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[40px] rounded-tr-[40px] w-[93%]">
              <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] w-[94%]">
                <Row className="items-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[48%]">
                  <Text className="Summary" variant="body6">
                    Summary
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] mt-[1px] text-gray_800 w-[auto]"
                    variant="body6"
                  >
                    Service ID# 1111, Drone ID #1
                  </Text>
                </Row>
                <Row className="items-start w-[100%]">
                  <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[18%]">
                    <Stack className="absolute lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] left-[6%] right-[8%] w-[85%]">
                      <Text className="Car" variant="body9">
                        Car
                      </Text>
                      <div className="absolute bg-white_A700 border border-gray_300 border-solid lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] rounded-radius6 w-[100%]"></div>
                    </Stack>
                    <Stack
                      className="bg-cover bg-repeat bottom-[4%] ghiblifrontUK3"
                      style={{
                        backgroundImage: "url('images/img_group17.png')",
                      }}
                    >
                      <Img
                        src="images/img_group17.png"
                        className="ghiblifrontUK3"
                        alt="ghiblifrontUK"
                      />
                    </Stack>
                  </Stack>
                  <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[39%]">
                    <Text className="DJIMiniSE1" variant="body9">
                      DJI Mini SE
                    </Text>
                    <Text className="DataCollection2" variant="body12">
                      Data Collection
                    </Text>
                    <Row className="items-start mt-[4px] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="location"
                        alt="location"
                      />
                      <Text className="rowlocation" variant="body12">
                        3671 Old Toll Road, Mariposa, CA 95338 West Plot A: Crop
                      </Text>
                    </Row>
                    <Row className="items-start ml-[3px] w-[50%]">
                      <Img
                        src="images/img_calendar_15X14.svg"
                        className="calendar3"
                        alt="calendar"
                      />
                      <Text className="rowcalendar" variant="body12">
                        06/29/2022 - 1 day
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] p-[3px] rounded-radius6 w-[15%]">
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
                <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
                  <Line className="bg-gray_300 h-[1px] w-[42%]" />
                  <Stack className="bg-gray_202 lg:h-[223px] xl:h-[279px] 2xl:h-[314px] 3xl:h-[376px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius10 w-[99%]">
                    <Stack className="absolute bottom-[2%] lg:h-[133px] xl:h-[166px] 2xl:h-[187px] 3xl:h-[224px] left-[0] w-[90%]">
                      <Column className="absolute justify-start left-[1%] top-[0] w-[33%]">
                        <Text
                          className="font-semibold text-gray_800 w-[auto]"
                          variant="body12"
                        >
                          Hourly Service Operations Per Day
                        </Text>
                        <Text className="test_1xDataCollect" variant="body14">
                          1x Data Collection - Crop Health
                        </Text>
                      </Column>
                      <Column className="absolute bottom-[0] justify-start left-[0] w-[44%]">
                        <Line className="bg-gray_403 h-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[96%]" />
                        <Text
                          className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] columnlinenine"
                          variant="body12"
                        >
                          Service Duration
                        </Text>
                        <Row className="items-center justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[90%]">
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            variant="body14"
                          >
                            1 Day - On-Demand
                          </Text>
                          <Text
                            className="font-medium text-gray_800 w-[auto]"
                            variant="body14"
                          >
                            x 1
                          </Text>
                        </Row>
                        <Line className="bg-gray_403 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[96%]" />
                        <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
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
                        <Row className="items-center justify-between lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[96%]">
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
                            $180
                          </Text>
                        </Row>
                      </Column>
                      <Row className="absolute items-start justify-between right-[0] top-[17%] w-[42%]">
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
                      <Row className="absolute items-end justify-center right-[30%] top-[8%] w-[31%]">
                        <Text className="time9" variant="body14">
                          $10
                        </Text>
                        <Text
                          className="font-semibold mb-[3px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] text-gray_800 w-[auto]"
                          variant="body12"
                        >
                          Pilot Charge
                        </Text>
                      </Row>
                    </Stack>
                    <Column className="absolute justify-start left-[1%] top-[1%] w-[89%]">
                      <Row className="items-start w-[67%]">
                        <Text
                          className="font-semibold text-gray_800 w-[auto]"
                          variant="body12"
                        >
                          Drone Base Cost
                        </Text>
                        <Text className="price" variant="body14">
                          $80
                        </Text>
                        <Text className="Materials" variant="body12">
                          Materials
                        </Text>
                      </Row>
                      <Line className="bg-gray_403 h-[1px] ml-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[42%]" />
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rowhourlyflights" variant="body12">
                          Flights Per Day
                        </Text>
                        <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[42%]">
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
                      <Row className="items-start ml-[1px] mt-[1px] w-[69%]">
                        <Text className="time9" variant="body14">
                          1x 10:00 AM - 5:00 PM PST Flight: Full Day
                        </Text>
                        <Text
                          className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] time9"
                          variant="body14"
                        >
                          $10
                        </Text>
                        <Text className="Equipment" variant="body12">
                          Equipment
                        </Text>
                      </Row>
                      <Row className="items-start ml-[4px] mt-[1px] w-[99%]">
                        <Line className="bg-gray_403 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[43%]" />
                        <Text className="language_One2" variant="body14">
                          1x Camera{" "}
                        </Text>
                        <Text className="price_Three" variant="body14">
                          $0
                        </Text>
                      </Row>
                    </Column>
                    <Line className="absolute bg-gray_403 h-[1px] right-[8%] top-[34%] w-[38%]" />
                  </Stack>
                </Column>
              </Column>
            </Column>
            <Text
              className="absolute right-[0] top-[28%] columnghiblifrontuk"
              variant="body12"
            >
              Address: 6391 Elgin St Celina, Delaware
            </Text>
            <Column className="absolute font-inter justify-start left-[2%] lg:pb-[19px] xl:pb-[24px] 2xl:pb-[27px] 3xl:pb-[32px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[27px] 3xl:pr-[32px] top-[0] w-[78%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Your total bill is below.
              </Text>
            </Column>
          </Stack>
        </Column>
        <Button
          className="common-pointer font-medium lg:ml-[356px] xl:ml-[446px] 2xl:ml-[502px] 3xl:ml-[602px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[20%]"
          onClick={handleNavigate127}
          shape="RoundedBorder5"
          size="3xl"
          variant="FillBluegray900"
        >
          Make Payment
        </Button>
      </Column>
    </>
  );
};

export default BillingDataCollectionPage;
