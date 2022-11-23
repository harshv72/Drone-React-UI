import React from "react";

import { Column, Stack, Text, Row, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const DroneAIModelEvaluationsPage = () => {
  const navigate = useNavigate();

  function handleNavigate46() {
    navigate("/dronearvrtracking");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[342px] xl:pb-[428px] 2xl:pb-[482px] 3xl:pb-[578px] w-[100%]">
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
          <Row className="font-poppins items-center ml-[3px] w-[76%]">
            <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[28%]">
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
              <Column className="bg-bluegray_900 items-center justify-end lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-start mt-[4px] w-[99%]">
                  <Img
                    src="images/img_volume.svg"
                    className="call"
                    alt="volume"
                  />
                  <Text className="ListMenu29" variant="body12">
                    Drone AI
                  </Text>
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="arrowright_Three3"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Row className="items-start lg:mb-[496px] xl:mb-[620px] 2xl:mb-[698px] 3xl:mb-[838px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[89%]">
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
            </Column>
            <Column className="font-inter lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[69%]">
              <Text className="columnselectroleto_one9" as="h4" variant="h4">
                Drone AI Model Evaluations
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[72%]">
                <List
                  className="xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-2 min-h-[auto] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] w-[63%]"
                  orientation="horizontal"
                >
                  <Stack className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] w-[100%]">
                    <div className="absolute bg-blue_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius5 top-[2%] w-[100%]"></div>
                    <Text
                      className="absolute font-semibold inset-x-[0] mx-[auto] text-white_A700 top-[0] w-[max-content]"
                      variant="body12"
                    >
                      AI Service Management
                    </Text>
                  </Stack>
                  <Stack className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] w-[100%]">
                    <div className="absolute bg-light_blue_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius5 top-[2%] w-[100%]"></div>
                    <Text
                      className="absolute font-semibold right-[9%] text-white_A700 top-[0] w-[auto]"
                      variant="body12"
                    >
                      AI Model Management
                    </Text>
                  </Stack>
                </List>
                <Text
                  className="common-pointer bg-light_blue_500 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pb-[14px] xl:pb-[18px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pl-[19px] xl:pl-[24px] 2xl:pl-[27px] 3xl:pl-[32px] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rowdata_collection_one"
                  variant="body12"
                  onClick={handleNavigate46}
                >
                  AI Evaluations
                </Text>
              </Row>
              <Row className="font-inter items-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[46%]">
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Service ID #1144
                </Text>
                <Img
                  src="defaultNoData.png"
                  className="lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] rounded-radius15 w-[30%]"
                  alt="CropCard"
                />
              </Row>
              <Text
                className="font-semibold leading-[normal] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-bluegray_900 w-[75%]"
                variant="body5"
              >
                Crop Health
                <br />
                Object Detection Model: DenseNet-201
              </Text>
              <Img
                src="images/img_image5_238X745.png"
                className="lg:h-[170px] xl:h-[212px] 2xl:h-[239px] 3xl:h-[286px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] rounded-radius10 w-[99%]"
                alt="imageFive"
              />
              <Img
                src="images/img_image3_456X745.png"
                className="lg:h-[325px] xl:h-[406px] 2xl:h-[457px] 3xl:h-[548px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rounded-radius10 w-[99%]"
                alt="imageThree"
              />
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneAIModelEvaluationsPage;
