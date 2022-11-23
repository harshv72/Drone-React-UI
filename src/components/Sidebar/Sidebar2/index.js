import React from "react";

import { Column, Row, Img, Text } from "components";

const Sidebar2 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="items-end justify-start lg:mb-[481px] xl:mb-[602px] 2xl:mb-[677px] 3xl:mb-[812px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mr-[24px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[82%]">
            <Column className="bg-bluegray_900 justify-start p-[3px] rounded-radius8 w-[100%]">
              <Row className="items-center mb-[3px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[80%]">
                <Img
                  src="images/img_setting1.svg"
                  className="offer3"
                  alt="settingOne"
                />
                <Text
                  className="font-poppins lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-white_A700 tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Dashboard
                </Text>
              </Row>
            </Column>
            <Column className="justify-start lg:mt-[41px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[92%]">
              <Row
                className="common-pointer items-end w-[59%]"
                onClick={props?.onListMenuClick}
              >
                <Img src="images/img_call.svg" className="call" alt="call" />
                <Text className="font-poppins ListMenu21" variant="body12">
                  Drone Catalog
                </Text>
              </Row>
              <Row className="items-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Img
                  src="images/img_airplane.svg"
                  className="call"
                  alt="airplane"
                />
                <Text className="font-poppins ListMenu22" variant="body12">
                  Drone Management
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright32"
                  alt="arrowright"
                />
              </Row>
              <Row className="items-start ml-[2px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[99%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question"
                />
                <Text className="ListMenu32" variant="body12">
                  Drone Booking
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_One3"
                  alt="arrowright One"
                />
              </Row>
              <Row
                className="common-pointer items-end justify-between lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]"
                onClick={props?.onListMenuClick1}
              >
                <Img src="images/img_music.svg" className="call" alt="music" />
                <Text className="font-poppins ListMenu26" variant="body12">
                  Drone Cloud Tracking
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Two4"
                  alt="arrowright Two"
                />
              </Row>
              <Row className="items-start ml-[2px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[99%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question One"
                />
                <Text className="ListMenu39" variant="body12">
                  Service History
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Three4"
                  alt="arrowright Three"
                />
              </Row>
              <Row className="items-start ml-[3px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]">
                <Img src="images/img_user.svg" className="call" alt="user" />
                <Text className="ListMenu39" variant="body12">
                  Drone Data
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Four5"
                  alt="arrowright Four"
                />
              </Row>
              <Row className="items-start ml-[3px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question Two"
                />
                <Text className="font-poppins ListMenu20" variant="body12">
                  Drone AI
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_Three3"
                  alt="arrowright Five"
                />
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar2;
