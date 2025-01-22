/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Modal, Select } from "antd";
import { ModalDetailProps } from "./types";
import { currencyConverter } from "../../../utils";
import { useEffect, useState } from "react";
import { getAssetPath } from "../../../utils/path";

export const ModalDetail: React.FC<ModalDetailProps> = ({
  dataSimDetail,
  flashSaleData,
  isOpen,
  setIsOpen,
}) => {
  const [packageAttractiveSelected, setPackageAttractiveSelected] =
    useState(null);
  const [dataPackageAttractiveSelected, setDataPackageAttractiveSelected] =
    useState<any>(null);
  const [periodPackageAttractiveSelected, setPeriodPackageAttractiveSelected] =
    useState<any>(null);
  const [
    dataPeriodPackageAttractiveSelected,
    setDataPeriodPackageAttractiveSelected,
  ] = useState<any>(null);

  const [packagePrice, setPackagePrice] = useState(
    dataSimDetail?.package?.[0]?.discountPrice || 0
  );

  const [isPackageUnavailable, setIsPackageUnavailable] = useState(
    dataSimDetail?.package?.[0]?.status === "unavailable"
  );

  useEffect(() => {
    if (dataSimDetail?.package?.[0]?.name) {
      setPackageAttractiveSelected(dataSimDetail?.package?.[0]?.name);
    }
    setPackagePrice(dataSimDetail?.package?.[0]?.discountPrice || 0);
  }, [dataSimDetail]);

  const handlePackageAttractive = (value: React.SetStateAction<null>) => {
    setDataPackageAttractiveSelected([]);
    setPackageAttractiveSelected(value);
    setPeriodPackageAttractiveSelected(null);
    setDataPeriodPackageAttractiveSelected(null);
  };

  const handleChangePeriodPackageAttractive = (
    value: React.SetStateAction<null>
  ) => {
    setDataPeriodPackageAttractiveSelected(null);
    setPeriodPackageAttractiveSelected(value);
    if (dataPackageAttractiveSelected?.items?.length) {
      const selected = dataPackageAttractiveSelected?.items.filter(
        (x: { period: any }) => x.period === value
      )?.[0];
      if (selected && selected?.status !== "available") {
        setIsPackageUnavailable(true);
      }
      setDataPeriodPackageAttractiveSelected(selected);
    }
  };

  useEffect(() => {
    if (packageAttractiveSelected) {
      setDataPackageAttractiveSelected(
        dataSimDetail?.availablePackages.filter(
          (x: { name: any }) => x.name === packageAttractiveSelected
        )?.[0]
      );
    }
  }, [packageAttractiveSelected]);

  return (
    <Modal
      centered
      open={isOpen}
      footer={null}
      closeIcon={null}
      width={800}
      onCancel={() => setIsOpen(false)}
    >
      <div className="flex items-start max-w-full">
        <div className="flex flex-wrap flex-auto gap-6 items-start self-end max-md:max-w-full">
          <img
            loading="lazy"
            src={getAssetPath("/099-landingpage/gmobile-img.png")}
            alt="Sim card preview"
            className="object-contain rounded-md aspect-square w-[232px] max-md:w-full"
          />
          <div className="flex flex-col flex-1 shrink basis-0 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="text-4xl font-semibold leading-tight text-black max-md:max-w-full">
                {dataSimDetail?.sim?.number}
              </div>
              {dataSimDetail?.discount_price && (
                <div className="flex overflow-hidden justify-center items-center self-start p-1 my-[16px] text-sm font-semibold leading-none text-[#3259E8] bg-[#C8DBFF] rounded border border-[#9EBCFF] border-solid">
                  <img
                    loading="lazy"
                    src={getAssetPath("/099-landingpage/discount.svg")}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch px-1 my-auto">
                    Tiết kiệm ₫{" "}
                    {dataSimDetail?.price - dataSimDetail?.discount_price}
                  </div>
                </div>
              )}
              <div className="border-b border-solid pb-[24px] border-[#E2E5EB]">
                {dataSimDetail?.sim?.sim_type === "attractive_sim" ? (
                  <>
                    <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                      <div className="text-[#626D7C]">Thương hiệu</div>
                      <div className="flex-1 shrink text-black basis-0">
                        Gmobile
                      </div>
                    </div>
                    <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                      <div className="text-[#626D7C]">Loại Sim</div>
                      <div className="flex-1 shrink text-black basis-0">
                        {dataSimDetail?.labels?.[0]}
                      </div>
                    </div>

                    <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                      <div className="text-[#626D7C]">Loại thuê bao</div>
                      <div className="flex-1 shrink text-black basis-0">
                        {dataSimDetail?.sim?.msisdn_type === 0
                          ? "Trả trước"
                          : "Trả sau"}
                      </div>
                    </div>

                    <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                      <div className="text-[#626D7C]">Giá cam kết</div>
                      <div className="flex-1 shrink text-black basis-0">
                        {currencyConverter(dataSimDetail?.sim?.price_term || 0)}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                      <div className="text-[#626D7C]">Thương hiệu</div>
                      <div className="flex-1 shrink text-black basis-0">
                        Gmobile
                      </div>
                    </div>
                    {dataSimDetail?.sim?.sim_type !== "packaged_sim" && (
                      <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                        <div className="text-[#626D7C]">Serial</div>
                        <div className="flex-1 shrink text-black basis-0">
                          {dataSimDetail?.sim?.serial || "19000792"}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="flex gap-4 items-start mt-[24px] w-full font-semibold text-black max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <div className="text-sm leading-none mb-[4px]">Gói cước</div>
                  <Select
                    style={{ marginBottom: "15px" }}
                    onChange={handlePackageAttractive}
                    value={packageAttractiveSelected}
                    placeholder="Gói cước"
                    className="select-box"
                    allowClear
                    disabled={dataSimDetail?.sim?.sim_type !== "attractive_sim"}
                  >
                    {(dataSimDetail?.availablePackages || []).map(
                      (item: any) => (
                        <Select.Option
                          key={item?.name}
                          value={item?.name}
                        >{`${item?.name}`}</Select.Option>
                      )
                    )}
                  </Select>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <div className="text-sm leading-none mb-[4px]">Thời hạn</div>
                  <Select
                    onChange={handleChangePeriodPackageAttractive}
                    value={
                      dataSimDetail?.sim?.sim_type === "attractive_sim"
                        ? periodPackageAttractiveSelected
                        : dataSimDetail?.package?.[0]?.period
                    }
                    placeholder="Thời hạn gói"
                    className="select-box"
                    disabled={dataSimDetail?.sim?.sim_type !== "attractive_sim"}
                  >
                    {(dataPackageAttractiveSelected?.items || []).map(
                      (item: any) => (
                        <Select.Option
                          key={item?.period}
                          value={item?.period}
                        >{`${item?.period / 30} tháng`}</Select.Option>
                      )
                    )}
                  </Select>
                </div>
              </div>

              {isPackageUnavailable && (
                <span className={"text-red"}>
                  Thời hạn gói không được hỗ trợ
                </span>
              )}
              <div className="border-b border-solid pb-[24px] border-[#E2E5EB]">
                <div className="desc-package p-4 w-full text-xs font-medium leading-4 rounded-xl bg-slate-50 text-zinc-900 max-md:max-w-full">
                  {dataPackageAttractiveSelected?.short_description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          dataPackageAttractiveSelected?.short_description,
                      }}
                    />
                  )}
                </div>
              </div>

              {dataSimDetail?.sim?.sim_type === "attractive_sim" ? (
                <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                  <div className="flex gap-4 items-center justify-between w-full font-semibold max-md:max-w-full">
                    <div className="self-stretch my-auto text-lg leading-loose text-[#626D7C]">
                      Tổng tiền
                    </div>
                    <div className=" shrink self-stretch my-auto text-3xl leading-none text-[#C32518]">
                      ₫{" "}
                      {currencyConverter(
                        (flashSaleData?.flashSaleItems?.[0]?.percent
                          ? dataSimDetail?.price
                          : dataSimDetail?.discount_price) +
                          (!dataSimDetail?.sim?.price_term
                            ? Number(
                                dataPeriodPackageAttractiveSelected?.discount_price
                              ) || 0
                            : 0)
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-between mt-1 w-full text-base max-md:max-w-full">
                    <div className="self-stretch my-auto font-semibold text-[#626D7C]">
                      Giá Sim
                    </div>
                    <div className=" shrink self-stretch my-auto font-medium text-black">
                      ₫{" "}
                      {flashSaleData?.flashSaleItems?.[0]?.percent
                        ? currencyConverter(dataSimDetail?.price)
                        : currencyConverter(dataSimDetail?.discount_price)}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-between mt-1 w-full text-base max-md:max-w-full">
                    <div className="self-stretch my-auto font-semibold text-[#626D7C]">
                      Giá gói cước
                    </div>
                    <div className=" shrink self-stretch my-auto font-medium text-black">
                      ₫{" "}
                      {currencyConverter(
                        !dataSimDetail?.sim?.price_term
                          ? Number(
                              dataPeriodPackageAttractiveSelected?.discount_price
                            ) || 0
                          : 0
                      )}
                    </div>
                  </div>
                </div>
              ) : dataSimDetail?.sim?.sim_type === "packaged_sim" ? (
                <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                  <div className="flex gap-4 items-center justify-between w-full font-semibold max-md:max-w-full">
                    <div className="self-stretch my-auto text-lg leading-loose text-[#626D7C]">
                      Tổng tiền
                    </div>
                    <div className=" shrink self-stretch my-auto text-3xl leading-none text-[#C32518]">
                      ₫{" "}
                      {currencyConverter(
                        (flashSaleData?.flashSaleItems?.[0]?.percent
                          ? dataSimDetail?.price
                          : dataSimDetail?.discount_price) + packagePrice
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-between mt-1 w-full text-base max-md:max-w-full">
                    <div className="self-stretch my-auto font-semibold text-[#626D7C]">
                      Giá Sim
                    </div>
                    <div className=" shrink self-stretch my-auto font-medium text-black">
                      ₫{" "}
                      {currencyConverter(
                        flashSaleData?.flashSaleItems?.[0]?.percent
                          ? dataSimDetail?.price
                          : dataSimDetail?.discount_price
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-between mt-1 w-full text-base max-md:max-w-full">
                    <div className="self-stretch my-auto font-semibold text-[#626D7C]">
                      Giá gói cước
                    </div>
                    <div className=" shrink self-stretch my-auto font-medium text-black">
                      ₫ {currencyConverter(packagePrice)}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <a
              href={`https://simplus.vn/sim-detail/${dataSimDetail?.sim.number}`}
              target="_blank"
              className="flex overflow-hidden justify-center items-center p-3 mt-6 w-full text-base font-semibold text-white bg-amber-400 rounded-lg min-h-[48px] max-md:max-w-full"
            >
              <div className="self-stretch px-2 my-auto">Mua ngay</div>
            </a>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="absolute top-[8px] right-[8px] flex overflow-hidden justify-center items-center self-start p-3 rounded-lg min-h-[48px]">
          <img
            loading="lazy"
            src={getAssetPath("/099-landingpage/close.svg")}
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </Modal>
  );
};
