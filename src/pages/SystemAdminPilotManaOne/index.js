import React from "react";

import { Column, Stack, Text, Row, Img, Button, SelectBox } from "components";
import { useNavigate } from "react-router-dom";

const SystemAdminPilotManaOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] w-[100%]">
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
          <Row className="bg-gray_401 font-worksans items-center justify-center lg:ml-[268px] xl:ml-[335px] 2xl:ml-[377px] 3xl:ml-[452px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[50%]">
            <Button
              className="common-pointer font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[22%]"
              onClick={handleNavigate18}
              shape="RoundedBorder5"
              size="xl"
              variant="FillBlueA700"
            >
              Catalog Manaagement
            </Button>
            <Text
              className="bg-blue_A700 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rowgroup557"
              variant="body12"
            >
              Booking Schedules
            </Text>
            <Button
              className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[22%]"
              shape="RoundedBorder5"
              size="xl"
              variant="FillBlueA700"
            >
              Mission Planner
            </Button>
            <Text
              className="bg-light_blue_500 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] lg:pb-[14px] xl:pb-[18px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowgroup557"
              variant="body12"
            >
              Pilot Management
            </Text>
          </Row>
          <Stack className="font-lato lg:h-[509px] xl:h-[637px] 2xl:h-[716px] 3xl:h-[859px] lg:ml-[160px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
            <Column className="absolute bg-white_A700 justify-start lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] top-[2%] w-[100%]">
              <Column className="bg-white_A700 items-end justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] outline outline-[0.5px] outline-gray_404 lg:pl-[153px] xl:pl-[192px] 2xl:pl-[216px] 3xl:pl-[259px] rounded-radius8 shadow-bs4 w-[30%]">
                <Button
                  className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                  shape="CustomBorderLR8"
                  size="lg"
                  variant="OutlineGray70020"
                >
                  Search
                </Button>
              </Column>
              <SelectBox
                className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[90%]"
                placeholderClassName=""
                name="Invitee"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      src="images/img_user_11X10.svg"
                      className="lg:w-[7px] lg:h-[8px] lg:mr-[24px] xl:w-[8px] xl:h-[10px] xl:mr-[31px] 2xl:w-[10px] 2xl:h-[12px] 2xl:mr-[35px] 3xl:w-[12px] 3xl:h-[14px] 3xl:mr-[42px]"
                      alt="user"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                indicator={
                  <Img
                    src="images/img_minimize.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:mr-[24px] xl:w-[21px] xl:h-[22px] xl:mr-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[42px]"
                    alt="minimize"
                  />
                }
                shape="RoundedBorder20"
                variant="OutlineBlack9000a"
              ></SelectBox>
            </Column>
            <Column className="absolute font-inter items-center justify-start left-[13%] top-[0] w-[33%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Assign or remove pilots from bookings
              </Text>
            </Column>
          </Stack>
          <Row className="font-inter items-center justify-center lg:ml-[242px] xl:ml-[303px] 2xl:ml-[341px] 3xl:ml-[409px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[51%]">
            <Button
              className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              shape="RoundedBorder5"
              size="3xl"
              variant="FillGray401"
            >
              Back
            </Button>
            <Button
              className="font-medium lg:ml-[164px] xl:ml-[205px] 2xl:ml-[231px] 3xl:ml-[277px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
              shape="RoundedBorder5"
              size="3xl"
              variant="FillBluegray900"
            >
              Next
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SystemAdminPilotManaOnePage;
