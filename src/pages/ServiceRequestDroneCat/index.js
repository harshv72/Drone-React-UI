import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  SelectBox,
  Slider,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestDroneCatPage = () => {
  const navigate = useNavigate();

  function handleNavigate146() {
    navigate("/servicerequestdronecatone");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate146}
      >
        <Column className="justify-end w-[100%]">
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
          <Column className="justify-start lg:ml-[157px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:mr-[227px] xl:mr-[284px] 2xl:mr-[320px] 3xl:mr-[384px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[62%]">
            <Img
              src="images/img_progressbar_white_A700.svg"
              className="Progressbar6"
              alt="Progressbar"
            />
            <Text className="SelectRoleto_One1" as="h1" variant="h1">
              Drone Catalog
            </Text>
            <Column className="font-inter items-center justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[36%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Select a service and choose your drone
              </Text>
            </Column>
            <Row className="bg-light_blue_500 font-worksans items-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[100%]">
              <Column className="bg-blue_A700 justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[3px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Text className="Service" variant="body12">
                  Service
                </Text>
                <SelectBox
                  className="font-semibold mb-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[94%]"
                  placeholderClassName="text-white_A700"
                  name="Group656"
                  placeholder="Surveillance"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_A700.svg"
                      className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[8px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[10px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </Column>
              <Column className="bg-blue_A700 items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Row className="items-center justify-between mb-[2px] w-[97%]">
                  <Column className="items-center w-[60%]">
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
                    className="calendar1"
                    alt="calendar"
                  />
                </Row>
              </Column>
              <Column className="bg-blue_A700 items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Row className="items-center justify-between mb-[2px] w-[96%]">
                  <Column className="w-[34%]">
                    <Text className="Service" variant="body12">
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      {"< $200"}
                    </Text>
                  </Column>
                  <Img
                    src="images/img_arrowdown_white_A700.svg"
                    className="arrowdown_One"
                    alt="arrowdown One"
                  />
                </Row>
              </Column>
              <Column className="bg-blue_A700 justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Text className="Service" variant="body12">
                  Equipment
                </Text>
                <SelectBox
                  className="font-semibold mb-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[94%]"
                  placeholderClassName="text-white_A700"
                  name="Group658"
                  placeholder="Thermal Camera"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_A700.svg"
                      className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[8px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[10px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </Column>
              <Column className="bg-blue_A700 justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] mt-[4px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Text className="columnbrand" variant="body12">
                  Brand
                </Text>
                <SelectBox
                  className="font-semibold mb-[2px] ml-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[96%]"
                  placeholderClassName="text-white_A700"
                  name="Group654"
                  placeholder="DJI"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_A700.svg"
                      className="mr-[0] lg:w-[9px] lg:h-[6px] xl:w-[11px] xl:h-[8px] 2xl:w-[13px] 2xl:h-[8px] 3xl:w-[15px] 3xl:h-[10px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
              </Column>
              <Column className="bg-blue_A700 items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
                <Row className="items-center justify-between mb-[2px] w-[96%]">
                  <Column className="w-[45%]">
                    <Text className="Service" variant="body12">
                      Status
                    </Text>
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      variant="body12"
                    >
                      Available
                    </Text>
                  </Column>
                  <Img
                    src="images/img_arrowdown_white_A700.svg"
                    className="arrowdown_One"
                    alt="arrowdown Four"
                  />
                </Row>
              </Column>
            </Row>
            <Text className="test_1DronesFound" variant="body9">
              2 Drones Found
            </Text>
            <Stack className="font-worksans lg:h-[163px] xl:h-[204px] 2xl:h-[230px] 3xl:h-[276px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[72%]">
              <Img
                src="images/img_arrowright.svg"
                className="absolute cursor-pointer 3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] left-[8%] top-[41%] w-[2%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowright"
              />
              <Slider
                slidesToShow={4}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] absolute"
                ref={sliderRef}
                className="absolute w-[100%]"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[100%]">
                      <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[4px] w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Column className="justify-start w-[46%]">
                            <Text
                              className="font-semibold text-gray_700 w-[auto]"
                              variant="body9"
                            >
                              DJI Phantom Pro 4
                            </Text>
                            <Text
                              className="DataCollection_One"
                              variant="body10"
                            >
                              Surveillance
                            </Text>
                            <Text className="duration3" variant="body12">
                              ID #2
                            </Text>
                            <Text className="test_13msFlightS" variant="body12">
                              3-Axis Gimbal
                            </Text>
                            <Text className="test_27KCamera1" variant="body12">
                              4K Camera
                            </Text>
                            <Text className="duration3" variant="body12">
                              30 Minute Flight Time
                            </Text>
                            <Text className="test_6LminSprayR" variant="body12">
                              13 m/s Flight Speed
                            </Text>
                            <Text className="test_13msFlightS" variant="body12">
                              1375 grams
                            </Text>
                          </Column>
                          <Img
                            src="images/img_ghiblifrontuk.png"
                            className="ghiblifrontUK2"
                            alt="ghiblifrontUK"
                          />
                        </Row>
                        <Row className="font-roboto items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[94%]">
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
                          <SelectBox
                            className="font-bold lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-white_A700 w-[49%]"
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
                      </Column>
                    </Column>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
            </Stack>
            <Row className="font-inter items-center justify-end ml-[auto] 2xl:mt-[109px] 3xl:mt-[131px] lg:mt-[77px] xl:mt-[97px] w-[82%]">
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[162px] xl:ml-[203px] 2xl:ml-[229px] 3xl:ml-[275px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
          </Column>
          <Img
            src="images/img_group87174.png"
            className="Group871741"
            alt="Group87174"
          />
        </Column>
      </Column>
    </>
  );
};

export default ServiceRequestDroneCatPage;
