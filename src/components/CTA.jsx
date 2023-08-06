import React from "react";
import styles, { layout } from "../style";
import { Button } from "../components";

const CTA = () => {
  return (
    <section
      className={`flex sm:flex-row flex-col bg-discount-gradient box-shadow rounded-[20px] ${styles.flexCenter} ${styles.marginY} ${styles.padding}`}
    >
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`text-white font-poppins ${styles.heading2}`}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button textValue="Get Started"></Button>
      </div>
    </section>
  );
};

export default CTA;
