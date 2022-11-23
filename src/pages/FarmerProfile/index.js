import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const FarmerProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate160() {
    navigate("/farmprofile");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-inter items-center justify-start mx-[auto] lg:pb-[110px] xl:pb-[137px] 2xl:pb-[155px] 3xl:pb-[186px] w-[100%]"
        onClick={handleNavigate160}
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
          <Column className="justify-start lg:ml-[180px] xl:ml-[225px] 2xl:ml-[254px] 3xl:ml-[304px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[79%]">
            <Row className="items-start ml-[4px] w-[35%]">
              <Text className="rowselectroleto_one" as="h1" variant="h1">
                Profile
              </Text>
              <Row className="font-montserrat items-center justify-between lg:ml-[155px] xl:ml-[193px] 2xl:ml-[218px] 3xl:ml-[261px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[17%]">
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
            <Row className="font-montserrat items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[33%]">
              <Img
                src="images/img_ellipse1_147X149.png"
                className="lg:h-[105px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] rounded-radius50 w-[40%]"
                alt="EllipseOne"
              />
              <Column className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[53%]">
                <Text
                  className="font-bold text-gray_802 tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Andy Palmer
                </Text>
                <Column className="items-center justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[47%]">
                  <Text className="phone" variant="body12">
                    (239) 555-0108
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-start justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
              <Column className="font-montserrat items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[36%]">
                <Row className="items-center justify-between w-[98%]">
                  <Text className="phone" variant="body12">
                    Email
                  </Text>
                  <Text className="phone" variant="body12">
                    andypalmer@gmail.com
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                  <Text className="phone" variant="body12">
                    Phone
                  </Text>
                  <Column className="items-center w-[23%]">
                    <Text className="phone" variant="body12">
                      (239) 555-0108
                    </Text>
                  </Column>
                </Row>
                <Row className="items-start justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[99%]">
                  <Text className="phone" variant="body12">
                    Address
                  </Text>
                  <Text className="phone" variant="body12">
                    3671 Old Toll Road, Mariposa, CA 95338
                  </Text>
                </Row>
              </Column>
              <Button
                className="font-inter font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder15"
                size="3xl"
                variant="FillBluegray900"
              >
                Farm Profile
              </Button>
            </Row>
            <Row className="items-start justify-between lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
              <Row className="font-montserrat items-start justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[36%]">
                <Text
                  className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] phone"
                  variant="body12"
                >
                  Credit Card
                </Text>
                <Text
                  className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] not-italic text-gray_802 w-[auto]"
                  variant="body12"
                >
                  Visa Ending in 1234
                </Text>
              </Row>
              <Button
                className="font-inter font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder15"
                size="3xl"
                variant="FillBluegray900"
              >
                Farm Verification
              </Button>
            </Row>
            <Row className="font-montserrat items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[36%]">
              <Text className="phone" variant="body12">
                PayPal
              </Text>
              <Text
                className="font-normal lg:ml-[219px] xl:ml-[273px] 2xl:ml-[308px] 3xl:ml-[369px] not-italic text-gray_803 tracking-ls1 w-[auto]"
                variant="body12"
              >
                Not Set
              </Text>
            </Row>
            <Row className="font-montserrat items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[36%]">
              <Text className="mt-[4px] phone" variant="body12">
                Password
              </Text>
              <Img
                src="images/img_eye_19X19.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mb-[2px] lg:ml-[163px] xl:ml-[204px] 2xl:ml-[230px] 3xl:ml-[276px] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"
                alt="eye"
              />
              <Text
                className="font-medium lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[4px] text-gray_803 tracking-ls1 w-[auto]"
                variant="body12"
              >
                ************
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FarmerProfilePage;
