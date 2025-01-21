import * as React from "react";
import { SimCardProps } from "./types";

export const SimCard: React.FC<SimCardProps> = ({
  discount,
  phoneNumber,
  brand,
  currentPrice,
  originalPrice,
  imageUrl,
  discountIconUrl,
  onClickSim
}) => {
  return (
    <div onClick={onClickSim} className="cursor-pointer flex flex-col grow shrink self-stretch p-6 my-auto rounded-xl bg-[#F7F8FB] w-[333px] max-md:px-5 max-md:max-w-[166px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt="Sim card preview"
        className="object-contain w-full rounded-md aspect-square"
      />
      <div className="flex flex-col mt-6 w-full">
        <div className="flex overflow-hidden justify-center items-center self-start p-1 text-sm font-semibold leading-none text-[#3259E8] bg-[#C8DBFF] rounded border border-[#9EBCFF] border-solid">
          <img
            loading="lazy"
            src={discountIconUrl}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="self-stretch px-1 my-auto max-md:text-xs">
            Tiết kiệm ₫ {discount.toLocaleString()}{" "}
          </div>
        </div>
        <div className="mt-3 text-4xl max-md:text-2xl font-semibold leading-none text-black">
          {phoneNumber}
        </div>
        <div className="flex flex-col mt-3 w-full text-sm max-md:text-xs font-semibold leading-none">
          <div className="flex gap-2 items-start w-full">
            <div className="text-[#626D7C]">Thương hiệu</div>
            <div className="flex-1 shrink text-[#3259E8] basis-0">
              {brand}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-3 w-full">
          <div className="text-2xl max-md:text-xl font-semibold leading-none text-[#C32518]">
            ₫ {currentPrice.toLocaleString()}
          </div>
          <div className="mt-1 text-sm max-md:text-xs font-medium leading-none text-[#4C5563] line-through">
            ₫ {originalPrice.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};