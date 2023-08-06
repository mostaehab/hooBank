import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          ></img>
          <p className={`${styles.paragraph} mt-4 max-w-[31]`}>
            A new way to make the payment's <br /> easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLinks) => (
            <div
              key={footerLinks.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px]">
                {footerLinks.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLinks.links.map((link, index) => {
                  return (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                        index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex md:flex-row justify-between items-center flex-col pt-6 border-t-[1px] border-t-[#3f3r45] mt-10">
        <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
          2022 HooBank. All Rights Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((icon, index) => (
            <img
              key={icon.id}
              src={icon.icon}
              alt={icon.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
