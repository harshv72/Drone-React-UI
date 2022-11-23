import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  Input,
  SelectBox,
  Line,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DroneAIAIServicesPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dronecatalogbookings");
  }
  function handleNavigate1() {
    navigate("/dronecatalogbookings");
  }
  function handleNavigate6() {
    navigate("/dronearvrtracking");
  }
  function handleNavigate7() {
    navigate("/dronecatalogbookings");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[247px] xl:pb-[309px] 2xl:pb-[348px] 3xl:pb-[417px] w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] w-[90%]">
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
            <Column className="font-inter justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[74%]">
              <Text className="columnselectroleto_one7" as="h4" variant="h4">
                Drone AI Services
              </Text>
              <Row className="bg-gray_401 font-worksans items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[56%]">
                <Stack className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[30%]">
                  <div className="absolute bg-light_blue_500 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius5 top-[2%] w-[100%]"></div>
                  <Text
                    className="absolute font-semibold inset-x-[0] mx-[auto] text-white_A700 top-[0] w-[max-content]"
                    variant="body12"
                  >
                    AI Service Management
                  </Text>
                </Stack>
                <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] my-[1px] w-[30%]">
                  <div className="absolute bg-light_blue_A700 bottom-[0] lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius5 w-[100%]"></div>
                  <Text
                    className="absolute font-semibold right-[9%] text-white_A700 top-[0] w-[auto]"
                    variant="body12"
                  >
                    AI Model Management
                  </Text>
                </Stack>
                <Text
                  className="common-pointer bg-blue_A700 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[22px] xl:pr-[27px] 2xl:pr-[31px] 3xl:pr-[37px] pt-[2px] rowdata_collection_one"
                  variant="body12"
                  onClick={handleNavigate6}
                >
                  AI Evaluations
                </Text>
              </Row>
              <Column className="bg-white_A700 font-poppins items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:py-[24px] xl:py-[30px] 2xl:py-[34px] 3xl:py-[40px] rounded-radius30 shadow-bs7 w-[100%]">
                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="rowallbookings" variant="body4">
                      All AI Services
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:ml-[348px] 2xl:mt-[9px] 3xl:ml-[417px] 3xl:mt-[10px] flex lg:ml-[247px] lg:mt-[6px] w-[24%] xl:ml-[309px] xl:mt-[8px]"
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
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pt-[2px] rounded-radius5 w-[100%]">
                    <Row className="items-start w-[89%]">
                      <Text className="rowserviceid" variant="body12">
                        Service ID#
                      </Text>
                      <Text className="Farmland" variant="body12">
                        Land Type
                      </Text>
                      <Text
                        className="lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] mt-[1px] rowserviceid"
                        variant="body12"
                      >
                        AI Service Type
                      </Text>
                      <Text
                        className="lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] rowlanguage_two"
                        variant="body12"
                      >
                        Input Data
                      </Text>
                      <Text
                        className="xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] mt-[1px] rowserviceid"
                        variant="body12"
                      >
                        Model
                      </Text>
                      <Text
                        className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] rowserviceid"
                        variant="body12"
                      >
                        Service
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pb-[1px] pr-[1px] w-[92%]"
                      orientation="vertical"
                    >
                      <Row className="items-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1144
                        </Text>
                        <Text className="timeZone7" variant="body12">
                          Crop
                        </Text>
                        <Text
                          className="font-medium leading-[normal] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] mt-[4px] text-bluegray_903 tracking-ls1 w-[13%]"
                          variant="body12"
                        >
                          Data Collection:
                          <br />
                          Crop Health
                        </Text>
                        <Text
                          className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          Image, Video
                        </Text>
                        <Text className="timeZone7" variant="body12">
                          Object Detection
                        </Text>
                        <Text
                          className="common-pointer bg-red_300 font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                          onClick={handleNavigate7}
                        >
                          Change
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1000
                        </Text>
                        <Text className="timeZone_One3" variant="body12">
                          Livestock
                        </Text>
                        <Text
                          className="font-medium leading-[normal] lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] mt-[4px] text-bluegray_903 tracking-ls1 w-[13%]"
                          variant="body12"
                        >
                          Surveillance: <br />
                          Livestock Health
                        </Text>
                        <Text
                          className="lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] mt-[4px] rowid#counter"
                          variant="body12"
                        >
                          Infrared Image, Video
                        </Text>
                        <Text
                          className="lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          Object Detection
                        </Text>
                        <Text
                          className="common-pointer bg-red_300 font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                          onClick={handleNavigate}
                        >
                          Change
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                      <Row className="items-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] rounded-radius5 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1000
                        </Text>
                        <Text className="timeZone_One3" variant="body12">
                          Livestock
                        </Text>
                        <Text
                          className="font-medium leading-[normal] lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] mt-[4px] text-bluegray_903 tracking-ls1 w-[14%]"
                          variant="body12"
                        >
                          Surveillance:
                          <br />
                          Livestock Behavior
                        </Text>
                        <Text
                          className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] id#Counter"
                          variant="body12"
                        >
                          Video
                        </Text>
                        <Text
                          className="lg:ml-[118px] xl:ml-[148px] 2xl:ml-[167px] 3xl:ml-[200px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowid#counter"
                          variant="body12"
                        >
                          Keypoint Tracking
                        </Text>
                        <Text
                          className="common-pointer bg-red_300 font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] pb-[2px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius5 text-white_A700 w-[81px]"
                          variant="body12"
                          onClick={handleNavigate1}
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

export default DroneAIAIServicesPage;
