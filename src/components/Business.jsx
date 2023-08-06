import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  console.log(features.length);
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br /> we’ll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button textValue="Get Started" styles="mt-10" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        {features.map((feat, index) => {
          return (
            <div
              key={feat.id}
              className={`flex flex-row feature-card rounded-[10px] ${
                styles.flexCenter
              } p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}
            >
              <div
                className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}
              >
                <img src={feat.icon} className={`w-[50p%] h-[50%]`}></img>
              </div>

              <div className="flex-1 flex-col ml-10">
                <h4 className="font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]">
                  {feat.title}
                </h4>
                <p
                  className={`font-normal font-poppins text-dimWhite text-[16px] leading-[24px]`}
                >
                  {feat.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Business;
