import { useState } from "react";
import { Button, Image } from "antd";
import ModalRegisterCollab from "../components/ModalRegisterCollab.tsx";
import { getAssetPath } from "../utils/path.ts";

const PartnershipComponent: React.FC = () => {
  const [isOpenModalRegisterCollab, setIsOpenModalRegisterCollab] =
    useState(false);

  return (
    <div>
      <div className="text-center lg:pt-16 lg:pb-10 py-8">
        <h3 className=" lg:text-[56px] lg:leading-[72px] text-[40px] leading-[52px] font-semibold text-primary">
          Quan hệ đối tác
        </h3>
        <p className="lg:mt-8 mt-6 w-full max-w-[972px] text-secondary lg:text-lg text-bas md:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Image
          src={getAssetPath("/img/collab-banner-1.png")}
          preview={false}
          alt="banner"
          className="lg:mt-12 mt-8 rounded-corner-04"
        />
      </div>

      <div className="flex md:gap-8 items-center lg:pt-10 pt-8 md:flex-row flex-col gap-6">
        <div className="flex-1 flex-shink-0">
          <h4 className="lg:text-[40px] lg:leading-[52px] text-[32px] leading-10 font-semibold text-primary">
            Lorem ipsum
          </h4>
          <div className="mt-6 text-secondary text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="flex-1 flex-shink-0">
          <Image
            src={getAssetPath("/img/collab-banner-2.png")}
            preview={false}
            alt="banner"
            className="rounded-corner-04 w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>

      <div className="flex md:gap-8 items-center lg:pt-10 md:flex-row-reverse flex-col gap-6  md:mt-20 md:pb-16 mt-8 pt-0">
        <div className="flex-1 flex-shink-0">
          <h4 className="text-[40px] leading-[52px] font-semibold text-primary">
            Lorem ipsum
          </h4>
          <div className="mt-6 text-secondary text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="flex-1 flex-shink-0">
          <Image
            src={getAssetPath("/img/collab-banner-3.png")}
            preview={false}
            alt="banner"
            className="rounded-corner-04 w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>

      <div className="pt-16 relative min-h-[320px]">
        <img
          src={getAssetPath("/img/register-collab-bg.png")}
          alt="banner"
          className="rounded-corner-04 w-full hidden md:block "
        />
        <img
          src={getAssetPath("/img/register-collab-bg-mb.png")}
          alt="banner"
          className="rounded-corner-04 w-full block md:hidden "
        />
        <div className="absolute lg:top-[calc(128/368*100%)] text-center w-full px-4 md:px-8 top-16 bottom-0 flex flex-col items-center justify-center md:bottom-16">
          <p className="xl:text-[40px] xl:leading-[52px] md:text-3xl font-semibold text-[36px] leading-[44px]">
            Cộng tác với Simplus ngay hôm nay!
          </p>
          <p className="xl:mt-4 md:mt-2 text-primary xl:text-lg font-medium mt-4 text-lg">
            Liên hệ SimPlus để trở thành cộng tác viên kinh doanh các sản phẩm/
            dịch vụ viễn thông
          </p>
          <Button
            onClick={() => setIsOpenModalRegisterCollab(true)}
            className="mx-auto xl:mt-8 mt-8 sm:mt-4 md:mt-0 h-12 w-full md:mt-2 lg:mt-4 !text-primary !bg-white rounded-corner-03 border-none xl:h-14 xl:text-2xl xl:px-5 xl:py-3 flex items-center justify-center sm:w-fit text-xl sm:text-base py-3 sm:h-fit sm:py-2"
          >
            Đăng ký ngay
          </Button>
        </div>
      </div>

      <ModalRegisterCollab
        isOpen={isOpenModalRegisterCollab}
        setIsOpen={setIsOpenModalRegisterCollab}
      />
    </div>
  );
};

export default PartnershipComponent;
