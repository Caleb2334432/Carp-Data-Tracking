import React from "react";

const regions = {
  R1: {
    color: "bg-red-500/50",
    style: "absolute left-[101px] top-[338px] w-[30px] h-[130px] rotate-[7deg]",
  },
  R2: {
    color: "bg-green-500/50",
    style: "absolute left-[148px] top-[283px] w-[28px] h-[69px] rotate-[45deg]",
  },
  R3: {
    color: "bg-orange-500/50",
    style: "absolute left-[191px] top-[208px] w-[28px] h-[94px] rotate-[31deg]",
  },
  R4: {
    color: "bg-blue-500/50",
    style: "absolute left-[273px] top-[129px] w-[32px] h-[125px] rotate-[62deg]",
  },
  R5: {
    color: "bg-purple-500/50",
    style: "absolute left-[339px] top-[88px] w-[32px] h-[125px] rotate-[-36deg]",
  },
};


function MapOverlay({ year, data }) {
  return (
    <>
      {Object.entries(data).map(([region, presence]) =>
        presence === "Y" ? (
          <div
            key={region}
            className={`${regions[region].color} ${regions[region].style} rounded-full border border-black`}
          ></div>
        ) : null
      )}
    </>
  );
}

export default MapOverlay;
