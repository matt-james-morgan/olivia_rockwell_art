import React from "react";
import { SECTIONS } from "../constants/Sections";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap space-x-[50px]">
      {SECTIONS.map((section) => {
        return (
          <div className="flex-col p-16">
            <img style={{ maxWidth: "300px" }} src={section.image} />
            <h2>{section.label}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;
