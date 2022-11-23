import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Input,
  List,
  Button,
  RadioGroup,
  Radio,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DroneTrackingMapSurvPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/dronearvrtracking");
  }
  function handleNavigate13() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate19() {
    navigate("/admindashboarddronet");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[222px] xl:pb-[278px] 2xl:pb-[313px] 3xl:pb-[375px] w-[100%]">
        <Column className="items-center w-[100%]">
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
          <Stack className="lg:h-[1312px] xl:h-[1641px] 2xl:h-[1846px] 3xl:h-[2215px] w-[100%]">
            <Text
              className="absolute left-[25%] text-bluegray_900 top-[2%] w-[auto]"
              as="h4"
              variant="h4"
            >
              Selected Drone Tracking
            </Text>
            <Stack className="absolute lg:h-[1312px] xl:h-[1641px] 2xl:h-[1846px] 3xl:h-[2215px] w-[100%]">
              <Stack className="absolute font-poppins xl:h-[1066px] 2xl:h-[1199px] 3xl:h-[1439px] lg:h-[852px] left-[0] top-[0] w-[92%]">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[23%]">
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
                      <Input
                        className="placeholder:text-white_A700 Group463"
                        wrapClassName="2xl:ml-[6px] 2xl:mt-[54px] 3xl:ml-[7px] 3xl:mt-[64px] flex lg:ml-[4px] lg:mt-[38px] w-[98%] xl:ml-[5px] xl:mt-[48px]"
                        name="Group609"
                        placeholder="Drone Cloud Tracking"
                        prefix={
                          <Img
                            src="images/img_icon_24_outline_keysquare.svg"
                            className="lg:w-[17px] lg:h-[18px] lg:ml-[3px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:ml-[4px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[5px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[6px] 3xl:mr-[16px] my-[auto]"
                            alt="icon / 24 / outline / key-square"
                          />
                        }
                        shape="RoundedBorder8"
                        size="sm"
                        variant="FillBluegray900"
                      ></Input>
                      <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]">
                        <Img
                          src="images/img_airplane.svg"
                          className="call"
                          alt="airplane"
                        />
                        <Text className="ListMenu8" variant="body12">
                          Drone Catalog
                        </Text>
                        <Img
                          src="images/img_arrowright_bluegray_900.svg"
                          className="arrowright27"
                          alt="arrowright"
                        />
                      </Row>
                      <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
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
                        <Img
                          src="images/img_music.svg"
                          className="call"
                          alt="music"
                        />
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
                          <Img
                            src="images/img_user.svg"
                            className="call"
                            alt="user"
                          />
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
                    <Column className="justify-start 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[73px] xl:mt-[91px] w-[75%]">
                      <Row className="bg-gray_401 font-worksans items-center ml-[4px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[54%]">
                        <Button
                          className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                          shape="RoundedBorder5"
                          size="xl"
                          variant="FillBlueA700"
                        >
                          Fleet Statistics
                        </Button>
                        <Text
                          className="common-pointer bg-light_blue_500 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[19px] xl:pl-[24px] 2xl:pl-[28px] 3xl:pl-[33px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowgroup557"
                          variant="body12"
                          onClick={handleNavigate19}
                        >
                          Drone Map Tracking
                        </Text>
                        <Button
                          className="common-pointer font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                          onClick={handleNavigate12}
                          shape="RoundedBorder5"
                          size="lg"
                          variant="FillBlueA700"
                        >
                          AR/VR Tracking
                        </Button>
                      </Row>
                      <Text
                        className="font-inter ml-[1px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] text-bluegray_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Drone ID #4
                      </Text>
                      <Row className="font-inter items-start justify-between mt-[4px] w-[100%]">
                        <Text className="rowdescription" variant="body5">
                          <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            Tracking Details
                            <br />
                          </span>
                          <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            Status: Active
                            <br />
                            <br />
                            Total distance traveled: 120 meters
                            <br />
                            Total time traveled: 10 minutes
                            <br />
                            <br />
                            Location (Latitude, Longitude, Altitude): <br />
                          </span>
                          <span className="text-bluegray_900 font-inter font-normal not-italic lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            (37.558381,-122.048111, 100)
                            <br />
                            <br />
                          </span>
                          <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                            Speed: 10 m/s
                            <br />
                            <br />
                            Distance to destination: 10 meters
                            <br />
                            Estimated time to destination: 10:45 am
                          </span>
                        </Text>
                        <Img
                          src="images/img_ghiblifrontuk.png"
                          className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[14%]"
                          alt="ghiblifrontUK"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="absolute font-inter h-[max-content] inset-y-[0] justify-start my-[auto] right-[1%] w-[80%]">
                  <Text
                    className="font-light leading-[normal] lg:ml-[439px] xl:ml-[549px] 2xl:ml-[618px] 3xl:ml-[742px] text-bluegray_900 w-[42%]"
                    variant="body5"
                  >
                    <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Drone
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Drone ID #4
                      <br />
                      Drone model: DJI Phantom Pro
                      <br />
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Service Details
                      <br />
                    </span>
                    <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      Assigned Service ID #: 1000
                      <br />
                      Service Type: Surveillance
                      <br />
                      Farm: 3671 Old Toll Road, Mariposa, CA 95338 <br />
                      Land: East Plot D - Livestock
                      <br />
                      Farmer: Andy Palmer
                      <br />
                      Service Time: Full Day, 10:00 AM
                      <br />
                      Mission Plan ID #1
                      <br />
                      Flight ID #1
                    </span>
                  </Text>
                  <Column className="bg-white_A700 font-dmsans items-center justify-start lg:mr-[260px] xl:mr-[326px] 2xl:mr-[367px] 3xl:mr-[440px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[65%]">
                    <Column className="justify-start lg:mb-[129px] xl:mb-[161px] 2xl:mb-[182px] 3xl:mb-[218px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
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
                          className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Active"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Stopped"
                          className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Stopped"
                          size="sm"
                          variant="FillRedA702"
                        ></Radio>
                        <Radio
                          value="Connectedreadytodoservice"
                          className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[4px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Connected ready to do service"
                          size="sm"
                          variant="FillAmber500"
                        ></Radio>
                        <Radio
                          value="Registerednotconnected"
                          className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                          inputClassName="h-[14px] mr-[5px] w-[14px]"
                          checked={false}
                          name="radiogrouptext"
                          label="Registered not connected"
                          size="sm"
                          variant="FillDeeppurpleA400"
                        ></Radio>
                      </RadioGroup>
                      <Row className="items-center ml-[2px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[46%]">
                        <Row className="items-start w-[43%]">
                          <Img
                            src="images/img_close_19X14.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mt-[1px] w-[11%]"
                            alt="close"
                          />
                          <Text className="ElementsInfo" variant="body5">
                            Actual path
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[46%]">
                          <Img
                            src="images/img_close_1.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mt-[1px] w-[10%]"
                            alt="close One"
                          />
                          <Text className="ElementsInfo" variant="body5">
                            Mission plan
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Text
                className="font-dmsans right-[33%] top-[39%] tracking-ls1 Addaflightti"
                variant="body5"
              >
                Search Drones by Region
              </Text>
              <Stack
                className="absolute bg-cover bg-repeat bottom-[0] font-dmsans 2xl:h-[1029px] 3xl:h-[1235px] lg:h-[732px] xl:h-[915px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] right-[0] w-[81%]"
                style={{
                  backgroundImage: "url('images/img_maps_1028X1160.png')",
                }}
              >
                <Stack className="absolute bottom-[0] 3xl:h-[1126px] lg:h-[667px] xl:h-[834px] 2xl:h-[938px] right-[0] w-[88%]">
                  <Stack className="absolute 3xl:h-[1126px] lg:h-[667px] xl:h-[834px] 2xl:h-[938px] right-[2%] w-[83%]">
                    <Column className="absolute items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 border border-bluegray_101 border-solid items-center justify-end py-[4px] rounded-radius2 w-[4%]">
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
                      <Stack className="lg:h-[476px] xl:h-[595px] 2xl:h-[669px] 3xl:h-[803px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[77%]">
                        <Stack className="absolute lg:h-[476px] xl:h-[595px] 2xl:h-[669px] 3xl:h-[803px] w-[100%]">
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[470px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] inset-[0] justify-center m-[auto] lg:px-[106px] xl:px-[133px] 2xl:px-[150px] 3xl:px-[180px] w-[96%]"
                            style={{
                              backgroundImage: "url('images/img_group423.svg')",
                            }}
                          >
                            <Column className="absolute bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start left-[13%] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 top-[22%] lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                              <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                            </Column>
                            <Stack className="absolute bg-deep_purple_100_66 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] left-[0] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rotate-[25deg] rounded-radius50 top-[14%] 3xl:w-[111px] lg:w-[66px] xl:w-[82px] 2xl:w-[93px]">
                              <div className="absolute bg-amber_500 lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"></div>
                              <Img
                                src="images/img_ghiblifrontuk_49X71.png"
                                className="absolute lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] inset-[0] justify-center m-[auto] w-[76%]"
                                alt="ghiblifrontUK One"
                              />
                            </Stack>
                          </Stack>
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
                        </Stack>
                        <Stack
                          className="absolute bg-cover bg-repeat lg:h-[470px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] inset-[0] justify-center m-[auto] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[96%]"
                          style={{
                            backgroundImage: "url('images/img_group612.svg')",
                          }}
                        >
                          <Column className="absolute bottom-[1%] items-center justify-start left-[5%] w-[74%]">
                            <Row className="items-start justify-evenly w-[100%]">
                              <Line className="bg-light_blue_A700 h-[10px] rotate-[180deg] w-[38%]" />
                              <Line className="bg-light_blue_A700 h-[10px] lg:mb-[131px] xl:mb-[164px] 2xl:mb-[185px] 3xl:mb-[222px] rotate-[86deg] w-[3%]" />
                              <Line className="bg-light_blue_A700 h-[10px] lg:mt-[179px] xl:mt-[224px] 2xl:mt-[252px] 3xl:mt-[302px] rotate-[180deg] w-[57%]" />
                              <Line className="bg-light_blue_A700 h-[10px] lg:mt-[179px] xl:mt-[224px] 2xl:mt-[252px] 3xl:mt-[302px] rotate-[90deg] w-[2%]" />
                            </Row>
                          </Column>
                          <Line className="absolute bg-light_blue_A700 bottom-[1%] h-[10px] right-[0] rotate-[179deg] w-[19%]" />
                        </Stack>
                      </Stack>
                      <Column className="bg-white_A700 justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius12 shadow-bs5 w-[30%]">
                        <Row className="items-center my-[2px] w-[94%]">
                          <Button
                            className="flex lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                            size="smIcn"
                            variant="icbFillIndigo51"
                          >
                            <Img
                              src="images/img_eye_23X20.svg"
                              className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                              alt="eye One"
                            />
                          </Button>
                          <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[74%]">
                            <Text
                              className="font-bold font-inter text-gray_913 tracking-ls1 w-[auto]"
                              variant="body9"
                            >
                              3680 Old Toll Road
                            </Text>
                            <Text
                              className="font-cabin font-normal mt-[2px] not-italic text-gray_402 tracking-ls1 w-[auto]"
                              variant="body14"
                            >
                              Mariposa, CA 95338{" "}
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Button
                        className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] rotate-[71deg] lg:w-[30px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                        shape="icbRoundedBorder21"
                        size="smIcn"
                        variant="icbOutlineIndigo507f1"
                      >
                        <Img
                          src="images/img_cursor.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                          alt="cursor"
                        />
                      </Button>
                    </Column>
                    <Line className="absolute bg-light_blue_A700 h-[10px] left-[5%] rotate-[90deg] top-[9%] w-[1%]" />
                  </Stack>
                  <Line className="absolute bg-light_blue_A700 h-[10px] left-[16%] rotate-[180deg] top-[9%] w-[3%]" />
                  <Stack className="absolute bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[0] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 top-[2%] w-[24%]">
                    <Row className="absolute font-dmsans h-[max-content] inset-y-[0] items-start left-[0] my-[auto] w-[65%]">
                      <Column className="bg-green_50 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                        <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                      </Column>
                      <Text className="rowellipsefortyfive_one" variant="body9">
                        San Francisco
                      </Text>
                    </Row>
                    <Text className="distance" variant="body14">
                      Zoom in: 50 meters
                    </Text>
                  </Stack>
                  <Img
                    src="images/img_vector_indigo_A202.svg"
                    className="absolute lg:h-[337px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] left-[12%] top-[17%] w-[41%]"
                    alt="Vector"
                  />
                  <Column className="absolute bg-white_A700 border border-blue_50 border-solid justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] right-[0] rounded-radius12 top-[1%] w-[39%]">
                    <Text
                      className="lg:mb-[135px] xl:mb-[169px] 2xl:mb-[190px] 3xl:mb-[228px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] columnstationeddrone"
                      variant="body5"
                    >
                      Selected Drone: ID # 4
                    </Text>
                  </Column>
                </Stack>
                <Column className="absolute items-center justify-start right-[0] top-[12%] w-[33%]">
                  <Column className="items-end justify-start w-[100%]">
                    <Column className="bg-white_A700 border-2 border-deep_purple_A400 border-solid items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius12 shadow-bs5 w-[100%]">
                      <Row className="items-start mb-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[99%]">
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
                          alt="ghiblifrontUK Two"
                        />
                        <Text className="rowdroneid_three" variant="body12">
                          Connected
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start mt-[1px] w-[94%]">
                      <Line className="bg-gray_203 h-[1px] w-[100%]" />
                      <Line className="bg-gray_203 h-[1px] lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] w-[100%]" />
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Column className="absolute font-inter items-center justify-start right-[2%] top-[38%] w-[28%]">
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
            </Stack>
          </Stack>
        </Column>
        <Button
          className="common-pointer font-medium lg:ml-[262px] xl:ml-[328px] 2xl:ml-[369px] 3xl:ml-[443px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[20%]"
          onClick={handleNavigate13}
          shape="RoundedBorder5"
          size="6xl"
          variant="FillGray401"
        >
          Back
        </Button>
      </Column>
    </>
  );
};

export default DroneTrackingMapSurvPage;
