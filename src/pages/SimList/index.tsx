/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { SimCard } from "./SimCard";
import { NavigationButton } from "./NavigationButton";
import { PaginationButton } from "./PaginationButton";
import axios from "axios";
import { wait } from "../../utils";
import { SimCardProps } from "./types";
import { ModalDetail } from "./ModalDetail";
import SimSkeleton from "../../components/Skeleton/SimSkeleton";

import { BASE_API_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

const types = [
  {
    name: "Sim Số",
    type: "attractive_sim",
  },
  {
    name: "Sim Gói",
    type: "packaged_sim",
  },
];

function getProviderId(providers: any[], providerName: string) {
  try {
    const provider = providers.find(
      (x: { name: string }) =>
        x.name.toLowerCase() === providerName.toLowerCase()
    );
    if (provider) return provider.id;
  } catch (e) {
    console.log(e);
  }
  return "";
}

export const SimList: React.FC = () => {
  const [simData, setSimData] = useState<SimCardProps[]>([]);
  const [page, setPage] = useState(1);
  const [isNext, setIsNext] = useState(false);

  const [type, setType] = useState(types[0]);
  const [providerId, setProviderId] = useState("");

  const [seletecNumber, setSelectedNumber] = useState("");
  const [dataDetail, setDataDetail] = useState(null);
  const [packageList, setPackageList] = useState(null);
  const [flashSaleData, setflashSaleData] = useState(null);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchProviderId = async () => {
    const providerRs = await axios({
      method: "GET",
      url: `${BASE_API_URL}/api/v1/providers`,
    });
    const providers = providerRs?.data?.data || [];
    const provider_id = getProviderId(providers, "Gmobile");
    setProviderId(provider_id);
  };

  useEffect(() => {
    fetchProviderId();
  }, []);

  async function requestList() {
    setLoading(true);
    const maxRetries = 3;
    let retryCount = 0;
    let dataSearch: any[] = [];
    while (retryCount < maxRetries) {
      try {
        const result = await axios({
          method: "GET",
          params: {
            limit: 9,
            page,
            provider: "Gmobile",
            provider_id: providerId,
            sim_type_filter: type.type,
          },
          url: `${BASE_API_URL}/api/v1/search`,
        });
        setIsNext(result?.data?.data?.is_next);
        dataSearch = result?.data?.data.items || [];
        if (dataSearch.length === 0) {
          await wait(1);
          retryCount++;
        } else {
          break;
        }
      } catch (error) {
        console.error(error);
        retryCount++;
      }
    }

    if (dataSearch) {
      setSimData(
        (dataSearch as any).map((item: any) => ({
          discount: item.price - item.discount_price,
          phoneNumber: item.number,
          brand: "Gmobile",
          currentPrice: item.discount_price,
          originalPrice: item.price,
          imageUrl:
          '/099-landingpage/gmobile-img.png',
          discountIconUrl:
          '/099-landingpage/discount.svg',

        }))
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    if (providerId) {
      requestList();
    }
  }, [page, type, providerId]);

  const handleChangeType = (
    value: React.SetStateAction<{ name: string; type: string }>
  ) => {
    setType(value);
  };

  const getDataDetail = async () => {
    const result = await axios({
      method: "GET",
      url: `${BASE_API_URL}/api/v1/products/sim-detail-by-phone-number/${seletecNumber}?t=${new Date()}`,
    });
    setDataDetail(result?.data?.data);
  };

  const getPackage = async () => {
    const result = await axios({
      method: "GET",
      url: `${BASE_API_URL}/api/v1/packages`,
    });
    setPackageList(result?.data?.data);
  };

  const getFlashsaleData = async () => {
    const result = await axios({
      method: "GET",
      url: `${BASE_API_URL}/api/v1/flash-sales/get-flash-sale-by-phone-number/${seletecNumber}`,
    });
    console.log(result);
    setflashSaleData(result?.data?.data);
  };

  const handleClickNumber = async () => {
    await getDataDetail();
    await getFlashsaleData();
    setIsOpenDetail(true);
  };

  useEffect(() => {
    if (seletecNumber) {
      handleClickNumber();
    }
  }, [seletecNumber]);

  useEffect(() => {
    getPackage();
  }, []);

  useEffect(() => {
    if (!isOpenDetail) {
      setSelectedNumber("");
      setDataDetail(null);
      setPackageList(null);
      setflashSaleData(null);
    }
  }, [isOpenDetail]);

  return (
    <div className="flex overflow-hidden flex-col px-16 pt-20 pb-16 max-md:px-0">
      <div className="gap-10 text-center self-stretch w-full text-6xl font-semibold leading-none text-black max-md:max-w-full max-md:text-4xl">
        Danh sách Sim
      </div>
      <div className="flex flex-wrap gap-[40px] justify-center items-start self-center mt-12 max-w-full text-xl font-semibold leading-snug text-center text-gray-500  max-md:mt-10">
        {types.map((item) => (
          <div
            key={item.name}
            onClick={() => handleChangeType(item)}
            className="cursor-pointer flex relative flex-1 shrink justify-center items-start py-6 text-black basis-0 w-[154px]"
          >
            <div className="gap-2.5 self-stretch my-auto">{item.name}</div>
            {type.type === item.type && (
              <div
                className="left-[50%] flex absolute inset-x-0 bottom-0 z-0 shrink-0 self-start h-0.5 bg-[#FFC426] w-[154px]"
                style={{ transform: "translateX(-50%)" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-8 max-md:gap-2 max-md:justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {loading ? (
          <SimSkeleton />
        ) : (
          <>
            {simData.map((sim, index) => (
              <SimCard
                onClickSim={() => setSelectedNumber(sim.phoneNumber)}
                key={index}
                {...sim}
              />
            ))}
          </>
        )}
      </div>
      <ModalDetail
        isOpen={isOpenDetail}
        setIsOpen={setIsOpenDetail}
        packageList={packageList}
        flashSaleData={flashSaleData}
        dataSimDetail={dataDetail}
      />
      <div className="flex gap-3 items-center self-center mt-12 max-md:mt-10">
        <NavigationButton
          iconUrl="/099-landingpage/prev.svg"
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        />
        <PaginationButton active={true}>{page}</PaginationButton>
        <NavigationButton
          iconUrl="/099-landingpage/next.svg"

          onClick={() => {
            setPage(page + 1);
          }}
          disabled={!isNext}
        />
      </div>
    </div>
  );
};
