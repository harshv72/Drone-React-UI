import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Button,
  Input,
  SelectBox,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const INITIALVERSIONDroneBPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate5() {
    navigate("/dronecatalogbookings");
  }
  function handleNavigate8() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate9() {
    navigate("/dronecatalogmissionp");
  }
  function handleNavigate11() {
    navigate("/");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[288px] xl:pb-[360px] 2xl:pb-[405px] 3xl:pb-[486px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
          <Row className="font-poppins items-center ml-[3px] w-[91%]">
            <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[23%]">
              <Row className="items-center ml-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[76%]">
                <Img
                  src="images/img_offer.svg"
                  className="offer3"
                  alt="offer"
                />
                <Text className="rowoffer1" variant="body1">
                  Dashboard
                </Text>
              </Row>
              <Row
                className="common-pointer items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[54%]"
                onClick={handleNavigate11}
              >
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="ListMenu21" variant="body12">
                  Drone Catalog
                </Text>
              </Row>
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
                <Img
                  src="images/img_airplane.svg"
                  className="call"
                  alt="airplane"
                />
                <Text className="ListMenu22" variant="body12">
                  Drone Management
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright32"
                  alt="arrowright"
                />
              </Row>
              <Column className="bg-bluegray_900 items-center justify-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-start mt-[4px] w-[99%]">
                  <Img
                    src="images/img_volume.svg"
                    className="call"
                    alt="volume"
                  />
                  <Text className="ListMenu7" variant="body12">
                    Drone Booking
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright_One3"
                    alt="arrowright One"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] min-h-[auto] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]"
                orientation="vertical"
              >
                <Row
                  className="common-pointer listmusic1"
                  onClick={handleNavigate8}
                >
                  <Img
                    src="images/img_music.svg"
                    className="call"
                    alt="music"
                  />
                  <Text className="ListMenu26" variant="body12">
                    Drone Cloud Tracking
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Two4"
                    alt="arrowright Two"
                  />
                </Row>
                <Row className="items-start ml-[2px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question"
                  />
                  <Text className="ListMenu24" variant="body12">
                    Service History
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Three4"
                    alt="arrowright Three"
                  />
                </Row>
              </List>
              <List
                className="gap-[0] lg:mb-[463px] xl:mb-[580px] 2xl:mb-[652px] 3xl:mb-[782px] min-h-[auto] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[89%]"
                orientation="vertical"
              >
                <Row className="listuser">
                  <Img src="images/img_user.svg" className="call" alt="user" />
                  <Text className="ListMenu24" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Four5"
                    alt="arrowright Four"
                  />
                </Row>
                <Row className="listuser">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question One"
                  />
                  <Text className="ListMenu20" variant="body12">
                    Drone AI
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Three3"
                    alt="arrowright Five"
                  />
                </Row>
              </List>
            </Column>
            <Column className="font-inter lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[74%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                Drone Booking
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[57%]">
                <Text className="Group557" variant="body12">
                  Booking Schedules
                </Text>
                <Button
                  className="common-pointer font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[29%]"
                  onClick={handleNavigate9}
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillBlueA700"
                >
                  Mission Planner
                </Button>
                <Text
                  className="common-pointer Group555"
                  variant="body12"
                  onClick={handleNavigate4}
                >
                  Pilot Management
                </Text>
              </Row>
              <Text className="SelectRoleto_Two6" as="h1" variant="h1">
                Booking Schedules
              </Text>
              <Column className="bg-white_A700 font-poppins items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:py-[25px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] rounded-radius30 shadow-bs7 w-[100%]">
                <Column className="items-center justify-start mb-[3px] w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="rowallbookings" variant="body4">
                      All Bookings
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:ml-[366px] 2xl:mt-[7px] 3xl:ml-[439px] 3xl:mt-[8px] flex lg:ml-[260px] lg:mt-[4px] w-[24%] xl:ml-[325px] xl:mt-[6px]"
                      name="GroupTwentyFour"
                      placeholder="Search"
                      prefix={
                        <Img
                          src="images/img_search_24X24.svg"
                          className="cursor-pointer ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#b5b7c0"
                            className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[15px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                      shape="srcRoundedBorder10"
                      size="mdSrc"
                      variant="srcFillGray52"
                    ></Input>
                    <SelectBox
                      className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_602 tracking-ls1 w-[17%]"
                      placeholderClassName="text-gray_602"
                      name="GroupTwentyFive"
                      placeholder="Short by : Newest"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_804.svg"
                          className="lg:w-[12px] lg:h-[13px] lg:mr-[8px] xl:w-[16px] xl:h-[17px] xl:mr-[10px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[12px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillGray52"
                    ></SelectBox>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pt-[2px] rounded-radius5 w-[100%]">
                    <Row className="items-center w-[90%]">
                      <Text className="SimulationID" variant="body12">
                        Service ID#
                      </Text>
                      <Text className="Farmland" variant="body12">
                        Farmland
                      </Text>
                      <Text
                        className="lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] SimulationID"
                        variant="body12"
                      >
                        Service
                      </Text>
                      <Text
                        className="2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] SimulationID"
                        variant="body12"
                      >
                        Scheduled Service Time
                      </Text>
                      <Text
                        className="lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] rowserviceid"
                        variant="body12"
                      >
                        Drone ID#
                      </Text>
                      <Text
                        className="lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] mt-[1px] rowserviceid"
                        variant="body12"
                      >
                        Schedule
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pb-[1px] pr-[1px] w-[92%]"
                      orientation="vertical"
                    >
                      <Row className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1144
                        </Text>
                        <Text className="timeZone7" variant="body12">
                          West Plot A: Crop
                        </Text>
                        <Text className="DataCollection3" variant="body12">
                          Data Collection
                        </Text>
                        <Text className="test_06292022" variant="body12">
                          06/29/2022: Half Day
                        </Text>
                        <Text
                          className="lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] id#Counter"
                          variant="body12"
                        >
                          1
                        </Text>
                        <Text
                          className="common-pointer bg-red_300 font-medium xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                          onClick={handleNavigate5}
                        >
                          Change
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1000
                        </Text>
                        <Text
                          className="2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          West Plot A: Crop
                        </Text>
                        <Text className="DataCollection3" variant="body12">
                          Data Collection
                        </Text>
                        <Text className="test_06292022" variant="body12">
                          04/20/2022: Full Day
                        </Text>
                        <Text
                          className="lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] id#Counter"
                          variant="body12"
                        >
                          2
                        </Text>
                        <Text
                          className="bg-red_300 font-medium xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                        >
                          Change
                        </Text>
                      </Row>
                    </List>
                  </Column>
                  <Row className="items-start justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[92%]">
                    <Text className="rowlanguage_two" variant="body12">
                      Showing data 1 to 8 of 256K entries
                    </Text>
                    <Row className="items-start justify-between rounded-radius4 w-[30%]">
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray201"
                      >
                        {"<"}
                      </Button>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineDeeppurpleA400"
                      >
                        1
                      </Button>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[9%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray201"
                      >
                        2
                      </Button>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 call"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray201"
                      >
                        3
                      </Button>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray201"
                      >
                        4
                      </Button>
                      <Text className="Fourteen" variant="body14">
                        ...
                      </Text>
                      <Text className="Frame296" variant="body14">
                        40
                      </Text>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineGray201"
                      >
                        {">"}
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default INITIALVERSIONDroneBPage;
