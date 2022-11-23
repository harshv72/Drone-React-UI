import React from "react";

import { Column, Row, Img, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 justify-start lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] shadow-bs7 w-[100%]">
            <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[78%]">
              <Img src="images/img_offer.svg" className="offer3" alt="offer" />
              <Text className="rowoffer2" variant="body1">
                Dashboard
              </Text>
            </Row>
            <Row className="items-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[52%]">
              <Img src="images/img_call.svg" className="call" alt="call" />
              <Text className="ListMenu30" variant="body12">
                Maintenance
              </Text>
            </Row>
            <Row className="items-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[92%]">
              <Img
                src="images/img_airplane.svg"
                className="call"
                alt="airplane"
              />
              <Text className="ListMenu31" variant="body12">
                Book Drone Service
              </Text>
              <Img
                src="images/img_arrowright_bluegray_900.svg"
                className="arrowright8"
                alt="arrowright"
              />
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
              <Row className="items-start mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                <Img
                  src="images/img_question.svg"
                  className="call"
                  alt="question"
                />
                <Text className="ListMenu32" variant="body12">
                  My Bookings
                </Text>
                <Img
                  src="images/img_arrowright_bluegray_900.svg"
                  className="arrowright_One"
                  alt="arrowright One"
                />
              </Row>
            </Column>
            <Row className="bg-bluegray_900 items-center justify-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
              <Img
                src="images/img_music_24X24.svg"
                className="my-[3px] call"
                alt="music"
              />
              <Text className="font-poppins ListMenu10" variant="body12">
                Service Reports
              </Text>
              <Img
                src="images/img_arrowright_white_A700.svg"
                className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="arrowright Two"
              />
            </Row>
            <Row className="items-start lg:mb-[531px] xl:mb-[665px] 2xl:mb-[748px] 3xl:mb-[898px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[92%]">
              <Img src="images/img_user.svg" className="user1" alt="user" />
              <Text className="ListMenu34" variant="body12">
                Profile
              </Text>
              <Img
                src="images/img_arrowright_bluegray_900.svg"
                className="arrowright_Three1"
                alt="arrowright Three"
              />
            </Row>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
