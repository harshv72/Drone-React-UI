import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Button,
  RadioGroup,
  Radio,
} from "components";
import { useNavigate } from "react-router-dom";

const DroneDataLivestockDaPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/dronedatalivestock");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[279px] xl:pb-[349px] 2xl:pb-[393px] 3xl:pb-[471px] w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] w-[88%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[24%]">
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
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
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
              <Column className="bg-bluegray_900 items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-center my-[3px] w-[99%]">
                  <Img
                    src="images/img_walletmoney2.svg"
                    className="call"
                    alt="walletmoneyTwo"
                  />
                  <Text className="ListMenu10" variant="body12">
                    Drone Data
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright_Two3"
                    alt="arrowright Two"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[90%]"
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
            <Column className="font-inter justify-start lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[58%]">
              <Text className="columnselectroleto_one9" as="h4" variant="h4">
                Data Processing
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[73%]">
                <Button
                  className="common-pointer font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                  onClick={handleNavigate76}
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillLightblueA700"
                >
                  Data Collection
                </Button>
                <Text
                  className="bg-light_blue_500 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] pt-[3px] rowgroup557"
                  variant="body12"
                >
                  Data Processsing
                </Text>
                <Text
                  className="bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] rowdata_collection_one"
                  variant="body12"
                >
                  Data Analysis
                </Text>
              </Row>
              <Column className="font-inter justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[99%]">
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Infrared Image Labeling
                </Text>
                <List
                  className="font-dmsans lg:gap-[45px] xl:gap-[56px] 2xl:gap-[64px] 3xl:gap-[76px] grid grid-cols-2 min-h-[auto] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[98%]"
                  orientation="horizontal"
                >
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="Image"
                        alt="Image"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:00 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            (37.558381,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="listcolor">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="Image"
                        alt="Image One"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] lg:pr-[28px] xl:pr-[35px] 2xl:pr-[40px] 3xl:pr-[48px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Image at 10:15 AM
                        </Text>
                        <Text className="language_One4" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            (37.558400,-122.048111)
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                </List>
                <Text
                  className="font-semibold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Video Labeling
                </Text>
                <Row className="font-dmsans items-center justify-between 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[98%]">
                  <Stack className="lg:h-[196px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] w-[46%]">
                    <div className="bg-white_A700 Color_Three"></div>
                    <Column className="absolute justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
                      <Img
                        src="images/img_image_6.png"
                        className="Image"
                        alt="Image Two"
                      />
                      <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[83%]">
                        <Text
                          className="font-medium text-black_901 w-[auto]"
                          variant="body4"
                        >
                          Video at 10:00 AM
                        </Text>
                        <Text className="duration9" variant="body12">
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Location:{" "}
                          </span>
                          <span className="text-black_901 font-dmsans lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            (37.558381,-122.048111)
                            <br />
                            Frame: 3/15, Duration: 15 seconds
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                  <RadioGroup
                    className="bg-white_A700 rounded-radius10 w-[45%]"
                    name="radiogrouptext one"
                  >
                    <Radio
                      value="StandingCattle"
                      className="font-normal lg:mr-[144px] xl:mr-[180px] 2xl:mr-[203px] 3xl:mr-[243px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext one"
                      label="Standing Cattle"
                      size="sm"
                    ></Radio>
                    <Radio
                      value="KeypointHead"
                      className="font-normal lg:mr-[148px] xl:mr-[185px] 2xl:mr-[209px] 3xl:mr-[250px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext one"
                      label="Keypoint Head"
                      size="sm"
                      variant="FillLightblueA700"
                    ></Radio>
                    <Radio
                      value="KeypointRightFrontLeg"
                      className="font-normal lg:mr-[103px] xl:mr-[129px] 2xl:mr-[146px] 3xl:mr-[175px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext one"
                      label="Keypoint Right Front Leg"
                      size="sm"
                      variant="FillAmber500"
                    ></Radio>
                    <Radio
                      value="KeypointLeftFrontLeg"
                      className="font-normal 2xl:mb-[102px] 3xl:mb-[122px] lg:mb-[72px] xl:mb-[90px] lg:mr-[109px] xl:mr-[136px] 2xl:mr-[154px] 3xl:mr-[184px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext one"
                      label="Keypoint Left Front Leg"
                      size="sm"
                      variant="FillDeeppurpleA400"
                    ></Radio>
                  </RadioGroup>
                </Row>
              </Column>
            </Column>
            <RadioGroup
              className="font-dmsans lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[241px] xl:mt-[301px] 2xl:mt-[339px] 3xl:mt-[407px] w-[10%]"
              name="radiogrouptext five"
            >
              <Radio
                value="HealthyCattle"
                className="font-normal lg:mr-[11px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                inputClassName="h-[14px] mr-[5px] w-[14px]"
                checked={false}
                name="radiogrouptext five"
                label="Healthy Cattle"
                size="sm"
                variant="FillLime500"
              ></Radio>
              <Radio
                value="CattlewithFever"
                className="font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901 w-[100%]"
                inputClassName="h-[14px] mr-[5px] w-[14px]"
                checked={false}
                name="radiogrouptext five"
                label="Cattle with Fever"
                size="sm"
                variant="FillRedA700"
              ></Radio>
            </RadioGroup>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneDataLivestockDaPage;
