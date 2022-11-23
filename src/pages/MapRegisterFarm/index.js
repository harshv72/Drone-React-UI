import React from "react";

import { Column, Row, Input, Img, Button, Text } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MapRegisterFarmPage = () => {
  const navigate = useNavigate();

  function handleNavigate132() {
    navigate("/farmerregisterthree");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="common-pointer bg-cover bg-gray_901 bg-repeat font-poppins items-center justify-start mx-[auto] lg:pb-[28px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] w-[100%]"
        style={{ backgroundImage: "url('images/img_mapregisterfa.png')" }}
        onClick={handleNavigate132}
      >
        <Column className="justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
              <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] w-[95%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-bold p-[0] lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] placeholder:text-black_901 text-black_901 w-[100%]"
                  wrapClassName="flex w-[27%]"
                  name="GroupEightyNine"
                  placeholder="Farm Address, City, Country, Zip"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[1px] lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[25px] xl:h-[26px] xl:mr-[8px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[9px] 3xl:w-[35px] 3xl:h-[36px] 3xl:mr-[11px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#000000"
                        className="cursor-pointer lg:w-[20px] lg:h-[21px] lg:ml-[8px] lg:mr-[19px] xl:w-[25px] xl:h-[26px] xl:ml-[10px] xl:mr-[23px] 2xl:w-[29px] 2xl:h-[30px] 2xl:ml-[12px] 2xl:mr-[26px] 3xl:w-[35px] 3xl:h-[36px] 3xl:ml-[14px] 3xl:mr-[32px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="smSrc"
                  variant="srcFillGray100"
                ></Input>
                <Img
                  src="images/img_globe.svg"
                  className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[36px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[35px]"
                  alt="globe"
                />
                <Button
                  className="2xl:ml-[653px] 3xl:ml-[784px] flex items-center justify-center lg:ml-[464px] text-center w-[21%] xl:ml-[580px]"
                  leftIcon={
                    <Img
                      src="images/img_mobile.svg"
                      className="text-center lg:w-[20px] lg:h-[21px] lg:mr-[6px] xl:w-[25px] xl:h-[26px] xl:mr-[8px] 2xl:w-[29px] 2xl:h-[30px] 2xl:mr-[9px] 3xl:w-[35px] 3xl:h-[36px] 3xl:mr-[11px]"
                      alt="mobile"
                    />
                  }
                  shape="RoundedBorder5"
                  size="lg"
                  variant="FillGray100"
                >
                  <div className="bg-transparent font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                    Confirm Farm Address
                  </div>
                </Button>
              </Row>
            </Row>
          </header>
          <Column className="justify-start lg:ml-[352px] xl:ml-[440px] 2xl:ml-[495px] 3xl:ml-[594px] lg:mt-[422px] xl:mt-[529px] 2xl:mt-[595px] 3xl:mt-[714px] w-[61%]">
            <Text
              className="bg-green_400 flex font-bold items-center lg:mr-[581px] xl:mr-[727px] 2xl:mr-[817px] 3xl:mr-[981px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-gray_100 w-[51px]"
              variant="body12"
            >
              Farm
            </Text>
            <Img
              src="images/img_rectangle1313.svg"
              className="xl:h-[123px] 2xl:h-[138px] 3xl:h-[166px] lg:h-[98px] 3xl:ml-[1009px] lg:ml-[597px] xl:ml-[747px] 2xl:ml-[840px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[73px] w-[4%]"
              alt="Rectangle1313"
            />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default MapRegisterFarmPage;
