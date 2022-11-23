import React from "react";

import { Column, Stack, Text, Row, Img, Slider, SelectBox } from "components";

const PilotScheduleTimesPerDayPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:pb-[118px] 2xl:pb-[133px] 3xl:pb-[159px] lg:pb-[94px] w-[100%]">
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
        <Column className="lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] 3xl:px-[104px] lg:px-[61px] xl:px-[77px] 2xl:px-[87px] w-[100%]">
          <Text className="text-bluegray_900 w-[auto]" as="h1" variant="h1">
            My Schedule
          </Text>
        </Column>
        <Stack className="lg:h-[303px] xl:h-[379px] 2xl:h-[427px] 3xl:h-[512px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[93%]">
          <Row className="absolute inset-x-[0] items-center justify-center mx-[auto] top-[9%] w-[25%]">
            <Img
              src="images/img_arrowleft_11X6.svg"
              className="cursor-pointer xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[2%]"
              onClick={() => sliderRef.current?.slidePrev()}
              alt="arrowleft"
            />
            <Img
              src="images/img_arrowright_gray_911.svg"
              className="cursor-pointer xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[226px] xl:ml-[282px] 2xl:ml-[318px] 3xl:ml-[381px] w-[2%]"
              onClick={() => sliderRef.current?.slideNext()}
              alt="arrowright"
            />
          </Row>
          <Slider
            slidesToShow={76}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[0.18] absolute"
            magnifiedIndex={26}
            centerMode
            ref={sliderRef}
            className="absolute bg-gradient  w-[100%]"
            items={[...Array(228)].map(() => (
              <React.Fragment key={Math.random()}>
                <Column className="bg-gradient1  justify-end p-[2px] rounded-radius7 w-[100%]">
                  <Column className="justify-start lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[62%]">
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      variant="body15"
                    >
                      Available
                    </Text>
                    <Text className="Sitdolormeti" variant="body15">
                      No bookings
                    </Text>
                  </Column>
                </Column>
              </React.Fragment>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return <div className="" />;
              }
              return <div className="" role="button" tabIndex={0} />;
            }}
          />
        </Stack>
        <Column className="font-roboto xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[84px] lg:px-[386px] xl:px-[483px] 2xl:px-[544px] 3xl:px-[653px] w-[100%]">
          <SelectBox
            className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[68%]"
            placeholderClassName="text-white_A700"
            name="CTA"
            placeholder="Confirm"
            isSearchable={false}
            isMulti={false}
            shape="RoundedBorder8"
            size="xl"
            variant="FillGreen400"
          ></SelectBox>
        </Column>
      </Column>
    </>
  );
};

export default PilotScheduleTimesPerDayPage;
