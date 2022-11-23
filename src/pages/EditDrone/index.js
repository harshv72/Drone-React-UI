import React from "react";

import { Column, Stack, Text, Row, Img, Button, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const EditDronePage = () => {
  const navigate = useNavigate();

  function handleNavigate63() {
    navigate("/dronemanagement");
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
              src="images/img_progressbar_6.svg"
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
            <Row className="items-center justify-between w-[100%]">
              <Stack className="lg:h-[353px] xl:h-[441px] 2xl:h-[496px] 3xl:h-[595px] w-[96%]">
                <Column className="absolute bottom-[0] items-center justify-start right-[0] w-[87%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button
                      className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="FillGray401"
                    >
                      Back
                    </Button>
                    <Button
                      className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[34%]"
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="FillBluegray900"
                    >
                      Next
                    </Button>
                  </Row>
                </Column>
                <Column
                  className="common-pointer absolute border border-gray_301 border-solid bottom-[0] font-poppins justify-start lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] right-[0] rounded-radius8 w-[100%]"
                  onClick={handleNavigate63}
                >
                  <Column className="items-center justify-start ml-[1px] mt-[1px] w-[25%]">
                    <Text
                      className="font-semibold text-bluegray_901 w-[auto]"
                      variant="body3"
                    >
                      Drone Information
                    </Text>
                  </Column>
                  <List
                    className="gap-[0] lg:mb-[55px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[93px] min-h-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="listfieldlabel">
                      <Text className="Field" variant="body5">
                        Drone ID#
                      </Text>
                      <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Text className="Contents" variant="body5">
                            1
                          </Text>
                          <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                    <Column className="listfieldlabel">
                      <Text className="Field" variant="body5">
                        Model
                      </Text>
                      <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Text className="Contents1" variant="body5">
                            DJI Mini SE
                          </Text>
                          <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                    <Column className="listfieldlabel">
                      <Text className="Field" variant="body5">
                        Service
                      </Text>
                      <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Text
                            className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mr-[451px] xl:mr-[564px] 2xl:mr-[634px] 3xl:mr-[761px] not-italic text-black_901 w-[auto]"
                            variant="body5"
                          >
                            Data Collection
                          </Text>
                          <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                    <Column className="listfieldlabel">
                      <Text className="Field" variant="body5">
                        Brand
                      </Text>
                      <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <Column className="justify-end lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Text className="Contents4" variant="body5">
                            DJI
                          </Text>
                          <Line className="bg-gray_301 h-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Stack>
              <Column className="w-[3%]">
                <Img
                  src="images/img_edit_1.svg"
                  className="ml-[1px] airplane"
                  alt="edit"
                />
                <Img
                  src="images/img_edit_1.svg"
                  className="ml-[1px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] airplane"
                  alt="edit One"
                />
                <Img
                  src="images/img_edit_1.svg"
                  className="ml-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] airplane"
                  alt="edit Two"
                />
                <Img
                  src="images/img_edit_1.svg"
                  className="lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] airplane"
                  alt="edit Three"
                />
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EditDronePage;
