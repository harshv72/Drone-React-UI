import React from "react";

import { Column, Stack, Text, Row, Img, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestSelectFaPage = () => {
  const navigate = useNavigate();

  function handleNavigate173() {
    navigate("/servicerequestdronecatfour");
  }
  function handleNavigate174() {
    navigate("/servicerequestdronecat");
  }
  function handleNavigate179() {
    navigate("/servicerequestdronecatfour");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate179}
      >
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
          <Row className="font-poppins items-start mr-[auto] w-[87%]">
            <aside className="w-[24%]">
              <div className="">
                <Column className="bg-white_A700 justify-start lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] shadow-bs7 w-[100%]">
                  <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
                    <Img
                      src="images/img_offer.svg"
                      className="offer3"
                      alt="offer"
                    />
                    <Text className="rowoffer1" variant="body1">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[52%]">
                    <Img
                      src="images/img_call.svg"
                      className="call"
                      alt="call"
                    />
                    <Text className="ListMenu5" variant="body12">
                      Maintenance
                    </Text>
                  </Row>
                  <Column className="bg-bluegray_900 items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                    <Row className="items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[99%]">
                      <Img
                        src="images/img_clock.svg"
                        className="call"
                        alt="clock"
                      />
                      <Text className="ListMenu10" variant="body12">
                        Book Drone Service
                      </Text>
                      <Img
                        src="images/img_arrowright_white_A700.svg"
                        className="arrowright8"
                        alt="arrowright"
                      />
                    </Row>
                  </Column>
                  <Row className="items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[92%]">
                    <Img
                      src="images/img_question.svg"
                      className="call"
                      alt="question"
                    />
                    <Text className="ListMenu11" variant="body12">
                      My Bookings
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="arrowright_One"
                      alt="arrowright One"
                    />
                  </Row>
                  <Row className="items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[92%]">
                    <Img
                      src="images/img_music.svg"
                      className="call"
                      alt="music"
                    />
                    <Text className="ListMenu8" variant="body12">
                      Service Reports
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="arrowright_Two1"
                      alt="arrowright Two"
                    />
                  </Row>
                  <Row className="items-start lg:mb-[531px] xl:mb-[665px] 2xl:mb-[748px] 3xl:mb-[898px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]">
                    <Img
                      src="images/img_user.svg"
                      className="user1"
                      alt="user"
                    />
                    <Text className="ListMenu9" variant="body12">
                      Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="arrowright_Three1"
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
              </div>
            </aside>
            <Column className="font-inter justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[73%]">
              <Img
                src="images/img_progressbar_white_A700.svg"
                className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] w-[81%]"
                alt="Progressbar"
              />
              <Text className="columnselectroleto_one1" as="h1" variant="h1">
                Step 1: Farmland selection
              </Text>
              <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[79%]">
                <Text
                  className="font-light text-bluegray_900 w-[auto]"
                  variant="body5"
                >
                  Please select the farmland you would like your drone service
                  on.
                </Text>
              </Column>
              <List
                className="lg:gap-[102px] xl:gap-[128px] 2xl:gap-[144px] 3xl:gap-[172px] grid grid-cols-2 min-h-[auto] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[99%]"
                orientation="horizontal"
              >
                <Column className="border border-deep_purple_A200 border-solid items-center justify-start mb-[2px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius5 w-[100%]">
                  <Column
                    className="common-pointer bg-cover bg-repeat items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 shadow-bs6 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate173}
                  >
                    <Column className="items-center justify-start xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] w-[96%]">
                      <Text className="timeZone_One" variant="body5">
                        West Plot A
                      </Text>
                      <Text className="Crop" variant="body9">
                        Crop
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 shadow-bs6 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Column className="items-center justify-start xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] w-[96%]">
                      <Text className="timeZone_One" variant="body5">
                        South Plot C
                      </Text>
                      <Text className="Crop" variant="body9">
                        Nursery
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="border border-deep_purple_A200 border-solid items-center justify-start mt-[2px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius5 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 shadow-bs6 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Column className="items-center justify-start xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] w-[96%]">
                      <Text className="timeZone_One" variant="body5">
                        North Plot B
                      </Text>
                      <Text className="Crop" variant="body9">
                        Fruit
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="common-pointer bg-cover bg-repeat items-center justify-end mb-[2px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 shadow-bs6 w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                    onClick={handleNavigate174}
                  >
                    <Column className="items-center justify-start xl:mt-[108px] 2xl:mt-[122px] 3xl:mt-[146px] lg:mt-[86px] w-[96%]">
                      <Text className="timeZone_One" variant="body5">
                        East Plot D
                      </Text>
                      <Text className="Crop" variant="body9">
                        Livestock
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </List>
              <Button
                className="font-medium lg:ml-[132px] xl:ml-[165px] 2xl:ml-[186px] 3xl:ml-[223px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[60%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ServiceRequestSelectFaPage;
