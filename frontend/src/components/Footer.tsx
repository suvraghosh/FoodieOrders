import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="text-white bg-black p-7">
      <div className="grid grid-cols-2 m-5 md:grid-cols-4 gap-y-7">
        <div className="flex flex-col gap-3 text-sm tracking-tighter text-center">
          <span className="text-xl font-bold">Order Now</span>
          <span>Deals</span>
          <span>Pizza</span>
          <span>Sides</span>
          <span>Drinks</span>
        </div>
        <div className="flex flex-col gap-3 text-sm tracking-tighter text-center">
          <span className="text-xl font-bold">About</span>
          <span>About Us</span>
          <span>Contactless deilvery</span>
          <span>Nutrition</span>
          <span>Carrer</span>
        </div>
        <div className="flex flex-col gap-3 text-sm tracking-tighter text-center">
          <span className="text-xl font-bold">Our Policies</span>
          <span>Privacy</span>
          <span>Terms & Conditions</span>
          <span>Responsible disclosure</span>
          <span>FAQs & Help</span>
        </div>
        <div className="flex flex-col gap-3 text-sm tracking-tighter text-center">
          <span className="text-xl font-bold">Visit CheesyWheels</span>
          <span>Locate a store</span>
          <span>Global Blog</span>
          <span>Drinks</span>
          <span>Desserts</span>
        </div>
      </div>

      <div className="flex justify-around gap-2 py-7">
        <div className="hidden md:flex md:items-center md:d-block ">
          <span className="px-5 ">Help us in serving you better</span>
          <Button className="flex items-center gap-1 px-4 py-2 font-semibold tracking-widest duration-300 bg-[#ffffff00] border border-[#3654ff] rounded-md cursor-pointer hover:[#3654ff] hover:gap-2">
            Give Feedback
            <svg
              className="w-5 h-5 transition-all"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Button>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <span>Follow us</span>
          <div className="flex gap-4 py-3">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
