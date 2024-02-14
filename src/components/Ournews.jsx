import Link from "next/link";
import Image from "next/image";
import greyicon from "@/assets/images/greyicon.svg";
import newsimg from "@/assets/images/newsimg.png";
import calender from "@/assets/images/calender.svg";
import profileb from "@/assets/images/profileb.png";
import news1 from "@/assets/images/news1.png";
import news2 from "@/assets/images/news2.png";
import news3 from "@/assets/images/news3.png";
import news4 from "@/assets/images/news4.png";

const Ournews =()=>{
    return(
        <>
            <div className="ournews_wrap py-[191px]">
                <div className="container">
                    <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-0 ">
                            <p className="uppercase text-primary text-[24px] tracking-[0.23em] pb-[16px] ml-[110px]">our news</p>
                    </div>
                    <div className="titlebox flex justify-between items-center pb-[50px]">
                        <div className="title">
                            <h2 className="text-h2 text-black">recently <span className="text-primary">updated</span></h2>
                        </div>
                        <div className="get_started flex items-center">
                                <p className="text-paragraph uppercase font-medium text-[20px] z-[1]">discover news</p>
                                <Link href="#" className="h-[49px] w-[49px] flex items-center justify-center bg-[#D3D3D3] rounded-full ml-[-6px] transition-all duration-300 ease-in-out hover:bg-btnhover">
                                    <i className="w-[12px] h-[20px] text-0 flex"><Image src={greyicon} alt="getstart"></Image></i>
                                </Link>
                        </div>
                    </div>
                    <div className="flex justify-between gap-x-[82px]">
                        <div className="newsbox max-w-[608px]">
                            <div className="imgbox relative max-w-[608px]">
                                <Image src={newsimg} alt="news" className="h-auto w-full"></Image>
                                <div className="tagbox flex absolute bottom-[30px] left-[50px]">
                                    <Link href="#" className="uppercase text-white px-[18px] py-[14px] min-w-[163px] text-[14px] leading-[158%] flex items-center justify-center border border-primary">commercial moving</Link>
                                </div>
                            </div>
                            <div className="newsdtl py-[30px] border-b border-solid border-paragraph">
                                <strong className="uppercase block font-semibold font-Sarabun text-[24px] text-black leading-[150%] pb-4">common long-distance moving mistakes and how to avoid them</strong>
                                <p className="leading-[158%] text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="profile_morebox flex justify-between items-center pt-8">
                                <div className="lftbox relative flex justify-between items-center w-[358px] after:absolute after:content[''] after:bottom-0 after:h-[45px] after:w-[1px] after:bg-paragraph after:left-[47%] after:transform after:translate-x-1/2">
                                    <div className="profilebox flex items-center gap-x-3">
                                        <div className="imgbox flex h-[45px] w-[45px] overflow-hidden"><Image src={profileb} alt="profile" className="w-full h-auto max-w-full max-h-full rounded-full"></Image></div>
                                        <div className="name uppercase text-[14px] leading-[120%] text-paragraph">joel cairns</div>
                                    </div>
                                    <div className="datebox flex items-center gap-x-3">
                                        <div className="imgbox flex h-[19px] w-[19px] overflow-hidden"><Image src={calender} alt="profile" className="w-full h-auto max-w-full max-h-full"></Image></div>
                                            <div className="date uppercase text-[14px] leading-[158%] text-paragraph">18 December 2023</div>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <Link href="#" className="flex uppercase font-medium text-[20px] text-primary underline decoration-primary decoration-1 underline-offset-4">read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="newslisting max-w-[506px]">
                            <Link href='#' className="newsitem flex justify-between gap-x-10">
                                <div className="imgbox flex min-w-[265px] h-[164px] overflow-hidden"><Image src={news1} alt="news" className="w-full h-auto max-h-full max-w-full object-cover"></Image></div>
                                <div className="newinfo border-b border-paragraph">
                                    <h3 className="text-h3 leading-[150%] text-paragraph pb-4">how to pack a long distance move...</h3>
                                    <p className="text-[18px] leading-[158%] text-paragraph">Lorem ipsum dolor sit amet, consectetur...</p>
                                </div>
                            </Link>
                            <Link href='#' className="newsitem flex justify-between gap-x-10">
                                <div className="imgbox flex min-w-[265px] h-[164px] overflow-hidden"><Image src={news2} alt="news" className="w-full h-auto max-h-full max-w-full object-cover"></Image></div>
                                <div className="newinfo border-b border-paragraph">
                                    <h3 className="text-h3 leading-[150%] text-paragraph pb-4">how to set up your home for office</h3>
                                    <p className="text-[18px] leading-[158%] text-paragraph">Lorem ipsum dolor sit amet, consectetur...</p>
                                </div>
                            </Link>
                            <Link href='#' className="newsitem flex justify-between gap-x-10">
                                <div className="imgbox flex min-w-[265px] h-[164px] overflow-hidden"><Image src={news3} alt="news" className="w-full h-auto max-h-full max-w-full object-cover"></Image></div>
                                <div className="newinfo border-b border-paragraph">
                                    <h3 className="text-h3 leading-[150%] text-paragraph pb-4">5 ways to make the process easier...</h3>
                                    <p className="text-[18px] leading-[158%] text-paragraph">Lorem ipsum dolor sit amet, consectetur...</p>
                                </div>
                            </Link>
                            <Link href='#' className="newsitem flex justify-between gap-x-10">
                                <div className="imgbox flex min-w-[265px] h-[164px] overflow-hidden"><Image src={news4} alt="news" className="w-full h-auto max-h-full max-w-full object-cover"></Image></div>
                                <div className="newinfo border-b border-paragraph">
                                    <h3 className="text-h3 leading-[150%] text-paragraph pb-4">5 budget friendly long distance...</h3>
                                    <p className="text-[18px] leading-[158%] text-paragraph">Lorem ipsum dolor sit amet, consectetur...</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ournews;