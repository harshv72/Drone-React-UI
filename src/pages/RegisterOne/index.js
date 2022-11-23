import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const RegisterOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate170() {
    navigate("/pilotregisterone");
  }
  function handleNavigate176() {
    navigate("/farmerregisterone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] xl:pb-[108px] 2xl:pb-[122px] 3xl:pb-[146px] lg:pb-[86px] w-[100%]">
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
        <Text
          className="lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] text-bluegray_900 w-[auto]"
          as="h1"
          variant="h1"
        >
          Welcome! Let’s finish your registration.
        </Text>
        <Column className="items-center 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[94px] lg:px-[230px] xl:px-[288px] 2xl:px-[324px] 3xl:px-[389px] w-[100%]">
          <Column className="items-center justify-start w-[94%]">
            <Column className="justify-start w-[100%]">
              <Text
                className="lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Select Role to Register As
              </Text>
              <Stack className="lg:h-[202px] xl:h-[252px] 2xl:h-[284px] 3xl:h-[340px] lg:mt-[55px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[100%]">
                <Column className="absolute justify-start lg:pt-[32px] xl:pt-[40px] 2xl:pt-[46px] 3xl:pt-[55px] lg:px-[32px] xl:px-[40px] 2xl:px-[46px] 3xl:px-[55px] right-[7%] top-[32%] w-[74%]">
                  <Text
                    className="lg:ml-[120px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] text-gray_801 w-[auto]"
                    variant="body2"
                  >
                    or
                  </Text>
                </Column>
                <Img
                  src="images/img_ellipse1.png"
                  className="common-pointer absolute lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] inset-y-[0] left-[0] my-[auto] rounded-radius140 w-[37%]"
                  onClick={handleNavigate176}
                  alt="EllipseOne"
                />
                <Img
                  src="images/img_ellipse2.png"
                  className="common-pointer absolute lg:h-[200px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] inset-y-[0] my-[auto] right-[0] rounded-radius140 w-[37%]"
                  onClick={handleNavigate170}
                  alt="EllipseTwo"
                />
              </Stack>
              <Row className="items-start justify-end ml-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[82%]">
                <Text
                  className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Farmer
                </Text>
                <Text
                  className="font-semibold lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Drone Pilot
                </Text>
              </Row>
              <Button
                className="font-medium xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] 3xl:mt-[106px] lg:mt-[63px] xl:mt-[79px] 2xl:mt-[89px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[74%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default RegisterOnePage;
