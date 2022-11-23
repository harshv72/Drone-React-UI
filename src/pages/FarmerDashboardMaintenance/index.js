import React from "react";

import {
  Stack,
  Text,
  Column,
  Img,
  Row,
  Input,
  SelectBox,
  Line,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FarmerDashboardMaintenancePage = () => {
  const navigate = useNavigate();

  function handleNavigate175() {
    navigate("/farmermaintenancerequest");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="common-pointer bg-white_A700 font-inter 3xl:h-[1122px] lg:h-[665px] xl:h-[831px] 2xl:h-[935px] mx-[auto] w-[100%]"
        onClick={handleNavigate175}
      >
        <Stack className="absolute lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] right-[0] top-[12%] w-[69%]">
          <Text
            className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Maintenance
          </Text>
          <Stack className="absolute lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] w-[100%]">
            <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
              <Text
                className="font-light leading-[normal] text-bluegray_900 w-[100%]"
                variant="body5"
              >
                You can request maintenance service for your drones deployed on
                <br />
                your farm.
              </Text>
            </Column>
            <Img
              src="images/img_ellipse1_147X149.png"
              className="absolute lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] right-[9%] rounded-radius50 w-[18%]"
              alt="EllipseOne"
            />
          </Stack>
        </Stack>
        <Stack className="absolute 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] top-[0] w-[100%]">
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
        <aside className="absolute bottom-[0] font-poppins left-[0] w-[21%]">
          <div className="">
            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs7 w-[100%]">
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
              <Column className="bg-bluegray_900 justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[98%]">
                <Row className="items-start my-[3px] w-[56%]">
                  <Img
                    src="images/img_icon_24_outline_keysquare.svg"
                    className="call"
                    alt="icon24out"
                  />
                  <Text className="mt-[3px] ListMenu10" variant="body12">
                    Maintenance
                  </Text>
                </Row>
              </Column>
              <Row className="items-center xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]">
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
              <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
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
              <Row className="items-end xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[90%]">
                <Img src="images/img_music.svg" className="call" alt="music" />
                <Text className="ListMenu8" variant="body12">
                  Service Reports
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Two1"
                  alt="arrowright Two"
                />
              </Row>
              <Row className="items-start lg:mb-[534px] xl:mb-[668px] 2xl:mb-[751px] 3xl:mb-[901px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[89%]">
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
          </div>
        </aside>
        <Column className="absolute bg-white_A700 bottom-[0] font-poppins items-center justify-start lg:py-[24px] xl:py-[30px] 2xl:py-[34px] 3xl:py-[40px] right-[9%] rounded-radius30 shadow-bs7 w-[67%]">
          <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[100%]">
            <Row className="items-start w-[92%]">
              <Text className="rowallbookings" variant="body4">
                All Drones
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                wrapClassName="2xl:ml-[389px] 2xl:mt-[9px] 3xl:ml-[467px] 3xl:mt-[10px] flex lg:ml-[276px] lg:mt-[6px] w-[24%] xl:ml-[346px] xl:mt-[8px]"
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
              <Row className="items-start w-[89%]">
                <Text className="mt-[1px] rowserviceid" variant="body12">
                  Drone ID#
                </Text>
                <Text
                  className="2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] mt-[1px] rowserviceid"
                  variant="body12"
                >
                  Drone Model
                </Text>
                <Text
                  className="lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[1px] rowserviceid"
                  variant="body12"
                >
                  Farmland
                </Text>
                <Text
                  className="3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] rowserviceid"
                  variant="body12"
                >
                  Service ID#
                </Text>
                <Text
                  className="xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] mt-[1px] rowserviceid"
                  variant="body12"
                >
                  Service Type
                </Text>
                <Text className="Status" variant="body12">
                  Status
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
              <List
                className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pb-[4px] pr-[4px] w-[92%]"
                orientation="vertical"
              >
                <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]">
                  <Row className="absolute bottom-[0] items-start rounded-radius4 w-[100%]">
                    <Text className="id#Counter" variant="body12">
                      ID# 2
                    </Text>
                    <Text
                      className="font-medium leading-[normal] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] mt-[4px] text-bluegray_903 tracking-ls1 w-[11%]"
                      variant="body12"
                    >
                      DJI Phantom 4<br />
                      Pro{" "}
                    </Text>
                    <Text
                      className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] id#Counter"
                      variant="body12"
                    >
                      East Plot D
                    </Text>
                    <Text
                      className="3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] id#Counter"
                      variant="body12"
                    >
                      #1222
                    </Text>
                    <Text
                      className="font-medium leading-[normal] lg:ml-[118px] xl:ml-[147px] 2xl:ml-[166px] 3xl:ml-[199px] mt-[4px] text-bluegray_903 tracking-ls1 w-[11%]"
                      variant="body12"
                    >
                      Subscription: <br />
                      Surveillance
                    </Text>
                    <Button
                      className="font-medium lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[9%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineRedA701_1"
                    >
                      Repair
                    </Button>
                  </Row>
                  <Img
                    src="images/img_ghiblifrontuk.png"
                    className="absolute lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] inset-y-[0] left-[5%] my-[auto] w-[12%]"
                    alt="ghiblifrontUK"
                  />
                </Stack>
                <Line className="self-center w-[100%] h-[1px] bg-gray_201" />
                <Stack className="lg:h-[38px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]">
                  <Row className="absolute bottom-[0] items-start rounded-radius4 w-[100%]">
                    <Text className="id#Counter" variant="body12">
                      ID# 1
                    </Text>
                    <Text
                      className="xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] id#Counter"
                      variant="body12"
                    >
                      DJI Mini SE
                    </Text>
                    <Text className="Livestack" variant="body12">
                      West Plot A
                    </Text>
                    <Text
                      className="lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] id#Counter"
                      variant="body12"
                    >
                      #1111
                    </Text>
                    <Text
                      className="font-medium leading-[normal] lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] mt-[4px] text-bluegray_903 tracking-ls1 w-[12%]"
                      variant="body12"
                    >
                      Rental: <br />
                      Data Collection
                    </Text>
                    <Button
                      className="font-medium lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[9%]"
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineTeal500"
                    >
                      OK
                    </Button>
                  </Row>
                  <Img
                    src="images/img_group87174.png"
                    className="absolute lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] left-[6%] top-[0] w-[9%]"
                    alt="ghiblifrontUK One"
                  />
                </Stack>
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
      </Stack>
    </>
  );
};

export default FarmerDashboardMaintenancePage;
