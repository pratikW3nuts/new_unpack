import Image from "next/image";
import bestman from "@/assets/images/bestman.png";
// import proservice from "@/assets/images/proservice.svg";
// import emeservice from "@/assets/images/emeservice.svg";
// import ontime from "@/assets/images/ontime.svg";
// import flatrate from "@/assets/images/flatrate.svg";

const Whyus = () =>{
    return(
        <>
            <div className="whyus_wrap pb-[191px]">
                <div className="container">
                    <div className="titlebox text-center pb-[60px]">
                        <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-[50%] after:ml-[-237px]">
                            <p className="uppercase text-primary text-[24px] tracking-[0.23em] pb-[16px]">
                            why choose us
                            </p>
                        </div>
                        <h2 className="text-h2 text-black">the <span className="text-primary"> best </span> movers around</h2>
                    </div>
                    <div className="contentbox w-full relative">
                        <div className="imgbox max-w-[390px] text-center mx-auto"><Image src={bestman} alt="man" className="w-full h-auto"></Image></div>
                        <div className="metablock flex justify-between flex-col absolute left-0 right-0 w-full top-[60px] bottom-[60px]">
                            <div className="detailrow flex justify-between">
                                <div className="texticon flex justify-between w-[450px] gap-x-6">
                                    <div className="textbox">
                                        <strong className="block uppercase text-paragraph font-Sarabun font-semibold text-[20px] leading-[120%] pb-4 transition-all duration-300 ease-in-out">proffessional service</strong>
                                        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
                                        <div className="icon transition-all duration-300 ease-in-out flex items-center justify-center min-w-[90px] h-[90px] overflow-hidden bg-[#E9E9E9]">
                                            {/* <Image src={proservice} alt="proservice" className="w-[50px] h-[50px] max-w-full max-h-full object-cover"></Image> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                            <path d="M3.17392 40.1303H14.0435" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M10.7826 45.5649H21.6522" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M5.34781 50.9996H18.3913" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M32.5218 41.2172C32.5218 41.2172 32.3478 48.0759 27.087 50.9998" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M43.3913 41.2172C43.3913 41.2172 43.5652 48.0759 48.8261 50.9998" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M51 26.9997C51 35.4019 45.163 43.391 37.9565 43.391C30.75 43.391 24.913 35.4128 24.913 26.9997C24.913 18.5976 30.75 12.9562 37.9565 12.9562C45.163 12.9562 51 18.5976 51 26.9997Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M51 22.7393C51 22.7393 43.6739 24.7393 37.9565 22.7393C35.2065 21.7719 31.6304 21.4675 29.2609 21.6523" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M23.8261 34.6957H1V1H37.9565V10.7826" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M17.3043 21.6525H6.43478V29.2612H17.3043V21.6525Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M26 11.8696L19.4783 8.6087L12.9565 11.8696V1H26V11.8696Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                </div>
                                <div className="texticon flex justify-between w-[450px] gap-x-6">
                                    <div className="icon transition-all duration-300 ease-in-out flex items-center justify-center min-w-[90px] h-[90px] overflow-hidden bg-[#E9E9E9]">
                                        {/* <Image src={emeservice} alt="emeservice" className="w-[50px] h-[50px] max-w-full max-h-full object-cover"></Image> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                        <path d="M2.08696 25.9998C1.3913 24.3259 1 22.4889 1 20.565C1 12.7607 7.32609 6.43457 15.1304 6.43457C22.9348 6.43457 29.2609 12.7607 29.2609 20.565C29.2609 28.3694 22.9348 34.6954 15.1304 34.6954C10.7609 34.6954 6.8587 32.7063 4.26087 29.5976" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M15.1304 21.6519V10.7823" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M15.1304 6.43478V1" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M18.3913 1H11.8696" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M23.8261 4.26105L21.6522 8.60887" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M6.43481 4.26105L8.60873 8.60887" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M10.7826 29.261H4.26086V35.7828" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M16.2174 45.5648H14.0435" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M15.1304 50.9998C18.1319 50.9998 20.5652 48.5665 20.5652 45.565C20.5652 42.5634 18.1319 40.1302 15.1304 40.1302C12.1289 40.1302 9.69562 42.5634 9.69562 45.565C9.69562 48.5665 12.1289 50.9998 15.1304 50.9998Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M41.2174 45.5648H39.0435" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M40.1304 50.9998C43.1319 50.9998 45.5652 48.5665 45.5652 45.565C45.5652 42.5634 43.1319 40.1302 40.1304 40.1302C37.1289 40.1302 34.6956 42.5634 34.6956 45.565C34.6956 48.5665 37.1289 50.9998 40.1304 50.9998Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M45.5652 46.6521H48.8261C50.0326 46.6521 51 45.6738 51 44.4782V33.6086C51 32.413 50.0326 31.4347 48.8261 31.4347L45.8153 15.8043C45.6196 14.7825 44.7283 14.0434 43.6848 14.0434H31.4348" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M1 36.8698V44.4785C1 45.6742 1.97826 46.6524 3.17391 46.6524H9.69565" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M19.4783 46.6522H34.6957" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M48.8261 31.4347H40.1305C38.9239 31.4347 37.9565 30.4564 37.9565 29.2608V14.0434" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="textbox">
                                        <strong className="block uppercase text-paragraph font-Sarabun font-semibold text-[20px] leading-[120%] pb-4 transition-all duration-300 ease-in-out">24 hours emergency service</strong>
                                        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="detailrow flex justify-between">
                                <div className="texticon flex justify-between w-[450px] gap-x-6">
                                    <div className="textbox">
                                        <strong className="block uppercase text-paragraph font-Sarabun font-semibold text-[20px] leading-[120%] pb-4 transition-all duration-300 ease-in-out">always on time</strong>
                                        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
                                    <div className="icon transition-all duration-300 ease-in-out flex items-center justify-center min-w-[90px] h-[90px] overflow-hidden bg-[#E9E9E9]">
                                        {/* <Image src={ontime} alt="proservice" className="w-[50px] h-[50px] max-w-full max-h-full object-cover"></Image> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                                        <path d="M15.2174 45.5649H13.0435" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M14.1305 50.9999C17.132 50.9999 19.5652 48.5666 19.5652 45.5651C19.5652 42.5635 17.132 40.1303 14.1305 40.1303C11.1289 40.1303 8.69568 42.5635 8.69568 45.5651C8.69568 48.5666 11.1289 50.9999 14.1305 50.9999Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M41.3043 45.5649H39.1304" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M26.087 1H11.9565" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M40.2174 50.9999C43.219 50.9999 45.6522 48.5666 45.6522 45.5651C45.6522 42.5635 43.219 40.1303 40.2174 40.1303C37.2159 40.1303 34.7827 42.5635 34.7827 45.5651C34.7827 48.5666 37.2159 50.9999 40.2174 50.9999Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M45.6522 46.6518H48.9131C50.1196 46.6518 51.087 45.6736 51.087 44.4779V33.6084C51.087 32.4127 50.1196 31.4345 48.9131 31.4345L45.9022 15.804C45.7065 14.7823 44.8044 14.0432 43.7718 14.0432H31.5218C30.3152 14.0432 29.3478 15.0214 29.3478 16.2171V46.6518H34.7826" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M0 46.6519H8.69565" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M19.5652 46.652H29.3479V9.69549C29.3479 8.49984 28.3696 7.52158 27.1739 7.52158H8.69568" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M48.9131 31.4345H40.2174C39.0109 31.4345 38.0435 30.4562 38.0435 29.2605V14.0432" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M17.3913 34.6956H3.26086" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M13.0435 28.1741H0" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M4.34783 20.5656H2.17392" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M21.7392 20.5656H6.52176" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M16.3043 15.1301H0" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M6.52172 7.52158H4.34781" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="texticon flex justify-between w-[450px] gap-x-6">
                                    <div className="icon transition-all duration-300 ease-in-out flex items-center justify-center min-w-[90px] h-[90px] overflow-hidden bg-[#E9E9E9]">
                                        {/* <Image src={flatrate} alt="emeservice" className="w-[50px] h-[50px] max-w-full max-h-full object-cover"></Image> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                        <path d="M43.3913 12.9562H8.60864V39.0432H43.3913V12.9562Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M21.6522 46.6521H7.52174C3.92391 46.6521 1 43.7282 1 40.1303V11.8695C1 8.27163 3.92391 5.34772 7.52174 5.34772H24.913" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M30.3478 5.34772H44.4782C48.076 5.34772 51 8.27163 51 11.8695V40.1303C51 43.7282 48.076 46.6521 44.4782 46.6521H27.0869" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M32.5218 23.8258L26 20.5649L19.4783 23.8258V12.9562H32.5218V23.8258Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M11.8695 34.6956H18.3912" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M11.8695 30.3479H22.7391" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M20.5652 9.69565L24.913 5.34783L20.5652 1" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        <path d="M31.4347 42.3041L27.0869 46.652L31.4347 50.9998" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="textbox">
                                        <strong className="block uppercase text-paragraph font-Sarabun font-semibold text-[20px] leading-[120%] pb-4">flat rate fees</strong>
                                        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Whyus;