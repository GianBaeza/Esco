import CountUp from "@/components/countUp/CountUp";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import React from "react";

interface TotalVentasProps {
  id: number;
  title: string;
  total: number;
}
const totalventas: TotalVentasProps[] = [
  {
    id: 1,
    title: "Ventas",
    total: 1000,
  },

  {
    id: 4,
    title: "Likes",
    total: 12000,
  },

  {
    id: 6,
    title: "Visitas",
    total: 30004,
  },
];

export default function TotalVentas() {
  return (
    <>
      <section className="w-full h-[15rem] flex flex-col justify-center items-center gap-2 ">
        <main className="w-10/12 flex justify-center items-center gap-2">
          {totalventas.map(({ id, title, total }) => {
            return (
              <SpotlightCard
                className="  bg-transparent border-none  w-64 h-[14rem] flex flex-col text-center items-center justify-center"
                spotlightColor="rgba(222, 222, 222, 0.2)"
                key={id}
              >
                {" "}
                <span className="flex items-center gap-2">
                  <CountUp
                    from={0}
                    to={Number(total)}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text text-orange-400 text-4xl"
                  />{" "}
                  <p className="font-medium text-2xl text-orange-400">+</p>
                </span>
                <h2 className="text-orange-400 font-bold  text-3xl">{title}</h2>
              </SpotlightCard>
            );
          })}
        </main>
      </section>
    </>
  );
}
