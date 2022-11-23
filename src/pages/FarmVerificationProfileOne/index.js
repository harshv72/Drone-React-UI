import React from "react";

import { Column, Stack, Text, Row, Img, Line, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmVerificationProfileOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate122() {
    navigate("/farmverificationprofiletwo");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pb-[9px] w-[100%]"
        onClick={handleNavigate122}
      >
        <Column className="items-end justify-start w-[100%]">
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
          <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[52%]">
            <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
              Farm Verification: Land Ownership
            </Text>
            <Img
              src="images/img_progressbar_4.svg"
              className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] Progressbar1"
              alt="Progressbar"
            />
          </Column>
          <Row className="font-poppins items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[91%]">
            <Column className="items-center justify-start w-[57%]">
              <Column className="border border-gray_301 border-solid justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                <Column className="items-center justify-start w-[49%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body3"
                  >
                    Land Ownership Certificate
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="Field" variant="body5">
                    Name of Land Owner
                  </Text>
                  <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                  <Text className="Field" variant="body5">
                    Address
                  </Text>
                  <Line className="bg-gray_301 h-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]" />
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                  <Text className="Field" variant="body5">
                    City
                  </Text>
                  <Img
                    src="images/img_select.svg"
                    className="Select"
                    alt="Input"
                  />
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listfieldlabel_three">
                    <Column className="w-[48%]">
                      <Text className="Field" variant="body5">
                        Country
                      </Text>
                      <Img
                        src="images/img_select.svg"
                        className="Select"
                        alt="Select"
                      />
                    </Column>
                    <Column className="w-[48%]">
                      <Text className="Field" variant="body5">
                        Zip code
                      </Text>
                      <Line className="bg-light_blue_A700 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                    </Column>
                  </Row>
                  <Row className="listfieldlabel_three">
                    <Column className="w-[48%]">
                      <Text className="Field" variant="body5">
                        Total area (square feet)
                      </Text>
                      <Line className="bg-light_blue_A700 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                    </Column>
                    <Column className="w-[48%]">
                      <Text className="Field" variant="body5">
                        Date of certificate issue
                      </Text>
                      <Line className="bg-light_blue_A700 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                    </Column>
                  </Row>
                </List>
              </Column>
              <Column className="bg-gray_101 border border-dashed border-gray_600 items-end justify-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius9 w-[100%]">
                <Text
                  className="font-medium lg:mr-[135px] xl:mr-[169px] 2xl:mr-[191px] 3xl:mr-[229px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] text-gray_702 tracking-ls1 w-[auto]"
                  variant="body8"
                >
                  Upload pdf/image of certificate
                </Text>
              </Column>
            </Column>
            <Column className="justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] xl:mt-[119px] 2xl:mt-[134px] 3xl:mt-[160px] lg:mt-[95px] w-[42%]">
              <Row className="items-center justify-end ml-[auto] w-[92%]">
                <Button
                  className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  shape="icbRoundedBorder8"
                  size="mdIcn"
                  variant="icbOutlineBlueA40085"
                >
                  <Img
                    src="images/img_floatingicon.svg"
                    className="flex items-center justify-center lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px]"
                    alt="floatingicon"
                  />
                </Button>
                <Column className="lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[77%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body5"
                  >
                    Add Another Certificate
                  </Text>
                </Column>
              </Row>
              <Row className="font-inter items-center lg:mr-[17px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] lg:mt-[326px] xl:mt-[408px] 2xl:mt-[459px] 3xl:mt-[551px] w-[95%]">
                <Button
                  className="font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
                  shape="RoundedBorder5"
                  size="4xl"
                  variant="FillGray401"
                >
                  Back
                </Button>
                <Button
                  className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
                  shape="RoundedBorder5"
                  size="4xl"
                  variant="FillBluegray900"
                >
                  Next
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmVerificationProfileOnePage;
