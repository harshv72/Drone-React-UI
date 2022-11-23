import React from "react";

import { Column, Stack, Text, Row, Img, SelectBox, Button } from "components";
import { useNavigate } from "react-router-dom";

const ServiceRequestSelectedOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate116() {
    navigate("/servicerequestestimatedone");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] w-[100%]"
        onClick={handleNavigate116}
      >
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] w-[100%]">
            <Text className="SelectRoleto_Two" as="h1" variant="h1">
              Select Role to Register As
            </Text>
            <Row className="absolute bg-bluegray_900 font-ptsans items-center justify-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[29px] w-[100%]">
              <Row className="items-start justify-between lg:ml-[354px] xl:ml-[442px] 2xl:ml-[498px] 3xl:ml-[597px] lg:mr-[179px] xl:mr-[224px] 2xl:mr-[253px] 3xl:mr-[303px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[46%]">
                <Text className="rowlanguage" variant="body5">
                  Home Contact Profile
                </Text>
                <Img
                  src="images/img_search_bluegray_300.svg"
                  className="search"
                  alt="search"
                />
              </Row>
            </Row>
          </Stack>
          <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[59%]">
            <Img
              src="images/img_progressbar_6.svg"
              className="Progressbar7"
              alt="Progressbar"
            />
            <Text
              className="font-inter columnselectroleto"
              as="h1"
              variant="h1"
            >
              Step 3: Selected Drone
            </Text>
            <Column className="font-inter items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[26%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                This is your selected drone
              </Text>
            </Column>
            <Column className="font-poppins items-center justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[19%]">
              <Text
                className="font-semibold text-bluegray_901 w-[auto]"
                variant="body5"
              >
                Drone Information
              </Text>
            </Column>
            <Stack className="font-worksans lg:h-[164px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[35%]">
              <Img
                src="images/img_arrowright.svg"
                className="absolute bottom-[19%] 3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] left-[14%] w-[4%]"
                alt="arrowright"
              />
              <Column className="absolute bg-white_A700 border border-gray_300 border-solid items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[100%]">
                <Column className="justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[19px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="justify-start w-[46%]">
                      <Text
                        className="font-semibold text-gray_700 w-[auto]"
                        variant="body9"
                      >
                        DJI Mini SE
                      </Text>
                      <Text className="DataCollection_One" variant="body10">
                        Data Collection
                      </Text>
                      <Text className="ID11" variant="body12">
                        ID #1
                      </Text>
                      <Text className="ml-[1px] Phone0912665" variant="body12">
                        3-Axis Gimbal
                      </Text>
                      <Text className="test_27KCamera1" variant="body12">
                        2.7K Camera
                      </Text>
                      <Text className="duration3" variant="body12">
                        30 Minute Flight Time
                      </Text>
                      <Text className="test_6LminSprayR" variant="body12">
                        8 m/s Flight Speed
                      </Text>
                      <Text className="test_13msFlightS" variant="body12">
                        249 grams
                      </Text>
                    </Column>
                    <Img
                      src="images/img_group87174.png"
                      className="ghiblifrontUK2"
                      alt="ghiblifrontUK"
                    />
                  </Row>
                  <Row className="font-roboto items-center ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[94%]">
                    <Row className="items-center justify-between w-[32%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body3"
                      >
                        $80
                      </Text>
                      <Text className="hour" variant="body6">
                        / hour
                      </Text>
                    </Row>
                    <SelectBox
                      className="font-bold lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-white_A700 w-[49%]"
                      placeholderClassName="text-white_A700"
                      name="CTA"
                      placeholder="Selected"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowright_white_A700.svg"
                          className="lg:w-[15px] lg:h-[16px] lg:mr-[15px] xl:w-[18px] xl:h-[19px] xl:mr-[19px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[22px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[26px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder8"
                      size="md"
                      variant="FillGreen400"
                    ></SelectBox>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Column className="font-poppins items-center justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] mt-[4px] w-[13%]">
              <Text
                className="font-semibold text-bluegray_901 w-[auto]"
                variant="body5"
              >
                Date & Time
              </Text>
            </Column>
            <Text
              className="font-normal font-poppins lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-black_901 w-[11%]"
              variant="body12"
            >
              29/06/2022
              <br />
              Duration: 1 Day
            </Text>
            <Column className="font-poppins items-center justify-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[9%]">
              <Text
                className="font-semibold text-bluegray_901 w-[auto]"
                variant="body5"
              >
                Location
              </Text>
            </Column>
            <Text
              className="font-normal font-poppins lg:leading-[12px] xl:leading-[15px] 2xl:leading-[17px] 3xl:leading-[21px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-black_901 w-[29%]"
              variant="body12"
            >
              3671 Old Toll Road, Mariposa, CA 95338 <br />
              West Plot A: Crop
            </Text>
            <Row className="font-inter items-center justify-end ml-[auto] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[87%]">
              <Button
                className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillGray401"
              >
                Back
              </Button>
              <Button
                className="font-medium lg:ml-[162px] xl:ml-[203px] 2xl:ml-[229px] 3xl:ml-[275px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                shape="RoundedBorder5"
                size="3xl"
                variant="FillBluegray900"
              >
                Next
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ServiceRequestSelectedOnePage;
