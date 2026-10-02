import React from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FiPackage } from "react-icons/fi";
import Copyright from "../copyright/Copyright";
const boxs = [
  { id: 1, icon: BsFillChatRightTextFill, text: "faqs" },
  { id: 2, icon: MdLocationPin, text: "store locations" },
  { id: 3, icon: LiaPhoneVolumeSolid, text: "contact us" },
  { id: 4, icon: FiPackage, text: "order tracking" },
];

const customerCare = [
  { id: 1, text: "faqs" },
  { id: 2, text: "terms of service" },
  { id: 3, text: "privacy policy" },
  { id: 4, text: "contact us" },
  { id: 5, text: "gift cards" },
];
const help = [
  { id: 1, text: "shipping info" },
  { id: 2, text: "returns" },
  { id: 3, text: "how to order" },
  { id: 4, text: "how to track" },
  { id: 5, text: "size guide" },
];
const info = [
  { id: 1, text: "about us" },
  { id: 2, text: "our blog" },
  { id: 3, text: "careers" },
  { id: 4, text: "store locations" },
  { id: 5, text: "testimonial" },
];
function Footer() {
  return (
    <footer className="bg-black text-white py-25">
      <div className="container">
        <div className="lg:flex lg:items-start">
          <div className="w-full lg:max-w-1/3">
            <h3 className="text-sm uppercase mb-2.5 lg:mb-4 font-bold">
              get in touch
            </h3>
            <p className="text-[13px] leading-relaxed max-w-240">
              Have any questions or need assistance? We’re here to help! Reach
              out to us for support, or inquiries and we’ll get back to you as
              soon as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 py-8">
              {boxs.map((box) => {
                return (
                  <div
                    key={box.id}
                    className="flex items-center cursor-pointer rounded-[3px] gap-5 bg-[#ffffff15] transition-colors duration-300 hover:bg-[#ffffff1f] py-4 px-5 group"
                  >
                    <div>
                      <box.icon size={18} />
                    </div>
                    <div className="text-[10px] uppercase transition-colors duration-300 group-hover:text-secondary">
                      {box.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:max-w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 lg:pl-30">
              <div>
                <h3 className="text-sm font-bold uppercase mb-6">
                  customer care
                </h3>
                <ul className="flex flex-col gap-5">
                  {customerCare.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="text-xs uppercase transition-colors duration-300 hover:text-secondary cursor-pointer"
                      >
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase mb-6">
                  help & support
                </h3>
                <ul className="flex flex-col gap-5">
                  {help.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="text-xs uppercase transition-colors duration-300 hover:text-secondary cursor-pointer"
                      >
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase mb-6">
                  company info
                </h3>
                <ul className="flex flex-col gap-5">
                  {info.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="text-xs uppercase transition-colors duration-300 hover:text-secondary cursor-pointer"
                      >
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
