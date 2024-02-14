import Image from "next/image";
import React, { useRef } from "react";
import testimonialgirl from "@/assets/images/testimonialgirl.png";
import star from "@/assets/images/star.svg";
import david from "@/assets/images/david.png";
import eliza from "@/assets/images/eliza.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination,Navigation } from 'swiper/modules';


const Testimonial = () =>{
    const swiperRef = useRef();
    const sliderSettings = {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2,
		},
	};
    return(
        <>
            <div className="testimonial_wrap pb-[191px]">
                <div className="container">
                    <div className="testimonial_block flex gap-x-[86px]">
                        <div className="imgbox max-w-[405px]">
                            <Image src={testimonialgirl} alt="girl" className="h-auto w-full"></Image>
                        </div>
                        <div className="detailpart relative">
                            <div className="titlebox text-left pb-[60px]">
                                <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] ">
                                    <p className="uppercase text-primary text-[24px] tracking-[0.23em] pb-[16px] ml-[110px]">
                                    Testimonials
                                    </p>
                                </div>
                                <h2 className="text-h2 text-black">our <span className="text-primary"> happy </span> customers</h2>
                            </div>
                            <div className="sliderwrap absolute bottom-0 left-[-187px] right-0 flex justify-between">
                                <div className="itemrow flex justify-between  min-w-[896px] pt-[60px] pl-[101px] pr-[117px] bg-[#E9E9E9]">
                                <Swiper className="testimonial_slider"
                                    loop={true}
                                    slidesPerView={2}
                                    breakpoints={sliderSettings}
                                    navigation={true}
                                    modules={[Navigation,Pagination]}
                                    pagination={{
                                        clickable: true,
                                      }}
                                    onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="itembox max-w-[288px]">
                                            <div className="starbox flex pb-6">
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                            </div>
                                            <p className="text-[16px] text-paragraph leading-[158%]">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna.
                                            </p>
                                            <div className="writerbox flex gap-x-3 pt-6">
                                                <div className="imgbox flex h-[60px] w-[60px] overflow-hidden rounded-full"><Image src={david} className="w-full h-auto max-w-full max-h-full object-cover"></Image></div>
                                                <div className="prodetail flex justify-between flex-col"><h3 className="text-h3 text-primary">david craig</h3><span className="uppercase text-[16px] text-paragraph leading-[158%]">Chicago</span></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="itembox max-w-[288px]">
                                            <div className="starbox flex pb-6">
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                            </div>
                                            <p className="text-[16px] text-paragraph leading-[158%]">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna.
                                            </p>
                                            <div className="writerbox flex gap-x-3 pt-6">
                                                <div className="imgbox flex h-[60px] w-[60px] overflow-hidden rounded-full"><Image src={eliza} className="w-full h-auto max-w-full max-h-full object-cover"></Image></div>
                                                <div className="prodetail flex justify-between flex-col"><h3 className="text-h3 text-primary">elizabeth wright</h3><span className="uppercase text-[16px] text-paragraph leading-[158%]">Seattle</span></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="itembox max-w-[288px]">
                                            <div className="starbox flex pb-6">
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                            </div>
                                            <p className="text-[16px] text-paragraph leading-[158%]">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna.
                                            </p>
                                            <div className="writerbox flex gap-x-3 pt-6">
                                                <div className="imgbox flex h-[60px] w-[60px] overflow-hidden rounded-full"><Image src={david} className="w-full h-auto max-w-full max-h-full object-cover"></Image></div>
                                                <div className="prodetail flex justify-between flex-col"><h3 className="text-h3 text-primary">david craig</h3><span className="uppercase text-[16px] text-paragraph leading-[158%]">Chicago</span></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="itembox max-w-[288px]">
                                            <div className="starbox flex pb-6">
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                                <div className="starimg"><Image src={star}></Image></div>
                                            </div>
                                            <p className="text-[16px] text-paragraph leading-[158%]">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna.
                                            </p>
                                            <div className="writerbox flex gap-x-3 pt-6">
                                                <div className="imgbox flex h-[60px] w-[60px] overflow-hidden rounded-full"><Image src={eliza} className="w-full h-auto max-w-full max-h-full object-cover"></Image></div>
                                                <div className="prodetail flex justify-between flex-col"><h3 className="text-h3 text-primary">elizabeth wright</h3><span className="uppercase text-[16px] text-paragraph leading-[158%]">Seattle</span></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    
                                    
                                </Swiper>
                                    <div className="switer_btn flex items-center absolute left-0 right-0 top-[43%] w-full">
                                        <button onClick={() => swiperRef.current?.slidePrev()} className="group absolute left-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                                            <path d="M9.99263 0L10.8608 0.873129L1.73656 10.002L10.8608 19.131L9.99263 20L0.000152588 10.002L9.99263 0Z" fill="#A7A7A7"/>
                                            </svg>
                                        </button>
                                        <button onClick={() => swiperRef.current?.slideNext()} className="group absolute right-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                                            <path d="M0.86821 20L0 19.1269L9.12428 9.99795L0 0.86903L0.86821 0L10.8607 9.99795L0.86821 20Z" fill="#A7A7A7"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;