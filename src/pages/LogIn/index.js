import React from "react";

import { Row, Stack, Img, Column, Text, Button, Line } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const LogInPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Row className="bg-white_A700 font-inter items-center mx-[auto] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
        <Stack className="bg-cyan_50_99 3xl:h-[1182px] lg:h-[700px] xl:h-[876px] 2xl:h-[985px] ml-[1px] rounded-radius30 w-[51%]">
          <Img
            src="images/img_image2_984X720.png"
            className="imageTwo"
            alt="imageTwo"
          />
        </Stack>
        <Column className="xl:ml-[104px] 2xl:ml-[118px] 3xl:ml-[141px] lg:ml-[83px] 3xl:mr-[106px] lg:mr-[63px] xl:mr-[79px] 2xl:mr-[89px] w-[34%]">
          <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
            Log In
          </Text>
          <Stack className="lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Stack className="absolute lg:h-[53px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] w-[100%]">
              <div className="absolute bg-white_A700 border-2 border-bluegray_900 border-solid bottom-[0] lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] rounded-radius5 w-[100%]"></div>
              <Column className="absolute bg-white_A700 items-center justify-start left-[3%] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] top-[0] w-[12%]">
                <Text
                  className="font-medium lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] text-bluegray_900 w-[auto]"
                  variant="body6"
                >
                  Email
                </Text>
              </Column>
            </Stack>
            <Text
              className="absolute bottom-[18%] font-medium left-[4%] text-bluegray_900 w-[auto]"
              variant="body6"
            >
              arfi.maulana@gmail.com
            </Text>
          </Stack>
          <Row className="bg-white_A700 border-2 border-gray_402 border-solid items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[100%]">
            <Text
              className="bg-white_A700 font-medium 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pb-[9px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] text-gray_402 w-[95px]"
              variant="body6"
            >
              Password
            </Text>
            <Img
              src="images/img_eye.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] lg:mr-[9px] w-[5%]"
              alt="eye"
            />
          </Row>
          <Button
            className="font-medium lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[99%]"
            shape="RoundedBorder5"
            size="2xl"
            variant="FillBluegray900"
          >
            Log In
          </Button>
          <Text
            className="font-medium 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-black_901 w-[auto]"
            variant="body6"
          >
            Don’t have an account? Sign Up
          </Text>
          <Row className="items-start justify-between ml-[2px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
            <Line className="bg-gray_403 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[44%]" />
            <Text
              className="flex font-medium items-center text-gray_801 w-[auto]"
              variant="body9"
            >
              or
            </Text>
            <Line className="bg-gray_403 h-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[44%]" />
          </Row>
          <Column className="border-2 border-gray_402 border-solid items-center justify-end lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius5 w-[100%]">
            <Row
              className="common-pointer items-center justify-center mt-[4px] w-[46%]"
              onClick={googleSignIn}
            >
              <Img
                src="images/img_google.svg"
                className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                alt="google"
              />
              <Text
                className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-gray_801 w-[auto]"
                variant="body6"
              >
                Log In with Google
              </Text>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default LogInPage;
