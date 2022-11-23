import React from "react";

import { Row, Stack, Img, Column, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate126() {
    navigate("/registerone");
  }

  return (
    <>
      <Row className="bg-white_A700 font-inter items-center mx-[auto] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
        <Stack className="bg-cyan_50_99 3xl:h-[1182px] lg:h-[700px] xl:h-[876px] 2xl:h-[985px] ml-[1px] rounded-radius30 w-[51%]">
          <Img
            src="images/img_image2.png"
            className="imageTwo"
            alt="imageTwo"
          />
        </Stack>
        <Column className="items-center 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] 3xl:mr-[114px] lg:mr-[67px] xl:mr-[84px] 2xl:mr-[95px] w-[34%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="ml-[3px] text-bluegray_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Sign Up
            </Text>
            <Stack className="3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] ml-[3px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[99%]">
              <Row className="absolute bg-white_A700 border-2 border-bluegray_900 border-solid bottom-[0] items-center justify-between lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius5 w-[100%]">
                <Text className="rowarfimaulana" variant="body6">
                  Arfi Maulana
                </Text>
                <Img
                  src="images/img_user_25X24.svg"
                  className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mr-[1px] w-[6%]"
                  alt="user"
                />
              </Row>
              <Text
                className="absolute bg-white_A700 font-medium left-[3%] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_900 top-[0] w-[61px]"
                variant="body6"
              >
                Name
              </Text>
            </Stack>
            <Column className="bg-white_A700 border-2 border-gray_402 border-solid justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[99%]">
              <Text className="Email" variant="body6">
                Phone
              </Text>
            </Column>
            <Row className="bg-white_A700 border-2 border-gray_402 border-solid items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[99%]">
              <Text className="Email" variant="body6">
                E-mail
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] 2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[5%]"
                alt="checkmark"
              />
            </Row>
            <Row className="bg-white_A700 border-2 border-gray_402 border-solid items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[99%]">
              <Text className="Password" variant="body6">
                Password
              </Text>
              <Img
                src="images/img_eye.svg"
                className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] w-[5%]"
                alt="eye"
              />
            </Row>
            <Button
              className="common-pointer font-medium ml-[3px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[99%]"
              onClick={handleNavigate126}
              shape="RoundedBorder5"
              size="3xl"
              variant="FillBluegray900"
            >
              Sign Up
            </Button>
            <Text
              className="font-medium 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-black_901 w-[auto]"
              variant="body6"
            >
              <span className="text-gray_801 font-inter lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                Already have an account?
              </span>
              <span className="text-black_901 font-inter lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                {" "}
              </span>
              <span className="text-bluegray_900 font-inter font-semibold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                Log In
              </span>
            </Text>
            <Row className="items-center justify-between ml-[3px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pr-[1px] py-[1px] w-[99%]">
              <Line className="bg-gray_403 h-[1px] w-[44%]" />
              <Text className="Divider" variant="body9">
                or
              </Text>
              <Line className="bg-gray_403 h-[1px] w-[44%]" />
            </Row>
            <Button
              className="2xl:mt-[15px] 3xl:mt-[18px] flex items-center justify-center lg:mt-[10px] ml-[3px] text-center w-[99%] xl:mt-[13px]"
              onClick={googleSignIn}
              leftIcon={
                <Img
                  src="images/img_google.svg"
                  className="text-center lg:w-[28px] lg:h-[29px] lg:mr-[7px] xl:w-[35px] xl:h-[36px] xl:mr-[8px] 2xl:w-[40px] 2xl:h-[41px] 2xl:mr-[10px] 3xl:w-[48px] 3xl:h-[49px] 3xl:mr-[12px]"
                  alt="google"
                />
              }
              shape="RoundedBorder5"
              size="3xl"
              variant="OutlineGray402"
            >
              <div className="common-pointer bg-transparent font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                Sign up with Google
              </div>
            </Button>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SignUpPage;
