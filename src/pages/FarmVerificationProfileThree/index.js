import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";

const FarmVerificationProfileThreePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
            <Text
              className="xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] text-bluegray_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Farm Verification: Identity
            </Text>
          </Column>
          <Column className="font-poppins items-center justify-start xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[52%]">
            <Img
              src="images/img_progressbar_5.svg"
              className="Progressbar1"
              alt="Progressbar"
            />
            <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Column className="border border-gray_301 border-solid justify-end lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius8 w-[100%]">
                <Column className="items-center justify-start ml-[1px] mt-[1px] w-[28%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body3"
                  >
                    Driver’s License
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="Field" variant="body5">
                    Name
                  </Text>
                  <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                  <Text className="Field" variant="body5">
                    License ID
                  </Text>
                  <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Column className="bg-gray_101 border border-dashed border-gray_600 items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius9 w-[100%]">
                  <Img
                    src="images/img_camera.svg"
                    className="camera"
                    alt="camera"
                  />
                  <Text className="columncamera" variant="body8">
                    Upload pdf/image of license
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="font-inter items-center justify-end ml-[auto] 3xl:mt-[118px] lg:mt-[70px] xl:mt-[88px] 2xl:mt-[99px] w-[36%]">
            <Button
              className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder5"
              size="4xl"
              variant="FillGray401"
            >
              Back
            </Button>
            <Button
              className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder5"
              size="4xl"
              variant="FillBluegray900"
            >
              Save
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmVerificationProfileThreePage;
