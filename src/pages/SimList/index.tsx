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
import { BASE_API_URL } from "../../utils/constants";

const types = [
  {
    name: 'Sim Số',
    type: 'attractive_sim'
  },
  {
    name: 'Sim Gói',
    type: 'packaged_sim'
  },
  {
    name: 'Sim Du Lịch',
    type: 'travel_sim'
  },
  {
    name: 'Sim M2M',
    type: 'm2m_sim'
  }
]

function getProviderId(providers: any[], providerName: string) {
  try {
    const provider = providers.find(
      (x: { name: string; }) => x.name.toLowerCase() === providerName.toLowerCase()
    )
    if (provider) return provider.id
  } catch (e) {
    console.log(e)
  }
  return ''
}

export const SimList: React.FC = () => {
  const [simData, setSimData] = React.useState<SimCardProps[]>([])
  const [page, setPage] = React.useState(1)
  const [isNext, setIsNext] = React.useState(false)

  const [type, setType] = React.useState(types[0])
  const [providerId, setProviderId] = React.useState('')

  const [seletecNumber, setSelectedNumber] = React.useState('')
  const [dataDetail, setDataDetail] = React.useState(null)

  const fetchProviderId = async () => {
    const providerRs = await axios({
      method: 'GET',
      url: `${BASE_API_URL}/api/v1/providers`
    })
    const providers = providerRs?.data?.data || []
    const provider_id = getProviderId(providers, 'Gmobile')
    setProviderId(provider_id)
  }

  React.useEffect(() => {
    fetchProviderId()
  }, [])


  async function requestList() {
    const maxRetries = 3
    let retryCount = 0
    let dataSearch: any[] = []
    while (retryCount < maxRetries) {
      try {
        const result = await axios({
          method: 'GET',
          params: {
            limit: 9,
            page,
            provider: 'Gmobile',
            provider_id: providerId,
            sim_type_filter: type.type,
          },
          url: `${BASE_API_URL}/api/v1/search`
        })
        setIsNext(result?.data?.data?.is_next)
        dataSearch = result?.data?.data.items || []
        if (dataSearch.length === 0) {
          await wait(1)
          retryCount++
        } else {
          break
        }
      } catch (error) {
        console.error(error)
        retryCount++
      }
    }

    if (dataSearch) {
      setSimData((dataSearch as any).map((item: any) => ({
        discount: item.price - item.discount_price,
        phoneNumber: item.number,
        brand: "Gmobile",
        currentPrice: item.discount_price,
        originalPrice: item.price,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0701a3b811d9c4c8267c17a07dcb70f99550247fa52159acc489bc3bf6234d12?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7",
        discountIconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/959bc2617d8d7d1cbb4d0639917cf68ed4e756dd6d444f3f37ce9dda5446919b?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
      })))
    }
  }

  React.useEffect(() => {
    if (providerId) {
      requestList()
    }
  }, [page, type, providerId])

  const handleChangeType = (value: React.SetStateAction<{ name: string; type: string; }>) => {
    setType(value)
  }

  const getDataDetail = async () => {
    const result = await axios({
      method: 'GET',
      url: `${BASE_API_URL}/api/v1/products/sim-detail-by-phone-number/${seletecNumber}?t=${new Date()}`
    })
    setDataDetail(result?.data?.data)
  }


  React.useEffect(() => {
    if (seletecNumber) {
      getDataDetail()
    }
  }, [seletecNumber])

  return (
    <div className="flex overflow-hidden flex-col px-16 pt-20 pb-16 max-md:px-5">
      <div className="gap-10 text-center self-stretch w-full text-6xl font-semibold leading-none text-black max-md:max-w-full max-md:text-4xl">
        Danh sách Sim
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-start self-center mt-12 max-w-full text-xl font-semibold leading-snug text-center text-gray-500 w-[832px] max-md:mt-10">
        {
          types.map((item) => (
            <div onClick={() => handleChangeType(item)} className="cursor-pointer flex relative flex-1 shrink justify-center items-start px-3 py-6 text-black basis-0">
              <div className="gap-2.5 self-stretch px-3 my-auto">{item.name}</div>
              {
                type.type === item.type &&
                <div className="flex absolute inset-x-0 bottom-0 z-0 shrink-0 self-start h-0.5 bg-[#FFC426] w-[178px]" />
              }
            </div>
          ))
        }

      </div>
      <div className="flex flex-wrap gap-8 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {simData.map((sim, index) => (
          <SimCard onClickSim={() => setSelectedNumber(sim.phoneNumber)} key={index} {...sim} />
        ))}
      </div>
      {/* <ModalDetail/> */}
      <div className="flex gap-3 items-center self-center mt-12 max-md:mt-10">
        <NavigationButton
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c9034149c070e93383d0fd266427969acbb9e0b13b7e2e0d2654b268d85bb83?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
          disabled={page <= 1}
          onClick={() => { setPage(page - 1) }}
        />
        <PaginationButton active={true}>{page}</PaginationButton>
        <NavigationButton 
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/568b038ed3cc916cf5e92a9c16cb90043799c9ccc26a99b461d9e8b9eb863f98?placeholderIfAbsent=true&apiKey=ee84bb512d1340b98ec83662137fe9b7"
          onClick={() => { setPage(page + 1)}}
          disabled={!isNext}
        />
      </div>
    </div>
  );
};