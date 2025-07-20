import { SECTIONS } from "../constants/Sections";

const Dashboard = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {SECTIONS.map((section) => {
        return (
          <div className="flex-col p-8">
            <img className="w-125 h-75 object-cover" src={section.image} />
            <h2 className="pt-4 pl-8">{section.label}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;
