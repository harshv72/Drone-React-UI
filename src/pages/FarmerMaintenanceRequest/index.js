import React from "react";

import { Column, Stack, Text, Row, Img, List, SelectBox } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const FarmerMaintenanceRequestPage = () => {
  const navigate = useNavigate();

  function handleNavigate128() {
    navigate("/farmermaintenancereques");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate128}
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
          <Row className="font-poppins items-start mr-[auto] w-[78%]">
            <Sidebar1 className="w-[27%]" />
            <Column className="justify-start lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[66%]">
              <Img
                src="images/img_progressbar_7.svg"
                className="Progressbar1"
                alt="Progressbar"
              />
              <Text
                className="font-inter lg:ml-[177px] xl:ml-[221px] 2xl:ml-[249px] 3xl:ml-[298px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Drone ID #2
              </Text>
              <Text
                className="font-inter font-light xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Select a maintenance service you would like for your drone.
              </Text>
              <Text
                className="font-medium font-worksans leading-[normal] ml-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_800 w-[60%]"
                variant="body9"
              >
                3 Maintenance Tasks Found
                <br />
                <br />
                Battery Charging Service: Battery at 40%
                <br />
                Repair Service: Drone parts regular inspection and repair
                <br />
                Sofware Update Service: Update drone software
              </Text>
              <Stack className="font-worksans lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[46%]">
                <Img
                  src="images/img_arrowright.svg"
                  className="absolute 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] left-[18%] top-[26%] w-[4%]"
                  alt="arrowright Four"
                />
                <Column className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius10 w-[100%]">
                  <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mt-[4px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Column className="justify-start w-[46%]">
                        <Text
                          className="font-semibold text-gray_700 w-[auto]"
                          variant="body9"
                        >
                          DJI Phantom Pro 4
                        </Text>
                        <Text className="DataCollection_One" variant="body10">
                          Surveillance
                        </Text>
                        <Text
                          className="ml-[1px] LicenseFAEightyOne"
                          variant="body12"
                        >
                          ID #2
                        </Text>
                        <Text className="test_4KCamera" variant="body12">
                          3-Axis Gimbal
                        </Text>
                        <Text className="Address6391E2" variant="body12">
                          4K Camera
                        </Text>
                        <Text
                          className="ml-[1px] LicenseFAEightyOne"
                          variant="body12"
                        >
                          30 Minute Flight Time
                        </Text>
                        <Text className="test_27KCamera1" variant="body12">
                          13 m/s Flight Speed
                        </Text>
                        <Text className="test_4KCamera" variant="body12">
                          1375 grams
                        </Text>
                      </Column>
                      <Img
                        src="images/img_ghiblifrontuk.png"
                        className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[44%]"
                        alt="ghiblifrontUK"
                      />
                    </Row>
                    <List
                      className="font-roboto gap-[0] min-h-[auto] ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[95%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-between mr-[3px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[99%]">
                        <Row className="items-center w-[35%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body3"
                          >
                            $10
                          </Text>
                          <Text className="Battery" variant="body6">
                            Battery
                          </Text>
                        </Row>
                        <SelectBox
                          className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[49%]"
                          placeholderClassName="text-white_A700"
                          name="CTA"
                          placeholder="Select"
                          isSearchable={false}
                          isMulti={false}
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillLightblueA701"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between ml-[3px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[99%]">
                        <Row className="items-center w-[33%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body3"
                          >
                            $20
                          </Text>
                          <Text className="Battery" variant="body6">
                            Repair
                          </Text>
                        </Row>
                        <SelectBox
                          className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[49%]"
                          placeholderClassName="text-white_A700"
                          name="CTA One"
                          placeholder="Select"
                          isSearchable={false}
                          isMulti={false}
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillLightblueA701"
                        ></SelectBox>
                      </Row>
                      <Row className="items-center justify-between ml-[3px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[99%]">
                        <Row className="items-center w-[31%]">
                          <Text
                            className="flex font-bold items-center text-black_900 w-[auto]"
                            variant="body3"
                          >
                            $5
                          </Text>
                          <Text className="Battery" variant="body6">
                            Update
                          </Text>
                        </Row>
                        <SelectBox
                          className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[49%]"
                          placeholderClassName="text-white_A700"
                          name="CTA Two"
                          placeholder="Select"
                          isSearchable={false}
                          isMulti={false}
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillLightblueA701"
                        ></SelectBox>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerMaintenanceRequestPage;
