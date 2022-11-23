import React from "react";

import { Column, Stack, Text, Row, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const EditSelectedDroneDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate87() {
    navigate("/servicerequestselectedfour");
  }
  function handleNavigate88() {
    navigate("/editselecteddronedetailstwo");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] w-[100%]">
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
          <Column className="justify-start lg:ml-[161px] xl:ml-[202px] 2xl:ml-[227px] 3xl:ml-[273px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[61%]">
            <Img
              src="images/img_progressbar_white_A700_12X284.svg"
              className="Progressbar12"
              alt="Progressbar"
            />
            <Text className="columnselectroleto" as="h1" variant="h1">
              Edit Drone
            </Text>
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[28%]">
              <Text
                className="font-light text-bluegray_900 w-[auto]"
                variant="body5"
              >
                Edit details of selected drone.
              </Text>
            </Column>
            <Row className="items-start justify-between w-[100%]">
              <Stack className="lg:h-[353px] xl:h-[441px] 2xl:h-[496px] 3xl:h-[595px] w-[96%]">
                <Column className="absolute bottom-[0] items-center justify-start right-[0] w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button
                      className="common-pointer font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                      onClick={handleNavigate88}
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="FillGray401"
                    >
                      Back
                    </Button>
                    <Button
                      className="common-pointer font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                      onClick={handleNavigate87}
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="FillBluegray900"
                    >
                      Next
                    </Button>
                  </Row>
                </Column>
                <Column className="absolute border border-gray_301 border-solid bottom-[0] font-poppins justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[33px] right-[0] rounded-radius8 w-[100%]">
                  <Column className="items-center justify-start w-[25%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body3"
                    >
                      Drone Information
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Text className="Field" variant="body5">
                      Weight
                    </Text>
                    <Line className="bg-gray_301 h-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]" />
                  </Column>
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                    <Column className="items-center justify-start w-[12%]">
                      <Text className="Field" variant="body5">
                        Availability
                      </Text>
                    </Column>
                    <Line className="bg-gray_301 h-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]" />
                  </Column>
                  <Column className="justify-start lg:mb-[25px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[84%]">
                    <Text className="Field" variant="body5">
                      Image
                    </Text>
                    <Img
                      src="images/img_ghiblifrontuk.png"
                      className="lg:h-[44px] xl:h-[55px] 2xl:h-[61px] 3xl:h-[74px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[22%]"
                      alt="ghiblifrontUK"
                    />
                    <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Column className="bg-gray_101 border border-dashed border-gray_600 items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius9 w-[100%]">
                        <Img
                          src="images/img_camera.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[4%]"
                          alt="camera"
                        />
                        <Text className="columncamera2" variant="body8">
                          Upload pdf/image of license
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Column className="items-center justify-start xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[84px] w-[2%]">
                <Img
                  src="images/img_edit_1.svg"
                  className="airplane"
                  alt="edit"
                />
                <Img
                  src="images/img_edit_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[96%]"
                  alt="edit One"
                />
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EditSelectedDroneDetailsPage;
