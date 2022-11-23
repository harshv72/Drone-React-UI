import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Line,
  SelectBox,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const CreateaSimulatedDronePage = () => {
  const navigate = useNavigate();

  function handleNavigate131() {
    navigate("/dronesimulationdetails");
  }
  function handleNavigate136() {
    navigate("/draftdronesimulation");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] w-[100%]">
        <Column className="items-end justify-start w-[100%]">
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
          <Text
            className="lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Create a Simulated Drone
          </Text>
          <Row className="items-start justify-end ml-[auto] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[88%]">
            <Column className="justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[67%]">
              <Column className="items-center justify-start lg:ml-[35px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[59px] w-[43%]">
                <Text
                  className="font-light text-bluegray_900 w-[auto]"
                  variant="body5"
                >
                  Would you like to create a simulated drone?
                </Text>
              </Column>
              <Column className="border border-gray_301 border-solid justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius8 w-[100%]">
                <Column className="font-poppins items-center justify-start w-[25%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body3"
                  >
                    Drone Information
                  </Text>
                </Column>
                <List
                  className="font-poppins gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listfieldlabel">
                    <Text className="Field" variant="body5">
                      Drone ID #
                    </Text>
                    <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                        <Text className="Contents" variant="body5">
                          1
                        </Text>
                        <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                  </Column>
                  <Column className="listfieldlabel">
                    <Text className="Field" variant="body5">
                      Drone Model
                    </Text>
                    <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                        <Text className="Contents1" variant="body5">
                          DJI Mini SE
                        </Text>
                        <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                  </Column>
                  <Column className="listfieldlabel">
                    <Text className="Field" variant="body5">
                      Mission Plan ID# (required)
                    </Text>
                    <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                        <Text
                          className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mr-[540px] xl:mr-[675px] 2xl:mr-[760px] 3xl:mr-[912px] not-italic text-black_901 w-[auto]"
                          variant="body5"
                        >
                          0
                        </Text>
                        <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                  </Column>
                </List>
                <SelectBox
                  className="font-bold font-roboto 3xl:mb-[112px] lg:mb-[66px] xl:mb-[83px] 2xl:mb-[93px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-white_A700 w-[17%]"
                  placeholderClassName="text-white_A700"
                  name="CTA"
                  placeholder="Assign Plan"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="lg:w-[15px] lg:h-[16px] lg:mr-[7px] xl:w-[18px] xl:h-[19px] xl:mr-[9px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[10px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[12px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillLightblueA701"
                ></SelectBox>
              </Column>
              <Row className="items-center justify-between 3xl:ml-[111px] lg:ml-[65px] xl:ml-[82px] 2xl:ml-[92px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                <Button
                  className="common-pointer font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[37%]"
                  onClick={handleNavigate136}
                  shape="RoundedBorder5"
                  size="3xl"
                  variant="FillGray401"
                >
                  Back
                </Button>
                <Button
                  className="common-pointer font-bold font-roboto lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[32%]"
                  onClick={handleNavigate131}
                  shape="RoundedBorder10"
                  size="3xl"
                  variant="FillGreen400"
                >
                  Create
                </Button>
              </Row>
            </Column>
            <Column className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] w-[32%]">
              <Row className="bg-green_400 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius10 w-[84%]">
                <Text className="One_Three" variant="body3">
                  1
                </Text>
                <Text
                  className="font-medium xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] text-white_A700 w-[auto]"
                  variant="body10"
                >
                  Upcoming booked service
                </Text>
              </Row>
              <Column className="font-poppins justify-start lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[98%]">
                <Column className="items-center justify-start w-[28%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Date & Time
                  </Text>
                </Column>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-black_901 w-[100%]"
                  variant="body12"
                >
                  Your next service is service ID #1144.
                  <br />
                  Start time: 29/06/2022, 10:00 AM PST
                </Text>
                <Column className="items-center justify-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[19%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Location
                  </Text>
                </Column>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-black_901 w-[61%]"
                  variant="body12"
                >
                  3671 Old Toll Road, Mariposa, CA 95338 <br />
                  West Plot A: Crop
                </Text>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CreateaSimulatedDronePage;
