import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Button,
  Slider,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const DroneCatalogBookingSPage = () => {
  const navigate = useNavigate();

  function handleNavigate97() {
    navigate("/initialversiondroneb");
  }
  function handleNavigate98() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate104() {
    navigate("/initialversiondroneb");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[20px] xl:pb-[25px] 2xl:pb-[29px] 3xl:pb-[34px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
          <Row className="bg-gray_401 font-worksans items-center lg:ml-[229px] xl:ml-[287px] 2xl:ml-[323px] 3xl:ml-[388px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius10 w-[34%]">
            <Text
              className="bg-light_blue_500 lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[24px] lg:pl-[18px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rowgroup557"
              variant="body12"
            >
              Booking Schedules
            </Text>
            <Button
              className="font-semibold 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[30%]"
              shape="RoundedBorder5"
              size="xl"
              variant="FillBlueA700"
            >
              Mission Planner
            </Button>
            <Text
              className="common-pointer bg-blue_A700 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[14px] 3xl:pr-[17px] pt-[4px] rowgroup557"
              variant="body12"
              onClick={handleNavigate98}
            >
              Pilot Management
            </Text>
          </Row>
          <Column className="font-inter justify-start lg:ml-[164px] xl:ml-[206px] 2xl:ml-[231px] 3xl:ml-[278px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[58%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Booking Schedule
            </Text>
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[62%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Change the selected schedule for a farmer’s requested service
              </Text>
            </Column>
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
              className="font-worksans 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:mt-[48px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] w-[87%]"
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
                      <Row className="items-start justify-evenly lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
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
                              name="Group326"
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
                            className="plus5"
                            alt="plus"
                          />
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </React.Fragment>
              ))}
            />
            <Row className="font-worksans items-center 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] mt-[2px] w-[38%]">
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
            <Row className="font-inter items-center justify-end ml-[auto] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[87%]">
              <Button
                className="common-pointer font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                onClick={handleNavigate97}
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[162px] xl:ml-[203px] 2xl:ml-[229px] 3xl:ml-[275px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                onClick={handleNavigate104}
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Confirm
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DroneCatalogBookingSPage;
