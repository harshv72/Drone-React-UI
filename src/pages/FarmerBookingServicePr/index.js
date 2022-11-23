import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const FarmerBookingServicePrPage = () => {
  const navigate = useNavigate();

  function handleNavigate163() {
    navigate("/billingdatacollection");
  }
  function handleNavigate164() {
    navigate("/farmerdashboard");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate163}
      >
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
          <Row className="font-poppins items-start justify-between w-[97%]">
            <Sidebar className="w-[22%]" />
            <Column className="font-inter justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[71%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="w-[50%]">
                  <Text
                    className="columnselectroleto_one3"
                    as="h1"
                    variant="h1"
                  >
                    Service ID# 1111
                  </Text>
                  <Column className="font-opensans justify-start xl:mr-[111px] 2xl:mr-[125px] 3xl:mr-[150px] lg:mr-[88px] mt-[3px] w-[75%]">
                    <Row className="items-center w-[42%]">
                      <Img
                        src="images/img_clock_60X61.svg"
                        className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[39%]"
                        alt="clock"
                      />
                      <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] pb-[1px] w-[55%]">
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
                      <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[71%]">
                        <Text className="Booked" variant="body3">
                          Pilot Confirmed
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
                          Delivered
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
                    <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[74%]">
                      <Img
                        src="images/img_clock_60X61.svg"
                        className="clock_One"
                        alt="clock Two"
                      />
                      <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[75%]">
                        <Text
                          className="font-semibold text-bluegray_902 w-[auto]"
                          variant="body3"
                        >
                          Service Operation
                        </Text>
                        <Text className="time_Two" variant="body3">
                          15 minutos
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
                <Column className="w-[45%]">
                  <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 3xl:pb-[110px] lg:pb-[65px] xl:pb-[81px] 2xl:pb-[92px] 3xl:pr-[110px] lg:pr-[65px] xl:pr-[81px] 2xl:pr-[92px] w-[96%]">
                    <Text
                      className="font-light leading-[normal] text-bluegray_900 w-[88%]"
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
                      </span>
                      <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        Drone ID #1, DJI Mini SE
                        <br />
                      </span>
                      <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        West Plot A: Crop
                        <br />
                        Rental: Data Collection
                        <br />
                        Service Time: <br />
                        06/29/2022, 10:00 am to <br />
                        06/29/2022,{" "}
                      </span>
                      <span className="text-bluegray_900 font-inter lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                        5:00 pm
                      </span>
                    </Text>
                  </Column>
                  <Row className="font-worksans items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[90%]">
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center p-[3px] rounded-radius6 w-[30%]">
                      <Img
                        src="images/img_ellipse2_72X73.png"
                        className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] mb-[1px] rounded-radius50 w-[63%]"
                        alt="EllipseTwo"
                      />
                    </Column>
                    <Column className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[68%]">
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
                      <Text className="Address6391E2" variant="body12">
                        Address: 6391 Elgin St Celina, Delaware
                      </Text>
                    </Column>
                  </Row>
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
                  className="common-pointer font-inter font-medium lg:ml-[211px] xl:ml-[265px] 2xl:ml-[298px] 3xl:ml-[357px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[29%]"
                  onClick={handleNavigate164}
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

export default FarmerBookingServicePrPage;
