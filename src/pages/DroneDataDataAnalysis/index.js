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

const DroneDataDataAnalysisPage = () => {
  const navigate = useNavigate();

  function handleNavigate55() {
    navigate("/dronedata");
  }
  function handleNavigate62() {
    navigate("/dronedatadataprocessing");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[289px] xl:pb-[362px] 2xl:pb-[407px] 3xl:pb-[488px] w-[100%]">
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
          <Row className="font-poppins items-start ml-[3px] w-[72%]">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[29%]">
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
            <Column className="font-inter justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[71%]">
              <Text
                className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Data Analysis
              </Text>
              <Column className="justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[74%]">
                <Row className="bg-gray_401 font-worksans items-center ml-[3px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius10 w-[99%]">
                  <Button
                    className="common-pointer font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[30%]"
                    onClick={handleNavigate55}
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillLightblueA700"
                  >
                    Data Collection
                  </Button>
                  <Text
                    className="common-pointer bg-light_blue_A700 xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[23px] 3xl:pb-[27px] lg:pl-[20px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rowgroup557"
                    variant="body12"
                    onClick={handleNavigate62}
                  >
                    Data Processsing
                  </Text>
                  <Text
                    className="bg-light_blue_500 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] rowdata_collection_one"
                    variant="body12"
                  >
                    Data Analysis
                  </Text>
                </Row>
                <Text
                  className="font-dmsans font-medium lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-black_901 w-[auto]"
                  variant="body4"
                >
                  Number of Each Type of Data
                </Text>
              </Column>
              <Column className="bg-white_A700 font-poppins items-end justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius30 shadow-bs7 w-[100%]">
                <Row className="items-center justify-end ml-[auto] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] pt-[1px] w-[96%]">
                  <Column className="items-center mb-[2px] w-[24%]">
                    <Row className="items-start justify-between w-[100%]">
                      <div className="bg-gradient7  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]"></div>
                      <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[34%]">
                        <Text className="Images" variant="body12">
                          Images
                        </Text>
                        <Text
                          className="test_3BirrelAvenue"
                          as="h4"
                          variant="h4"
                        >
                          4
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center mb-[2px] lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] w-[22%]">
                    <Row className="items-start justify-between w-[100%]">
                      <div className="bg-gradient8  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]"></div>
                      <Column className="justify-start mt-[1px] w-[33%]">
                        <Text className="Images" variant="body12">
                          Videos
                        </Text>
                        <Text
                          className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_902 tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          4
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] mt-[2px] w-[35%]">
                    <Row className="items-start justify-between w-[100%]">
                      <div className="bg-gradient9  3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] rounded-radius50 3xl:w-[100px] lg:w-[59px] xl:w-[74px] 2xl:w-[84px]"></div>
                      <Column className="justify-start mt-[4px] w-[55%]">
                        <Text className="Images" variant="body12">
                          Combined Images
                        </Text>
                        <Text
                          className="test_3BirrelAvenue"
                          as="h4"
                          variant="h4"
                        >
                          1
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 font-dmsans justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[94%]">
                <Column className="justify-start lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] 3xl:mb-[90px] w-[70%]">
                  <Text
                    className="font-medium text-black_901 w-[auto]"
                    variant="body4"
                  >
                    Percent Labeled vs. Unlabeled
                  </Text>
                  <RadioGroup
                    className="flex ml-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[77%]"
                    name="radiogrouptext"
                  >
                    <Radio
                      value="Image"
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Image"
                      size="sm"
                    ></Radio>
                    <Radio
                      value="Video"
                      className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Video"
                      size="sm"
                      variant="FillRedA702"
                    ></Radio>
                    <Radio
                      value="CombinedImage"
                      className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[3px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_901"
                      inputClassName="h-[14px] mr-[5px] w-[14px]"
                      checked={false}
                      name="radiogrouptext"
                      label="Combined Image"
                      size="sm"
                      variant="FillDeeppurpleA400"
                    ></Radio>
                  </RadioGroup>
                  <Row className="items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Column className="bg-green_51 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] items-end px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                      <Column
                        className="bg-cover bg-repeat justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[87%]"
                        style={{
                          backgroundImage: "url('images/img_group469.svg')",
                        }}
                      >
                        <Text className="columnsixtyseven" variant="body5">
                          67%
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="bg-indigo_50 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                      <Text className="FortySix" variant="body5">
                        46%
                      </Text>
                      <Img
                        src="images/img_oval.svg"
                        className="Oval"
                        alt="Oval"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 xl:h-[113px] 2xl:h-[127px] 3xl:h-[152px] lg:h-[90px] px-[1px] rounded-radius50 xl:w-[112px] 2xl:w-[126px] 3xl:w-[151px] lg:w-[89px]">
                      <Text className="FortySix" variant="body5">
                        15%
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal"
                      />
                    </Stack>
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

export default DroneDataDataAnalysisPage;
