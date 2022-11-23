import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Img,
  List,
  Button,
  Slider,
} from "components";
import { useNavigate } from "react-router-dom";

const PilotSchedulePage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    navigate("/editselecteddronedetailsone");
  }
  function handleNavigate26() {
    navigate("/servicerequestselectedthree");
  }
  function handleNavigate27() {
    navigate("/editselecteddronedetailsone");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-start mx-[auto] lg:pb-[35px] xl:pb-[44px] 2xl:pb-[50px] 3xl:pb-[60px] w-[100%]">
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
        </Column>
        <Stack className="font-worksans lg:h-[520px] xl:h-[650px] 2xl:h-[731px] 3xl:h-[877px] lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[79%]">
          <Column
            className="common-pointer absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] rounded-radius10 w-[43%]"
            onClick={handleNavigate26}
          >
            <Column className="justify-start my-[1px] w-[86%]">
              <Row className="items-center w-[41%]">
                <div className="bg-light_blue_A700 lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] shadow-bs w-[24%]"></div>
                <Text
                  className="font-semibold lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-gray_800 w-[auto]"
                  variant="body6"
                >
                  Availability:
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[90%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
                  <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[97%]">
                    <Text
                      className="font-semibold text-gray_800 w-[auto]"
                      variant="body6"
                    >
                      29/06/2022
                    </Text>
                    <Row className="items-start justify-between ml-[2px] w-[99%]">
                      <Text
                        className="font-semibold font-worksans xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_800 w-[auto]"
                        variant="body6"
                      >
                        8:00 am - 5:00 pm
                      </Text>
                      <Button
                        className="common-pointer font-bold font-roboto 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                        onClick={handleNavigate24}
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillLightblueA701"
                      >
                        Edit
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
                  <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[99%]">
                    <Text
                      className="font-semibold text-gray_800 w-[auto]"
                      variant="body6"
                    >
                      01/07/2022 - 05/07/2022
                    </Text>
                    <Row className="items-start justify-between ml-[3px] mt-[3px] w-[99%]">
                      <Text
                        className="font-worksans columnlinefive"
                        variant="body6"
                      >
                        8:00 am - 10:00 pm
                      </Text>
                      <Button
                        className="common-pointer font-bold font-roboto lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                        onClick={handleNavigate27}
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillLightblueA701"
                      >
                        Edit
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
          <Stack className="absolute font-inter lg:h-[495px] xl:h-[620px] 2xl:h-[697px] 3xl:h-[836px] inset-x-[0] mx-[auto] top-[0] w-[99%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={11}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[0.90] absolute"
              magnifiedIndex={3}
              centerMode
              ref={sliderRef}
              className="absolute inset-x-[0] mx-[auto] top-[0] w-[99%]"
              items={[...Array(33)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Row className="font-inter items-center justify-evenly w-[100%]">
                    <Button
                      className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="OutlineBlack9000c"
                    >
                      29
                    </Button>
                    <Button
                      className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_603 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      30
                    </Button>
                    <Button
                      className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_603 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="FillWhiteA700"
                    >
                      31
                    </Button>
                    <Button
                      className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="OutlineBlack9000c"
                    >
                      1
                    </Button>
                    <Button
                      className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="OutlineBlack9000c_1"
                    >
                      2
                    </Button>
                    <Button
                      className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="OutlineBlack9000c_1"
                    >
                      3
                    </Button>
                    <Button
                      className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                      size="5xl"
                      variant="OutlineBlack9000c_1"
                    >
                      4
                    </Button>
                  </Row>
                </React.Fragment>
              ))}
            />
            <Column className="absolute bottom-[0] items-center justify-end left-[0] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] w-[49%]">
              <List
                className="gap-[0] min-h-[auto] lg:mt-[123px] xl:mt-[154px] 2xl:mt-[174px] 3xl:mt-[208px] lg:pt-[54px] xl:pt-[68px] 2xl:pt-[77px] 3xl:pt-[92px] w-[100%]"
                orientation="vertical"
              >
                <Row className="listtwentyfour">
                  <Button
                    className="font-bold lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="OutlineBlack9000c_1"
                  >
                    5
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    6
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    7
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    8
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    9
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    10
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    11
                  </Button>
                </Row>
                <Row className="items-center justify-evenly mb-[1px] mt-[1.18px] w-[100%]">
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    12
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    13
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    14
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    15
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    16
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    17
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    18
                  </Button>
                </Row>
                <Row className="items-center justify-evenly mb-[1px] mt-[1.18px] w-[100%]">
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    19
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    20
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    21
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    22
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    23
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    24
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    25
                  </Button>
                </Row>
                <Row className="listtwentyfour">
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    26
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    27
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    28
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    29
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    30
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_909 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    31
                  </Button>
                  <Button
                    className="font-normal lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_603 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                    size="5xl"
                    variant="FillWhiteA700"
                  >
                    1
                  </Button>
                </Row>
              </List>
            </Column>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default PilotSchedulePage;
