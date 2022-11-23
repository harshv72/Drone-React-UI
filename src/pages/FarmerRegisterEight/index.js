import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmerRegisterEightPage = () => {
  const navigate = useNavigate();

  function handleNavigate154() {
    navigate("/farmerregisterfour");
  }
  function handleNavigate159() {
    navigate("/farmerregisterseven");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[31px] xl:pb-[39px] 2xl:pb-[44px] 3xl:pb-[52px] w-[100%]">
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
          <Column className="justify-start lg:ml-[235px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[397px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[70%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[74%]">
                <Img
                  src="images/img_progressbar_2.svg"
                  className="Progressbar1"
                  alt="Progressbar"
                />
                <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
                  <Column className="justify-start lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Let’s verify your identity.
                    </Text>
                    <Text className="SelectRoleto_Two2" variant="body5">
                      Please upload your driver’s license.
                    </Text>
                  </Column>
                  <Column className="border border-gray_301 border-solid font-poppins justify-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius8 w-[100%]">
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
                  <Column className="font-poppins items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
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
              <Img
                src="images/img_close.svg"
                className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                alt="close"
              />
            </Row>
            <Row className="items-center lg:mt-[322px] xl:mt-[403px] 2xl:mt-[454px] 3xl:mt-[545px] w-[74%]">
              <Button
                className="common-pointer font-medium mb-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                onClick={handleNavigate154}
                shape="RoundedBorder5"
                size="4xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[170px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] mt-[3px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                onClick={handleNavigate159}
                shape="RoundedBorder5"
                size="4xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FarmerRegisterEightPage;
