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
  Button,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FarmerServiceReportsPage = () => {
  const navigate = useNavigate();

  function handleNavigate138() {
    navigate("/farmerservicereportdetails");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-end mx-[auto] w-[100%]"
        onClick={handleNavigate138}
      >
        <Column className="items-center justify-end w-[100%]">
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
          <Row className="font-poppins items-start justify-between w-[98%]">
            <Sidebar className="w-[22%]" />
            <Column className="font-inter justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[71%]">
              <Row className="items-end justify-end ml-[auto] w-[90%]">
                <Column className="justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[80%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Service Reports
                  </Text>
                  <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                    <Text
                      className="font-light text-bluegray_900 w-[auto]"
                      variant="body5"
                    >
                      You can view your reports for finished services here.
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_ellipse1_147X149.png"
                  className="lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] ml-[1px] rounded-radius50 w-[20%]"
                  alt="EllipseOne"
                />
              </Row>
              <Column className="bg-white_A700 font-poppins items-center justify-start lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:py-[25px] xl:py-[32px] 2xl:py-[36px] 3xl:py-[43px] rounded-radius30 shadow-bs7 w-[96%]">
                <Column className="items-center justify-start mb-[3px] w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="rowallbookings" variant="body4">
                      All Bookings
                    </Text>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:ml-[366px] 2xl:mt-[7px] 3xl:ml-[439px] 3xl:mt-[8px] flex lg:ml-[260px] lg:mt-[4px] w-[24%] xl:ml-[325px] xl:mt-[6px]"
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
                      className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_602 tracking-ls1 w-[17%]"
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
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pt-[2px] rounded-radius4 w-[100%]">
                    <Row className="items-start w-[89%]">
                      <Text className="rowserviceid" variant="body12">
                        Service ID#
                      </Text>
                      <Text className="Farmland" variant="body12">
                        Farmland
                      </Text>
                      <Text className="LandType" variant="body12">
                        Land Type
                      </Text>
                      <Text className="Service2" variant="body12">
                        Service
                      </Text>
                      <Text className="ServiceTime" variant="body12">
                        Service Time
                      </Text>
                      <Text className="LandType" variant="body12">
                        Status
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[92%]">
                      <Row className="items-start rounded-radius4 w-[100%]">
                        <Text className="id#Counter" variant="body12">
                          ID# 1144
                        </Text>
                        <Text className="SouthPlotC" variant="body12">
                          West Plot A
                        </Text>
                        <Text className="Crop1" variant="body12">
                          Crop
                        </Text>
                        <Text className="RentalDataCo" variant="body12">
                          Rental: Data Collection
                        </Text>
                        <Text className="test_06292022" variant="body12">
                          06/29/2022
                        </Text>
                        <Button
                          className="font-medium lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A700 text-center tracking-ls1 w-[9%]"
                          shape="RoundedBorder5"
                          size="md"
                          variant="OutlineLightblue500_1"
                        >
                          Finished
                        </Button>
                      </Row>
                      <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                      <Line className="bg-gray_201 h-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[100%]" />
                    </Column>
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
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmerServiceReportsPage;
