import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  RadioGroup,
  Radio,
  Input,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const AdminCloudDashboardMapPage = () => {
  const navigate = useNavigate();

  function handleNavigate42() {
    navigate("/adminclouddashboardhome");
  }
  function handleNavigate43() {
    navigate("/adminclouddashboardhome");
  }
  function handleNavigate47() {
    navigate("/");
  }
  function handleNavigate48() {
    navigate("/admindashboarddronet");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[167px] xl:pb-[209px] 2xl:pb-[235px] 3xl:pb-[282px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[88px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[346px] xl:ml-[433px] 2xl:ml-[487px] 3xl:ml-[584px] lg:mr-[198px] xl:mr-[248px] 2xl:mr-[279px] 3xl:mr-[335px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[45%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search2"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
          <Row className="font-poppins items-start ml-[3px] w-[85%]">
            <Column className="bg-white_A700 items-end justify-start lg:mb-[13px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] shadow-bs7 w-[20%]">
              <Column className="bg-bluegray_900 justify-start xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[15px] lg:mr-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] p-[3px] rounded-radius8 w-[94%]">
                <Row className="items-center mb-[3px] lg:ml-[2px] xl:ml-[3px] 3xl:ml-[4px] 2xl:ml-[4px] w-[80%]">
                  <Img
                    src="images/img_setting1.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    alt="settingOne"
                  />
                  <Text
                    className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-white_A700 tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Dashboard
                  </Text>
                </Row>
              </Column>
              <Column className="justify-start lg:mb-[376px] xl:mb-[471px] 2xl:mb-[530px] 3xl:mb-[636px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[87%]">
                <Row
                  className="common-pointer items-end w-[59%]"
                  onClick={handleNavigate47}
                >
                  <Img src="images/img_call.svg" className="call1" alt="call" />
                  <Text
                    className="font-medium mb-[2px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] text-bluegray_900 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Drone Catalog
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="call1"
                    alt="airplane"
                  />
                  <Text
                    className="font-medium mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 tracking-ls1 w-[auto]"
                    variant="body12"
                  >
                    Drone Management
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] my-[4px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                    alt="arrowright"
                  />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-start mx-[auto] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[99%]">
                    <Img
                      src="images/img_question.svg"
                      className="call1"
                      alt="question"
                    />
                    <Text
                      className="font-medium 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] text-bluegray_900 tracking-ls1 w-[auto]"
                      variant="body12"
                    >
                      Drone Booking
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] mt-[2px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="arrowright One"
                    />
                  </Row>
                  <Row
                    className="common-pointer items-end justify-between lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]"
                    onClick={handleNavigate48}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="call1"
                      alt="music"
                    />
                    <Text
                      className="font-medium mb-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-bluegray_900 tracking-ls1 w-[auto]"
                      variant="body12"
                    >
                      Drone Cloud Tracking
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] my-[4px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="arrowright Two"
                    />
                  </Row>
                  <Row className="items-start mx-[auto] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[99%]">
                    <Img
                      src="images/img_question.svg"
                      className="call1"
                      alt="question One"
                    />
                    <Text className="ListMenu18" variant="body12">
                      Service History
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] lg:ml-[43px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[1px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="arrowright Three"
                    />
                  </Row>
                  <Row className="items-start ml-[3px] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[99%]">
                    <Img
                      src="images/img_user.svg"
                      className="call1"
                      alt="user"
                    />
                    <Text className="ListMenu18" variant="body12">
                      Drone Data
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] mt-[2px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="arrowright Four"
                    />
                  </Row>
                  <Row className="items-start ml-[3px] lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[99%]">
                    <Img
                      src="images/img_question.svg"
                      className="call1"
                      alt="question Two"
                    />
                    <Text
                      className="font-medium 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[2px] text-bluegray_900 tracking-ls1 w-[auto]"
                      variant="body12"
                    >
                      Drone AI
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] mt-[1px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                      alt="arrowright Five"
                    />
                  </Row>
                </List>
              </Column>
            </Column>
            <Column className="font-inter justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[50%]">
              <Column className="justify-start w-[73%]">
                <Text
                  className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-bluegray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Drone Cloud Dashboard
                </Text>
                <Row className="bg-gray_401 font-worksans items-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
                  <Text
                    className="common-pointer bg-light_blue_A700 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[21px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[28px] xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] rowgroup557"
                    variant="body12"
                    onClick={handleNavigate43}
                  >
                    Drone Cloud Dashboard
                  </Text>
                  <Column className="bg-blue_A700 items-end justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius5 w-[29%]">
                    <Text className="columnsimulateddrone" variant="body12">
                      Simulated Drone Cloud
                    </Text>
                  </Column>
                  <Text
                    className="bg-light_blue_500 lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[21px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[28px] xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] rowdata_collection_one"
                    variant="body12"
                  >
                    Drone Services Map
                  </Text>
                </Row>
              </Column>
              <Column className="font-poppins justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] pb-[2px] w-[99%]">
                <Text
                  className="font-medium lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] text-black_901 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Drone Cloud Map
                </Text>
                <Stack className="font-dmsans lg:h-[537px] xl:h-[672px] 2xl:h-[756px] 3xl:h-[907px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <Column className="absolute bg-white_A700 inset-x-[0] items-center justify-start mx-[auto] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius10 top-[6%] w-[92%]">
                    <Column className="justify-start lg:mb-[147px] xl:mb-[184px] 2xl:mb-[207px] 3xl:mb-[248px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
                      <Text
                        className="font-medium text-black_901 w-[auto]"
                        variant="body4"
                      >
                        Drones Status
                      </Text>
                      <RadioGroup
                        className="flex 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                        name="radiogrouptext"
                      >
                        <Radio
                          value="Active"
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Active"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Stopped"
                          className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Stopped"
                          size="sm"
                          variant="FillRedA702"
                        ></Radio>
                        <Radio
                          value="Connectedreadytodoservice"
                          className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Connected ready to do service"
                          size="sm"
                          variant="FillAmber500"
                        ></Radio>
                        <Radio
                          value="Registerednotconnected"
                          className="font-normal lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Registered not connected"
                          size="sm"
                          variant="FillDeeppurpleA400"
                        ></Radio>
                      </RadioGroup>
                    </Column>
                  </Column>
                  <Text
                    className="left-[7%] top-[2%] tracking-ls1 Addaflightti"
                    variant="body5"
                  >
                    Search Drones by City
                  </Text>
                  <Stack
                    className="absolute bg-cover bg-repeat bottom-[0] lg:h-[447px] xl:h-[559px] 2xl:h-[628px] 3xl:h-[754px] inset-x-[0] mx-[auto] px-[3px] w-[97%]"
                    style={{ backgroundImage: "url('images/img_maps.png')" }}
                  >
                    <Stack className="absolute lg:h-[432px] xl:h-[540px] 2xl:h-[607px] 3xl:h-[728px] inset-[0] justify-center m-[auto] w-[92%]">
                      <Stack className="absolute lg:h-[431px] xl:h-[539px] 2xl:h-[606px] 3xl:h-[728px] inset-[0] justify-center m-[auto] w-[99%]">
                        <Row className="absolute items-start top-[0] w-[100%]">
                          <Stack className="lg:h-[346px] xl:h-[433px] 2xl:h-[487px] 3xl:h-[584px] lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[21px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[89px] w-[71%]">
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[287px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[484px] lg:px-[2px] xl:px-[3px] 3xl:px-[4px] 2xl:px-[4px] right-[5%] top-[0] w-[68%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group525.svg')",
                              }}
                            >
                              <Stack className="absolute lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] inset-y-[0] left-[35%] my-[auto] lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]">
                                <Img
                                  src="images/img_location_28X19.svg"
                                  className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] left-[0] top-[0] w-[50%]"
                                  alt="location"
                                />
                                <Column className="absolute bg-green_50_99 lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start left-[3%] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 top-[3%] w-[100%]">
                                  <div className="bg-amber_500 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                                </Column>
                              </Stack>
                              <Column className="absolute bg-green_50_99 bottom-[39%] lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start left-[5%] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]">
                                <div className="bg-indigo_A200 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                              </Column>
                              <Column className="absolute items-end justify-start right-[11%] top-[4%] w-[29%]">
                                <Stack className="bg-deep_purple_100_66 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] mr-[1px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] rotate-[25deg] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                                  <div className="absolute bg-amber_500 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                                  <Img
                                    src="images/img_ghiblifrontuk_49X71.png"
                                    className="ghiblifrontUK8"
                                    alt="ghiblifrontUK"
                                  />
                                </Stack>
                                <Stack className="bg-green_A700 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                                  <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                                  <Img
                                    src="images/img_ghiblifrontuk_51X66.png"
                                    className="ghiblifrontUK_One1"
                                    alt="ghiblifrontUK One"
                                  />
                                </Stack>
                              </Column>
                              <Row className="absolute bottom-[4%] items-start justify-between right-[0] w-[61%]">
                                <Stack className="bg-green_A700 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:mb-[25px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                                  <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                                  <Img
                                    src="images/img_ghiblifrontuk_51X66.png"
                                    className="ghiblifrontUK_One1"
                                    alt="ghiblifrontUK Two"
                                  />
                                </Stack>
                                <Stack className="bg-green_A700 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                                  <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                                  <Img
                                    src="images/img_ghiblifrontuk_51X66.png"
                                    className="ghiblifrontUK_One1"
                                    alt="ghiblifrontUK Three"
                                  />
                                </Stack>
                              </Row>
                            </Stack>
                            <Stack className="absolute bottom-[15%] lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] right-[0] w-[7%]">
                              <div className="absolute bg-indigo_50_b2 lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius1871 w-[100%]"></div>
                              <Img
                                src="images/img_eye_23X20.svg"
                                className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] inset-[0] justify-center m-[auto] w-[61%]"
                                alt="eye"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-repeat bottom-[0] items-center justify-start left-[0] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[32%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_propertycard.svg')",
                              }}
                            >
                              <Stack className="bg-white_A700 lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mt-[1px] rounded-radius10 shadow-bs9 w-[99%]">
                                <Stack className="absolute lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] right-[1%] w-[99%]">
                                  <div className="absolute bg-white_A700 lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[196px] rounded-radius10 shadow-bs9 w-[100%]"></div>
                                  <Img
                                    src="images/img_hellskitchen.svg"
                                    className="HellsKitchen"
                                    alt="HellsKitchen"
                                  />
                                </Stack>
                                <Column className="absolute bottom-[0] justify-start lg:pb-[5px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
                                  <Text
                                    className="font-bold leading-[150.00%] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_802 text-center w-[83%]"
                                    variant="body9"
                                  >
                                    Drone Station
                                  </Text>
                                  <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] pb-[1px] pr-[1px] w-[76%]">
                                    <Text
                                      className="columnfarmlandidone"
                                      variant="body14"
                                    >
                                      Farmland ID #1
                                    </Text>
                                  </Column>
                                </Column>
                              </Stack>
                            </Column>
                          </Stack>
                          <List
                            className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 min-h-[auto] lg:ml-[36px] xl:ml-[45px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[197px] xl:mt-[247px] 2xl:mt-[278px] 3xl:mt-[333px] w-[13%]"
                            orientation="horizontal"
                          >
                            <Column className="bg-green_50_99 lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start lg:mt-[192px] xl:mt-[240px] 2xl:mt-[271px] 3xl:mt-[325px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 w-[100%]">
                              <div className="bg-indigo_A200 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                            </Column>
                            <Column className="bg-green_50_99 lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start lg:mb-[192px] xl:mb-[240px] 2xl:mb-[271px] 3xl:mb-[325px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 w-[100%]">
                              <div className="bg-indigo_A200 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                            </Column>
                          </List>
                          <Stack className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[66px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] shadow-bs10 w-[3%]">
                            <Column className="absolute bg-white_A700 border border-bluegray_101 border-solid bottom-[1%] inset-x-[4%] items-center justify-end lg:py-[18px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] rounded-radius2 w-[87%]">
                              <div className="bg-bluegray_101 h-[1px] mt-[1px] w-[100%]"></div>
                            </Column>
                            <Img
                              src="images/img_plus_23X23.svg"
                              className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] top-[9%] lg:w-[13px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                              alt="plus"
                            />
                            <Img
                              src="images/img_minus.svg"
                              className="absolute bottom-[0] lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[13px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                              alt="minus"
                            />
                          </Stack>
                        </Row>
                        <Column className="absolute bg-green_50_99 bottom-[3%] lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start left-[8%] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]">
                          <div className="bg-indigo_A200 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                        </Column>
                        <Row className="absolute bottom-[8%] items-start justify-center right-[27%] w-[34%]">
                          <Stack className="bg-red_A702 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:mb-[14px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[25px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                            <Img
                              src="images/img_ghiblifrontuk_51X66.png"
                              className="ghiblifrontUK_One1"
                              alt="ghiblifrontUK Four"
                            />
                          </Stack>
                          <Stack className="bg-red_A702 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                            <Img
                              src="images/img_ghiblifrontuk_51X66.png"
                              className="ghiblifrontUK_One1"
                              alt="ghiblifrontUK Five"
                            />
                          </Stack>
                        </Row>
                        <Stack className="absolute bg-deep_purple_100_66 bottom-[0] lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] right-[0] rotate-[25deg] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                          <div className="absolute bg-amber_500 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                          <Img
                            src="images/img_ghiblifrontuk_49X71.png"
                            className="ghiblifrontUK8"
                            alt="ghiblifrontUK Six"
                          />
                        </Stack>
                        <Column className="absolute justify-start right-[3%] top-[15%] w-[79%]">
                          <Stack className="bg-red_A702 lg:h-[52px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[87px] lg:ml-[185px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rotate-[71deg] rounded-radius50 lg:w-[51px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[86px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"></div>
                            <Img
                              src="images/img_ghiblifrontuk_51X66.png"
                              className="ghiblifrontUK_One1"
                              alt="ghiblifrontUK Seven"
                            />
                          </Stack>
                          <Row className="items-start justify-between xl:mt-[114px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] w-[100%]">
                            <Stack className="bg-deep_purple_100_66 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] px-[2px] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]">
                              <div className="absolute bg-deep_purple_300_66 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                              <Img
                                src="images/img_group87174.png"
                                className="ghiblifrontUK_Eight"
                                alt="ghiblifrontUK Eight"
                              />
                            </Stack>
                            <Stack className="bg-deep_purple_100_66 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[21px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] rotate-[25deg] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
                              <div className="absolute bg-amber_500 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                              <Img
                                src="images/img_ghiblifrontuk_49X71.png"
                                className="ghiblifrontUK8"
                                alt="ghiblifrontUK Nine"
                              />
                            </Stack>
                          </Row>
                        </Column>
                      </Stack>
                      <Stack className="absolute bg-white_A700 lg:h-[44px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] left-[1%] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius12 shadow-bs5 top-[0] w-[37%]">
                        <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[51%]">
                          <Column className="bg-green_50 lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-start 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] rounded-radius50 lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]">
                            <div className="bg-amber_500 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                          </Column>
                          <Text
                            className="font-bold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] text-gray_913 tracking-ls1 w-[auto]"
                            variant="body9"
                          >
                            Mariposa
                          </Text>
                        </Row>
                        <Text className="distance" variant="body14">
                          Zoom in: 50 meters
                        </Text>
                      </Stack>
                      <Column className="absolute justify-start left-[13%] top-[14%] w-[61%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Column
                            className="bg-cover bg-repeat items-center justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[37%]"
                            style={{
                              backgroundImage:
                                "url('images/img_propertycard.svg')",
                            }}
                          >
                            <Column className="bg-white_A700 justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] rounded-radius10 shadow-bs9 w-[100%]">
                              <Img
                                src="images/img_vector.svg"
                                className="3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] w-[56%]"
                                alt="Vector"
                              />
                              <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] 3xl:pb-[11px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                                <Text
                                  className="font-bold leading-[150.00%] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] text-bluegray_802 text-center w-[86%]"
                                  variant="body9"
                                >
                                  Rental Warehouse
                                </Text>
                                <Column className="items-center justify-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[47%]">
                                  <Text
                                    className="font-bold text-bluegray_802 w-[auto]"
                                    variant="body14"
                                  >
                                    3 Drones
                                  </Text>
                                </Column>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 justify-end 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 shadow-bs5 w-[60%]">
                            <Column className="font-dmsans items-center justify-start lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] w-[43%]">
                              <Text
                                className="font-bold text-gray_913 tracking-ls1 w-[auto]"
                                variant="body9"
                              >
                                Drone ID # 1
                              </Text>
                            </Column>
                            <Text
                              className="font-cabin font-normal lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-gray_402 tracking-ls1 w-[auto]"
                              variant="body14"
                            >
                              Farmland ID # 0
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-start ml-[3px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[35%]">
                          <Stack className="bg-deep_purple_100_66 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] px-[2px] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                            <Img
                              src="images/img_group87174.png"
                              className="ghiblifrontUK_Eight"
                              alt="ghiblifrontUK Ten"
                            />
                          </Stack>
                          <Stack className="bg-deep_purple_100_66 lg:h-[41px] xl:h-[51px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[2px] xl:ml-[3px] 3xl:ml-[4px] 2xl:ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] px-[2px] rounded-radius50 lg:w-[40px] xl:w-[50px] 2xl:w-[56px] 3xl:w-[67px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                            <Img
                              src="images/img_group87174.png"
                              className="ghiblifrontUK_Eight"
                              alt="ghiblifrontUK Eleven"
                            />
                          </Stack>
                        </Row>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] right-[0] top-[15%] w-[22%]"
                        style={{
                          backgroundImage: "url('images/img_propertycard.svg')",
                        }}
                      >
                        <Stack className="bg-white_A700 lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mt-[1px] rounded-radius10 shadow-bs9 w-[99%]">
                          <Stack className="absolute lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] right-[1%] w-[99%]">
                            <div className="absolute bg-white_A700 lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[196px] rounded-radius10 shadow-bs9 w-[100%]"></div>
                            <Img
                              src="images/img_hellskitchen.svg"
                              className="HellsKitchen"
                              alt="HellsKitchen One"
                            />
                          </Stack>
                          <Column className="absolute bottom-[0] items-center justify-start 3xl:pb-[11px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] 3xl:px-[11px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[100%]">
                            <Text
                              className="font-bold leading-[150.00%] text-bluegray_802 text-center w-[86%]"
                              variant="body9"
                            >
                              Drone Station
                            </Text>
                            <Column className="items-center justify-start mt-[3px] w-[83%]">
                              <Text
                                className="font-bold text-bluegray_802 w-[auto]"
                                variant="body14"
                              >
                                Farmland ID #0
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                      </Column>
                    </Stack>
                    <Column
                      className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] right-[10%] w-[21%]"
                      style={{
                        backgroundImage: "url('images/img_propertycard.svg')",
                      }}
                    >
                      <Stack className="bg-white_A700 lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] lg:mb-[15px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mt-[1px] rounded-radius10 shadow-bs9 w-[99%]">
                        <Stack className="absolute lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] right-[1%] w-[99%]">
                          <div className="absolute bg-white_A700 lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[196px] rounded-radius10 shadow-bs9 w-[100%]"></div>
                          <Img
                            src="images/img_hellskitchen.svg"
                            className="HellsKitchen"
                            alt="HellsKitchen Two"
                          />
                        </Stack>
                        <Column className="absolute bottom-[0] items-center justify-start lg:pb-[5px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
                          <Text
                            className="font-bold leading-[150.00%] text-bluegray_802 text-center w-[83%]"
                            variant="body9"
                          >
                            Drone Station
                          </Text>
                          <Column className="items-center justify-start mt-[3px] pb-[1px] pr-[1px] w-[79%]">
                            <Text
                              className="columnfarmlandidone"
                              variant="body14"
                            >
                              Farmland ID #3
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Img
                      src="images/img_vector_indigo_A201.svg"
                      className="absolute bottom-[4%] lg:h-[358px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[605px] left-[1%] w-[92%]"
                      alt="Vector One"
                    />
                  </Stack>
                  <Column className="absolute font-inter items-center justify-start right-[0] top-[0] w-[53%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="common-pointer font-bold p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      onClick={handleNavigate42}
                      name="GroupTwo"
                      placeholder="Mariposa, CA 94500"
                      prefix={
                        <Img
                          src="images/img_search_bluegray_902.svg"
                          className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[5px] lg:mr-[9px] xl:w-[12px] xl:h-[13px] xl:ml-[7px] xl:mr-[11px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[8px] 2xl:mr-[12px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[9px] 3xl:mr-[15px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        handleNavigate42?.length > 0 ? (
                          <CloseSVG
                            color="#333333"
                            className="cursor-pointer lg:w-[9px] lg:h-[10px] lg:ml-[5px] lg:mr-[12px] xl:w-[12px] xl:h-[13px] xl:ml-[7px] xl:mr-[15px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[8px] 2xl:mr-[17px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[9px] 3xl:mr-[21px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                      shape="srcRoundedBorder7"
                      size="lgSrc"
                      variant="srcOutlineGray70019"
                    ></Input>
                  </Column>
                </Stack>
              </Column>
            </Column>
            <Column className="font-dmsans justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[233px] xl:mt-[291px] 2xl:mt-[328px] 3xl:mt-[394px] w-[26%]">
              <Text className="columnstationeddrone" variant="body5">
                Stationed Drones
              </Text>
              <Text
                className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] columnstationeddrone"
                variant="body5"
              >
                3 Drones Found
              </Text>
              <Stack className="lg:h-[318px] xl:h-[398px] 2xl:h-[447px] 3xl:h-[537px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                <Stack className="absolute lg:h-[233px] xl:h-[292px] 2xl:h-[328px] 3xl:h-[394px] top-[0] w-[100%]">
                  <Column className="absolute items-center justify-start top-[0] w-[100%]">
                    <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius12 shadow-bs5 w-[100%]">
                      <Row className="items-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[95%]">
                        <Column className="font-dmsans justify-start mt-[3px] w-[24%]">
                          <Column className="justify-start ml-[1px] pt-[2px] w-[84%]">
                            <Column className="font-cabin items-center justify-start w-[100%]">
                              <Text className="columndroneid" variant="body12">
                                Drone ID #
                              </Text>
                            </Column>
                            <Text className="columnfour" variant="body6">
                              4
                            </Text>
                          </Column>
                          <Text className="columndjiphantom" variant="body12">
                            DJI Phantom
                          </Text>
                        </Column>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[42%]"
                          alt="ghiblifrontUK Twelve"
                        />
                        <Text className="rowdroneid" variant="body12">
                          Connected
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start mt-[1px] w-[90%]">
                      <Line className="bg-gray_203 h-[1px] w-[100%]" />
                      <Line className="bg-gray_203 h-[1px] xl:mt-[101px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[80px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius12 shadow-bs5 w-[100%]">
                      <Row className="items-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[95%]">
                        <Column className="font-dmsans justify-start mt-[3px] w-[24%]">
                          <Column className="justify-start ml-[1px] pt-[2px] w-[84%]">
                            <Column className="font-cabin items-center justify-start w-[100%]">
                              <Text className="columndroneid" variant="body12">
                                Drone ID #
                              </Text>
                            </Column>
                            <Text className="columnfour" variant="body6">
                              5
                            </Text>
                          </Column>
                          <Text className="columndjiphantom" variant="body12">
                            DJI Phantom
                          </Text>
                        </Column>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[42%]"
                          alt="ghiblifrontUK Thirteen"
                        />
                        <Text className="rowdroneid" variant="body12">
                          Connected
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start mt-[1px] w-[90%]">
                      <Line className="bg-gray_203 h-[1px] w-[100%]" />
                      <Line className="bg-gray_203 h-[1px] xl:mt-[101px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[80px] w-[100%]" />
                    </Column>
                  </Column>
                </Stack>
                <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                  <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius12 shadow-bs5 w-[100%]">
                    <Row className="items-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[97%]">
                      <Column className="font-dmsans justify-start mt-[3px] w-[23%]">
                        <Column className="justify-start ml-[1px] pt-[2px] w-[84%]">
                          <Column className="font-cabin items-center justify-start w-[100%]">
                            <Text className="columndroneid" variant="body12">
                              Drone ID #
                            </Text>
                          </Column>
                          <Text
                            className="font-bold font-dmsans lg:mt-[2px] xl:mt-[3px] 3xl:mt-[4px] 2xl:mt-[4px] text-gray_913 tracking-ls1 w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                        </Column>
                        <Text className="columndjiphantom" variant="body12">
                          DJI Phantom
                        </Text>
                      </Column>
                      <Img
                        src="images/img_ghiblifrontuk.png"
                        className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[41%]"
                        alt="ghiblifrontUK Fourteen"
                      />
                      <Text
                        className="bg-lime_50_99 border border-amber_500 border-solid font-medium font-poppins lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] px-[1px] lg:py-[4px] 2xl:py-[5px] xl:py-[5px] 3xl:py-[6px] rounded-radius4 text-amber_500 tracking-ls1 w-[80px]"
                        variant="body12"
                      >
                        Connected
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start mt-[1px] w-[90%]">
                    <Line className="bg-gray_203 h-[1px] w-[100%]" />
                    <Line className="bg-gray_203 h-[1px] xl:mt-[101px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[80px] w-[100%]" />
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

export default AdminCloudDashboardMapPage;
