import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const DroneAIAIModelManagementPage = () => {
  const navigate = useNavigate();

  function handleNavigate114() {
    navigate("/dronearvrtracking");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
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
          <Row className="font-poppins items-start justify-between w-[96%]">
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
            <Column className="font-inter justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[76%]">
              <Text className="columnselectroleto_one9" as="h4" variant="h4">
                Drone AI Models
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[51%]">
                <Button
                  className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillBlueA700"
                >
                  AI Service Management
                </Button>
                <Text
                  className="bg-light_blue_500 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] pt-[2px] rowgroup557"
                  variant="body12"
                >
                  AI Model Management
                </Text>
                <Text
                  className="common-pointer bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[22px] xl:pr-[27px] 2xl:pr-[31px] 3xl:pr-[37px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rowdata_collection_one"
                  variant="body12"
                  onClick={handleNavigate114}
                >
                  AI Evaluations
                </Text>
              </Row>
              <Row className="font-inter items-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[33%]">
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
              <Column className="font-inter justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
                <Text
                  className="font-semibold leading-[normal] text-bluegray_900 w-[54%]"
                  variant="body5"
                >
                  Crop Health
                  <br />
                  Object Detection Model: DenseNet-201
                </Text>
                <Row className="items-center xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[85px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[88%]">
                  <Column className="bg-gray_301 border border-black_901 border-solid items-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Column className="items-center justify-start my-[4px] w-[100%]">
                      <Row className="items-start justify-between w-[99%]">
                        <Button
                          className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center mt-[1px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbOutlineGray106"
                        >
                          <Img
                            src="images/img_ticket_56X56.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="ticket"
                          />
                        </Button>
                        <Img
                          src="images/img_checkmark_26X33.svg"
                          className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[15%]"
                          alt="checkmark"
                        />
                      </Row>
                      <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                        <Text className="title4" variant="body5">
                          DenseNet-201
                        </Text>
                        <Text className="description12" variant="body12">
                          The Dense Convolutional Network (DenseNet), which
                          connects each layer to every other layer in a
                          feed-forward fashion.
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_1.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket One"
                      />
                    </Button>
                    <Column className="justify-start lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                      <Text className="title4" variant="body5">
                        Inception-v3
                      </Text>
                      <Text className="description_One1" variant="body12">
                        The Inception-v3 network is 42-layers deep with
                        concatenated convolutions and pooling layers
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_1.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket Two"
                      />
                    </Button>
                    <Column className="justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="title4" variant="body5">
                        ResNet-152-v2{" "}
                      </Text>
                      <Text className="description12" variant="body12">
                        {" "}
                        ResNet can have a very deep network of up to 152 layers
                        by learning the residual representation functions .
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Stack className="xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[84px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[54%]">
                  <Text
                    className="absolute bottom-[0] font-semibold leading-[normal] text-bluegray_900 w-[100%]"
                    variant="body5"
                  >
                    Livestock Health
                    <br />
                    Object Detection Model: Inception-v3
                  </Text>
                  <Text
                    className="absolute font-semibold left-[0] text-bluegray_900 top-[3%] w-[auto]"
                    variant="body3"
                  >
                    Service ID #1000
                  </Text>
                  <Img
                    src="defaultNoData.png"
                    className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] right-[36%] rounded-radius15 top-[0] w-[22%]"
                    alt="CropCardDark"
                  />
                </Stack>
                <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]">
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_56X56.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket Three"
                      />
                    </Button>
                    <Column className="justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="title4" variant="body5">
                        DenseNet-201
                      </Text>
                      <Text className="description12" variant="body12">
                        The Dense Convolutional Network (DenseNet), which
                        connects each layer to every other layer in a
                        feed-forward fashion.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-gray_301 border border-black_901 border-solid items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Column className="items-center justify-start lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Row className="items-start justify-between w-[96%]">
                        <Button
                          className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbOutlineGray106"
                        >
                          <Img
                            src="images/img_ticket_56X56.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="ticket Four"
                          />
                        </Button>
                        <Img
                          src="images/img_checkmark_26X33.svg"
                          className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[15%]"
                          alt="checkmark One"
                        />
                      </Row>
                      <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                        <Text className="title4" variant="body5">
                          Inception-v3
                        </Text>
                        <Text className="description_One1" variant="body12">
                          The Inception-v3 network is 42-layers deep with
                          concatenated convolutions and pooling layers
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_1.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket Five"
                      />
                    </Button>
                    <Column className="justify-start 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="title4" variant="body5">
                        Faster-R-CNN
                      </Text>
                      <Text className="description12" variant="body12">
                        Faster R-CNN involves global average pooling in order to
                        reduce the computation of first fully connected layer
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Text
                  className="font-semibold leading-[normal] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] text-bluegray_900 w-[54%]"
                  variant="body5"
                >
                  Livestock Behavior
                  <br />
                  Pose Estimation Model: DeepLabCut
                </Text>
                <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]">
                  <Column className="bg-gray_301 border border-black_901 border-solid items-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Column className="items-center justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[100%]">
                      <Row className="items-start justify-between w-[98%]">
                        <Button
                          className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbOutlineGray106"
                        >
                          <Img
                            src="images/img_ticket_1.svg"
                            className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                            alt="ticket Six"
                          />
                        </Button>
                        <Img
                          src="images/img_checkmark_26X33.svg"
                          className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[3px] w-[15%]"
                          alt="checkmark Two"
                        />
                      </Row>
                      <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                        <Text className="title4" variant="body5">
                          DeepLabCut
                        </Text>
                        <Text className="description_One1" variant="body12">
                          Deeplabcut: markerless pose estimation of user-defined
                          body parts with deep learning
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_1.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket Seven"
                      />
                    </Button>
                    <Column className="justify-start lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Text className="title4" variant="body5">
                        LEAP
                      </Text>
                      <Text className="description12" variant="body12">
                        Saliency-aware geodesic video object segmentation
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 border border-black_901 border-solid lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius6 shadow-bs12 w-[30%]">
                    <Button
                      className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray106"
                    >
                      <Img
                        src="images/img_ticket_1.svg"
                        className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                        alt="ticket Eight"
                      />
                    </Button>
                    <Column className="justify-start lg:mb-[39px] xl:mb-[49px] 2xl:mb-[56px] 3xl:mb-[67px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                      <Text className="title4" variant="body5">
                        DeepFly3D
                      </Text>
                      <Text
                        className="font-opensans lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] Services"
                        variant="body12"
                      >
                        Video segmentation via object flow
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Row className="font-poppins items-start justify-end ml-[auto] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius4 w-[26%]">
                  <Button
                    className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineGray201"
                  >
                    {"<"}
                  </Button>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[9%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineDeeppurpleA400"
                  >
                    1
                  </Button>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[9%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineGray201"
                  >
                    2
                  </Button>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 call"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineGray201"
                  >
                    3
                  </Button>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineGray201"
                  >
                    4
                  </Button>
                  <Text
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] Fourteen"
                    variant="body14"
                  >
                    ...
                  </Text>
                  <Text
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] Frame296"
                    variant="body14"
                  >
                    40
                  </Text>
                  <Button
                    className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center tracking-ls1 w-[10%]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineGray201"
                  >
                    {">"}
                  </Button>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DroneAIAIModelManagementPage;
