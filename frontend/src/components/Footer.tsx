import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-black text-white p-7">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7">
        <div className="flex flex-col text-center tracking-tighter text-sm">
          <span className="text-xl font-bold">Order Now</span>
          <span>Deals</span>
          <span>Pizza</span>
          <span>Sides</span>
          <span>Drinks</span>
        </div>
        <div className="flex flex-col text-center tracking-tighter text-sm">
          <span className="text-xl font-bold">About</span>
          <span>About Us</span>
          <span>Contactless deilvery</span>
          <span>Nutrition</span>
          <span>Carrer</span>
        </div>
        <div className="flex flex-col text-center tracking-tighter text-sm">
          <span className="text-xl font-bold">Our Policies</span>
          <span>Privacy</span>
          <span>Terms & Conditions</span>
          <span>Responsible disclosure</span>
          <span>FAQs & Help</span>
        </div>
        <div className="flex flex-col text-center tracking-tighter text-sm">
          <span className="text-xl font-bold">Visit CheesyWheels</span>
          <span>Locate a store</span>
          <span>Global Blog</span>
          <span>Drinks</span>
          <span>Desserts</span>
        </div>
      </div>

      <div className="flex justify-around py-7 gap-2">
        <div className="md:flex md:items-center hidden md:d-block ">
            <span className="px-5 ">Help us in serving you better</span>
            <Button className="bg-white text-black hover:bg-slate-200">Give Feedback</Button>
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
