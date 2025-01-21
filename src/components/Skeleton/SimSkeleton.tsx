/* eslint-disable @typescript-eslint/no-unused-vars */
function SimSkeleton() {
  return (
    <>
      {Array(9)
        .fill(null)
        .map((_) => (
          <div className="cursor-pointer flex flex-col grow shrink self-stretch p-6 my-auto rounded-xl bg-[#F7F8FB] w-[333px] max-md:px-5 max-md:max-w-[166px]">
            <div className="object-contain w-full rounded-md aspect-square"></div>
            <div className="flex flex-col mt-6 w-full">
              <div className="rounded animate-pulse bg-slate-200 w-[160px] h-[30px]"></div>
              <div className="mt-3 font-semibold leading-none text-black">
                <div className="rounded animate-pulse bg-slate-200 w-[200px] h-[36px]"></div>
              </div>
              <div className="flex flex-col mt-3 w-full font-semibold leading-none">
                <div className="flex gap-2 items-start w-full">
                  <div className="text-[#626D7C]">Thương hiệu</div>
                  <div className="flex-1 shrink text-[#3259E8] basis-0">
                    Gmobile
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-3 w-full">
                <div className=" font-semibold leading-none text-[#C32518]">
                  <div className="rounded animate-pulse bg-slate-200 w-[200px] h-[24px]"></div>
                </div>
                <div className="mt-1 font-medium leading-none text-[#4C5563] line-through">
                  <div className="rounded animate-pulse bg-slate-200 w-[200px] h-[14px]"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default SimSkeleton;
