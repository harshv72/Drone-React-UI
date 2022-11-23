import React from "react";

import { Stack, Img } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Stack className="bg-black_901 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
        <div className="absolute bg-red_100_99 3xl:h-[1148px] lg:h-[680px] xl:h-[851px] 2xl:h-[957px] inset-y-[0] left-[2%] my-[auto] w-[56%]"></div>
        <Img
          src="images/img_image4_928X801.png"
          className="absolute 3xl:h-[1115px] lg:h-[660px] xl:h-[826px] 2xl:h-[929px] left-[0] top-[0] w-[56%]"
          alt="imageFour"
        />
      </Stack>
    </>
  );
};

export default DesktopOnePage;
