import { SECTIONS } from "../constants/Sections";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNav = (nav: string) => {
    navigate(nav);
  };
  return (
    <div className="flex justify-center flex-wrap">
      {SECTIONS.map((section) => {
        return (
          <div
            key={section.label}
            className="flex-col p-8"
            onClick={() => {
              handleNav(section.label);
            }}
          >
            <img
              className="w-125 h-75 object-cover"
              src={section.image as string}
            />
            <h2 className="pt-4 pl-8">{section.label}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;
