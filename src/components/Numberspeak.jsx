import Image from "next/image";
import experman from "@/assets/images/experman.png";
// import whoue from "@/assets/images/whoue.svg";
// import packaging from "@/assets/images/packaging.svg";
// import shipping from "@/assets/images/shipping.svg";
// import reliability from "@/assets/images/reliability.svg";

const Numberspeak = () => {
    return (
        <>
            <div className="numberspeak_wrap py-[191px]">
                <div className="container">
                    <div className="numspeak_outer">
                        <div className="grid grid-rows-1 grid-flow-col grid-cols-2 gap-[86px]">
                            <div className="leftbox">
                                <div className="linetext flex justify-end relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-[50%] after:ml-[-102px]">
                                    <p className="uppercase text-primary text-[24px] tracking-[0.23em] pb-[16px]">
                                    our experience
                                    </p>
                                </div>
                                <h2 className="text-h2 text-black grid text-end pb-[60px]">let the numbers<span className="text-primary">speak</span></h2>
                                <div className="expbox flex justify-between transition-all duration-300 ease-in-out">
                                    <div className="iconbox flex gap-x-6 justify-between w-full">
                                        <div className="imgbox w-[38px] h-[35px] flex overflow-hidden transition-all duration-300 ease-in-out">
                                            {/* <Image src={whoue} className="w-full h-auto max-w-full max-h-full object-cover" alt="wh"></Image> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                            <path d="M35.2391 36H3.28262V9.36957L19.2609 1L35.2391 9.36957V36Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M30.6739 14.6956H7.84781V35.9999H30.6739V14.6956Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M23.0652 28.3912H15.4565V35.9999H23.0652V28.3912Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M23.0652 36H30.6739V28.3913H23.0652V36Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.84783 36H15.4565L15.4565 28.3913H7.84783L7.84783 36Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M23.0652 20.7827H15.4565V28.3914H23.0652V20.7827Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.84783 28.3912H15.4565L15.4565 20.7825H7.84783L7.84783 28.3912Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M1 36H37.5217" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.08694 10.8914H10.1304" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M12.4131 10.8914H15.4565" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M17.7392 10.8914H20.7826" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M23.0652 10.8914H26.1087" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M28.3914 10.8914H31.4348" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            </svg>
                                            </div>
                                        <div className="dtlbox flex flex-col justify-between w-full">
                                            <div className="titlenum flex justify-between font-Sarabun font-semibold uppercase leading-[120%] text-paragraph text-[20px] pb-4">
                                                <div className="title transition-all duration-300 ease-in-out">warehousing</div>
                                                <div className="num transition-all duration-300 ease-in-out">90%</div>
                                            </div>
                                            <div className="progressline relative w-full after:absolute after:content-[''] after:w-full after:h-[7px] after:bg-defaultline after:z-[-1] after:block after:left-0 after:bottom-0 
                                            before:absolute before:content-[''] before:transition-all before:duration-300 before:ease-in-out before:w-[90%] before:h-[7px] before:bg-paragraph before:z-[1] before:block before:left-0 before:bottom-0"></div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="expbox flex justify-between transition-all duration-300 ease-in-out">
                                    <div className="iconbox flex gap-x-6 justify-between w-full">
                                        <div className="imgbox w-[38px] h-[35px] flex overflow-hidden">
                                            {/* <Image src={packaging} className="w-full h-auto max-w-full max-h-full object-cover" alt="wh"></Image> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                            <path d="M7.08696 23.0653H1V33.7175H7.08696V23.0653Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M22.3044 10.1304L35.2391 5.56522L22.3044 1L9.36957 5.56522L22.3044 10.1304Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.08694 32.9565L20.7826 36L36 28.3913V25.3478L25.3478 28.3913" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.08694 23.8262L14.6956 23.0653L19.2609 26.8697H25.3478V29.9131L18.5 31.4349L13.1739 29.1523" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M4.04347 29.913V31.4347" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M22.3043 10.1305V24.587" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M9.36957 5.56506V20.7825" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M35.2392 5.56506V23.0651" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M16.2174 3.28259L29.1522 7.84781V13.9348" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="dtlbox flex flex-col justify-between w-full">
                                            <div className="titlenum flex justify-between font-Sarabun font-semibold uppercase leading-[120%] text-paragraph text-[20px] pb-4">
                                                <div className="title transition-all duration-300 ease-in-out">packaging</div>
                                                <div className="num transition-all duration-300 ease-in-out">83%</div>
                                            </div>
                                            <div className="progressline relative w-full after:absolute after:content-[''] after:w-full after:h-[7px] after:bg-defaultline after:z-[-1] after:block after:left-0 after:bottom-0 
                                            before:absolute before:content-[''] before:transition-all before:duration-300 before:ease-in-out before:w-[83%] before:h-[7px] before:bg-paragraph before:z-[1] before:block before:left-0 before:bottom-0"></div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="expbox flex justify-between transition-all duration-300 ease-in-out">
                                    <div className="iconbox flex gap-x-6 justify-between w-full">
                                        <div className="imgbox w-[38px] h-[35px] flex overflow-hidden">
                                            {/* <Image src={shipping} className="w-full h-auto max-w-full max-h-full object-cover" alt="wh"></Image> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                            <path d="M9.44907 32.1956H7.91287" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M8.68103 36C10.8021 36 12.5215 34.2967 12.5215 32.1956C12.5215 30.0945 10.8021 28.3912 8.68103 28.3912C6.55998 28.3912 4.84053 30.0945 4.84053 32.1956C4.84053 34.2967 6.55998 36 8.68103 36Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M29.4197 32.1956H27.8835" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M11.7534 1H7.91287" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M13.2896 7.84766H8.681" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M17.8982 17.7394H14.0577" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M7.9129 17.7394H4.0724" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M24.043 1H13.2896" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M34.0283 4.80432H20.2025" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M28.6516 36C30.7726 36 32.4921 34.2967 32.4921 32.1956C32.4921 30.0945 30.7726 28.3912 28.6516 28.3912C26.5305 28.3912 24.8111 30.0945 24.8111 32.1956C24.8111 34.2967 26.5305 36 28.6516 36Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M32.492 32.9564H34.7963C35.6489 32.9564 36.3325 32.2716 36.3325 31.4347V24.5868C36.3325 23.3238 35.3033 22.3042 34.0282 22.3042H32.492L30.3644 11.3629C30.2261 10.6476 29.5963 10.1302 28.8589 10.1302H22.5067C21.6541 10.1302 20.9705 10.815 20.9705 11.652V32.9564H24.811" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M12.5215 32.9566H20.9706V24.587H1V31.4349C1 32.2718 1.69129 32.9566 2.5362 32.9566H4.8405" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M32.492 22.3042H27.1153C26.2627 22.3042 25.5791 21.6194 25.5791 20.7825V10.1302" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M20.9706 14.6959H10.9853V24.5873H20.9706V14.6959Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M16.362 4.80432H5.6086V14.6957H16.362V4.80432Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M10.9853 14.6959H1V24.5873H10.9853V14.6959Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="dtlbox flex flex-col justify-between w-full">
                                            <div className="titlenum flex justify-between font-Sarabun font-semibold uppercase leading-[120%] text-paragraph text-[20px] pb-4">
                                                <div className="title transition-all duration-300 ease-in-out">shipping</div>
                                                <div className="num transition-all duration-300 ease-in-out">95%</div>
                                            </div>
                                            <div className="progressline relative w-full after:absolute after:content-[''] after:w-full after:h-[7px] after:bg-defaultline after:z-[-1] after:block after:left-0 after:bottom-0 
                                            before:absolute before:content-[''] before:transition-all before:duration-300 before:ease-in-out before:w-[95%] before:h-[7px] before:bg-paragraph before:z-[1] before:block before:left-0 before:bottom-0"></div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="expbox flex justify-between transition-all duration-300 ease-in-out">
                                    <div className="iconbox flex gap-x-6 justify-between w-full">
                                        <div className="imgbox w-[38px] h-[35px] flex overflow-hidden">
                                            {/* <Image src={reliability} className="w-full h-auto max-w-full max-h-full object-cover" alt="wh"></Image> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                            <path d="M35.5806 17.1277H1V35H35.5806V17.1277Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M13.7798 9.68054H8.51751L1 17.1273H35.5806L28.0631 9.68054H22.8008" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M31.8218 25.319H21.2973V31.2764H31.8218V25.319Z" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M15.2833 0V6.7021H10.7728L18.2903 14.1489L25.8078 6.7021H21.2973V0" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M8.51753 9.68054V17.1273" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M28.063 9.68054V17.1273" stroke="#7A7A7A" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="dtlbox flex flex-col justify-between w-full">
                                            <div className="titlenum flex justify-between font-Sarabun font-semibold uppercase leading-[120%] text-paragraph text-[20px] pb-4">
                                                <div className="title transition-all duration-300 ease-in-out">reliability</div>
                                                <div className="num transition-all duration-300 ease-in-out">85%</div>
                                            </div>
                                            <div className="progressline relative w-full after:absolute after:content-[''] after:w-full after:h-[7px] after:bg-defaultline after:z-[-1] after:block after:left-0 after:bottom-0 
                                            before:absolute before:content-[''] before:transition-all before:duration-300 before:ease-in-out before:w-[85%] before:h-[7px] before:bg-paragraph before:z-[1] before:block before:left-0 before:bottom-0"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox ml-auto">
                                <div className="imgbox max-w-[506px]">
                                    <Image src={experman} alt="experman" className="w-full h-auto"></Image>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}
export default Numberspeak;