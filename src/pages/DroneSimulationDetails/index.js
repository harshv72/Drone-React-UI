import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const DroneSimulationDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate152() {
    navigate("/draftdronesimulation");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[354px] xl:ml-[442px] 2xl:ml-[498px] 3xl:ml-[597px] lg:mr-[179px] xl:mr-[224px] 2xl:mr-[253px] 3xl:mr-[303px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[46%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
        </Column>
        <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[87px] w-[52%]">
          <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
            Simulation ID# 12345
          </Text>
          <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
            <Text
              className="font-light text-bluegray_900 w-[auto]"
              variant="body5"
            >
              Your simulated drone has been created! It will automatically be
              destroyed when you logout.
            </Text>
          </Column>
          <Column className="font-poppins items-center justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[22%]">
            <Text
              className="font-semibold text-bluegray_901 w-[auto]"
              variant="body5"
            >
              Drone Information
            </Text>
          </Column>
          <Stack className="font-worksans lg:h-[164px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[59%]">
            <Img
              src="images/img_arrowright.svg"
              className="absolute bottom-[19%] 3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] left-[9%] w-[3%]"
              alt="arrowright"
            />
            <Column className="absolute bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[100%]">
              <Column className="justify-start lg:mb-[13px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mt-[4px] w-[67%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start w-[46%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body9"
                    >
                      DJI Mini SE
                    </Text>
                    <Text className="DataCollection_One" variant="body10">
                      Data Collection
                    </Text>
                    <Text className="ID11" variant="body12">
                      ID #1
                    </Text>
                    <Text className="ml-[1px] Phone0912665" variant="body12">
                      Simulation ID # 12345
                    </Text>
                    <Text className="test_27KCamera1" variant="body12">
                      Plan ID #0
                    </Text>
                    <Text className="duration3" variant="body12">
                      DJI Mini SE
                    </Text>
                    <Text className="test_27KCamera1" variant="body12">
                      Server ID #0
                    </Text>
                    <Text className="test_4KCamera" variant="body12">
                      Status: Running
                    </Text>
                  </Column>
                  <Img
                    src="images/img_group87174.png"
                    className="ghiblifrontUK2"
                    alt="ghiblifrontUK"
                  />
                </Row>
                <Column className="font-roboto items-center justify-start lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[83px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[46%]">
                  <Button
                    className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillRed301"
                  >
                    Destroy
                  </Button>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Button
            className="common-pointer font-medium 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] lg:mt-[139px] xl:mt-[174px] 2xl:mt-[196px] 3xl:mt-[235px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
            onClick={handleNavigate152}
            shape="RoundedBorder5"
            size="3xl"
            variant="FillGray401"
          >
            Back
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DroneSimulationDetailsPage;
