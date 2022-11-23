import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const MaintenanceBillingPage = () => {
  const navigate = useNavigate();

  function handleNavigate165() {
    navigate("/maintenanceprocessflow");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[40px] xl:pb-[50px] 2xl:pb-[57px] 3xl:pb-[68px] w-[100%]"
        onClick={handleNavigate165}
      >
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
          <Column className="justify-start lg:ml-[183px] xl:ml-[229px] 2xl:ml-[258px] 3xl:ml-[309px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[70%]">
            <Img
              src="images/img_progressbar_light_blue_A700_12X148.svg"
              className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] w-[15%]"
              alt="Progressbar"
            />
            <Text className="columnselectroleto_one1" as="h1" variant="h1">
              Confirm Booking
            </Text>
            <Stack className="lg:h-[406px] xl:h-[508px] 2xl:h-[571px] 3xl:h-[685px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
              <Stack className="absolute font-inter lg:h-[406px] xl:h-[508px] 2xl:h-[571px] 3xl:h-[685px] left-[0] w-[88%]">
                <Column className="absolute justify-start left-[0] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] top-[0] w-[82%]">
                  <Text
                    className="font-light text-bluegray_900 w-[auto]"
                    variant="body5"
                  >
                    Please confirm your selected service details
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] font-worksans inset-x-[0] items-center justify-start mx-[auto] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-bl-[0] rounded-br-[0] rounded-tl-[40px] rounded-tr-[40px] w-[98%]">
                  <Column className="justify-start lg:mb-[27px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] w-[99%]">
                    <Row className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[47%]">
                      <Text
                        className="font-semibold mt-[3px] text-gray_800 w-[auto]"
                        variant="body6"
                      >
                        Summary
                      </Text>
                      <Text
                        className="font-semibold mb-[3px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] text-gray_800 w-[auto]"
                        variant="body6"
                      >
                        Service ID# 5000, Drone ID #2
                      </Text>
                    </Row>
                    <Column className="justify-start mt-[3px] w-[100%]">
                      <Row className="items-start w-[100%]">
                        <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[17%]">
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
                              src="images/img_ghiblifrontuk_2.png"
                              className="ghiblifrontUK3"
                              alt="ghiblifrontUK"
                            />
                          </Stack>
                        </Stack>
                        <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[37%]">
                          <Text className="DJIMiniSE1" variant="body9">
                            DJI Phantom 4 Pro
                          </Text>
                          <Text className="DataCollection2" variant="body12">
                            Repair
                          </Text>
                          <Row className="items-start mt-[3px] w-[100%]">
                            <Img
                              src="images/img_location.svg"
                              className="location"
                              alt="location"
                            />
                            <Text className="rowlocation" variant="body12">
                              3671 Old Toll Road, Mariposa, CA 95338 West Plot
                              A: Crop
                            </Text>
                          </Row>
                          <Row className="items-start ml-[3px] w-[84%]">
                            <Img
                              src="images/img_calendar_15X14.svg"
                              className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[5%]"
                              alt="calendar"
                            />
                            <Text className="rowcalendar" variant="body12">
                              06/29/2022 to 07./05/2022- 7 days
                            </Text>
                          </Row>
                        </Column>
                        <Stack className="bg-white_A700 border border-gray_300 border-solid lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] px-[3px] rounded-radius6 w-[14%]">
                          <Img
                            src="images/img_ellipse2_1.png"
                            className="absolute lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] w-[60%]"
                            alt="EllipseTwo"
                          />
                        </Stack>
                        <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[18%]">
                          <Text
                            className="font-semibold text-gray_700 w-[auto]"
                            variant="body9"
                          >
                            Maintenance Staff
                          </Text>
                          <Text className="JohnRoland" variant="body12">
                            Miguel Romero
                          </Text>
                          <Text className="Address6391E2" variant="body12">
                            License #: FA123G4567
                          </Text>
                          <Text className="Phone0912665" variant="body12">
                            Phone: 844 851 2184
                          </Text>
                        </Column>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
                      <Column className="bg-gray_202 justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius10 w-[94%]">
                        <Column className="items-center justify-start my-[4px] w-[92%]">
                          <Column className="justify-start w-[99%]">
                            <Row className="items-start w-[66%]">
                              <Text className="Summary" variant="body12">
                                Drone Inspection Base Cost
                              </Text>
                              <Text
                                className="font-medium lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] mt-[2px] text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                $20
                              </Text>
                              <Text className="Materials" variant="body12">
                                Shipping
                              </Text>
                            </Row>
                            <Line className="bg-gray_403 h-[1px] ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[42%]" />
                            <Row className="items-end justify-between w-[100%]">
                              <Text
                                className="rowhourlyflights"
                                variant="body12"
                              >
                                Inspection Report
                              </Text>
                              <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[42%]">
                                <Row className="items-center justify-between w-[99%]">
                                  <Text
                                    className="font-medium text-gray_800 w-[auto]"
                                    variant="body14"
                                  >
                                    Deliver drone to farm
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_800 w-[auto]"
                                    variant="body14"
                                  >
                                    $20
                                  </Text>
                                </Row>
                                <Line className="bg-gray_403 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                              </Column>
                            </Row>
                            <Row className="items-start ml-[1px] mt-[2px] w-[83%]">
                              <Text className="time9" variant="body14">
                                1x 10:00 AM Inspection for Repairs
                              </Text>
                              <Text
                                className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] time9"
                                variant="body14"
                              >
                                $0
                              </Text>
                              <Text
                                className="font-semibold mb-[3px] xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] text-gray_800 w-[auto]"
                                variant="body12"
                              >
                                Maintenance Staff Charge
                              </Text>
                            </Row>
                            <Row className="items-start justify-between ml-[4px] mt-[1px] w-[99%]">
                              <Line className="bg-gray_403 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[43%]" />
                              <Text
                                className="font-medium lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                Drone inspection and labor
                              </Text>
                              <Text
                                className="font-medium lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                $20
                              </Text>
                            </Row>
                            <Row className="items-center justify-between mt-[2px] w-[100%]">
                              <Text
                                className="font-semibold text-gray_800 w-[auto]"
                                variant="body12"
                              >
                                Estimated Repair After Inspection
                              </Text>
                              <Line className="bg-gray_403 h-[1px] w-[42%]" />
                            </Row>
                            <Row className="items-start ml-[4px] mt-[4px] w-[40%]">
                              <Text
                                className="font-medium mt-[3px] text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                1x Camera - Minor Repair
                              </Text>
                              <Text
                                className="font-medium mb-[3px] xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[82px] text-gray_800 w-[auto]"
                                variant="body14"
                              >
                                $10
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-start justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Column className="items-center justify-start w-[44%]">
                              <Column className="justify-start w-[96%]">
                                <Row className="items-center justify-between ml-[2px] w-[95%]">
                                  <Text
                                    className="font-medium text-gray_800 w-[auto]"
                                    variant="body14"
                                  >
                                    2x Propellor - Replacement
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_800 w-[auto]"
                                    variant="body14"
                                  >
                                    $10
                                  </Text>
                                </Row>
                                <Line className="bg-gray_403 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]" />
                                <Row className="items-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[94%]">
                                  <Text
                                    className="font-semibold 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] text-gray_800 w-[auto]"
                                    variant="body12"
                                  >
                                    Service Duration
                                  </Text>
                                  <Text
                                    className="font-medium lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_800 w-[auto]"
                                    variant="body14"
                                  >
                                    x 1
                                  </Text>
                                </Row>
                                <Text className="price_Four" variant="body14">
                                  7 Days - On-Demand
                                </Text>
                              </Column>
                              <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                                <Line className="bg-gray_403 h-[1px] w-[96%]" />
                                <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]">
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
                                <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[95%]">
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
                                    $80
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Line className="bg-gray_403 h-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[42%]" />
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Text
                className="absolute font-worksans right-[0] top-[28%] columnghiblifrontuk"
                variant="body12"
              >
                Address: 2200 10th Street, Plano, TX 75074
              </Text>
            </Stack>
            <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[82%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[184px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
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

export default MaintenanceBillingPage;
