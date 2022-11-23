import React from "react";

import { Column, Stack, Text, Row, Img, Line } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import { useNavigate } from "react-router-dom";

const AdminCloudDashboardHomePage = () => {
  const navigate = useNavigate();

  function handleNavigate112() {
    navigate("/adminsimulatedcloudd");
  }
  function handleNavigate113() {
    navigate("/adminclouddashboardmap");
  }
  function handleNavigate118() {
    navigate("/");
  }
  function handleNavigate119() {
    navigate("/admindashboarddronet");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[108px] xl:pb-[135px] 2xl:pb-[152px] 3xl:pb-[182px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[88px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[346px] xl:ml-[433px] 2xl:ml-[487px] 3xl:ml-[584px] lg:mr-[198px] xl:mr-[248px] 2xl:mr-[279px] 3xl:mr-[335px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[45%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search2"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
          <Row className="font-poppins items-start ml-[3px] w-[93%]">
            <Sidebar2
              className="w-[18%]"
              onListMenuClick={handleNavigate118}
              onListMenuClick1={handleNavigate119}
            />
            <Column className="font-inter justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[80%]">
              <Row className="items-start justify-between lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[98%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Drone Cloud Dashboard
                </Text>
                <Text
                  className="lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Welcome, Admin!
                </Text>
              </Row>
              <Row className="bg-gray_401 font-worksans items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[42%]">
                <Text
                  className="bg-light_blue_500 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[21px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[28px] xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] rowgroup557"
                  variant="body12"
                >
                  Drone Cloud Dashboard
                </Text>
                <Column className="bg-blue_A700 items-end justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius5 w-[29%]">
                  <Text
                    className="common-pointer columnsimulateddrone"
                    variant="body12"
                    onClick={handleNavigate112}
                  >
                    Simulated Drone Cloud
                  </Text>
                </Column>
                <Text
                  className="common-pointer bg-light_blue_A700 lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[21px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[28px] xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] rowdata_collection_one"
                  variant="body12"
                  onClick={handleNavigate113}
                >
                  Drone Services Map
                </Text>
              </Row>
              <Column className="font-poppins justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[86%]">
                <Column className="bg-white_A700 border border-blue_50 border-solid items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius12 shadow-bs8 w-[80%]">
                  <Column className="justify-start my-[1px] w-[100%]">
                    <Text
                      className="font-medium text-black_901 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Drone Statistics
                    </Text>
                    <Row className="items-start lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[84%]">
                      <Text
                        className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rowstatus"
                        variant="body9"
                      >
                        Status
                      </Text>
                      <Text
                        className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:ml-[367px] xl:ml-[459px] 2xl:ml-[517px] 3xl:ml-[620px] rowstatus"
                        variant="body9"
                      >
                        Total
                      </Text>
                    </Row>
                    <Row className="items-center justify-between mt-[2px] w-[100%]">
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-end mt-[2px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius12 shadow-bs8 w-[76%]">
                        <Column className="items-center py-[4px] w-[8%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-green_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Active
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[1px]" />
                        <Column className="items-center lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[11%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-semibold text-red_A702 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers_One" variant="body9">
                              Stopped
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[1px]" />
                        <Column className="items-center lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] py-[3px] w-[14%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-amber_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Connected
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[1px]" />
                        <Column className="items-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[13%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_A400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers_One" variant="body9">
                              Registered
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="bg-white_A700 border border-blue_50 border-solid items-center justify-between mb-[2px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 shadow-bs8 w-[21%]">
                        <Column className="items-center lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] py-[3px] w-[40%]">
                          <Column className="justify-start mt-[3px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              12
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Drones{" "}
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] my-[1px] w-[1px]" />
                      </Row>
                    </Row>
                    <Text
                      className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] rowstatus"
                      variant="body9"
                    >
                      Drone Model
                    </Text>
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center ml-[2px] lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius12 shadow-bs8 w-[60%]">
                      <Column className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] py-[4px] w-[16%]">
                        <Column className="justify-start mt-[2px] w-[100%]">
                          <Text
                            className="font-semibold text-teal_700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            8
                          </Text>
                          <Text className="Totalusers" variant="body9">
                            DJI MIni SE
                          </Text>
                        </Column>
                      </Column>
                      <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] w-[1px]" />
                      <Column className="items-center lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[21%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-semibold text-red_301 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            0
                          </Text>
                          <Text className="Totalusers_One" variant="body9">
                            DJI Agras T20
                          </Text>
                        </Column>
                      </Column>
                      <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] w-[1px]" />
                      <Column className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] py-[3px] w-[26%]">
                        <Column className="justify-start mt-[2px] w-[100%]">
                          <Text
                            className="font-semibold text-deep_purple_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3
                          </Text>
                          <Text className="Totalusers" variant="body9">
                            DJI Phantom Pro
                          </Text>
                        </Column>
                      </Column>
                      <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] w-[1px]" />
                    </Row>
                  </Column>
                </Column>
                <Row className="items-start justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                  <Column className="bg-white_A700 border border-blue_50 border-solid justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius12 shadow-bs8 w-[52%]">
                    <Column className="justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mr-[122px] xl:mr-[153px] 2xl:mr-[172px] 3xl:mr-[207px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[59%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Drone Service Statistics
                      </Text>
                      <Text
                        className="ml-[4px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rowstatus"
                        variant="body9"
                      >
                        Type
                      </Text>
                    </Column>
                    <Column className="justify-start xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[97%]">
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-end ml-[4px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius12 shadow-bs8 w-[99%]">
                        <Column className="items-center py-[4px] w-[21%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              12
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Total Services
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] w-[1px]" />
                        <Column className="items-center lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] py-[3px] w-[10%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              9
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Rental
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] w-[1px]" />
                        <Column className="items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[21%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers_One" variant="body9">
                              Subscriptioon
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] w-[1px]" />
                      </Row>
                      <Text
                        className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowstatus"
                        variant="body9"
                      >
                        Status
                      </Text>
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius12 shadow-bs8 w-[99%]">
                        <Column className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] py-[3px] w-[11%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              6
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Booked
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                        <Column className="items-center py-[4px] w-[10%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              6
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Active
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                        <Column className="lg:h-[38px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] items-center lg:w-[37px] xl:w-[47px] 2xl:w-[53px] 3xl:w-[63px]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-black_901 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              0
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Finished
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                      </Row>
                      <Text
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] rowstatus"
                        variant="body9"
                      >
                        Service Type
                      </Text>
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between mt-[2px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius12 shadow-bs8 w-[99%]">
                        <Column className="items-center lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] py-[3px] w-[19%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-teal_700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              9
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Data Collect
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                        <Column className="items-center lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[12%]">
                          <Column className="justify-start w-[100%]">
                            <Text
                              className="font-semibold text-red_301 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              0
                            </Text>
                            <Text className="Totalusers_One" variant="body9">
                              Payload
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                        <Column className="items-center py-[4px] w-[19%]">
                          <Column className="justify-start mt-[2px] w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Text className="Totalusers" variant="body9">
                              Surveillance
                            </Text>
                          </Column>
                        </Column>
                        <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] w-[1px]" />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-blue_50 border-solid justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius12 shadow-bs8 w-[45%]">
                    <Column className="justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[60%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Drone Fleet Statistics
                      </Text>
                      <Text
                        className="ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rowstatus"
                        variant="body9"
                      >
                        Total
                      </Text>
                    </Column>
                    <Row className="bg-white_A700 border border-blue_50 border-solid items-center justify-end xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[18px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mt-[4px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 shadow-bs8 w-[89%]">
                      <Column className="items-center lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[33%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-semibold text-black_901 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4
                          </Text>
                          <Text className="Totalusers_Sixteen" variant="body9">
                            Drones in <br />
                            client ID #0 fleet
                          </Text>
                        </Column>
                      </Column>
                      <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] my-[1px] w-[1px]" />
                      <Column className="items-center lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[32%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-semibold text-black_901 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            8
                          </Text>
                          <Text className="Totalusers_Sixteen" variant="body9">
                            Drones in <br />
                            client ID #1 fleet
                          </Text>
                        </Column>
                      </Column>
                      <Line className="bg-blue_50 lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:h-[99px] lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] my-[1px] w-[1px]" />
                    </Row>
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

export default AdminCloudDashboardHomePage;
