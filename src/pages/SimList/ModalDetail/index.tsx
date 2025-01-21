/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { SimDetailRow } from './SimDetailRow';
import { DropdownSelect } from './DropdownSelect';
import { BenefitList } from './BenefitList';
import { Modal } from 'antd';
import { ModalDetailProps } from './types';

export const ModalDetail: React.FC<ModalDetailProps> = ({
  data,
  isOpen,
  setIsOpen,
}) => {
  const simDetails = [
    { label: "Thương hiệu", value: "Gmobile" },
    { label: "Gói cước", value: "SP100, SP200, SP300 ..." },
    { label: "Loại Sim", value: "Lorem ipsum" },
    { label: "Loại thuê bao", value: "Trả trước" },
    { label: "Giá cam kết", value: "₫ 0" }
  ];

  const benefits = [
    { text: "Miễn phí 1.5 GB/ngày" },
    { text: "Miễn phí các cuộc gọi nội mạng Viettel dưới 10 phút" },
    { text: "Miễn phí 50 phút gọi ngoại mạng" },
    { text: "Miễn phí gói Tv360" }
  ];

  return (
    <Modal
      centered
      open={true}
      footer={null}
      closeIcon={null}
      closable={false}
      width={800}
    >
      <div className="flex items-start max-w-full">
        <div className="flex flex-wrap flex-auto gap-6 items-start self-end max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea45ecea2e7f4135e2c81c201340a7bb11f8ee86ba834065dc33c3e485a99850?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
            alt="Sim card preview"
            className="object-contain rounded-md aspect-square w-[232px]"
          />
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="text-4xl font-semibold leading-tight text-black max-md:max-w-full">
                {data?.sim?.number}
              </div>
              {
                data?.discount_price &&
                <div className="flex overflow-hidden justify-center items-center self-start p-1 mt-4 text-sm font-semibold leading-none text-blue-600 bg-blue-200 rounded border border-indigo-300 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f60ddbfdf0ba29b41b25ed0576574762c785dc17c4d37ef768710092b9947e4a?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch px-1 my-auto">
                    Tiết kiệm ₫ {data?.price - data?.discount_price}
                  </div>
                </div>
              }

              <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                <div className="text-gray-500">Thương hiệu</div>
                <div className="flex-1 shrink text-black basis-0">{value}</div>
              </div>
              <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                <div className="text-gray-500">Loại Sim</div>
                <div className="flex-1 shrink text-black basis-0">{value}</div>
              </div>

              <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                <div className="text-gray-500">Loại thuê bao</div>
                <div className="flex-1 shrink text-black basis-0">{value}</div>
              </div>

              <div className="flex gap-2 items-start mt-2 max-w-full w-[336px]">
                <div className="text-gray-500">Giá cam kết</div>
                <div className="flex-1 shrink text-black basis-0">{value}</div>
              </div>
 

              <div className="flex overflow-hidden flex-col justify-center py-2 mt-4 w-full max-md:max-w-full">
                <div className="flex gap-8 items-center w-full max-md:max-w-full">
                  <div className="flex flex-1 shrink justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb5b2f6dd7c1b77b777cbb1c0dd818926b88ec8275ca6205d39384b321884129?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
                      alt=""
                      className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[500] basis-0 min-w-[240px] max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start mt-4 w-full font-semibold text-black max-md:max-w-full">
                <DropdownSelect label="Gói cước" value="SP123" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3aed2987c83af74fc5ec43d1f649a239def21d74c72dd0e46f2ac31e8364c8?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7" />
                <DropdownSelect label="Thời hạn" value="6 tháng" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3aed2987c83af74fc5ec43d1f649a239def21d74c72dd0e46f2ac31e8364c8?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7" />
              </div>

               <div className="p-4 mt-4 w-full text-xs font-medium leading-4 rounded-xl bg-slate-50 text-zinc-900 max-md:max-w-full">
                  
                </div>

              <div className="flex overflow-hidden flex-col justify-center py-2 mt-4 w-full max-md:max-w-full">
                <div className="flex gap-8 items-center w-full max-md:max-w-full">
                  <div className="flex flex-1 shrink justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb5b2f6dd7c1b77b777cbb1c0dd818926b88ec8275ca6205d39384b321884129?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
                      alt=""
                      className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[500] basis-0 min-w-[240px] max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <div className="flex gap-4 items-center w-full font-semibold max-md:max-w-full">
                  <div className="self-stretch my-auto text-lg leading-loose text-gray-500">
                    Tổng tiền
                  </div>
                  <div className="flex-1 shrink self-stretch my-auto text-3xl leading-none text-red-700 min-w-[240px]">
                    ₫ 150,000
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-1 w-full text-base max-md:max-w-full">
                  <div className="self-stretch my-auto font-semibold text-gray-500">
                    Giá Sim
                  </div>
                  <div className="flex-1 shrink self-stretch my-auto font-medium text-black min-w-[240px]">
                    ₫ 100,000
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-1 w-full text-base max-md:max-w-full">
                  <div className="self-stretch my-auto font-semibold text-gray-500">
                    Giá gói cước
                  </div>
                  <div className="flex-1 shrink self-stretch my-auto font-medium text-black min-w-[240px]">
                    ₫ 50,000
                  </div>
                </div>
              </div>
            </div>
            <button className="flex overflow-hidden justify-center items-center p-3 mt-6 w-full text-base font-semibold text-white bg-amber-400 rounded-lg min-h-[48px] max-md:max-w-full">
              <div className="self-stretch px-2 my-auto">Mua ngay</div>
            </button>
          </div>
        </div>
        <button className="flex overflow-hidden justify-center items-center self-start p-3 rounded-lg min-h-[48px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/633de52e979ad82125ed9127f963529f208227e53c090ea9c52e0f1065c8337c?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
            alt=""
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </Modal>
  );
};