import React from "react";

import { Column, Stack, Text, Row, Img, Button, SelectBox } from "components";

const SystemAdminPilotManaPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] w-[100%]">
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
        <Column className="items-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] xl:px-[121px] 2xl:px-[137px] 3xl:px-[164px] lg:px-[97px] w-[100%]">
          <Stack className="3xl:h-[1008px] lg:h-[597px] xl:h-[747px] 2xl:h-[840px] w-[92%]">
            <Row className="absolute bottom-[3%] items-center justify-between left-[11%] w-[68%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="2xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="2xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
            <Column className="absolute bg-white_A700 font-lato justify-start lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
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
                className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[90%]"
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
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default SystemAdminPilotManaPage;
