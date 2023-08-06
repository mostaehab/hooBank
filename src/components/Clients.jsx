import React from "react";
import styles, { layout } from "../style";
import { clients } from "../constants";
const Clients = () => {
  return (
    <section className={`flex flex-row ${styles.flexCenter}`}>
      {clients.map((client) => {
        return (
          <div
            key={client.id}
            className={`flex-1 sm:min-w-[192px] min-w-[120px] ${styles.flexCenter}`}
          >
            <img
              className="sm:w-[192px] w-[100px] object-contain"
              src={client.logo}
              alt={client.id}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Clients;
