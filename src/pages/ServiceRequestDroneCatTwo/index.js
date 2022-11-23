import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  SelectBox,
  Slider,
  Input,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestDroneCatTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate133() {
    navigate("/servicerequestselectedone");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate133}
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
          <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mr-[395px] xl:mr-[494px] 2xl:mr-[556px] 3xl:mr-[667px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[46%]">
            <Img
              src="images/img_progressbar_white_A700.svg"
              className="Progressbar"
              alt="Progressbar"
            />
            <Text className="columnselectroleto" as="h1" variant="h1">
              Step 2: Schedule Service
            </Text>
            <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[50%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Select a service and choose your drone
              </Text>
            </Column>
          </Column>
          <Row className="bg-light_blue_500 font-worksans items-start lg:ml-[157px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] mr-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[62%]">
            <Column className="bg-blue_A700 justify-start xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
              <Text className="Service" variant="body12">
                Service
              </Text>
              <SelectBox
                className="font-semibold mb-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[94%]"
                placeholderClassName="text-white_A700"
                name="Group677"
                placeholder="Data Collection"
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
            <Column className="bg-blue_A700 justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
              <Text className="Service" variant="body12">
                Equipment
              </Text>
              <SelectBox
                className="font-semibold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[94%]"
                placeholderClassName="text-white_A700"
                name="Group679"
                placeholder="Camera"
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
                name="Group675"
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
          <Column className="font-worksans justify-start lg:ml-[229px] xl:ml-[286px] 2xl:ml-[322px] 3xl:ml-[387px] lg:mr-[262px] xl:mr-[328px] 2xl:mr-[369px] 3xl:mr-[443px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[52%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={50}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-[98%]"
              items={[...Array(150)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
                    <Column className="justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                      <Text className="Farm3671Old" variant="body12">
                        <span className="text-gray_800 font-worksans font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          Farm:
                        </span>
                        <span className="text-gray_800 font-worksans lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          {" "}
                        </span>
                        <span className="text-gray_800 font-worksans lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          3671 Old Toll Road, Mariposa, CA 95338
                        </span>
                      </Text>
                      <Text className="timeZone" variant="body12">
                        Farmland: West Plot A: Crop
                      </Text>
                      <Text className="ServiceDataC" variant="body12">
                        Service: Data Collection
                      </Text>
                      <Text className="RentalBydate" variant="body12">
                        <span className="text-gray_800 font-worksans lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          Rental:{" "}
                        </span>
                        <span className="text-gray_800 font-worksans font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          By date
                        </span>
                      </Text>
                      <Text className="duration" variant="body12">
                        <span className="text-gray_800 font-worksans lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          Duration:
                        </span>
                        <span className="text-gray_800 font-worksans font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          {" "}
                          1 day
                        </span>
                      </Text>
                      <Text className="duration_One" variant="body12">
                        <span className="text-gray_800 font-worksans lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          Number of flights every day:
                        </span>
                        <span className="text-gray_800 font-worksans font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          {" "}
                          1
                        </span>
                      </Text>
                      <Row className="items-start justify-evenly lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                        <Column className="justify-start w-[42%]">
                          <Text
                            className="columnflighttimespe"
                            variant="body12"
                          >
                            Flight Times Per Day
                          </Text>
                          <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
                            <Input
                              className="placeholder:text-light_blue_500 time"
                              wrapClassName="w-[100%]"
                              name="time"
                              placeholder="10:00 AM"
                              shape="RoundedBorder8"
                              size="md"
                              variant="FillGray200"
                            ></Input>
                            <Input
                              className="placeholder:text-white_A700 GroupNinetyNine"
                              wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] flex lg:mt-[14px] w-[100%] xl:mt-[18px]"
                              name="GroupNinetyNine"
                              placeholder="Confirm"
                              suffix={
                                <Img
                                  src="images/img_checkmark_20X25.svg"
                                  className="mr-[2px] lg:w-[15px] lg:ml-[14px] xl:w-[19px] xl:ml-[18px] 2xl:w-[22px] 2xl:ml-[20px] 3xl:w-[26px] 3xl:ml-[24px] my-[auto]"
                                  alt="checkmark"
                                />
                              }
                              shape="RoundedBorder8"
                              size="sm"
                              variant="FillBlueA700"
                            ></Input>
                          </Column>
                        </Column>
                        <Button
                          className="font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[18%]"
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineGray300"
                        >
                          Delete
                        </Button>
                        <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[35%]">
                          <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[93%]">
                            <Text className="Addaflightti" variant="body12">
                              Add a flight time
                            </Text>
                            <Text className="Addaflightti" variant="body12">
                              Add a flight time
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_plus_35X33.svg"
                            className="plus1"
                            alt="plus"
                          />
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </React.Fragment>
              ))}
            />
            <Row className="items-center mt-[2px] w-[43%]">
              <Button
                className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_700 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                31
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                01
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                02
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                03
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                04
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                05
              </Button>
              <Button
                className="font-semibold xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillGray51"
              >
                06
              </Button>
            </Row>
            <Row className="font-inter items-center justify-between xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
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

export default ServiceRequestDroneCatTwoPage;
