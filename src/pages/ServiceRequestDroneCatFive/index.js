import React from "react";

import {
  Stack,
  Column,
  Img,
  Text,
  Row,
  SelectBox,
  Button,
  Input,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestDroneCatFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate35() {
    navigate("/initialversiondroneb");
  }
  function handleNavigate38() {
    navigate("/editselecteddronedetailsone");
  }
  function handleNavigate39() {
    navigate("/editselecteddronedetailsone");
  }
  function handleNavigate40() {
    navigate("/editselecteddronedetailsone");
  }
  function handleNavigate41() {
    navigate("/servicerequestselectedthree");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-inter lg:h-[578px] xl:h-[723px] 2xl:h-[814px] 3xl:h-[976px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] 2xl:h-[1057px] 3xl:h-[1268px] lg:h-[751px] xl:h-[940px] left-[0] w-[88%]">
          <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[12%] w-[52%]">
            <Column className="justify-start w-[100%]">
              <Img
                src="images/img_progressbar.svg"
                className="Progressbar"
                alt="Progressbar"
              />
              <Text className="columnselectroleto" as="h1" variant="h1">
                Drone Catalog
              </Text>
            </Column>
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[53%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Add, update, or edit drones to the catalog.
              </Text>
            </Column>
          </Column>
          <Stack className="absolute font-worksans 2xl:h-[1057px] 3xl:h-[1268px] lg:h-[751px] xl:h-[940px] w-[100%]">
            <Stack className="absolute bottom-[2%] lg:h-[539px] xl:h-[675px] 2xl:h-[759px] 3xl:h-[910px] right-[5%] w-[79%]">
              <Img
                src="images/img_group87174.png"
                className="absolute bottom-[0] lg:h-[187px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[315px] left-[0] w-[38%]"
                alt="Group87174"
              />
              <Column className="absolute justify-start right-[0] top-[0] w-[90%]">
                <Row className="bg-light_blue_500 items-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[100%]">
                  <Column className="bg-blue_A700 justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[1px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <Row className="items-center mb-[2px] w-[94%]">
                      <Column className="w-[78%]">
                        <Text className="Service" variant="body12">
                          Service
                        </Text>
                        <Text
                          className="font-semibold text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          Data Collection
                        </Text>
                      </Column>
                      <Img
                        src="images/img_arrowdown_white_A700.svg"
                        className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[11%]"
                        alt="arrowdown"
                      />
                    </Row>
                  </Column>
                  <Column className="bg-blue_A700 items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] mt-[1px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <Row className="items-start justify-between mb-[2px] w-[97%]">
                      <Column className="items-center justify-start w-[60%]">
                        <Text className="Service" variant="body12">
                          Date & Time
                        </Text>
                        <Text
                          className="font-semibold text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          29/06/2022{" "}
                        </Text>
                      </Column>
                      <Img
                        src="images/img_calendar.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[3px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="calendar"
                      />
                    </Row>
                  </Column>
                  <Column className="bg-blue_A700 justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <SelectBox
                      className="font-normal ml-[2px] not-italic pb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_300 w-[96%]"
                      placeholderClassName="text-gray_300"
                      name="Group736"
                      placeholder="Price"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[7px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[9px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                    ></SelectBox>
                    <Text className="columngroup736" variant="body12">
                      {"< $200"}
                    </Text>
                  </Column>
                  <Column className="bg-blue_A700 justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <SelectBox
                      className="font-normal ml-[2px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_300 w-[96%]"
                      placeholderClassName="text-gray_300"
                      name="Group738"
                      placeholder="Equipment"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[7px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[9px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Text className="columngroup736" variant="body12">
                      Thermal Camera
                    </Text>
                  </Column>
                  <Column className="bg-blue_A700 justify-start xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <SelectBox
                      className="font-normal ml-[2px] not-italic pb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_300 w-[96%]"
                      placeholderClassName="text-gray_300"
                      name="Group734"
                      placeholder="Brand"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[7px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[9px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                    ></SelectBox>
                    <Text className="columngroup736" variant="body12">
                      DJI
                    </Text>
                  </Column>
                  <Column className="bg-blue_A700 justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] my-[3px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[16%]">
                    <SelectBox
                      className="font-normal ml-[2px] not-italic pb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_300 w-[96%]"
                      placeholderClassName="text-gray_300"
                      name="Group732"
                      placeholder="Status"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[7px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[9px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                    ></SelectBox>
                    <Text className="columngroup736" variant="body12">
                      Available
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-medium ml-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] text-gray_800 w-[auto]"
                  variant="body9"
                >
                  3 Drones Found
                </Text>
              </Column>
              <Stack className="absolute lg:h-[146px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[246px] left-[10%] top-[17%] w-[30%]">
                <Img
                  src="images/img_arrowright.svg"
                  className="absolute lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[19%] top-[31%] w-[4%]"
                  alt="arrowright"
                />
                <Column className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[100%]">
                  <Column className="justify-start lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                    <Row className="items-end justify-between w-[100%]">
                      <Column className="justify-start w-[35%]">
                        <Text
                          className="font-semibold text-gray_700 w-[auto]"
                          variant="body9"
                        >
                          DJI Mini SE
                        </Text>
                        <Text className="DataCollection_One" variant="body10">
                          Data Collection
                        </Text>
                        <Text className="test_3AxisGimbal" variant="body12">
                          3-Axis Gimbal
                        </Text>
                        <Text className="test_27KCamera" variant="body12">
                          2.7K Camera
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group87174.png"
                        className="mb-[3px] ghiblifrontUK2"
                        alt="ghiblifrontUK"
                      />
                    </Row>
                    <Text className="test_3AxisGimbal" variant="body12">
                      30 Minute Flight Time
                    </Text>
                    <Text className="test_8msFlightSp" variant="body12">
                      8 m/s Flight Speed
                    </Text>
                    <Text className="weight" variant="body12">
                      249 grams
                    </Text>
                    <Row className="font-roboto items-center justify-between ml-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[94%]">
                      <Row className="items-center justify-between w-[32%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body3"
                        >
                          $80
                        </Text>
                        <Text className="hour" variant="body6">
                          / hour
                        </Text>
                      </Row>
                      <Button
                        className="common-pointer font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                        onClick={handleNavigate38}
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillLightblueA701"
                      >
                        Edit
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="absolute lg:h-[146px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[246px] right-[26%] top-[17%] w-[30%]">
                <Img
                  src="images/img_arrowright.svg"
                  className="absolute lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[19%] top-[31%] w-[4%]"
                  alt="arrowright One"
                />
                <Column className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[100%]">
                  <Column className="justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mt-[4px] w-[100%]">
                    <Row className="items-end justify-between w-[100%]">
                      <Column className="justify-start w-[45%]">
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
                          className="ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columnghiblifrontuk"
                          variant="body12"
                        >
                          3-Axis Gimbal
                        </Text>
                        <Text className="test_4KCamera" variant="body12">
                          4K Camera
                        </Text>
                      </Column>
                      <Img
                        src="images/img_ghiblifrontuk.png"
                        className="mb-[3px] ghiblifrontUK2"
                        alt="ghiblifrontUK One"
                      />
                    </Row>
                    <Text
                      className="ml-[2px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columnghiblifrontuk"
                      variant="body12"
                    >
                      30 Minute Flight Time
                    </Text>
                    <Text className="test_13msFlightS" variant="body12">
                      13 m/s Flight Speed
                    </Text>
                    <Text className="test_8msFlightSp" variant="body12">
                      1375 grams
                    </Text>
                    <Row className="font-roboto items-center ml-[2px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[94%]">
                      <Row className="items-center justify-between w-[37%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body3"
                        >
                          $100
                        </Text>
                        <Text className="hour" variant="body6">
                          / hour
                        </Text>
                      </Row>
                      <Button
                        className="common-pointer font-bold 2xl:ml-[107px] 3xl:ml-[129px] lg:ml-[76px] xl:ml-[95px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                        onClick={handleNavigate39}
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillLightblueA701"
                      >
                        Edit
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Stack>
            <Img
              src="images/img_arrowright.svg"
              className="absolute lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] right-[18%] top-[45%] w-[1%]"
              alt="arrowright Two"
            />
            <Column className="absolute bg-white_A700 border border-gray_300 border-solid h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] right-[0] rounded-radius10 w-[24%]">
              <Column className="justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mt-[4px] w-[100%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="justify-start w-[40%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body9"
                    >
                      DJI Agras T20
                    </Text>
                    <Text
                      className="font-bold text-gray_700 w-[auto]"
                      variant="body10"
                    >
                      Payload
                    </Text>
                    <Text
                      className="ml-[1px] mt-[2px] columnghiblifrontuk"
                      variant="body12"
                    >
                      20 L Spray Tank
                    </Text>
                    <Text className="test_6LminSprayR" variant="body12">
                      6 L/min Spray Rate
                    </Text>
                  </Column>
                  <Img
                    src="images/img_ghiblifrontuk_69X143.png"
                    className="mb-[1px] ghiblifrontUK2"
                    alt="ghiblifrontUK Two"
                  />
                </Row>
                <Text className="ml-[1px] Address6391E2" variant="body12">
                  15 Minute Flight Time
                </Text>
                <Text className="test_6LminSprayR" variant="body12">
                  7 m/s Flight Speed
                </Text>
                <Text className="test_13msFlightS" variant="body12">
                  42.6 kilograms
                </Text>
                <Row className="font-roboto items-center justify-between lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[94%]">
                  <Row className="items-center justify-between w-[37%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      $180
                    </Text>
                    <Text className="hour" variant="body6">
                      / hour
                    </Text>
                  </Row>
                  <Button
                    className="common-pointer font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[24%]"
                    onClick={handleNavigate40}
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillLightblueA701"
                  >
                    Edit
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_edit.svg"
              className="absolute lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] right-[34%] top-[37%] lg:w-[47px] xl:w-[59px] 2xl:w-[67px] 3xl:w-[80px]"
              alt="edit Three"
            />
            <Column className="absolute bg-gray_401 justify-end left-[30%] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius10 top-[3%] w-[16%]">
              <Button
                className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[78%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillLightblue500"
              >
                Catalog Manaagement
              </Button>
            </Column>
            <Column className="absolute bg-white_A700 font-poppins justify-start left-[0] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] shadow-bs7 w-[21%]">
              <Row className="items-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[78%]">
                <Img
                  src="images/img_offer.svg"
                  className="lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                  alt="offer"
                />
                <Text
                  className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] text-black_901 tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Dashboard
                </Text>
              </Row>
              <Input
                className="font-medium p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-white_A700 text-white_A700 tracking-ls1 w-[100%]"
                wrapClassName="2xl:mt-[47px] 3xl:mt-[57px] flex lg:mt-[33px] w-[100%] xl:mt-[42px]"
                name="Group547"
                placeholder="Drone Catalog"
                prefix={
                  <Img
                    src="images/img_icon_24_outline_keysquare.svg"
                    className="ml-[2px] lg:w-[15px] lg:h-[16px] lg:mr-[8px] xl:w-[18px] xl:h-[19px] xl:mr-[10px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[12px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[14px] my-[auto]"
                    alt="icon / 24 / outline / key-square"
                  />
                }
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray900"
              ></Input>
              <Row className="items-end 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]">
                <Img
                  src="images/img_airplane.svg"
                  className="airplane"
                  alt="airplane"
                />
                <Text
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] ListMenu26"
                  variant="body12"
                >
                  Drone Management
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] my-[4px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                  alt="arrowright Three"
                />
              </Row>
              <List
                className="gap-[0] lg:mb-[406px] xl:mb-[508px] 2xl:mb-[572px] 3xl:mb-[686px] min-h-[auto] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[93%]"
                orientation="vertical"
              >
                <Row
                  className="common-pointer items-start mx-[auto] lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[99%]"
                  onClick={handleNavigate35}
                >
                  <Img
                    src="images/img_question.svg"
                    className="airplane"
                    alt="question"
                  />
                  <Text
                    className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[4px] text-bluegray_900 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Drone Booking
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] mt-[2px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="arrowright Four"
                  />
                </Row>
                <Row className="items-end justify-between lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[100%]">
                  <Img
                    src="images/img_music.svg"
                    className="airplane"
                    alt="music"
                  />
                  <Text
                    className="font-medium mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Drone Cloud Tracking
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] my-[4px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="arrowright Five"
                  />
                </Row>
                <Row className="items-start mx-[auto] lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="airplane"
                    alt="question One"
                  />
                  <Text className="ListMenu3" variant="body12">
                    Service History
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[47px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="arrowright Six"
                  />
                </Row>
                <Row className="items-start ml-[3px] lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[99%]">
                  <Img
                    src="images/img_user.svg"
                    className="airplane"
                    alt="user"
                  />
                  <Text className="ListMenu3" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] mt-[2px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="arrowright Seven"
                  />
                </Row>
                <Row className="items-start ml-[3px] lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="airplane"
                    alt="question Two"
                  />
                  <Text
                    className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[2px] text-bluegray_900 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Drone AI
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                    alt="arrowright Eight"
                  />
                </Row>
              </List>
            </Column>
          </Stack>
        </Stack>
        <Stack className="absolute lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] top-[0] w-[100%]">
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
        <Column
          className="common-pointer absolute bg-white_A700 border border-gray_300 border-solid bottom-[15%] font-worksans items-center justify-start lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] right-[1%] rounded-radius10 w-[10%]"
          onClick={handleNavigate41}
        >
          <Text
            className="font-bold leading-[normal] mt-[1px] text-black_901 w-[99%]"
            variant="body3"
          >
            Add A New Drone
          </Text>
          <Img
            src="images/img_plus.svg"
            className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:mb-[43px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[73px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[35%]"
            alt="plus"
          />
        </Column>
      </Stack>
    </>
  );
};

export default ServiceRequestDroneCatFivePage;
