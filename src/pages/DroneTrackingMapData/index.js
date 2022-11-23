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

const DroneTrackingMapDataPage = () => {
  const navigate = useNavigate();

  function handleNavigate51() {
    navigate("/admindashboarddronet");
  }
  function handleNavigate54() {
    navigate("/dronearvrtracking");
  }
  function handleNavigate58() {
    navigate("/admindashboarddronet");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-end justify-start mx-[auto] pb-[4px] w-[100%]">
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
          <Stack className="lg:h-[1344px] xl:h-[1681px] 2xl:h-[1891px] 3xl:h-[2269px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
            <Stack className="absolute font-poppins xl:h-[1066px] 2xl:h-[1199px] 3xl:h-[1439px] lg:h-[852px] left-[0] top-[0] w-[95%]">
              <Column className="absolute items-center justify-start w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[22%]">
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
                      name="Group490"
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
                    <List
                      className="gap-[0] min-h-[auto] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]"
                      orientation="vertical"
                    >
                      <Row className="listmusic">
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
                      <Row className="items-start ml-[2px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[99%]">
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
                    </List>
                    <Row className="items-start lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[89%]">
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
                  </Column>
                  <Column className="font-inter justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[74%]">
                    <Text
                      className="columnselectroleto_one7"
                      as="h4"
                      variant="h4"
                    >
                      Selected Drone Tracking
                    </Text>
                    <Row className="bg-gray_401 font-worksans items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[54%]">
                      <Button
                        className="font-semibold lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                        shape="RoundedBorder5"
                        size="xl"
                        variant="FillBlueA700"
                      >
                        Fleet Statistics
                      </Button>
                      <Text
                        className="common-pointer bg-light_blue_500 lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:pb-[13px] xl:pb-[16px] 2xl:pb-[19px] 3xl:pb-[22px] lg:pl-[19px] xl:pl-[24px] 2xl:pl-[28px] 3xl:pl-[33px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] pt-[3px] rowgroup557"
                        variant="body12"
                        onClick={handleNavigate58}
                      >
                        Drone Map Tracking
                      </Text>
                      <Button
                        className="common-pointer font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                        onClick={handleNavigate54}
                        shape="RoundedBorder5"
                        size="lg"
                        variant="FillBlueA700"
                      >
                        AR/VR Tracking
                      </Button>
                    </Row>
                    <Column className="font-inter justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[99%]">
                      <Text
                        className="ml-[1px] text-bluegray_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Drone ID #1
                      </Text>
                      <Row className="items-start justify-between mt-[4px] w-[100%]">
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
                          src="images/img_group87174.png"
                          className="lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] w-[15%]"
                          alt="ghiblifrontUK"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column className="absolute font-inter h-[max-content] inset-y-[0] justify-start my-[auto] right-[1%] w-[76%]">
                <Text
                  className="font-light leading-[normal] lg:ml-[420px] xl:ml-[526px] 2xl:ml-[592px] 3xl:ml-[710px] text-bluegray_900 w-[43%]"
                  variant="body5"
                >
                  <span className="text-bluegray_900 font-inter font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Drone
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Drone ID #1
                    <br />
                    Drone model: DJI Mini SE
                    <br />
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Service Details
                    <br />
                  </span>
                  <span className="text-bluegray_900 font-inter lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                    Assigned Service ID #: 1144
                    <br />
                    Service Type: Data Collection
                    <br />
                    Farm: 3671 Old Toll Road, Mariposa, CA 95338 <br />
                    Land: West Plot A - Crop
                    <br />
                    Farmer: Andy Palmer
                    <br />
                    Service Time: Half Day, 10:00 AM
                    <br />
                    Mission Plan ID #0
                    <br />
                    Flight ID #1
                  </span>
                </Text>
                <Column className="bg-white_A700 font-dmsans items-center justify-start lg:mr-[242px] xl:mr-[303px] 2xl:mr-[341px] 3xl:mr-[409px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[67%]">
                  <Column className="justify-start xl:mb-[105px] 2xl:mb-[119px] 3xl:mb-[142px] lg:mb-[84px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
                    <Text
                      className="font-medium ml-[1px] text-black_901 w-[auto]"
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
                    <RadioGroup
                      className="3xl:mt-[106px] lg:mt-[63px] xl:mt-[79px] 2xl:mt-[89px] w-[46%]"
                      name="radiogrouptext four"
                    >
                      <Radio
                        value="Actualpath"
                        className="font-normal lg:mr-[120px] xl:mr-[151px] 2xl:mr-[170px] 3xl:mr-[204px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901"
                        inputClassName="h-[14px] mr-[5px] w-[14px]"
                        checked={false}
                        name="radiogrouptext four"
                        label="Actual path"
                        variant="FillDeeppurpleA400"
                      ></Radio>
                      <Radio
                        value="Missionplan"
                        className="font-normal lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:ml-[114px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901"
                        inputClassName="h-[14px] mr-[5px] w-[14px]"
                        checked={false}
                        name="radiogrouptext four"
                        label="Mission plan"
                        variant="FillLightblueA700"
                      ></Radio>
                    </RadioGroup>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Text
              className="font-dmsans right-[28%] top-[38%] tracking-ls1 Addaflightti"
              variant="body5"
            >
              Search Drones by Region
            </Text>
            <Column
              className="absolute bg-cover bg-repeat bottom-[0] font-dmsans justify-end lg:pl-[17px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] right-[0] w-[92%]"
              style={{
                backgroundImage: "url('images/img_maps_1028X1318.png')",
              }}
            >
              <Stack className="lg:h-[566px] xl:h-[708px] 2xl:h-[796px] 3xl:h-[955px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] mt-[1px] w-[92%]">
                <Stack className="absolute bottom-[0] lg:h-[532px] xl:h-[666px] 2xl:h-[749px] 3xl:h-[899px] left-[0] w-[69%]">
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[1%] justify-end lg:p-[141px] xl:p-[177px] 2xl:p-[199px] 3xl:p-[238px] right-[3%] w-[76%]"
                    style={{
                      backgroundImage: "url('images/img_group423.svg')",
                    }}
                  >
                    <Column className="bg-green_50_99 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-start lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mr-[111px] xl:mr-[139px] 2xl:mr-[157px] 3xl:mr-[188px] 3xl:mt-[116px] lg:mt-[68px] xl:mt-[86px] 2xl:mt-[97px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 lg:w-[27px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]">
                      <div className="bg-teal_A700 lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                    </Column>
                    <Stack className="bg-green_A700 3xl:h-[107px] lg:h-[64px] xl:h-[80px] 2xl:h-[90px] 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] lg:mr-[23px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rotate-[71deg] rounded-radius50 3xl:w-[106px] lg:w-[63px] xl:w-[79px] 2xl:w-[89px]">
                      <div className="absolute bg-deep_purple_300_66 lg:h-[48px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[47px] xl:w-[59px] 2xl:w-[67px] 3xl:w-[80px]"></div>
                      <Img
                        src="images/img_ghiblifrontuk_51X66.png"
                        className="ghiblifrontUK_Two1"
                        alt="ghiblifrontUK One"
                      />
                    </Stack>
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
                  <Column className="absolute bg-white_A700 border border-bluegray_101 border-solid items-center justify-end py-[4px] right-[38%] rounded-radius2 top-[0] w-[4%]">
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
                  <Stack className="absolute bg-white_A700 lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] left-[0] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius12 shadow-bs5 top-[2%] w-[30%]">
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
                </Stack>
                <Stack
                  className="absolute bg-cover bg-repeat bottom-[1%] lg:h-[480px] xl:h-[600px] 2xl:h-[675px] 3xl:h-[810px] left-[14%] px-[2px] w-[53%]"
                  style={{ backgroundImage: "url('images/img_group491.svg')" }}
                >
                  <Stack className="absolute lg:h-[471px] xl:h-[589px] 2xl:h-[663px] 3xl:h-[795px] inset-[0] justify-center m-[auto] w-[92%]">
                    <Row className="absolute items-center justify-evenly top-[0] w-[100%]">
                      <Stack className="lg:h-[431px] xl:h-[540px] 2xl:h-[607px] 3xl:h-[728px] w-[84%]">
                        <Stack className="absolute lg:h-[431px] xl:h-[540px] 2xl:h-[607px] 3xl:h-[728px] left-[0] w-[82%]">
                          <Row className="absolute items-start justify-evenly w-[100%]">
                            <Stack className="lg:h-[429px] xl:h-[536px] 2xl:h-[603px] 3xl:h-[723px] mt-[4px] w-[71%]">
                              <Row className="absolute items-end justify-evenly left-[0] w-[94%]">
                                <Row className="items-start justify-evenly lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[34%]">
                                  <Line className="bg-light_blue_A700 h-[10px] rotate-[180deg] w-[35%]" />
                                  <Img
                                    src="images/img_line30.svg"
                                    className="lg:h-[409px] xl:h-[511px] 2xl:h-[575px] 3xl:h-[690px] w-[59%]"
                                    alt="LineThirty"
                                  />
                                </Row>
                                <Stack className="lg:h-[429px] xl:h-[536px] 2xl:h-[603px] 3xl:h-[723px] w-[66%]">
                                  <Column className="absolute items-center justify-start left-[0] w-[82%]">
                                    <Column className="justify-start w-[100%]">
                                      <Img
                                        src="images/img_line32.svg"
                                        className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[87%]"
                                        alt="LineThirtyTwo"
                                      />
                                      <Img
                                        src="images/img_line31.svg"
                                        className="lg:h-[409px] xl:h-[511px] 2xl:h-[575px] 3xl:h-[690px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[17%]"
                                        alt="LineThirtyOne"
                                      />
                                    </Column>
                                  </Column>
                                  <Img
                                    src="images/img_line32_light_blue_A700.svg"
                                    className="absolute lg:h-[413px] xl:h-[516px] 2xl:h-[581px] 3xl:h-[697px] inset-y-[0] my-[auto] right-[0] w-[47%]"
                                    alt="LineThirtyTwo One"
                                  />
                                </Stack>
                              </Row>
                              <Img
                                src="images/img_ticket_10X65.svg"
                                className="absolute bottom-[2%] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] right-[0] w-[23%]"
                                alt="ticket"
                              />
                            </Stack>
                            <Row className="items-start justify-evenly w-[29%]">
                              <Img
                                src="images/img_line37.svg"
                                className="lg:h-[414px] xl:h-[517px] 2xl:h-[582px] 3xl:h-[698px] w-[25%]"
                                alt="LineThirtySeven"
                              />
                              <div className="bg-light_blue_A700 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rotate-[180deg] w-[75%]"></div>
                            </Row>
                          </Row>
                          <Img
                            src="images/img_line39.svg"
                            className="absolute lg:h-[418px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] inset-y-[0] my-[auto] right-[0] w-[4%]"
                            alt="LineThirtyNine"
                          />
                        </Stack>
                        <Line className="absolute bg-light_blue_A700 bottom-[3%] h-[2px] right-[0] rotate-[179deg] w-[22%]" />
                      </Stack>
                      <Row className="items-start justify-evenly w-[16%]">
                        <Img
                          src="images/img_line37.svg"
                          className="lg:h-[407px] xl:h-[509px] 2xl:h-[573px] 3xl:h-[687px] w-[30%]"
                          alt="LineFortyOne"
                        />
                        <div className="bg-light_blue_A700 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rotate-[180deg] w-[70%]"></div>
                      </Row>
                    </Row>
                    <Line className="absolute bg-light_blue_A700 lg:h-[462px] xl:h-[578px] 2xl:h-[650px] 3xl:h-[780px] inset-y-[0] my-[auto] right-[0] w-[3px]" />
                  </Stack>
                  <Line className="absolute bg-light_blue_A700 bottom-[1%] h-[10px] right-[0] rotate-[175deg] w-[5%]" />
                  <Img
                    src="images/img_vector_indigo_A202.svg"
                    className="absolute lg:h-[337px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[568px] left-[3%] top-[12%] w-[67%]"
                    alt="Vector"
                  />
                </Stack>
                <Column className="absolute bg-white_A700 border border-blue_50 border-solid justify-start 3xl:pl-[10px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] right-[0] rounded-radius12 top-[0] w-[33%]">
                  <Text
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] columnstationeddrone"
                    variant="body5"
                  >
                    Selected Drone: ID # 1
                  </Text>
                  <Column className="bg-gray_201 border-2 border-deep_purple_A400 border-solid items-center justify-end lg:mb-[27px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius12 shadow-bs5 w-[100%]">
                    <Row className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]">
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
                        alt="ghiblifrontUK Two"
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
                </Column>
              </Stack>
              <Column className="justify-start lg:ml-[588px] xl:ml-[736px] 2xl:ml-[828px] 3xl:ml-[994px] lg:mr-[121px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] mt-[1px] w-[23%]">
                <Column className="bg-white_A700 justify-start lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[51px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius12 shadow-bs5 w-[85%]">
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
                  className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:ml-[177px] xl:ml-[221px] 2xl:ml-[249px] 3xl:ml-[298px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] rotate-[71deg] lg:w-[30px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
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
            </Column>
            <Column className="absolute font-inter items-center justify-start right-[0] top-[37%] w-[26%]">
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
        </Column>
        <Column className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:px-[127px] xl:px-[159px] 2xl:px-[179px] 3xl:px-[214px] w-[100%]">
          <Button
            className="common-pointer font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[26%]"
            onClick={handleNavigate51}
            shape="RoundedBorder5"
            size="6xl"
            variant="FillGray401"
          >
            Back
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default DroneTrackingMapDataPage;
