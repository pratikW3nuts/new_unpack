import Image from "next/image";
import Link from "next/link";
import shipboy from "@/assets/images/shipboy.png";
import get_start from "@/assets/images/get_start.svg";

const Shipworldwide=()=>{
    return(
        <>
            <div className="shipment_wrap bg-black pt-[162px] pb-[60px] relative">
                <div className="container">
                    <div className="shipcontentbox flex justify-between">
                        <div className="shipbox">
                            <div className="textbox">
                                <h2 className="text-h2 text-white">Our Fleet is Ready to <br/> Ship <span className="text-primary">Worldwide</span></h2>
                            </div>
                            <div className="get_started flex items-center pt-[73px]">
                                <p className="text-white uppercase font-medium text-[20px] z-[1]">call us now</p>
                                <Link href="#" className="h-[49px] w-[49px] flex items-center justify-center bg-primary rounded-full ml-[-6px] transition-all duration-300 ease-in-out hover:bg-btnhover">
                                    <i className="w-[12px] h-[20px] text-0 flex"><Image src={get_start} alt="getstart"></Image></i>
                                </Link>
                            </div>
                        </div>
                        <div className="imgbox max-w-[550px] absolute right-0 bottom-0 z-[2]">
                            <Image src={shipboy} alt="shipboy"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Shipworldwide;