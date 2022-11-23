import React from "react";

import { Column, Stack, Text, Row, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate182() {
    navigate("/farmlandprofile");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[51px] xl:pb-[64px] 2xl:pb-[72px] 3xl:pb-[86px] w-[100%]"
        onClick={handleNavigate182}
      >
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
          <Row className="items-start lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[35%]">
            <Text className="rowselectroleto_one" as="h1" variant="h1">
              Farm Profile
            </Text>
            <Row className="font-montserrat items-center justify-between lg:ml-[162px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[13%]">
              <Img
                src="images/img_edit_24X24.svg"
                className="rounded-radius50 call"
                alt="edit"
              />
              <Text className="rowedit" variant="body12">
                Edit
              </Text>
            </Row>
          </Row>
          <Row className="items-start justify-end ml-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[87%]">
            <Column className="justify-start w-[60%]">
              <Column className="border border-gray_301 border-solid font-poppins justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                <Column className="items-center justify-start w-[25%]">
                  <Text
                    className="font-semibold text-bluegray_901 w-[auto]"
                    variant="body3"
                  >
                    Farm address
                  </Text>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="Field" variant="body5">
                    Name
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
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
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
                    <div className="bg-gray_701 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[1px]"></div>
                    <Line className="bg-light_blue_A700 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
                  </Column>
                </Row>
              </Column>
              <Button
                className="font-inter font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Save
              </Button>
            </Column>
            <Button
              className="font-medium lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[146px] xl:mt-[183px] 2xl:mt-[206px] 3xl:mt-[247px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[36%]"
              shape="RoundedBorder15"
              size="3xl"
              variant="FillBluegray900"
            >
              Farmland
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FarmProfilePage;
