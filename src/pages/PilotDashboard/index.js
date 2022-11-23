import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";

const PilotDashboardPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[124px] xl:pb-[155px] 2xl:pb-[175px] 3xl:pb-[210px] w-[100%]">
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
          <Column className="justify-start lg:ml-[180px] xl:ml-[225px] 2xl:ml-[254px] 3xl:ml-[304px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[79%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[64%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Welcome, John!
                </Text>
                <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                  <Text
                    className="font-light text-bluegray_900 w-[auto]"
                    variant="body5"
                  >
                    Please select an option to continue.
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_ellipse2_72X73.png"
                className="lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius88 w-[14%]"
                alt="EllipseTwo"
              />
            </Row>
            <Row className="items-start lg:mt-[41px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[88%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[55%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Edit Schedule
              </Button>
              <Row className="bg-green_400 items-center justify-center lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius10 w-[39%]">
                <Text className="One_Three" variant="body3">
                  2
                </Text>
                <Text
                  className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mr-[130px] xl:mr-[163px] 2xl:mr-[184px] 3xl:mr-[220px] text-white_A700 w-[auto]"
                  variant="body10"
                >
                  New Flights Booked
                </Text>
              </Row>
            </Row>
            <Button
              className="font-medium 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
              shape="RoundedBorder5"
              size="3xl"
              variant="FillBluegray900"
            >
              View Bookings
            </Button>
            <Button
              className="font-medium 3xl:mt-[110px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[92px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
              shape="RoundedBorder5"
              size="3xl"
              variant="FillBluegray900"
            >
              Edit Profile
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PilotDashboardPage;
