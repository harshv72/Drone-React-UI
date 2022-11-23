import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";

const MaintenanceProcessFlowPage = () => {
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
          <Row className="font-poppins items-start mr-[auto] w-[96%]">
            <Sidebar1 className="w-[22%]" />
            <Column className="font-inter justify-start 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[72%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="w-[53%]">
                  <Text
                    className="columnselectroleto_one3"
                    as="h1"
                    variant="h1"
                  >
                    Service ID# 5000
                  </Text>
                  <Column className="font-opensans justify-start lg:mr-[108px] xl:mr-[136px] 2xl:mr-[153px] 3xl:mr-[183px] mt-[3px] w-[71%]">
                    <Row className="items-center w-[42%]">
                      <Img
                        src="images/img_clock_60X61.svg"
                        className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[39%]"
                        alt="clock"
                      />
                      <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[55%]">
                        <Text className="Booked" variant="body3">
                          Booked
                        </Text>
                        <Text className="rowlanguage" variant="body10">
                          15 minutos
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[2%]"
                      alt="overflowmenu"
                    />
                    <Row className="items-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[66%]">
                      <Img
                        src="images/img_clock_60X61.svg"
                        className="clock_One"
                        alt="clock One"
                      />
                      <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[72%]">
                        <Text className="Booked" variant="body3">
                          Staff Confirmed
                        </Text>
                        <Text className="rowlanguage" variant="body3">
                          15 minutos
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                      alt="overflowmenu One"
                    />
                    <Row className="items-end justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Img
                        src="images/img_location_60X60.svg"
                        className="clock_One"
                        alt="location"
                      />
                      <Column className="justify-start mb-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[81%]">
                        <Text className="ml-[1px] Booked" variant="body3">
                          Arrived{" "}
                        </Text>
                        <Text className="rowlanguage" variant="body3">
                          Praça montevideo, 10, Ce...
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                      alt="overflowmenu Two"
                    />
                    <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[74%]">
                      <Img
                        src="images/img_clock_60X61.svg"
                        className="clock_One"
                        alt="clock Two"
                      />
                      <Column className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[75%]">
                        <Text
                          className="font-semibold text-bluegray_902 w-[auto]"
                          variant="body3"
                        >
                          Service Operation
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[2%]"
                      alt="overflowmenu Three"
                    />
                    <Row className="items-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[75%]">
                      <Img
                        src="images/img_clock_60X60.svg"
                        className="clock_One"
                        alt="clock Three"
                      />
                      <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[75%]">
                        <Text className="Booked" variant="body3">
                          Service Completed
                        </Text>
                        <Text className="time_Two" variant="body3">
                          15 minutos
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[2%]"
                      alt="overflowmenu Four"
                    />
                  </Column>
                </Column>
                <Column className="font-worksans w-[47%]">
                  <Stack className="lg:h-[320px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] w-[100%]">
                    <Column className="absolute font-inter justify-start xl:pb-[115px] 2xl:pb-[130px] 3xl:pb-[156px] lg:pb-[92px] xl:pr-[115px] 2xl:pr-[130px] 3xl:pr-[156px] lg:pr-[92px] right-[0] top-[0] w-[93%]">
                      <Text
                        className="font-light leading-[normal] mb-[2px] text-bluegray_900 w-[100%]"
                        variant="body3"
                      >
                        <span className="text-bluegray_900 font-inter font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          Status: Service Operation
                          <br />
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          <br />
                        </span>
                        <span className="text-bluegray_900 font-inter font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          Details
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          :<br />
                          West Plot A: Crop
                          <br />
                          Rental:{" "}
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          Repair
                          <br />
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          Service Time: <br />
                          06/29/2022, 10:00 am to <br />0
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          7
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          /
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          05
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          /2022, 1
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          0
                        </span>
                        <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          :00 am
                        </span>
                      </Text>
                    </Column>
                    <Text
                      className="absolute bottom-[16%] font-semibold font-worksans left-[28%] text-gray_700 w-[auto]"
                      variant="body9"
                    >
                      Maintenance Staff
                    </Text>
                    <Column className="absolute bottom-[1%] font-worksans justify-start left-[28%] w-[34%]">
                      <Text
                        className="font-bold text-gray_700 w-[auto]"
                        variant="body12"
                      >
                        Miguel Romero
                      </Text>
                      <Text className="Address6391E2" variant="body12">
                        License #: FA123G4567
                      </Text>
                      <Text className="Phone0912665" variant="body12">
                        Phone: 844 851 2184
                      </Text>
                    </Column>
                    <Stack className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] left-[0] px-[3px] rounded-radius6 w-[26%]">
                      <Img
                        src="images/img_ellipse2_1.png"
                        className="absolute lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] justify-center m-[auto] w-[60%]"
                        alt="EllipseTwo"
                      />
                    </Stack>
                  </Stack>
                  <Text
                    className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] mt-[1px] columnghiblifrontuk"
                    variant="body12"
                  >
                    Address: 2200 10th Street, Plano, TX 75074
                  </Text>
                </Column>
              </Row>
              <Row className="items-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[87%]">
                <Stack className="font-opensans 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] w-[36%]">
                  <Row className="absolute items-end justify-between top-[0] w-[100%]">
                    <Img
                      src="images/img_clock_60X60.svg"
                      className="clock_One"
                      alt="clock Four"
                    />
                    <Column className="justify-start mb-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[77%]">
                      <Text className="Booked" variant="body3">
                        Service Report Ready
                      </Text>
                      <Text className="time_Two" variant="body3">
                        15 minutos
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="absolute bottom-[0] lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] left-[9%] w-[2%]"
                    alt="overflowmenu Five"
                  />
                </Stack>
                <Button
                  className="font-inter font-medium lg:ml-[211px] xl:ml-[265px] 2xl:ml-[298px] 3xl:ml-[357px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[29%]"
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  Back
                </Button>
              </Row>
              <Row className="font-opensans items-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[20%]">
                <Img
                  src="images/img_clock_60X60.svg"
                  className="clock_One"
                  alt="clock Five"
                />
                <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[64%]">
                  <Text className="Booked" variant="body3">
                    Payment
                  </Text>
                  <Text className="time_Two" variant="body3">
                    15 minutos
                  </Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MaintenanceProcessFlowPage;
