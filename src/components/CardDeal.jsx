import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = (props) => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mb-10 mt-6`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet{" "}
          <br className="sm:block hidden" /> quis aliquet eget mauris tortor.ç
          Aliquet ultrices ac, ametau.
        </p>
        <Button textValue="Get Started"></Button>
      </div>

      <div className={layout.sectionImg}>
        <img className="w-[100%] h-[100%]" src={card}></img>
      </div>
    </section>
  );
};

export default CardDeal;
