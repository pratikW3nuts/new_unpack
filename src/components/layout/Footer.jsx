import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import mail from "@/assets/images/mail.svg";
import call from "@/assets/images/call.svg";
import location from "@/assets/images/location.svg";
import get_start from "@/assets/images/get_start.svg";
import whitetwit from "@/assets/images/whitetwit.svg";
import whfb from "@/assets/images/whfb.svg";
import whinsta from "@/assets/images/whinsta.svg";
import pintrest from "@/assets/images/pintrest.svg";
import xbox from "@/assets/images/xbox.svg";

const Footer=()=>{
    return(
        <>
            <div className="footer_wrap bg-black pt-[120px] pb-[80px]">
                <div className="container">
                    <div className="footerbox flex justify-between pb-20 border-b border-solid border-white">
                        <div className="logobox">
                            <div className="imgbox">
                                <Link href="#" className="max-w-[248px] block">
                                    <Image src={Logo} alt="logo" className="w-full h-auto"/>
                                </Link>
                            </div>
                            <div className="metablock pt-[45px]">
                                <div className="icontxt flex items-center gap-x-[25px]">
                                    <div className="icon"><Image src={mail}></Image></div>
                                    <div className="text text-white text-[16px] leading-[115%]"><Link href="mailto:info@8pxlstudio">info@8pxlstudio</Link></div>
                                </div>
                                <div className="icontxt flex items-center gap-x-[25px]">
                                    <div className="icon"><Image src={call}></Image></div>
                                    <div className="text text-white text-[16px] leading-[115%]"><Link href="tel:+6494461709">+0123456789</Link></div>
                                </div>
                                <div className="icontxt flex items-center gap-x-[25px]">
                                    <div className="icon"><Image src={location}></Image></div>
                                    <div className="text text-white text-[16px] leading-[115%]">021 Hollywood Boulevard, LA</div>
                                </div>
                            </div>
                        </div>

                        <div className="discover">
                            <h3 className="text-h3 uppercase text-white pb-[38px]">discover more</h3>
                            <div className="menubox">
                                <ul>
                                    <li><Link href='#' className="text-[16px] uppercase text-white leading-[115%]">about us</Link></li>
                                    <li><Link href='#' className="text-[16px] uppercase text-white leading-[115%]">service</Link></li>
                                    <li><Link href='#' className="text-[16px] uppercase text-white leading-[115%]">featured</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="newslatter">
                             <h3 className="text-h3 uppercase text-white pb-[38px]">join our newsletter</h3>
                                <div className="inputrow flex justify-between relative">
                                    <input
                                        class="w-[288px] pb-4 appearance-none  text-white bg-black uppercase text-[16px] focus:outline-none border-b border-solid border-white"
                                        id="email"
                                        type="text"
                                        placeholder="email addres"
                                    />
                                    <button type="submit" value="Submit" 
                                    className="flex absolute bottom-[1px] right-0 items-center text-black uppercase font-medium text-[20px]"><i className="text-0 h-[40px] w-[40px] flex items-center justify-center bg-primary transition-all duration-300 ease-in-out hover:bg-btnhover z-[1]"><Image src={get_start} alt="getstart"></Image></i></button>
                                </div>
                                <div className="ftrsocialrow pt-[33px]">
                                    <ul className="flex">
                                        <li><Link href='#'><div className="imgbox flex items-center justify-center h-10 w-10 rounded-full border border-solid border-white"><Image src={whitetwit} alt="twit"></Image></div></Link></li>
                                        <li><Link href='#'><div className="imgbox flex items-center justify-center h-10 w-10 rounded-full border border-solid border-white"><Image src={whfb} alt="twit"></Image></div></Link></li>
                                        <li><Link href='#'><div className="imgbox flex items-center justify-center h-10 w-10 rounded-full border border-solid border-white"><Image src={whinsta} alt="twit"></Image></div></Link></li>
                                        <li><Link href='#'><div className="imgbox flex items-center justify-center h-10 w-10 rounded-full border border-solid border-white"><Image src={pintrest} alt="twit"></Image></div></Link></li>
                                        <li><Link href='#'><div className="imgbox flex items-center justify-center h-10 w-10 rounded-full border border-solid border-white"><Image src={xbox} alt="twit"></Image></div></Link></li> 
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className="copyright text-center pt-10">
                        <p className="text-[18px] text-white leading-[150%]">© 2025 Unpack. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Footer;