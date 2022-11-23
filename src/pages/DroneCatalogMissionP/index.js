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

const DroneCatalogMissionPPage = () => {
  const navigate = useNavigate();

  function handleNavigate101() {
    navigate("/initialversiondroneb");
  }
  function handleNavigate102() {
    navigate("/systemadminpilotmanaone");
  }
  function handleNavigate103() {
    navigate("/dronecatalogmissionpone");
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
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[73%]">
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="ListMenu21" variant="body12">
                  Drone Cloud Tracking
                </Text>
              </Row>
              <Column className="bg-bluegray_900 items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-end my-[3px] w-[99%]">
                  <Img
                    src="images/img_clock.svg"
                    className="call"
                    alt="clock"
                  />
                  <Text className="ListMenu27" variant="body12">
                    Drone Catalog
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright27"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[89%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question"
                />
                <Text className="ListMenu11" variant="body12">
                  Service History
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_One2"
                  alt="arrowright One"
                />
              </Row>
              <Row className="items-center xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]">
                <Img src="images/img_music.svg" className="call" alt="music" />
                <Text className="ListMenu6" variant="body12">
                  Drone Data
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Two3"
                  alt="arrowright Two"
                />
              </Row>
              <List
                className="gap-[0] lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[90%]"
                orientation="vertical"
              >
                <Row className="listquestion_one1">
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
                    alt="arrowright Three"
                  />
                </Row>
                <Row className="listquestion_one1">
                  <Img src="images/img_user.svg" className="call" alt="user" />
                  <Text className="ListMenu11" variant="body12">
                    Pilot Management
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Four4"
                    alt="arrowright Four"
                  />
                </Row>
              </List>
            </Column>
            <Column className="font-inter lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[74%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                Drone Booking
              </Text>
              <Row className="bg-gray_401 font-worksans items-center ml-[4px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[57%]">
                <Text
                  className="common-pointer bg-light_blue_A700 lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[23px] 3xl:pb-[27px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rowgroup557"
                  variant="body12"
                  onClick={handleNavigate101}
                >
                  Booking Schedules
                </Text>
                <Button
                  className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblue500"
                >
                  Mission Planner
                </Button>
                <Text
                  className="common-pointer Group555"
                  variant="body12"
                  onClick={handleNavigate102}
                >
                  Pilot Management
                </Text>
              </Row>
              <Text
                className="lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] text-bluegray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Mission Planner
              </Text>
              <Column className="bg-white_A700 font-poppins items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:py-[24px] xl:py-[30px] 2xl:py-[34px] 3xl:py-[40px] rounded-radius30 shadow-bs7 w-[100%]">
                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="rowallbookings" variant="body4">
                      All Mission Plans
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:ml-[319px] 2xl:mt-[9px] 3xl:ml-[383px] 3xl:mt-[10px] flex lg:ml-[226px] lg:mt-[6px] w-[24%] xl:ml-[283px] xl:mt-[8px]"
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
                      className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_602 tracking-ls1 w-[17%]"
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
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] p-[2px] rounded-radius5 w-[100%]">
                    <List
                      className="gap-[0] lg:mb-[307px] xl:mb-[385px] 2xl:mb-[433px] 3xl:mb-[519px] min-h-[auto] w-[92%]"
                      orientation="vertical"
                    >
                      <Row className="items-center lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[99%]">
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
                          className="2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] mt-[1px] rowserviceid"
                          variant="body12"
                        >
                          Drone ID #
                        </Text>
                        <Text
                          className="xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] mt-[1px] rowserviceid"
                          variant="body12"
                        >
                          Plan ID #
                        </Text>
                        <Text
                          className="lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] SimulationID"
                          variant="body12"
                        >
                          Mission Plan
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
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
                        <Text className="One82" variant="body12">
                          1
                        </Text>
                        <Text
                          className="lg:ml-[143px] xl:ml-[179px] 2xl:ml-[202px] 3xl:ml-[242px] id#Counter"
                          variant="body12"
                        >
                          123
                        </Text>
                        <Text
                          className="common-pointer bg-red_300 font-medium xl:ml-[104px] 2xl:ml-[118px] 3xl:ml-[141px] lg:ml-[83px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                          onClick={handleNavigate103}
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
                        <Text className="One82" variant="body12">
                          2
                        </Text>
                        <Text
                          className="lg:ml-[140px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          None Assigned
                        </Text>
                        <Text
                          className="bg-red_300 font-medium lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
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

export default DroneCatalogMissionPPage;
