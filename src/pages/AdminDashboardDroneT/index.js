import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  RadioGroup,
  Radio,
  Button,
  List,
  Input,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const AdminDashboardDroneTPage = () => {
  const navigate = useNavigate();

  function handleNavigate74() {
    navigate("/dronearvrtracking");
  }
  function handleNavigate75() {
    navigate("/dronefleetstatistics");
  }
  function handleNavigate78() {
    navigate("/dronemanagement");
  }
  function handleNavigate79() {
    navigate("/initialversiondroneb");
  }
  function handleNavigate80() {
    navigate("/servicehistory");
  }
  function handleNavigate81() {
    navigate("/adminclouddashboardhome");
  }
  function handleNavigate82() {
    navigate("/dronetrackingmapdata");
  }
  function handleNavigate83() {
    navigate("/dronetrackingmapsurv");
  }
  function handleNavigate84() {
    navigate("/");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:pb-[124px] 2xl:pb-[140px] 3xl:pb-[168px] lg:pb-[99px] w-[100%]">
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
        <Stack className="lg:h-[1051px] xl:h-[1314px] 2xl:h-[1479px] 3xl:h-[1774px] w-[100%]">
          <Column className="absolute h-[max-content] inset-y-[0] justify-start my-[auto] right-[0] w-[88%]">
            <Text
              className="lg:ml-[128px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[216px] text-bluegray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Drone Tracking
            </Text>
            <Stack className="font-dmsans xl:h-[1108px] 2xl:h-[1246px] 3xl:h-[1495px] lg:h-[886px] lg:mt-[111px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] w-[100%]">
              <Column className="absolute bg-white_A700 items-center justify-start left-[14%] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 top-[0] w-[55%]">
                <Column className="justify-start lg:mb-[179px] xl:mb-[225px] 2xl:mb-[253px] 3xl:mb-[303px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    variant="body4"
                  >
                    Drones Status
                  </Text>
                  <RadioGroup
                    className="flex xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    name="radiogrouptext"
                  >
                    <Radio
                      value="Active"
                      className="font-normal mb-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Active"
                      size="sm"
                    ></Radio>
                    <Radio
                      value="Stopped"
                      className="font-normal mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Stopped"
                      size="sm"
                      variant="FillRedA702"
                    ></Radio>
                    <Radio
                      value="Connectedreadytodoservice"
                      className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Connected ready to do service"
                      size="sm"
                      variant="FillAmber500"
                    ></Radio>
                    <Radio
                      value="Registerednotconnected"
                      className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[4px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
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
                className="right-[30%] top-[9%] tracking-ls1 Addaflightti"
                variant="body5"
              >
                Search Drones by Region
              </Text>
              <Stack
                className="absolute bg-cover bg-repeat bottom-[0] 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] lg:px-[51px] xl:px-[64px] 2xl:px-[73px] 3xl:px-[87px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_maps_1028X1269.png')",
                }}
              >
                <Column className="absolute justify-start left-[11%] top-[0] w-[58%]">
                  <Column className="bg-white_A700 border border-bluegray_101 border-solid items-center justify-end lg:ml-[275px] xl:ml-[345px] 2xl:ml-[388px] 3xl:ml-[465px] py-[4px] rounded-radius2 w-[5%]">
                    <Img
                      src="images/img_plus_23X23.svg"
                      className="plus4"
                      alt="plus"
                    />
                    <div className="bg-bluegray_101 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"></div>
                    <Img
                      src="images/img_minus.svg"
                      className="minus1"
                      alt="minus"
                    />
                  </Column>
                  <Stack className="lg:h-[480px] xl:h-[601px] 2xl:h-[676px] 3xl:h-[811px] w-[100%]">
                    <Column
                      className="absolute bg-cover bg-repeat h-[max-content] inset-y-[0] justify-start my-[auto] lg:p-[48px] xl:p-[60px] 2xl:p-[68px] 3xl:p-[81px] right-[3%] w-[86%]"
                      style={{
                        backgroundImage: "url('images/img_group423.svg')",
                      }}
                    >
                      <Row className="items-start xl:mb-[116px] 2xl:mb-[131px] 3xl:mb-[157px] lg:mb-[93px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[68%]">
                        <Stack
                          className="common-pointer bg-deep_purple_100_66 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] lg:mt-[135px] xl:mt-[169px] 2xl:mt-[190px] 3xl:mt-[228px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rotate-[25deg] rounded-radius50 3xl:w-[111px] lg:w-[66px] xl:w-[82px] 2xl:w-[93px]"
                          onClick={handleNavigate83}
                        >
                          <div className="absolute bg-amber_500 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"></div>
                          <Img
                            src="images/img_ghiblifrontuk_49X71.png"
                            className="absolute lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] inset-[0] justify-center m-[auto] w-[76%]"
                            alt="ghiblifrontUK"
                          />
                        </Stack>
                        <Column className="justify-start lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[59%]">
                          <Stack className="bg-deep_purple_100_66 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] px-[2px] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                            <div className="absolute bg-deep_purple_300_66 lg:h-[38px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[37px] xl:w-[47px] 2xl:w-[53px] 3xl:w-[63px]"></div>
                            <Img
                              src="images/img_group87174.png"
                              className="absolute lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] inset-[0] justify-center m-[auto] w-[94%]"
                              alt="ghiblifrontUK One"
                            />
                          </Stack>
                          <Row className="items-start justify-end ml-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[87%]">
                            <Column className="bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                              <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                            </Column>
                            <Stack className="bg-red_A702 3xl:h-[107px] lg:h-[64px] xl:h-[80px] 2xl:h-[90px] lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rotate-[71deg] rounded-radius50 3xl:w-[106px] lg:w-[63px] xl:w-[79px] 2xl:w-[89px]">
                              <div className="absolute bg-deep_purple_300_66 lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[47px] xl:w-[59px] 2xl:w-[67px] 3xl:w-[80px]"></div>
                              <Img
                                src="images/img_ghiblifrontuk_51X66.png"
                                className="ghiblifrontUK_Two1"
                                alt="ghiblifrontUK Two"
                              />
                            </Stack>
                          </Row>
                          <Stack
                            className="common-pointer bg-green_A700 3xl:h-[107px] lg:h-[64px] xl:h-[80px] 2xl:h-[90px] 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rotate-[71deg] rounded-radius50 3xl:w-[106px] lg:w-[63px] xl:w-[79px] 2xl:w-[89px]"
                            onClick={handleNavigate82}
                          >
                            <div className="absolute bg-deep_purple_300_66 lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[47px] xl:w-[59px] 2xl:w-[67px] 3xl:w-[80px]"></div>
                            <Img
                              src="images/img_ghiblifrontuk_51X66.png"
                              className="ghiblifrontUK_Two1"
                              alt="ghiblifrontUK Three"
                            />
                          </Stack>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="absolute bottom-[0] flex lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center right-[0] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                      size="smIcn"
                      variant="icbFillIndigo50b2"
                    >
                      <Img
                        src="images/img_eye_23X20.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                        alt="eye"
                      />
                    </Button>
                    <Stack className="absolute bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[0] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 top-[0] w-[34%]">
                      <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[65%]">
                        <Column className="bg-green_50 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                          <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                        </Column>
                        <Text
                          className="rowellipsefortyfive_one"
                          variant="body9"
                        >
                          San Francisco
                        </Text>
                      </Row>
                      <Text className="distance" variant="body14">
                        Zoom in: 50 meters
                      </Text>
                    </Stack>
                  </Stack>
                </Column>
                <Img
                  src="images/img_vector_indigo_A202.svg"
                  className="absolute lg:h-[337px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] left-[18%] top-[11%] w-[33%]"
                  alt="Vector"
                />
              </Stack>
            </Stack>
          </Column>
          <Column className="absolute bg-white_A700 font-poppins justify-start left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] shadow-bs7 top-[0] w-[21%]">
            <Row
              className="common-pointer items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]"
              onClick={handleNavigate81}
            >
              <Img src="images/img_offer.svg" className="offer3" alt="offer" />
              <Text className="rowoffer1" variant="body1">
                Dashboard
              </Text>
            </Row>
            <Row
              className="common-pointer items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[55%]"
              onClick={handleNavigate84}
            >
              <Img src="images/img_call.svg" className="call" alt="call" />
              <Text className="ListMenu21" variant="body12">
                Drone Catalog
              </Text>
            </Row>
            <Row
              className="common-pointer items-end 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[92%]"
              onClick={handleNavigate78}
            >
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
            <Row
              className="common-pointer items-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]"
              onClick={handleNavigate79}
            >
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
            <Column className="bg-bluegray_900 items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
              <Row className="items-end justify-between lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[1px] w-[99%]">
                <Img
                  src="images/img_walletmoney2.svg"
                  className="call"
                  alt="walletmoneyTwo"
                />
                <Text
                  className="font-medium mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-white_A700 tracking-ls1 w-[auto]"
                  variant="body12"
                >
                  Drone Cloud Tracking
                </Text>
                <Img
                  src="images/img_arrowright_white_A700.svg"
                  className="arrowright_Two4"
                  alt="arrowright Two"
                />
              </Row>
            </Column>
            <List
              className="gap-[0] lg:mb-[461px] xl:mb-[577px] 2xl:mb-[649px] 3xl:mb-[779px] min-h-[auto] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[92%]"
              orientation="vertical"
            >
              <Row
                className="common-pointer items-start xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[8px] w-[100%]"
                onClick={handleNavigate80}
              >
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
              <Row className="items-start xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[8px] w-[100%]">
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
              <Row className="items-start xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[8px] w-[100%]">
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
          <Row className="absolute bg-gray_401 font-worksans items-center justify-center left-[24%] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 top-[7%] w-[38%]">
            <Button
              className="common-pointer font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
              onClick={handleNavigate75}
              shape="RoundedBorder5"
              size="xl"
              variant="FillBlueA700"
            >
              Fleet Statistics
            </Button>
            <Text
              className="bg-light_blue_500 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowgroup557"
              variant="body12"
            >
              Drone Map Tracking
            </Text>
            <Button
              className="common-pointer font-semibold mt-[3px] 2xl:mx-[10px] 3xl:mx-[12px] lg:mx-[7px] xl:mx-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
              onClick={handleNavigate74}
              shape="RoundedBorder5"
              size="lg"
              variant="FillBlueA700"
            >
              AR/VR Tracking
            </Button>
          </Row>
          <Column className="absolute font-inter items-center justify-start right-[0] top-[22%] w-[24%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-bold p-[0] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
              wrapClassName="flex w-[100%]"
              name="GroupTwo"
              placeholder="San Francisco, CA 94500"
              prefix={
                <Img
                  src="images/img_search_bluegray_902.svg"
                  className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[11px] xl:w-[15px] xl:h-[16px] xl:ml-[8px] xl:mr-[14px] 2xl:w-[17px] 2xl:h-[18px] 2xl:ml-[10px] 2xl:mr-[16px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[19px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#333333"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[15px] xl:w-[15px] xl:h-[16px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[17px] 2xl:h-[18px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
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
          <Column className="absolute bg-white_A700 border border-blue_50 border-solid bottom-[0] font-dmsans justify-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[0] rounded-radius12 w-[30%]">
            <Text
              className="font-bold lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] rowoffer1"
              variant="body5"
            >
              4 Drones Found
            </Text>
            <Stack className="lg:h-[490px] xl:h-[613px] 2xl:h-[689px] 3xl:h-[827px] lg:mb-[144px] xl:mb-[180px] 2xl:mb-[203px] 3xl:mb-[243px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
              <Stack className="absolute lg:h-[389px] xl:h-[486px] 2xl:h-[547px] 3xl:h-[656px] inset-x-[0] top-[0] w-[100%]">
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[99%]">
                  <Column className="bg-gray_201 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                    <Row className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]">
                      <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                        <Column className="justify-start w-[97%]">
                          <Text className="DroneID3" variant="body12">
                            Drone ID #
                          </Text>
                          <Text className="One66" variant="body6">
                            1
                          </Text>
                        </Column>
                        <Text className="columndjiminise2" variant="body12">
                          DJI Mini SE
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group87174.png"
                        className="ghiblifrontUK_Four"
                        alt="ghiblifrontUK Four"
                      />
                      <Button
                        className="font-medium font-poppins lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[23%]"
                        shape="RoundedBorder5"
                        size="md"
                        variant="OutlineTeal500"
                      >
                        Active
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start w-[90%]">
                    <Line className="bg-gray_203 h-[1px] w-[100%]" />
                    <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                  <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[99%]">
                    <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[94%]">
                      <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                        <Column className="justify-start w-[97%]">
                          <Text className="DroneID3" variant="body12">
                            Drone ID #
                          </Text>
                          <Text className="One66" variant="body6">
                            2
                          </Text>
                        </Column>
                        <Text className="columndjiminise2" variant="body12">
                          DJI Mini SE
                        </Text>
                      </Column>
                      <Img
                        src="images/img_group87174.png"
                        className="ghiblifrontUK_Five"
                        alt="ghiblifrontUK Five"
                      />
                      <Text className="rowdroneid_one" variant="body12">
                        Registered
                      </Text>
                    </Row>
                  </Column>
                  <Line className="bg-gray_203 h-[1px] mt-[1px] w-[89%]" />
                  <Stack className="lg:h-[186px] xl:h-[233px] 2xl:h-[262px] 3xl:h-[314px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]">
                    <Line className="absolute bg-gray_203 h-[1px] inset-x-[0] mx-[auto] top-[45%] w-[90%]" />
                    <Column className="absolute items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                        <Row className="items-start justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                          <Column className="font-dmsans lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px] items-center justify-start mt-[3px] lg:w-[50px] xl:w-[63px] 2xl:w-[71px] 3xl:w-[85px]">
                            <Column className="justify-start w-[97%]">
                              <Text className="DroneID3" variant="body12">
                                Drone ID #
                              </Text>
                              <Text className="One66" variant="body6">
                                3
                              </Text>
                            </Column>
                            <Text className="columndjiminise2" variant="body12">
                              DJI Mini SE
                            </Text>
                          </Column>
                          <Img
                            src="images/img_group87174.png"
                            className="ghiblifrontUK_Five"
                            alt="ghiblifrontUK Six"
                          />
                          <Button
                            className="font-medium font-poppins lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[23%]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="OutlineRedA702"
                          >
                            Stopped
                          </Button>
                        </Row>
                      </Column>
                      <Column className="items-center justify-start mt-[1px] w-[90%]">
                        <Line className="bg-gray_203 h-[1px] w-[100%]" />
                        <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                      </Column>
                    </Column>
                  </Stack>
                </Column>
              </Stack>
              <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[99%]">
                <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                    <Column className="font-dmsans justify-start mt-[3px] w-[24%]">
                      <Column className="justify-start ml-[1px] w-[84%]">
                        <Text className="DroneID3" variant="body12">
                          Drone ID #
                        </Text>
                        <Text className="One66" variant="body6">
                          4
                        </Text>
                      </Column>
                      <Text className="columndjiminise2" variant="body12">
                        DJI Phantom
                      </Text>
                    </Column>
                    <Img
                      src="images/img_ghiblifrontuk.png"
                      className="ghiblifrontUK_Seven"
                      alt="ghiblifrontUK Seven"
                    />
                    <Text className="rowdroneid_three" variant="body12">
                      Connected
                    </Text>
                  </Row>
                </Column>
                <Column className="items-center justify-start mt-[1px] w-[90%]">
                  <Line className="bg-gray_203 h-[1px] w-[100%]" />
                  <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                </Column>
              </Column>
            </Stack>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default AdminDashboardDroneTPage;
