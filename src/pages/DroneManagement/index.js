import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Input,
  SelectBox,
  Line,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DroneManagementPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/adddrone");
  }
  function handleNavigate14() {
    navigate("/");
  }
  function handleNavigate15() {
    navigate("/editdrone");
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
            <Column className="bg-white_A700 lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] shadow-bs7 w-[23%]">
              <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
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
                className="common-pointer items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[55%]"
                onClick={handleNavigate14}
              >
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="ListMenu21" variant="body12">
                  Drone Catalog
                </Text>
              </Row>
              <Column className="bg-bluegray_900 items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                <Row className="items-end my-[3px] w-[99%]">
                  <Img
                    src="images/img_clock.svg"
                    className="call"
                    alt="clock"
                  />
                  <Text
                    className="mb-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] ListMenu10"
                    variant="body12"
                  >
                    Drone Management
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright32"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] lg:mb-[461px] xl:mb-[577px] 2xl:mb-[649px] 3xl:mb-[779px] min-h-[auto] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[93%]"
                orientation="vertical"
              >
                <Row className="items-start mx-[auto] lg:my-[13px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question"
                  />
                  <Text className="ListMenu11" variant="body12">
                    Drone Booking
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_One3"
                    alt="arrowright One"
                  />
                </Row>
                <Row className="items-end justify-between lg:my-[13px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[100%]">
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
                <Row className="items-start mx-[auto] lg:my-[13px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question One"
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
                <Row className="items-start ml-[3px] lg:my-[13px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[99%]">
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
                <Row className="items-start ml-[3px] lg:my-[13px] xl:my-[16px] 2xl:my-[19px] 3xl:my-[22px] w-[99%]">
                  <Img
                    src="images/img_question.svg"
                    className="call"
                    alt="question Two"
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
                Drone Management
              </Text>
              <Column className="bg-gray_401 font-worksans items-end justify-end lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius10 w-[22%]">
                <Text
                  className="bg-light_blue_500 2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[1px] lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] lg:px-[24px] xl:px-[30px] 2xl:px-[34px] 3xl:px-[40px] rowdata_collection_one"
                  variant="body12"
                >
                  Drone List
                </Text>
              </Column>
              <Row className="font-inter items-start justify-between lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[98%]">
                <Text
                  className="lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Add, update, or delete drones
                </Text>
                <Row
                  className="common-pointer bg-gray_808 font-lato items-center justify-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] p-[4px] rounded-radius405 w-[17%]"
                  onClick={handleNavigate10}
                >
                  <Stack className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] ml-[4px] mt-[1px] px-[2px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
                    <Img
                      src="images/img_minimize.svg"
                      className="absolute inset-[0] justify-center m-[auto] call"
                      alt="minimize"
                    />
                  </Stack>
                  <Text
                    className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    Add Drone
                  </Text>
                </Row>
              </Row>
              <Column className="bg-white_A700 font-poppins items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:py-[24px] xl:py-[30px] 2xl:py-[34px] 3xl:py-[40px] rounded-radius30 shadow-bs7 w-[100%]">
                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="rowallbookings" variant="body4">
                      All Drones
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:ml-[389px] 2xl:mt-[9px] 3xl:ml-[467px] 3xl:mt-[10px] flex lg:ml-[276px] lg:mt-[6px] w-[24%] xl:ml-[346px] xl:mt-[8px]"
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
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-radius5 w-[100%]">
                    <Stack className="lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] w-[100%]">
                      <Row className="absolute items-start left-[4%] right-[7%] w-[89%]">
                        <Text className="rowlanguage_two" variant="body12">
                          Drone ID#
                        </Text>
                        <Text
                          className="2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] rowlanguage_two"
                          variant="body12"
                        >
                          Drone Model
                        </Text>
                        <Text
                          className="lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] rowlanguage_two"
                          variant="body12"
                        >
                          Service
                        </Text>
                        <Text
                          className="font-medium leading-[normal] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] text-bluegray_200 tracking-ls1 w-[17%]"
                          variant="body12"
                        >
                          Available, Booked, or
                          <br /> Deployed Status
                        </Text>
                        <Text
                          className="lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] rowlanguage_two"
                          variant="body12"
                        >
                          Delete
                        </Text>
                        <Text
                          className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] rowserviceid"
                          variant="body12"
                        >
                          Modify
                        </Text>
                      </Row>
                      <Line className="absolute bg-gray_201 bottom-[14%] h-[1px] w-[100%]" />
                    </Stack>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[22px] xl:pb-[27px] 2xl:pb-[31px] 3xl:pb-[37px] lg:pr-[22px] xl:pr-[27px] 2xl:pr-[31px] 3xl:pr-[37px] w-[92%]"
                      orientation="vertical"
                    >
                      <Row
                        className="common-pointer items-start lg:my-[13px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] rounded-radius5 w-[100%]"
                        onClick={handleNavigate15}
                      >
                        <Text className="id#Counter" variant="body12">
                          ID# 1
                        </Text>
                        <Text
                          className="xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] id#Counter"
                          variant="body12"
                        >
                          DJI Mini SE
                        </Text>
                        <Text className="Livestack" variant="body12">
                          Data Collection
                        </Text>
                        <Text
                          className="lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          Deployed
                        </Text>
                        <Button
                          className="font-medium xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] mt-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                        <Button
                          className="font-medium mb-[4px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start lg:my-[13px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 2
                        </Text>
                        <Text
                          className="xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] id#Counter"
                          variant="body12"
                        >
                          DJI Mini SE
                        </Text>
                        <Text className="Livestack" variant="body12">
                          Data Collection
                        </Text>
                        <Text className="One82" variant="body12">
                          Available
                        </Text>
                        <Button
                          className="font-medium lg:ml-[100px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] mt-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                        <Button
                          className="font-medium mb-[4px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start lg:my-[13px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 3
                        </Text>
                        <Text
                          className="xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] id#Counter"
                          variant="body12"
                        >
                          DJI Mini SE
                        </Text>
                        <Text className="Livestack" variant="body12">
                          Data Collection
                        </Text>
                        <Text className="One82" variant="body12">
                          Booked
                        </Text>
                        <Button
                          className="font-medium lg:ml-[109px] xl:ml-[136px] 2xl:ml-[154px] 3xl:ml-[184px] mt-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                        <Button
                          className="font-medium mb-[4px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start lg:my-[13px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 4
                        </Text>
                        <Text
                          className="xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] id#Counter"
                          variant="body12"
                        >
                          DJI Phantom Pro
                        </Text>
                        <Text
                          className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] id#Counter"
                          variant="body12"
                        >
                          Surveillance
                        </Text>
                        <Text
                          className="lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          Deployed
                        </Text>
                        <Button
                          className="font-medium xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] mt-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
                        <Button
                          className="font-medium mb-[4px] 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[6%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="FillRed300"
                        >
                          Edit
                        </Button>
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

export default DroneManagementPage;
