import React, {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Button, Image } from "antd";
import {Navigation, Pagination} from "swiper/modules";
import { useEffect } from "react";

// BannerComponent component
const BannerComponent: React.FC = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const paginationEl = document.querySelector('.swiper-pagination');
        if (paginationEl) {
            const prevButton = document.createElement('img');
            prevButton.classList.add(
                'swiper-button-next',
                'cursor-pointer',
                'inline-block',
                'sm:w-10',
                'sm:h-10',
                'sm:-top-1',
                'relative',
                'sm:mr-6',
                'w-8',
                'h-8',
                '-top-0.5',
                'mr-4'
            );
            prevButton.setAttribute('src', '/img/prev-slide.svg');
            prevButton.addEventListener('click', () => {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slidePrev();
                }
            });

            const nextButton = document.createElement('img');
            nextButton.classList.add(
                'swiper-button-next',
                'cursor-pointer',
                'inline-block',
                'sm:w-10',
                'sm:h-10',
                'sm:-top-1',
                'relative',
                'sm:ml-6',
                'w-8',
                'h-8',
                '-top-0.5',
                'ml-4'
            );
            nextButton.setAttribute('src', '/img/next-slide.svg');
            nextButton.addEventListener('click', () => {
                if (swiperRef.current) {
                    swiperRef.current.swiper.slideNext();
                }
            });

            paginationEl.prepend(prevButton);
            paginationEl.appendChild(nextButton);
        }
    }, []);

    return (
        <div>
            <Swiper
                loop={true}
                ref={swiperRef}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <Image src="/img/Background.png" preview={false} alt='banner' className='hidden sm:block' />
                        <Image src="/img/Background-mb.png" preview={false} alt='banner' className='block sm:hidden' />
                        <div className='absolute sm:top-[calc(66/740*100%)] top-[calc(32/780*100%)] left-1/2 -translate-x-1/2 flex items-center gap-8 w-full md:px-16 px-4 sm:px-8  flex-col sm:flex-row'>
                            <div className='text-white font-bold flex-1 flex-shrink-0 w-full text-center sm:text-left'>
                                <h2 className='xl:text-[56px] xl:leading-[72px] lg:text-4xl text-black sm:text-2xl text-4xl'>Simplus - Đại lý Gmobile
                                    <br className='xl:hidden 2xl:block hidden' />
                                    {' '}
                                    số 1 Việt Nam
                                </h2>
                                <h3 className='xl:mt-6 text-secondary xl:text-[28px] xl:leading-8 text-base sm:mt-4 mt-6'>Mua & đăng ký Sim tiện lợi
                                    cùng Simplus.</h3>
                                <a href="tel:19008699" className='xl:mt-12 block sm:w-fit sm:mt-4 mt-8 w-full'>
                                    <Button className='!text-primary !bg-white rounded-corner-03 border-none xl:h-14 xl:text-2xl xl:px-5 xl:py-3 flex items-center justify-center sm:w-fit w-full text-xl sm:text-base py-3 h-[52px] sm:h-fit sm:py-2'>Hotline:
                                        19008699</Button>
                                </a>
                            </div>
                            <div className='flex-1  flex-shrink-0'>
                                <Image src="/img/059-099.png" className='w-full' preview={false} alt='059-099' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <Image src="/img/Background-2.png" preview={false} alt='banner' className='hidden sm:block' />
                        <Image src="/img/Background-2-mb.png" preview={false} alt='banner' className='block sm:hidden' />
                        <div className='absolute sm:top-0 top-[calc(32/780*100%)] left-1/2 -translate-x-1/2 flex items-center gap-8 w-full md:px-16 px-4 sm:px-8  flex-col sm:flex-row bottom-0'>
                            <div className='text-white font-bold flex-1 flex-shrink-0 w-full text-center sm:text-left'>
                                <h2 className='xl:text-[56px] xl:leading-[72px] lg:text-4xl text-black sm:text-2xl text-4xl'>Simplus tuyển dụng
                                </h2>
                                <h3 className='xl:mt-6 text-secondary xl:text-[28px] xl:leading-8 text-base sm:mt-4 mt-6'>Đăng ký để trở thành Cộng tác viên bán hàng của SimPlus</h3>
                                <a className='xl:mt-12 block sm:w-fit sm:mt-4 mt-8 w-full'>
                                    <Button className='!text-primary !bg-white rounded-corner-03 border-none xl:h-14 xl:text-2xl xl:px-5 xl:py-3 flex items-center justify-center sm:w-fit w-full text-xl sm:text-base py-3 h-[52px] sm:h-fit sm:py-2'>Đăng ký ngay</Button>
                                </a>
                            </div>
                            <div className='flex-1  flex-shrink-0'>
                                <Image src="/img/Small-background-2.png" className='w-full' preview={false} alt='059-099' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerComponent;
