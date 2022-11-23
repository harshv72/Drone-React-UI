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
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const FarmerMaintenanceRequesPage = () => {
  const navigate = useNavigate();

  function handleNavigate117() {
    navigate("/maintenancebilling");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate117}
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
              src="images/img_progressbar_3.svg"
              className="Progressbar"
              alt="Progressbar"
            />
            <Text className="columnselectroleto" as="h1" variant="h1">
              Drone ID #2
            </Text>
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[29%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Select the service time
              </Text>
            </Column>
          </Column>
          <Row className="bg-light_blue_500 font-worksans items-center lg:ml-[157px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] mr-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[62%]">
            <Column className="bg-blue_A700 xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
              <Text className="Service" variant="body12">
                Service
              </Text>
              <SelectBox
                className="font-semibold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-white_A700 w-[94%]"
                placeholderClassName="text-white_A700"
                name="Group698"
                placeholder="Repair"
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
            <Column className="bg-blue_A700 items-center lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[15%]">
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
          </Row>
          <Column className="font-worksans justify-start lg:ml-[229px] xl:ml-[286px] 2xl:ml-[322px] 3xl:ml-[387px] lg:mr-[233px] xl:mr-[291px] 2xl:mr-[328px] 3xl:mr-[393px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[55%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={43}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00]"
              ref={sliderRef}
              className="w-[100%]"
              items={[...Array(129)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] rounded-radius10 w-[100%]">
                    <Column className="justify-start mt-[4px] w-[98%]">
                      <Text className="ServiceRepair" variant="body12">
                        Service: Repair
                      </Text>
                      <Text className="duration11" variant="body12">
                        Duration: 7 days
                      </Text>
                      <Text className="ServiceStartT" variant="body12">
                        Service Start Time
                      </Text>
                      <Row className="items-start justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
                        <Input
                          className="placeholder:text-light_blue_500 time"
                          wrapClassName="w-[42%]"
                          name="time"
                          placeholder="10:00 AM"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillGray200"
                        ></Input>
                        <Button
                          className="font-normal mt-[2px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[18%]"
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineGray300"
                        >
                          Delete
                        </Button>
                        <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius10 w-[35%]">
                          <Text
                            className="font-bold text-black_901 w-[auto]"
                            variant="body12"
                          >
                            Add a time
                          </Text>
                          <Img
                            src="images/img_plus_35X33.svg"
                            className="plus2"
                            alt="plus"
                          />
                        </Column>
                      </Row>
                      <Input
                        className="placeholder:text-white_A700 GroupNinetyNine"
                        wrapClassName="2xl:mt-[36px] 3xl:mt-[43px] flex lg:mt-[25px] ml-[1px] w-[42%] xl:mt-[32px]"
                        name="Group182"
                        placeholder="Confirm"
                        suffix={
                          <Img
                            src="images/img_checkmark_20X25.svg"
                            className="lg:w-[15px] lg:ml-[14px] lg:mr-[6px] xl:w-[19px] xl:ml-[18px] xl:mr-[8px] 2xl:w-[22px] 2xl:ml-[20px] 2xl:mr-[9px] 3xl:w-[26px] 3xl:ml-[24px] 3xl:mr-[11px] my-[auto]"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillBlueA700"
                      ></Input>
                    </Column>
                  </Column>
                </React.Fragment>
              ))}
            />
            <List
              className="gap-[0] min-h-[auto] mt-[2px] w-[40%]"
              orientation="vertical"
            >
              <Row className="listtwentyfour">
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_700 w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillGray51"
                >
                  24
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_700 w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillGray51"
                >
                  25
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_700 w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillGray51"
                >
                  26
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="OutlineLightblue500"
                >
                  27
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_700 w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillGray51"
                >
                  28
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  29
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  30
                </Button>
              </Row>
              <Line className="self-center w-[100%]" />
              <Row className="listtwentyfour">
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  31
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  01
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  02
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  03
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  04
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  05
                </Button>
                <Button
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-gray_403 w-[13%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillGray51"
                >
                  06
                </Button>
              </Row>
            </List>
            <Row className="font-inter items-center justify-between xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[93%]">
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

export default FarmerMaintenanceRequesPage;
