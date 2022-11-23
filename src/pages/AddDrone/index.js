import React from "react";

import { Column, Stack, Text, Row, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const AddDronePage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/dronemanagement");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] w-[100%]">
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
        <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[59%]">
          <Img
            src="images/img_progressbar_6.svg"
            className="Progressbar7"
            alt="Progressbar"
          />
          <Text className="columnselectroleto" as="h1" variant="h1">
            Add a New Drone
          </Text>
          <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[79%]">
            <Text
              className="font-light text-bluegray_900 w-[auto]"
              variant="body5"
            >
              Registers this drone into the cloud system so the drone is
              available to be booked.
            </Text>
          </Column>
          <Stack className="lg:h-[353px] xl:h-[441px] 2xl:h-[496px] 3xl:h-[595px] w-[100%]">
            <Column className="absolute bottom-[0] items-center justify-start right-[0] w-[87%]">
              <Row className="items-center justify-between w-[100%]">
                <Button
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                  shape="RoundedBorder5"
                  size="2xl"
                  variant="FillGray401"
                >
                  Back
                </Button>
                <Button
                  className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                  shape="RoundedBorder5"
                  size="2xl"
                  variant="FillBluegray900"
                >
                  Next
                </Button>
              </Row>
            </Column>
            <Column
              className="common-pointer absolute border border-gray_301 border-solid bottom-[0] font-poppins justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[33px] right-[0] rounded-radius8 w-[100%]"
              onClick={handleNavigate3}
            >
              <Column className="items-center justify-start w-[25%]">
                <Text
                  className="font-semibold text-bluegray_901 w-[auto]"
                  variant="body3"
                >
                  Drone Information
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                <Text className="Field" variant="body5">
                  Drone ID#
                </Text>
                <Line className="bg-gray_301 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] w-[100%]" />
              </Column>
              <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Text className="Field" variant="body5">
                  Model
                </Text>
                <Line className="bg-gray_301 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] w-[100%]" />
              </Column>
              <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Text className="Field" variant="body5">
                  Service
                </Text>
                <Line className="bg-gray_301 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] w-[100%]" />
              </Column>
              <Column className="justify-start lg:mb-[38px] xl:mb-[47px] 2xl:mb-[53px] 3xl:mb-[64px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Text className="Field" variant="body5">
                  Brand
                </Text>
                <Line className="bg-gray_301 h-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[100%]" />
              </Column>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AddDronePage;
