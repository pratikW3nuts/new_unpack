import Link from "next/link";
import Image from "next/image";
import get_start from "@/assets/images/get_start.svg";

const Bookingform = () => {
  return (
    <>
      <div className="booking_wrap relative">
        <div className="container">
          <div className="titlebox text-center pb-[60px]">
            <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-[50%] after:ml-[-220px]">
              <p className="uppercase text-primary text-[24px] tracking-[0.23em] pb-[16px]">
                booking now
              </p>
            </div>
            <h2 className="text-h2 text-black">
              <span className="text-primary">moving </span> the way you <br />
              want
            </h2>
          </div>
          <div className="formbox bg-white max-w-[936px] px-[54px] pb-[60px] text-center mx-auto relative z-[11px]">
            <form class="formwrap">
                <div className="inputrow flex justify-between">
                    <input
                    class="w-[304px] pb-4 appearance-none  text-shadowgrey uppercase text-[16px] focus:outline-none border-b border-solid border-paragraph"
                    id="name"
                    type="text"
                    placeholder="name"
                    />
                    <input
                        class="w-[304px] pb-4 appearance-none  text-shadowgrey uppercase text-[16px] focus:outline-none border-b border-solid border-paragraph"
                        id="email"
                        type="text"
                        placeholder="email addres"
                    />
                </div>
                <div className="inputrow flex justify-between">
                    <input
                    class="w-[304px] pb-4 appearance-none  text-shadowgrey uppercase text-[16px] focus:outline-none border-b border-solid border-paragraph"
                    id="phone"
                    type="number"
                    placeholder="phone number"
                    />
                    <input
                        class="w-[304px] pb-4 appearance-none  text-shadowgrey uppercase text-[16px] focus:outline-none border-b border-solid border-paragraph"
                        id="date"
                        type="text"
                        placeholder="date"
                    />
                </div>
                <div className="inputrow flex justify-between">
                    <textarea placeholder="service description" 
                    className="w-full h-[119px] pb-4 appearance-none  text-shadowgrey uppercase text-[16px] focus:outline-none border-b border-solid border-paragraph">
                    </textarea>
                </div>
                <div className="booking_nowbtn flex justify-end pt-[60px]">
                    <button type="submit" value="Submit" 
                    className="flex items-center text-black uppercase font-medium text-[20px]">Booking now<i className="text-0 h-[49px] w-[49px] flex items-center justify-center bg-primary rounded-full ml-[-6px] transition-all duration-300 ease-in-out hover:bg-btnhover z-[1]"><Image src={get_start} alt="getstart"></Image></i></button>
                </div>
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bookingform;
