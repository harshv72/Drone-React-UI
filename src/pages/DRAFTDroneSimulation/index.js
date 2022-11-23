import React from "react";

import {
  Stack,
  Column,
  Text,
  Row,
  Img,
  Button,
  Input,
  SelectBox,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DRAFTDroneSimulationPage = () => {
  const navigate = useNavigate();

  function handleNavigate129() {
    navigate("/dronesimulationdetails");
  }
  function handleNavigate130() {
    navigate("/createasimulateddrone");
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Stack className="bg-white_A700 font-inter lg:h-[1164px] xl:h-[1456px] 2xl:h-[1638px] 3xl:h-[1965px] mx-[auto] w-[100%]">
        <Column className="absolute items-center justify-start top-[0] w-[100%]">
          <Column className="justify-start w-[100%]">
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
              <Text
                className="lg:ml-[249px] xl:ml-[312px] 2xl:ml-[351px] 3xl:ml-[421px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Drone Simulation Management
              </Text>
            </Column>
            <Column className="bg-gray_401 font-worksans items-center justify-end lg:ml-[243px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[410px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius10 w-[15%]">
              <Button
                className="font-semibold mt-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[84%]"
                shape="RoundedBorder5"
                size="xl"
                variant="FillLightblue500"
              >
                Simulated Drones
              </Button>
            </Column>
          </Column>
        </Column>
        <Stack className="absolute 3xl:h-[1014px] lg:h-[601px] xl:h-[751px] 2xl:h-[845px] right-[10%] top-[16%] w-[67%]">
          <Column className="absolute bg-white_A700 font-poppins items-center justify-start lg:py-[24px] xl:py-[30px] 2xl:py-[34px] 3xl:py-[40px] rounded-radius30 shadow-bs7 top-[4%] w-[100%]">
            <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
              <Row className="items-start w-[92%]">
                <Text className="rowallbookings" variant="body4">
                  All Simulated Drones
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:ml-[271px] 2xl:mt-[9px] 3xl:ml-[325px] 3xl:mt-[10px] flex lg:ml-[192px] lg:mt-[6px] w-[24%] xl:ml-[241px] xl:mt-[8px]"
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
              <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pt-[2px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center w-[91%]">
                    <Text className="SimulationID" variant="body12">
                      Simulation ID #
                    </Text>
                    <Text className="Status" variant="body12">
                      Drone ID #
                    </Text>
                    <Text
                      className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] mt-[1px] rowserviceid"
                      variant="body12"
                    >
                      Drone Model
                    </Text>
                    <Text
                      className="lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] SimulationID"
                      variant="body12"
                    >
                      Mission Plan ID #
                    </Text>
                    <Text
                      className="3xl:ml-[106px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] SimulationID"
                      variant="body12"
                    >
                      Simulation Status
                    </Text>
                    <Text
                      className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] mt-[1px] rowserviceid"
                      variant="body12"
                    >
                      Server ID #
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[92%]">
                    <Row className="items-start w-[93%]">
                      <Row
                        className="common-pointer items-start w-[88%]"
                        onClick={handleNavigate129}
                      >
                        <Text
                          className="mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          ID# 12345
                        </Text>
                        <Text
                          className="2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          ID# 1
                        </Text>
                        <Text
                          className="3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] rowid#counter"
                          variant="body12"
                        >
                          DJI Mini SE
                        </Text>
                        <Text
                          className="3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          0
                        </Text>
                        <Text
                          className="lg:ml-[140px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          Running
                        </Text>
                      </Row>
                      <Text
                        className="3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] mt-[1px] rowid#counter"
                        variant="body12"
                      >
                        0
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                    <Row className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[93%]">
                      <Row className="items-start w-[88%]">
                        <Text className="rowid#counter" variant="body12">
                          ID# 23456
                        </Text>
                        <Text
                          className="2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] rowid#counter"
                          variant="body12"
                        >
                          ID# 2
                        </Text>
                        <Text
                          className="3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          Holybro X500
                        </Text>
                        <Text
                          className="lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          100
                        </Text>
                        <Text
                          className="lg:ml-[130px] xl:ml-[163px] 2xl:ml-[184px] 3xl:ml-[220px] mt-[1px] rowid#counter"
                          variant="body12"
                        >
                          Starting
                        </Text>
                      </Row>
                      <Text
                        className="3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] rowid#counter"
                        variant="body12"
                      >
                        0
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                    <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[92%]">
                      <Row className="items-start w-[93%]">
                        <Text className="id#Counter_Four" variant="body12">
                          ID# 34567
                        </Text>
                        <Text
                          className="2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] id#Counter_Four"
                          variant="body12"
                        >
                          ID# 3
                        </Text>
                        <Text
                          className="mb-[4px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] rowid#counter"
                          variant="body12"
                        >
                          Anafi Parrot Thermal
                        </Text>
                        <Text
                          className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] id#Counter_Four"
                          variant="body12"
                        >
                          200
                        </Text>
                        <Text
                          className="lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] mt-[4px] rowid#counter"
                          variant="body12"
                        >
                          Shutting down
                        </Text>
                      </Row>
                      <Text
                        className="lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] id#Counter_Four"
                        variant="body12"
                      >
                        1
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]" />
                    <Row className="items-start ml-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[92%]">
                      <Row className="items-center justify-between w-[59%]">
                        <Text className="rowid#counter" variant="body12">
                          ID# 45678
                        </Text>
                        <Text
                          className="my-[1px] rowid#counter"
                          variant="body12"
                        >
                          ID# 4
                        </Text>
                        <Text
                          className="mb-[1px] rowid#counter"
                          variant="body12"
                        >
                          DJI Mini SE
                        </Text>
                        <Text
                          className="my-[1px] rowid#counter"
                          variant="body12"
                        >
                          300
                        </Text>
                      </Row>
                      <Text
                        className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[177px] 3xl:ml-[212px] mt-[3px] rowid#counter"
                        variant="body12"
                      >
                        Running
                      </Text>
                      <Text
                        className="3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] mt-[3px] rowid#counter"
                        variant="body12"
                      >
                        0
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
                    <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                    <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                    <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                    <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                  </Column>
                </Column>
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
          <Button
            className="2xl:mr-[22px] 3xl:mr-[26px] absolute flex items-center justify-center lg:mr-[15px] right-[2%] text-center w-[17%] xl:mr-[19px]"
            onClick={handleNavigate130}
            leftIcon={
              <Img
                src="images/img_minimize.svg"
                className="text-center right-[1%] absolute lg:w-[17px] lg:h-[18px] lg:mr-[4px] xl:w-[21px] xl:h-[22px] xl:mr-[6px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[7px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[8px]"
                alt="minimize"
              />
            }
            shape="RoundedBorder5"
            size="lg"
            variant="FillGray808"
          >
            <div className="common-pointer bg-transparent font-bold font-lato right-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] top-[0]">
              Create Simulation
            </div>
          </Button>
        </Stack>
        <Column className="absolute bottom-[0] font-lato justify-end right-[9%] w-[67%]">
          <Row className="bg-gray_808 items-center justify-end lg:ml-[550px] xl:ml-[688px] 2xl:ml-[774px] 3xl:ml-[929px] lg:mr-[19px] xl:mr-[24px] 2xl:mr-[28px] 3xl:mr-[33px] p-[4px] rounded-radius405 w-[17%]">
            <Stack className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] px-[2px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]">
              <Img
                src="images/img_minimize.svg"
                className="absolute inset-[0] justify-center m-[auto] call"
                alt="minimize One"
              />
            </Stack>
            <Text
              className="lg:mx-[12px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] text-white_A700 w-[auto]"
              variant="body11"
            >
              Create Server
            </Text>
          </Row>
          <Stack className="font-poppins lg:h-[578px] xl:h-[723px] 2xl:h-[813px] 3xl:h-[975px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
            <Column className="absolute bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] right-[0] rounded-radius30 shadow-bs7 w-[100%]">
              <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[99%]">
                <Row className="items-start w-[100%]">
                  <Text className="rowallbookings" variant="body4">
                    All Servers
                  </Text>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:ml-[385px] 2xl:mt-[9px] 3xl:ml-[462px] 3xl:mt-[10px] flex lg:ml-[273px] lg:mt-[6px] w-[24%] xl:ml-[342px] xl:mt-[8px]"
                    name="GroupTwentyFour One"
                    placeholder="Search"
                    prefix={
                      <Img
                        src="images/img_search_24X24.svg"
                        className="cursor-pointer ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#b5b7c0"
                          className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[15px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                          onClick={() => setInputvalue1("")}
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
                    name="GroupTwentyFive One"
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
                <Row className="items-start justify-between lg:mt-[473px] xl:mt-[592px] 2xl:mt-[666px] 3xl:mt-[799px] w-[100%]">
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
                    <Text className="Five" variant="body14">
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
            <Column className="absolute bottom-[11%] items-center justify-start pt-[2px] rounded-radius5 w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-start lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[89%]">
                  <Text className="rowserviceid" variant="body12">
                    Server ID #
                  </Text>
                  <Text
                    className="3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] mt-[1px] rowserviceid"
                    variant="body12"
                  >
                    Num Drones{" "}
                  </Text>
                  <Text
                    className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] mt-[1px] rowserviceid"
                    variant="body12"
                  >
                    Server Status
                  </Text>
                  <Text className="Status" variant="body12">
                    Running Simulations
                  </Text>
                  <Text
                    className="lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] rowlanguage_two"
                    variant="body12"
                  >
                    Stop Server
                  </Text>
                  <Text
                    className="lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] mt-[1px] rowserviceid"
                    variant="body12"
                  >
                    Server
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                <Column className="items-center justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:pb-[233px] xl:pb-[292px] 2xl:pb-[329px] 3xl:pb-[395px] w-[96%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-start justify-between xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] lg:my-[9px] w-[100%]">
                      <Row className="items-start rounded-radius5 w-[78%]">
                        <Text className="id#Counter_Four" variant="body12">
                          ID# 1
                        </Text>
                        <Text
                          className="xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] rowid#counter"
                          variant="body12"
                        >
                          3 / 5 max
                        </Text>
                        <Text
                          className="lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] mt-[3px] rowid#counter"
                          variant="body12"
                        >
                          OK
                        </Text>
                        <Text
                          className="font-medium leading-[normal] xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] text-bluegray_903 tracking-ls1 w-[25%]"
                          variant="body12"
                        >
                          Drone ID #12345, #23456, <br />
                          #45678
                        </Text>
                        <Text
                          className="bg-red_300 font-medium lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[57px]"
                          variant="body12"
                        >
                          Stop
                        </Text>
                      </Row>
                      <Text className="mt-[4px] rowid#counter" variant="body12">
                        EC2 g4dn.xlarge
                      </Text>
                    </Row>
                    <Line className="self-center w-[96%] h-[1px] bg-gray_201" />
                    <Row className="items-center justify-between lg:mr-[12px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] lg:my-[9px] w-[98%]">
                      <Row className="items-start rounded-radius5 w-[79%]">
                        <Text className="id#Counter_Four" variant="body12">
                          ID# 2
                        </Text>
                        <Text
                          className="xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] rowid#counter"
                          variant="body12"
                        >
                          1 / 5 max
                        </Text>
                        <Text
                          className="lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] mt-[3px] rowid#counter"
                          variant="body12"
                        >
                          OK
                        </Text>
                        <Text
                          className="xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] id#Counter_Four"
                          variant="body12"
                        >
                          Drone ID #34567
                        </Text>
                        <Text
                          className="bg-red_300 font-medium 3xl:ml-[106px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[57px]"
                          variant="body12"
                        >
                          Stop
                        </Text>
                      </Row>
                      <Text className="rowid#counter" variant="body12">
                        EC2 t5.2xlarge
                      </Text>
                    </Row>
                  </List>
                  <Stack className="lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                    <Line className="absolute bg-gray_201 bottom-[24%] h-[1px] left-[0] w-[96%]" />
                    <Row className="absolute items-start left-[0] rounded-radius5 w-[78%]">
                      <Text className="id#Counter_Four" variant="body12">
                        ID# 3
                      </Text>
                      <Text
                        className="xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] rowid#counter"
                        variant="body12"
                      >
                        0 / 5 max
                      </Text>
                      <Text
                        className="font-medium leading-[normal] lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] mt-[4px] text-bluegray_903 tracking-ls1 w-[17%]"
                        variant="body12"
                      >
                        Down, <br />
                        Re-assign server <br />
                        and Restart Drone
                      </Text>
                      <Text
                        className="lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rowid#counter"
                        variant="body12"
                      >
                        (None)
                      </Text>
                      <Text
                        className="bg-red_300 font-medium lg:ml-[111px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[57px]"
                        variant="body12"
                      >
                        Stop
                      </Text>
                    </Row>
                    <Text
                      className="absolute right-[0] top-[6%] rowid#counter"
                      variant="body12"
                    >
                      EC2 g4dn.xlarge
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Stack>
        </Column>
        <Column className="absolute bg-white_A700 font-poppins justify-start left-[0] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs7 top-[6%] w-[21%]">
          <Row className="items-center ml-[4px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[76%]">
            <Img src="images/img_offer.svg" className="offer3" alt="offer" />
            <Text className="rowoffer1" variant="body1">
              Dashboard
            </Text>
          </Row>
          <Row className="items-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[50%]">
            <Img src="images/img_call.svg" className="call" alt="call" />
            <Text className="ListMenu5" variant="body12">
              Maintenance
            </Text>
          </Row>
          <Row className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
            <Img
              src="images/img_airplane.svg"
              className="call"
              alt="airplane"
            />
            <Text className="ListMenu6" variant="body12">
              Book Drone Service
            </Text>
            <Img
              src="images/img_arrowright_bluegray_900.svg"
              className="arrowright8"
              alt="arrowright"
            />
          </Row>
          <Column className="bg-white_A700 items-center justify-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[97%]">
            <Row className="items-start mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
              <Img
                src="images/img_question.svg"
                className="call"
                alt="question"
              />
              <Text className="ListMenu11" variant="body12">
                My Bookings
              </Text>
              <Img
                src="images/img_arrowright_bluegray_900.svg"
                className="arrowright_One"
                alt="arrowright One"
              />
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mb-[487px] xl:mb-[610px] 2xl:mb-[686px] 3xl:mb-[823px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[92%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_music_24X24.svg"
                    className="call"
                    alt="music"
                  />
                  <Text className="ListMenu8" variant="body12">
                    Service Reports
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Two1"
                    alt="arrowright Two"
                  />
                </Row>
                <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[99%]">
                  <Img src="images/img_user.svg" className="user1" alt="user" />
                  <Text className="ListMenu9" variant="body12">
                    Profile
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="arrowright_Three1"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Column className="bg-bluegray_900 items-center justify-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[100%]">
                <Row className="items-start justify-between mt-[4px] w-[99%]">
                  <Img
                    src="images/img_volume.svg"
                    className="call"
                    alt="volume"
                  />
                  <Text
                    className="font-medium mt-[3px] text-white_A700 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Simulation Management
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="arrowright Four"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Row className="absolute bg-green_400 font-inter items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] right-[5%] rounded-radius10 top-[10%] w-[27%]">
          <Text className="One_Three" variant="body3">
            1
          </Text>
          <Text
            className="font-medium xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] xl:mr-[122px] 2xl:mr-[138px] 3xl:mr-[165px] lg:mr-[98px] text-white_A700 w-[auto]"
            variant="body10"
          >
            Upcoming booked service
          </Text>
        </Row>
      </Stack>
    </>
  );
};

export default DRAFTDroneSimulationPage;
